/// <reference types="@cloudflare/workers-types" />
// Cloudflare Pages Function: POST /api/enquiry (SRS §8.3).
// Env: TURNSTILE_SECRET, RESEND_API_KEY, ENQUIRY_TO, ENQUIRY_FROM.
import { enquirySchema } from '../../src/lib/enquiry-schema';

interface Env {
  TURNSTILE_SECRET?: string;
  RESEND_API_KEY?: string;
  ENQUIRY_TO?: string;
  ENQUIRY_FROM?: string;
}

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const ref = crypto.randomUUID().slice(0, 8).toUpperCase();
  let raw: Record<string, unknown>;
  try {
    raw = (await request.json()) as Record<string, unknown>;
  } catch {
    return json(400, { error: 'Invalid JSON' });
  }

  if (typeof raw.website === 'string' && raw.website.length > 0) return json(400, { error: 'Rejected' });

  if (env.TURNSTILE_SECRET) {
    const form = new FormData();
    form.append('secret', env.TURNSTILE_SECRET);
    form.append('response', String(raw.turnstileToken ?? ''));
    form.append('remoteip', request.headers.get('CF-Connecting-IP') ?? '');
    const v = (await (await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', { method: 'POST', body: form })).json()) as { success: boolean };
    if (!v.success) return json(400, { error: 'Verification failed' });
  }

  const parsed = enquirySchema.safeParse(raw);
  if (!parsed.success) return json(422, { error: 'Invalid fields', fields: parsed.error.flatten().fieldErrors });
  const d = parsed.data;

  if (!env.RESEND_API_KEY) {
    console.error(`enquiry ${ref}: RESEND_API_KEY missing`);
    return json(502, { error: 'Email service not configured' });
  }

  const rows = Object.entries({ Name: d.name, Organisation: d.company, Role: d.role ?? '', Email: d.email, Phone: d.phone ?? '', Country: d.country, Service: d.service, Message: d.message })
    .map(([k, v]) => `<tr><th align="left">${k}</th><td>${esc(v).replace(/\n/g, '<br>')}</td></tr>`)
    .join('');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.ENQUIRY_FROM ?? 'JSJ Website <website@jsjinfotech.co.in>',
      to: [env.ENQUIRY_TO ?? 'subhash@jsjinfotech.co.in'],
      reply_to: d.email,
      subject: `New enquiry: ${d.service} [${ref}]`,
      html: `<table cellpadding="6">${rows}</table><p>Ref ${ref}</p>`,
    }),
  });
  if (!res.ok) {
    console.error(`enquiry ${ref}: resend status ${res.status}`);
    return json(502, { error: 'Could not send' });
  }
  console.log(`enquiry ${ref}: sent`);
  return json(200, { ref });
};

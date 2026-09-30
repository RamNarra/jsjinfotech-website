import { ContactFormSchema, SOLUTIONS_DATA, type ContactActionResponse } from '@/shared';

export interface ContactEnv {
  production: boolean;
  turnstileSiteKey?: string;
  turnstileSecret?: string;
  resendKey?: string;
  /** Comma-separated recipient list. */
  notifyTo?: string;
  from?: string;
  /** Hostnames Turnstile tokens may have been issued for (production). */
  allowedHostnames?: string[];
}

/** Returns false when the caller should be throttled. */
export type Guard = () => boolean;

// Cloudflare's published always-pass secret. Development only; never consulted in production.
const TURNSTILE_TEST_SECRET = '1x0000000000000000000000000000000AA';

export const escapeHtml = (v: string) =>
  v.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const oneLine = (v: string) => v.replace(/[\r\n]+/g, ' ').trim();

const FETCH_TIMEOUT_MS = 8000;
const TURNSTILE_ACTION = 'contact';
const FREE_MAIL = /^(gmail|googlemail|yahoo|outlook|hotmail|live|icloud|proton|protonmail|aol|rediffmail)\./i;

/** The sender must be an address on a domain JSJ can verify with Resend; consumer mailboxes cannot be. */
export function senderDomain(from: string | undefined): string | null {
  const m = from?.match(/<?([^<>\s@]+@([^<>\s@]+\.[^<>\s@]+))>?\s*$/);
  return m ? m[2].toLowerCase() : null;
}

const UNAVAILABLE = 'The contact form is temporarily unavailable. Please email support@jsjinfotech.co.in or call us.';

/** Names (never values) of production settings that are missing. */
export function missingProductionConfig(env: ContactEnv): string[] {
  const need: [string, string | undefined][] = [
    ['RESEND_API_KEY', env.resendKey],
    ['CONTACT_NOTIFICATION_EMAIL', env.notifyTo],
    ['CONTACT_FROM_EMAIL', env.from],
  ];
  if (env.turnstileSiteKey || env.turnstileSecret) {
    need.push(['NEXT_PUBLIC_TURNSTILE_SITE_KEY', env.turnstileSiteKey]);
    need.push(['CLOUDFLARE_TURNSTILE_SECRET_KEY', env.turnstileSecret]);
  }
  const missing = need.filter(([, v]) => !v?.trim()).map(([k]) => k);
  const dom = senderDomain(env.from);
  if (env.from?.trim() && (!dom || FREE_MAIL.test(dom))) missing.push('CONTACT_FROM_EMAIL (must be an address on a Resend-verified JSJ domain)');
  return missing;
}

export function buildEmailHtml(d: {
  referenceId: string;
  fullName: string;
  company: string;
  workEmail: string;
  phone: string;
  interestLabel: string;
  message: string;
}) {
  return `
<h2>New enquiry from jsjinfotech.co.in</h2>
<p><strong>Reference:</strong> ${escapeHtml(d.referenceId)}</p>
<p><strong>Name:</strong> ${escapeHtml(d.fullName)}</p>
<p><strong>Company:</strong> ${escapeHtml(d.company)}</p>
<p><strong>Email:</strong> ${escapeHtml(d.workEmail)}</p>
<p><strong>Phone:</strong> ${escapeHtml(d.phone)}</p>
<p><strong>Interest:</strong> ${escapeHtml(d.interestLabel)}</p>
<p><strong>Message:</strong></p>
<blockquote style="border-left:3px solid #0070F2;margin:0;padding:8px 14px;background:#F7F9FC">${escapeHtml(d.message).replace(/\n/g, '<br/>')}</blockquote>
<p style="color:#5B738B;font-size:12px">The sender ticked the consent box to be contacted about this enquiry.</p>`;
}

interface SiteverifyResponse {
  success?: boolean;
  hostname?: string;
  action?: string;
  'error-codes'?: string[];
}

async function verifyTurnstile(
  token: string,
  env: ContactEnv,
  secret: string,
  doFetch: typeof fetch,
): Promise<{ ok: boolean; message?: string }> {
  if (!token) return { ok: false, message: 'Please complete the security check and try again.' };
  try {
    const r = await doFetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ secret, response: token }),
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    const json = (await r.json()) as SiteverifyResponse;
    if (json.success !== true) {
      const expired = json['error-codes']?.some((c) => c === 'timeout-or-duplicate' || c === 'invalid-input-response');
      return {
        ok: false,
        message: expired
          ? 'The security check expired. Please complete it again and resubmit.'
          : 'Security check failed. Please try again.',
      };
    }
    // Production tokens must be issued for our own widget on one of our own hostnames.
    if (env.production) {
      const allowed = (env.allowedHostnames ?? []).map((h) => h.toLowerCase());
      if (json.action !== TURNSTILE_ACTION || !json.hostname || !allowed.includes(json.hostname.toLowerCase())) {
        console.error('[contact] Turnstile token rejected (action/hostname mismatch).');
        return { ok: false, message: 'Security check failed. Please try again.' };
      }
    }
    return { ok: true };
  } catch (e) {
    console.error('[contact] Turnstile verification error:', e);
    return { ok: false, message: 'The security check is unavailable right now. Please try again shortly.' };
  }
}

export async function processContact(
  formData: FormData,
  env: ContactEnv,
  doFetch: typeof fetch = fetch,
  guard: Guard = () => true,
): Promise<ContactActionResponse> {
  const parsed = ContactFormSchema.safeParse({
    fullName: formData.get('fullName'),
    workEmail: formData.get('workEmail'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    interest: formData.get('interest'),
    message: formData.get('message'),
    dpdpConsent: formData.get('dpdpConsent') === 'true' || formData.get('dpdpConsent') === 'on',
    turnstileToken: (formData.get('cf-turnstile-response') as string) || '',
    website: (formData.get('website') as string) || '',
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const [k, v] of Object.entries(parsed.error.flatten().fieldErrors)) if (v) fieldErrors[k] = v;
    return { success: false, message: 'Please check the highlighted fields.', fieldErrors };
  }
  const d = parsed.data;

  // Production refuses to operate unless every required setting exists. Never succeeds silently.
  if (env.production) {
    const missing = missingProductionConfig(env);
    if (missing.length) {
      console.error(`[contact] Production configuration incomplete; submission rejected. Missing: ${missing.join(', ')}`);
      return { success: false, delivered: false, message: UNAVAILABLE };
    }
  }

  if (!guard()) {
    return {
      success: false,
      delivered: false,
      message: 'Too many enquiries from this connection. Please try again later, or call +91 89430 32965.',
    };
  }

  const secret = env.production ? env.turnstileSecret : env.turnstileSecret || TURNSTILE_TEST_SECRET;
  if (secret) {
    const turnstile = await verifyTurnstile(d.turnstileToken ?? '', env, secret, doFetch);
    if (!turnstile.ok) return { success: false, delivered: false, message: turnstile.message! };
  }

  const referenceId = `JSJ-${Date.now().toString(36).toUpperCase()}`;

  if (!env.resendKey) {
    // Reachable only outside production (guarded above).
    console.info(`[contact:dev] ${referenceId} validated; NOT emailed (RESEND_API_KEY unset).`);
    return {
      success: true,
      delivered: false,
      referenceId,
      message: 'Development mode: your submission was validated, but no email was sent.',
    };
  }

  const to = (env.notifyTo ?? '')
    .split(',')
    .map((v) => v.trim())
    .filter(Boolean);
  const from = env.from;
  if (!to.length || !from) {
    console.info(`[contact:dev] ${referenceId} validated; recipients/sender not configured; NOT emailed.`);
    return { success: true, delivered: false, referenceId, message: 'Development mode: recipients are not configured; no email was sent.' };
  }

  const interestLabel =
    d.interest === 'other' ? 'Other' : SOLUTIONS_DATA[d.interest as keyof typeof SOLUTIONS_DATA].title;

  try {
    const r = await doFetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.resendKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from,
        to,
        reply_to: d.workEmail,
        subject: `[${referenceId}] ${oneLine(interestLabel)} — ${oneLine(d.company)}`,
        html: buildEmailHtml({ referenceId, ...d, interestLabel }),
      }),
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
    });
    if (!r.ok) {
      const errText = await r.text().catch(() => '');
      console.error('[contact] Resend rejected the message:', r.status, errText);
      return { success: false, delivered: false, message: 'We could not send your enquiry. Please email support@jsjinfotech.co.in.' };
    }
  } catch (e) {
    console.error('[contact] Resend network error:', e);
    return { success: false, delivered: false, message: 'Network problem sending your enquiry. Please try again shortly.' };
  }

  return {
    success: true,
    delivered: true,
    referenceId,
    message: 'We have received your enquiry and the JSJ team will get back to you.',
  };
}

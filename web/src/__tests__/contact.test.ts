import { describe, expect, it, vi } from 'vitest';
import { buildEmailHtml, escapeHtml, missingProductionConfig, processContact, senderDomain, type ContactEnv } from '@/lib/contact/process';
import { allow, allowSubmission, resetRateLimits } from '@/lib/contact/rate-limit';

const valid = (over: Record<string, string> = {}) => {
  const f = new FormData();
  const base: Record<string, string> = {
    fullName: 'Asha Rao',
    workEmail: 'asha@example.org',
    phone: '+91 90000 00000',
    company: 'Dept of Works',
    interest: 'sap-erp',
    message: 'We need help planning an SAP migration.',
    dpdpConsent: 'true',
    'cf-turnstile-response': 'tok',
    ...over,
  };
  for (const [k, v] of Object.entries(base)) f.set(k, v);
  return f;
};

const fullProd: ContactEnv = {
  production: true,
  turnstileSiteKey: 'site',
  turnstileSecret: 'secret',
  resendKey: 'rk',
  notifyTo: 'a@x.in, b@x.in',
  from: 'JSJ <no-reply@x.in>',
  allowedHostnames: ['www.jsjinfotech.co.in', 'jsjinfotech.vercel.app'],
};

const okFetch = (siteverify: object = { success: true, hostname: 'www.jsjinfotech.co.in', action: 'contact' }) =>
  vi.fn(async (url: string | URL | Request) =>
    String(url).includes('turnstile')
      ? new Response(JSON.stringify(siteverify))
      : new Response('{}', { status: 200 }),
  ) as unknown as typeof fetch;

describe('contact: production safety', () => {
  it('lists missing settings by name only', () => {
    expect(missingProductionConfig({ production: true, resendKey: 'x' })).toEqual([
      'NEXT_PUBLIC_TURNSTILE_SITE_KEY',
      'CLOUDFLARE_TURNSTILE_SECRET_KEY',
      'CONTACT_NOTIFICATION_EMAIL',
      'CONTACT_FROM_EMAIL',
    ]);
  });

  it('never succeeds and never calls out when production config is incomplete', async () => {
    const f = okFetch();
    const r = await processContact(valid(), { ...fullProd, resendKey: undefined }, f);
    expect(r.success).toBe(false);
    expect(r.delivered).toBe(false);
    expect(f).not.toHaveBeenCalled();
  });

  it('rejects a failed Turnstile check before any email is sent', async () => {
    const f = vi.fn(async () => new Response(JSON.stringify({ success: false }))) as unknown as typeof fetch;
    const r = await processContact(valid(), fullProd, f);
    expect(r.success).toBe(false);
    expect(f).toHaveBeenCalledTimes(1);
  });

  it('rejects a missing Turnstile token in production', async () => {
    const r = await processContact(valid({ 'cf-turnstile-response': '' }), fullProd, okFetch());
    expect(r.success).toBe(false);
  });

  it('reports delivered only after Resend accepts, using env recipients', async () => {
    const f = okFetch();
    const r = await processContact(valid(), fullProd, f);
    expect(r).toMatchObject({ success: true, delivered: true });
    const body = JSON.parse((vi.mocked(f).mock.calls[1][1] as RequestInit).body as string);
    expect(body.to).toEqual(['a@x.in', 'b@x.in']);
    expect(body.from).toBe('JSJ <no-reply@x.in>');
  });

  it('fails explicitly when Resend rejects', async () => {
    const f = vi.fn(async (u: string | URL | Request) =>
      String(u).includes('turnstile')
        ? new Response(JSON.stringify({ success: true, hostname: 'jsjinfotech.vercel.app', action: 'contact' }))
        : new Response('no', { status: 422 }),
    ) as unknown as typeof fetch;
    const r = await processContact(valid(), fullProd, f);
    expect(r).toMatchObject({ success: false, delivered: false });
  });
});

describe('contact: Turnstile and sender hardening', () => {
  it('rejects a token issued for another hostname or action (production)', async () => {
    const wrongHost = await processContact(valid(), fullProd, okFetch({ success: true, hostname: 'evil.example', action: 'contact' }));
    const wrongAction = await processContact(valid(), fullProd, okFetch({ success: true, hostname: 'www.jsjinfotech.co.in', action: 'login' }));
    expect(wrongHost.success).toBe(false);
    expect(wrongAction.success).toBe(false);
  });

  it('asks the visitor to retry on an expired or duplicate token', async () => {
    const r = await processContact(valid(), fullProd, okFetch({ success: false, 'error-codes': ['timeout-or-duplicate'] }));
    expect(r.success).toBe(false);
    expect(r.message).toMatch(/expired/i);
  });

  it('fails cleanly when Siteverify is unreachable', async () => {
    const f = vi.fn(async () => { throw new Error('network'); }) as unknown as typeof fetch;
    const r = await processContact(valid(), fullProd, f);
    expect(r).toMatchObject({ success: false, delivered: false });
    expect(r.message).not.toMatch(/network|cloudflare|error:/i);
  });

  it('refuses consumer-mailbox senders in production', () => {
    expect(senderDomain('JSJ <hello@jsjinfotech.co.in>')).toBe('jsjinfotech.co.in');
    expect(missingProductionConfig({ ...fullProd, from: 'noreply@gmail.com' })[0]).toMatch(/CONTACT_FROM_EMAIL/);
    expect(missingProductionConfig({ ...fullProd, from: 'not-an-email' })[0]).toMatch(/CONTACT_FROM_EMAIL/);
    expect(missingProductionConfig(fullProd)).toEqual([]);
  });

  it('blocks a throttled client before calling any external service', async () => {
    const f = okFetch();
    const r = await processContact(valid(), fullProd, f, () => false);
    expect(r.success).toBe(false);
    expect(f).not.toHaveBeenCalled();
  });
});

describe('contact: rate limiting', () => {
  it('allows 3 per client per window, then blocks, then recovers', () => {
    resetRateLimits();
    const t = 1_000_000;
    expect([1, 2, 3, 4].map((i) => allowSubmission('1.2.3.4', t + i))).toEqual([true, true, true, false]);
    expect(allowSubmission('5.6.7.8', t + 5)).toBe(true);
    expect(allowSubmission('1.2.3.4', t + 11 * 60 * 1000)).toBe(true);
    expect(allow('x', { limit: 1, windowMs: 10 }, 0)).toBe(true);
    expect(allow('x', { limit: 1, windowMs: 10 }, 5)).toBe(false);
  });
});

describe('contact: development and validation', () => {
  it('dev without a Resend key succeeds but is marked not delivered', async () => {
    const r = await processContact(valid(), { production: false }, okFetch());
    expect(r).toMatchObject({ success: true, delivered: false });
    expect(r.message).toMatch(/no email was sent/i);
  });

  it('returns field errors and stops on invalid input', async () => {
    const f = okFetch();
    const r = await processContact(valid({ workEmail: 'nope', message: 'short' }), { production: false }, f);
    expect(r.success).toBe(false);
    expect(r.fieldErrors?.workEmail).toBeTruthy();
    expect(f).not.toHaveBeenCalled();
  });

  it('rejects a filled honeypot', async () => {
    const r = await processContact(valid({ website: 'http://spam' }), { production: false }, okFetch());
    expect(r.success).toBe(false);
  });

  it('requires consent', async () => {
    const r = await processContact(valid({ dpdpConsent: 'false' }), { production: false }, okFetch());
    expect(r.fieldErrors?.dpdpConsent).toBeTruthy();
  });
});

describe('contact: email HTML', () => {
  it('escapes every user-supplied field', () => {
    const evil = '<img src=x onerror=alert(1)>"\'&';
    const html = buildEmailHtml({
      referenceId: evil, fullName: evil, company: evil, workEmail: evil, phone: evil, interestLabel: evil, message: evil,
    });
    expect(html).not.toContain('<img');
    expect(html).toContain(escapeHtml(evil));
  });
});

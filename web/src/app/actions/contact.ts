'use server';

import { headers } from 'next/headers';
import type { ContactActionResponse } from '@/shared';
import { BRAND } from '@/shared';
import { processContact } from '@/lib/contact/process';
import { allowSubmission } from '@/lib/contact/rate-limit';

// Hostnames a production Turnstile token may be issued for: the configured site plus the known aliases.
function allowedHostnames(): string[] {
  const configured = process.env.TURNSTILE_ALLOWED_HOSTNAMES?.split(',').map((h) => h.trim()).filter(Boolean);
  if (configured?.length) return configured;
  return Array.from(
    new Set([
      new URL(BRAND.canonicalUrl).hostname,
      'jsjinfotech.vercel.app',
      'www.jsjinfotech.co.in',
      'jsjinfotech.co.in',
    ]),
  );
}

export async function submitContactForm(
  _prev: ContactActionResponse | null,
  formData: FormData,
): Promise<ContactActionResponse> {
  const h = await headers();
  const client = h.get('x-real-ip') || h.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';

  return processContact(
    formData,
    {
      production: process.env.NODE_ENV === 'production',
      turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
      turnstileSecret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
      resendKey: process.env.RESEND_API_KEY,
      notifyTo: process.env.CONTACT_NOTIFICATION_EMAIL,
      from: process.env.CONTACT_FROM_EMAIL,
      allowedHostnames: allowedHostnames(),
    },
    fetch,
    () => allowSubmission(client),
  );
}

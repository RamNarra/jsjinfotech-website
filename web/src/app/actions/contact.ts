'use server';

import type { ContactActionResponse } from '@/shared';
import { processContact } from '@/lib/contact/process';

export async function submitContactForm(
  _prev: ContactActionResponse | null,
  formData: FormData,
): Promise<ContactActionResponse> {
  return processContact(formData, {
    production: process.env.NODE_ENV === 'production',
    turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    turnstileSecret: process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY,
    resendKey: process.env.RESEND_API_KEY,
    notifyTo: process.env.CONTACT_NOTIFICATION_EMAIL,
    from: process.env.CONTACT_FROM_EMAIL,
  });
}

'use server';

import { ContactFormSchema, ContactActionResponse } from '@/shared';

interface TurnstileVerifyResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export async function submitContactForm(
  _prevState: ContactActionResponse | null,
  formData: FormData
): Promise<ContactActionResponse> {
  const rawData = {
    fullName: formData.get('fullName'),
    workEmail: formData.get('workEmail'),
    phone: formData.get('phone'),
    company: formData.get('company'),
    interest: formData.get('interest'),
    message: formData.get('message'),
    dpdpConsent: formData.get('dpdpConsent') === 'true' || formData.get('dpdpConsent') === 'on',
    turnstileToken: (formData.get('turnstileToken') as string) || '',
  };

  // 1. Zod Server-Side Validation
  const validation = ContactFormSchema.safeParse(rawData);
  if (!validation.success) {
    const fieldErrors: Record<string, string[]> = {};
    const flat = validation.error.flatten().fieldErrors;
    for (const [key, value] of Object.entries(flat)) {
      if (value) fieldErrors[key] = value;
    }
    return {
      success: false,
      message: 'Please review and resolve the errors highlighted below.',
      fieldErrors,
    };
  }

  const validData = validation.data;
  const isProduction = process.env.NODE_ENV === 'production';
  const turnstileSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;
  const targetEmail = process.env.CONTACT_NOTIFICATION_EMAIL || 'support@jsjinfotech.co.in';

  // 2. Cloudflare Turnstile Server-Side Verification
  // In dev / test mode: if secret is unset, support Cloudflare official test secret (always passes)
  const effectiveTurnstileSecret = turnstileSecret || '1x0000000000000000000000000000000AA';

  if (validData.turnstileToken) {
    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: effectiveTurnstileSecret,
          response: validData.turnstileToken,
        }),
      });

      const verifyJson = (await verifyRes.json()) as TurnstileVerifyResponse;
      if (!verifyJson.success && isProduction) {
        return {
          success: false,
          message: 'Security challenge failed verification. Please refresh and try again.',
        };
      }
    } catch (err) {
      if (isProduction) {
        console.error('[Turnstile Security Check Error]:', err);
        return {
          success: false,
          message: 'Security verification service temporarily unreachable. Please retry shortly.',
        };
      }
    }
  }

  // 3. Email Dispatch via Resend (or isolated development logger)
  const referenceId = `JSJ-${Date.now().toString(36).toUpperCase()}`;

  if (resendApiKey) {
    try {
      const emailRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'JSJ Inquiries <inquiries@jsjinfotech.co.in>',
          to: [targetEmail, 'subhash@jsjinfotech.co.in'],
          reply_to: validData.workEmail,
          subject: `[New Inquiry ${referenceId}] ${validData.interest.toUpperCase()} - ${validData.company}`,
          html: `
            <h2>New Inquiry Submitted on JSJ INFOTECH</h2>
            <p><strong>Reference:</strong> ${referenceId}</p>
            <p><strong>Name:</strong> ${validData.fullName}</p>
            <p><strong>Company:</strong> ${validData.company}</p>
            <p><strong>Email:</strong> ${validData.workEmail}</p>
            <p><strong>Phone:</strong> ${validData.phone}</p>
            <p><strong>Service Interest:</strong> ${validData.interest}</p>
            <p><strong>Message:</strong></p>
            <blockquote style="background:#f4f4f4;padding:12px;border-left:4px solid #16C7E8;">
              ${validData.message.replace(/\n/g, '<br/>')}
            </blockquote>
            <p style="font-size:12px;color:#888;">Consent provided under DPDP Rules 2025 guidelines.</p>
          `,
        }),
      });

      if (!emailRes.ok) {
        const errorText = await emailRes.text();
        console.error('[Resend Dispatch Error]:', errorText);
        return {
          success: false,
          message: 'Failed to deliver message via primary dispatch. Please contact support@jsjinfotech.co.in directly.',
        };
      }
    } catch (dispatchErr) {
      console.error('[Email Dispatch Network Error]:', dispatchErr);
      return {
        success: false,
        message: 'Network issue contacting email service. Please try again shortly.',
      };
    }
  } else {
    // Isolated Mock Development Delivery Path
    console.info(`[DEV CONTACT FORM DISPATCH] Ref: ${referenceId}`, {
      company: validData.company,
      interest: validData.interest,
      workEmail: validData.workEmail,
      fullName: validData.fullName,
      dpdpConsent: validData.dpdpConsent,
      timestamp: new Date().toISOString(),
      note: 'RESEND_API_KEY is not configured. Sanitized submission recorded in dev logger.',
    });
  }

  return {
    success: true,
    message: `Thank you, ${validData.fullName}. Your inquiry has been securely received (Ref: ${referenceId}). Our technology engagement team will respond within 1 business day.`,
    referenceId,
  };
}

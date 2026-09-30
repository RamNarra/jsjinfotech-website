'use client';

import Script from 'next/script';
import { useState, useTransition } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { submitContactForm } from '@/app/actions/contact';
import { SOLUTION_ORDER, SOLUTIONS_DATA, type ContactActionResponse } from '@/shared';
import { Button } from '@/components/ui/Button';

// Public Turnstile site key. Cloudflare's published always-pass key is used only outside production.
const SITE_KEY =
  process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ||
  (process.env.NODE_ENV === 'production' ? '' : '1x00000000000000000000AA');

const field =
  'w-full rounded-[var(--radius-sm)] border border-line bg-white px-3.5 py-3 text-[1rem] text-ink placeholder:text-ink-3 transition-[border-color,box-shadow] duration-[var(--duration-fast)] hover:border-ink-3 focus:border-brand focus:outline-none focus:ring-4 focus:ring-brand-tint aria-[invalid=true]:border-danger';

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[1rem] font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-[0.9375rem] text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function ContactForm({ defaultInterest = '' }: { defaultInterest?: string }) {
  const [pending, startTransition] = useTransition();
  const [res, setRes] = useState<ContactActionResponse | null>(null);
  // Load the Turnstile script only once the visitor engages with the form (keeps it off the critical path).
  const [armed, setArmed] = useState(false);
  const err = (k: keyof NonNullable<ContactActionResponse['fieldErrors']>) =>
    res?.fieldErrors?.[k]?.[0];
  const aria = (k: keyof NonNullable<ContactActionResponse['fieldErrors']>) => ({
    'aria-invalid': err(k) ? true : undefined,
    'aria-describedby': err(k) ? `${String(k)}-error` : undefined,
  });

  if (res?.success) {
    return (
      <div role="status" className="rounded-[var(--radius-lg)] border border-line bg-soft p-8 sm:p-10">
        <CheckCircle2 aria-hidden className="size-7 text-brand-text" />
        <h3 className="t-h3 mt-4">
          {res.delivered ? 'Thank you — your enquiry is in.' : 'Validated — not sent (development mode).'}
        </h3>
        <p className="t-small mt-2">{res.message}</p>
        {res.referenceId ? (
          <p className="t-num mt-5">Reference {res.referenceId}</p>
        ) : null}
        <Button variant="text" className="mt-6" onClick={() => setRes(null)}>
          Send another enquiry
        </Button>
      </div>
    );
  }

  return (
    <form
      className="grid gap-5 rounded-[var(--radius-lg)] border border-line bg-white p-6 shadow-card sm:p-9"
      onSubmit={(e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        startTransition(async () => {
          const out = await submitContactForm(null, data);
          setRes(out);
          if (out.success) form.reset();
          else if (window.turnstile) window.turnstile.reset();
        });
      }}
      onFocusCapture={() => setArmed(true)}
      onPointerEnter={() => setArmed(true)}
    >
      {res && !res.success ? (
        <div role="alert" className="flex gap-3 rounded-[var(--radius-sm)] border border-danger/30 bg-danger-wash p-4 text-[1.0625rem] text-danger">
          <AlertCircle aria-hidden className="mt-0.5 size-4 shrink-0" />
          {res.message}
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Name" error={err('fullName')}>
          <input id="fullName" name="fullName" required autoComplete="name" className={field} {...aria('fullName')} />
        </Field>
        <Field id="workEmail" label="Work email" error={err('workEmail')}>
          <input id="workEmail" name="workEmail" type="email" required autoComplete="email" className={field} {...aria('workEmail')} />
        </Field>
        <Field id="phone" label="Phone" error={err('phone')}>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} {...aria('phone')} />
        </Field>
        <Field id="company" label="Company or department" error={err('company')}>
          <input id="company" name="company" required autoComplete="organization" className={field} {...aria('company')} />
        </Field>
      </div>

      <Field id="interest" label="Area of interest" error={err('interest')}>
        <select id="interest" name="interest" required defaultValue={defaultInterest} className={field} {...aria('interest')}>
          <option value="" disabled>
            Select an area
          </option>
          {SOLUTION_ORDER.map((slug) => (
            <option key={slug} value={slug}>
              {SOLUTIONS_DATA[slug].title}
            </option>
          ))}
          <option value="other">Something else / more than one area</option>
        </select>
      </Field>

      <Field id="message" label="How can we help?" error={err('message')}>
        <textarea id="message" name="message" required rows={4} className={field} {...aria('message')} />
      </Field>

      {/* Honeypot: humans never see or fill this. */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="dpdpConsent"
            value="true"
            required
            className="mt-1 size-4 shrink-0 accent-[var(--color-brand)]"
          />
          <span className="t-small">
            I agree that JSJ INFOTECH may use the details I submit to respond to this enquiry.
          </span>
        </label>
        {err('dpdpConsent') ? (
          <p className="mt-1.5 text-[0.9375rem] text-danger">{err('dpdpConsent')}</p>
        ) : null}
      </div>

      {SITE_KEY ? (
        <div className="min-h-[65px]">
          {armed ? (
            <>
              <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
              <div className="cf-turnstile" data-sitekey={SITE_KEY} data-action="contact" data-theme="light" />
            </>
          ) : null}
        </div>
      ) : null}

      <Button type="submit" disabled={pending} className="w-full sm:w-auto sm:justify-self-start">
        {pending ? (
          <>
            <Loader2 aria-hidden className="size-4 animate-spin" /> Sending…
          </>
        ) : (
          'Send enquiry'
        )}
      </Button>
    </form>
  );
}

declare global {
  interface Window {
    turnstile?: { reset: () => void };
  }
}

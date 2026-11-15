'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Turnstile } from '@marsidev/react-turnstile';
import Link from 'next/link';
import { enquirySchema, serviceOptions, type Enquiry } from '@/lib/enquiry-schema';
import { site } from '@/content/site';
import { cn } from '@/lib/cn';

type Status = { kind: 'idle' } | { kind: 'ok'; ref: string } | { kind: 'error'; message: string };

const TURNSTILE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? '';

const field = 'mt-2 block w-full min-h-12 rounded-xl border border-line bg-paper px-4 text-[16px] outline-none transition-colors focus:border-violet aria-[invalid=true]:border-danger';

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });
  const [token, setToken] = useState('');
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Enquiry>({ resolver: zodResolver(enquirySchema), shouldFocusError: true });

  const onSubmit = async (data: Enquiry) => {
    setStatus({ kind: 'idle' });
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, turnstileToken: token }),
      });
      const body = (await res.json().catch(() => ({}))) as { ref?: string; error?: string };
      if (!res.ok || !body.ref) throw new Error(body.error ?? `HTTP ${res.status}`);
      setStatus({ kind: 'ok', ref: body.ref });
      reset();
    } catch (err) {
      console.error('Enquiry submit failed', err);
      setStatus({ kind: 'error', message: err instanceof Error ? err.message : 'Unknown error' });
    }
  };

  if (status.kind === 'ok') {
    return (
      <div role="status" className="rounded-2xl border border-green/50 bg-[#f1f9ec] p-8">
        <h2 className="font-display text-2xl font-semibold">Thank you. Your enquiry is sent.</h2>
        <p className="mt-3 text-muted">Reference: <span className="font-mono text-text">{status.ref}</span>. We reply from {site.email.enquiry}.</p>
        <button type="button" className="mt-6 min-h-11 font-medium text-violet underline" onClick={() => setStatus({ kind: 'idle' })}>Send another enquiry</button>
      </div>
    );
  }

  const err = (k: keyof Enquiry) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1.5 text-sm text-danger">{errors[k]?.message as string}</p> : null;
  const a = (k: keyof Enquiry) => ({ 'aria-invalid': errors[k] ? true : undefined, 'aria-describedby': errors[k] ? `${k}-err` : undefined });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <div><label htmlFor="name" className="text-sm font-medium">Full name *</label><input id="name" autoComplete="name" className={field} {...a('name')} {...register('name')} />{err('name')}</div>
      <div><label htmlFor="company" className="text-sm font-medium">Organisation *</label><input id="company" autoComplete="organization" className={field} {...a('company')} {...register('company')} />{err('company')}</div>
      <div><label htmlFor="role" className="text-sm font-medium">Role</label><input id="role" autoComplete="organization-title" className={field} {...register('role')} /></div>
      <div><label htmlFor="email" className="text-sm font-medium">Work email *</label><input id="email" type="email" autoComplete="email" className={field} {...a('email')} {...register('email')} />{err('email')}</div>
      <div><label htmlFor="phone" className="text-sm font-medium">Phone (optional)</label><input id="phone" type="tel" autoComplete="tel" className={field} {...a('phone')} {...register('phone')} />{err('phone')}</div>
      <div><label htmlFor="country" className="text-sm font-medium">Country *</label><input id="country" autoComplete="country-name" defaultValue="India" className={field} {...a('country')} {...register('country')} />{err('country')}</div>
      <div className="sm:col-span-2">
        <label htmlFor="service" className="text-sm font-medium">Service interest *</label>
        <select id="service" className={field} defaultValue="" {...a('service')} {...register('service')}>
          <option value="" disabled>Choose a service</option>
          {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
        {err('service')}
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="text-sm font-medium">Project details *</label>
        <textarea id="message" rows={6} className={cn(field, 'py-3')} {...a('message')} {...register('message')} />
        {err('message')}
      </div>
      <div aria-hidden className="absolute -left-[9999px]"><label htmlFor="website">Website</label><input id="website" tabIndex={-1} autoComplete="off" {...register('website')} /></div>
      <div className="sm:col-span-2">
        <label className="flex items-start gap-3 text-[15px] leading-6">
          <input type="checkbox" className="mt-1 size-5 accent-violet" {...a('consent')} {...register('consent')} />
          <span>
            I am 18 or older or enquiring for business use, and I consent to JSJ INFOTECH processing these details to respond to this enquiry, as described in the <Link href="/privacy" className="text-violet underline">privacy policy</Link>. *
          </span>
        </label>
        {err('consent')}
      </div>
      {TURNSTILE_KEY && <div className="sm:col-span-2"><Turnstile siteKey={TURNSTILE_KEY} onSuccess={setToken} options={{ theme: 'light' }} /></div>}
      {status.kind === 'error' && (
        <div role="alert" className="rounded-xl border border-danger/40 bg-[#fdf0ef] p-4 text-[15px] sm:col-span-2">
          <p className="font-medium text-danger">Could not send your enquiry.</p>
          <p className="mt-1">Your details are kept below. Email us at <a className="underline" href={`mailto:${site.email.enquiry}?subject=Website%20enquiry&body=${encodeURIComponent(getValues('message') ?? '')}`}>{site.email.enquiry}</a>.</p>
        </div>
      )}
      <div className="sm:col-span-2">
        <button type="submit" disabled={isSubmitting} className="inline-flex min-h-12 items-center rounded-full bg-violet px-7 font-medium text-white transition-colors hover:bg-violet-deep disabled:opacity-60">
          {isSubmitting ? 'Sending…' : 'Send enquiry'}
        </button>
      </div>
    </form>
  );
}

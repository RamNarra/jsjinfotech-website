'use client';

import { useEffect } from 'react';
import Link from 'next/link';

// Branded 500 page (FR-20). Logs the error with its digest; never shows stack traces to visitors.
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('Page error', error.digest ?? '', error.message);
  }, [error]);
  return (
    <section className="bg-mist pt-48 pb-28">
      <div className="container-x max-w-3xl">
        <p className="font-semibold text-violet">Something went wrong</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-6xl">This page could not load.</h1>
        <p className="mt-6 text-lg text-muted">Try again. If it keeps failing, contact us and mention the time it happened.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={reset} className="btn-glow inline-flex min-h-12 items-center justify-center rounded-full px-6 font-medium text-white">Try again</button>
          <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-line px-6 font-medium hover:border-violet">Contact us</Link>
        </div>
      </div>
    </section>
  );
}

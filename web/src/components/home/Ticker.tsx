'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Pause, Play } from 'lucide-react';
import { TICKER_ITEMS } from '@/shared';

/**
 * Continuously scrolling strip (news-channel style). Pauses on hover/focus and via an explicit button (WCAG 2.2.2);
 * static and wrapped under reduced motion. The duplicate track is hidden from assistive tech.
 */
export function Ticker() {
  const [paused, setPaused] = useState(false);

  const track = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="ticker-track flex shrink-0 items-center" data-paused={paused}>
      {TICKER_ITEMS.map((it) => (
        <li key={it.label} className="flex items-center">
          {it.logo ? (
            <Image src={it.logo} alt={hidden ? '' : it.label} width={120} height={32} className="mx-10 h-8 w-auto opacity-70 grayscale" />
          ) : (
            <span className="mx-10 whitespace-nowrap text-[1.375rem] font-semibold tracking-[-0.02em] text-ink-2">{it.label}</span>
          )}
          <span aria-hidden className="size-1.5 rotate-45 bg-brand/70" />
        </li>
      ))}
    </ul>
  );

  return (
    <section aria-label="Technologies and disciplines JSJ works across" className="border-y border-line-soft bg-white">
      <div className="container-x flex items-center gap-4 py-3">
        <p className="hidden shrink-0 border-r border-line pr-5 text-[0.9375rem] font-semibold text-brand-text sm:block">
          Works across
        </p>
        <div
          className="ticker group relative min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div className="ticker-row flex w-max py-2">
            {track(false)}
            {track(true)}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-pressed={paused}
          aria-label={paused ? 'Play scrolling ticker' : 'Pause scrolling ticker'}
          className="ticker-btn grid size-10 shrink-0 place-items-center rounded-full border border-line text-ink-2 transition-colors hover:border-brand hover:text-brand-text"
        >
          {paused ? <Play aria-hidden className="size-4" /> : <Pause aria-hidden className="size-4" />}
        </button>
      </div>
    </section>
  );
}

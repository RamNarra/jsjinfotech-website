'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { slides } from '@/content/hero';
import { Button } from '@/components/ui';
import { SapBadge } from '@/components/brand/SapBadge';
import { HeroVisual } from './HeroVisual';
import { cn } from '@/lib/cn';

const INTERVAL = 7000;

// FR-05 / §6.3 / §8.7: autoplay 7s, pause on hover + focus-within, play/pause button (WCAG 2.2.2), arrow keys.
export function HeroCarousel() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const root = useRef<HTMLElement>(null);

  const autoplay = playing && !reduce && !hovered && !focused;
  const go = useCallback((d: number) => setI((v) => (v + d + slides.length) % slides.length), []);

  useEffect(() => {
    if (!autoplay) return;
    const t = setTimeout(() => go(1), INTERVAL);
    return () => clearTimeout(t);
  }, [autoplay, i, go]);

  const s = slides[i];

  return (
    <section
      ref={root}
      aria-roledescription="carousel"
      aria-label="JSJ INFOTECH highlights"
      className="on-ink relative flex min-h-[640px] items-center overflow-hidden bg-ink text-white lg:h-[min(100svh,920px)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setFocused(false);
      }}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(1);
        if (e.key === 'ArrowLeft') go(-1);
      }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_70%_at_75%_40%,rgba(96,75,159,0.40),transparent_70%)]" />
      <div className="container-x relative grid items-center gap-10 pt-32 pb-28 lg:grid-cols-[1.15fr_1fr] lg:pt-24 lg:pb-24">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={s.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${slides.length}`}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="label-caps text-violet-hi">
              {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </p>
            {i === 0 ? (
              <h1 className="mt-5 font-display text-[40px] leading-[46px] font-semibold tracking-tight text-balance md:text-[64px] md:leading-[70px] xl:text-[72px] xl:leading-[80px]">{s.headline}</h1>
            ) : (
              <h2 className="mt-5 font-display text-[40px] leading-[46px] font-semibold tracking-tight text-balance md:text-[64px] md:leading-[70px] xl:text-[72px] xl:leading-[80px]">{s.headline}</h2>
            )}
            <p className="mt-6 max-w-[60ch] text-lg leading-8 text-on-ink-muted">{s.body}</p>
            {s.visual === 'sap' && <SapBadge dark showId className="mt-6" />}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={s.primary.href} variant="light">{s.primary.label}</Button>
              <Button href={s.secondary.href} variant="ghost-dark">{s.secondary.label}</Button>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] md:block">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.visual}
              className="absolute inset-0"
              initial={reduce ? false : { opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? undefined : { opacity: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <HeroVisual kind={s.visual} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* A hidden first-slide H1 keeps exactly one H1 when another slide shows. */}
      {i !== 0 && <h1 className="sr-only">{slides[0].headline}</h1>}

      <div className="absolute inset-x-0 bottom-6">
        <div className="container-x flex items-center gap-2">
          <button type="button" aria-label="Previous slide" onClick={() => go(-1)} className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10">
            <ChevronLeft aria-hidden className="size-5" />
          </button>
          <button type="button" aria-label="Next slide" onClick={() => go(1)} className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10">
            <ChevronRight aria-hidden className="size-5" />
          </button>
          <button
            type="button"
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/20 hover:bg-white/10"
          >
            {playing ? <Pause aria-hidden className="size-4" /> : <Play aria-hidden className="size-4" />}
          </button>
          <div className="ml-2 flex">
            {slides.map((sl, k) => (
              <button
                key={sl.id}
                type="button"
                aria-label={`Go to slide ${k + 1}`}
                aria-current={k === i ? 'true' : undefined}
                onClick={() => setI(k)}
                className="inline-flex size-11 items-center justify-center"
              >
                <span className={cn('block h-1 rounded-full transition-all duration-300', k === i ? 'w-8 bg-white' : 'w-4 bg-white/30')} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <p className="sr-only" aria-live={autoplay ? 'off' : 'polite'}>
        Slide {i + 1} of {slides.length}: {s.headline}
      </p>
    </section>
  );
}

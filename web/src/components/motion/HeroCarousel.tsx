'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { slides } from '@/content/hero';
import { Button } from '@/components/ui';
import { SapBadge } from '@/components/brand/SapBadge';
import { HeroVisual } from './HeroVisual';
import { Aurora } from './Aurora';
import { NeuralField } from './NeuralField';
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
      <Aurora intensity={0.8} />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <NeuralField className="pointer-events-none absolute inset-0 h-full w-full opacity-80" />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper" />
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
            <p className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 label-caps text-violet-hi">
              <span aria-hidden className="size-1.5 animate-pulse rounded-full bg-green shadow-[0_0_10px_2px_rgba(134,224,90,0.8)]" />
              {String(i + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')} · JSJ INFOTECH × SGN Software
            </p>
            {(() => {
              const cut = s.headline.indexOf('. ') + 1;
              const Tag = i === 0 ? 'h1' : 'h2';
              return (
                <Tag className="mt-6 font-display text-[42px] leading-[44px] font-semibold tracking-[-0.035em] text-balance md:text-[68px] md:leading-[70px] xl:text-[80px] xl:leading-[80px]">
                  {s.headline.slice(0, cut)} <span className="text-gradient">{s.headline.slice(cut).trim()}</span>
                </Tag>
              );
            })()}
            <p className="mt-6 max-w-[60ch] text-lg leading-8 text-on-ink-muted">{s.body}</p>
            {s.visual === 'sap' && <SapBadge dark showId className="mt-6" />}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={s.primary.href} variant="light">{s.primary.label}</Button>
              <Button href={s.secondary.href} variant="ghost-dark">{s.secondary.label}</Button>
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="glass relative mx-auto hidden aspect-square w-full max-w-[520px] rounded-[36px] p-6 md:block">
          <div aria-hidden className="absolute -inset-px -z-10 rounded-[36px] bg-[conic-gradient(from_180deg,rgba(123,92,255,0.6),rgba(196,92,219,0.3),rgba(134,224,90,0.4),rgba(123,92,255,0.6))] opacity-60 blur-2xl" />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.visual}
              className="absolute inset-6"
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
          <button type="button" aria-label="Previous slide" onClick={() => go(-1)} className="inline-flex size-11 items-center justify-center glass rounded-full hover:border-white/30">
            <ChevronLeft aria-hidden className="size-5" />
          </button>
          <button type="button" aria-label="Next slide" onClick={() => go(1)} className="inline-flex size-11 items-center justify-center glass rounded-full hover:border-white/30">
            <ChevronRight aria-hidden className="size-5" />
          </button>
          <button
            type="button"
            aria-label={playing ? 'Pause slideshow' : 'Play slideshow'}
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex size-11 items-center justify-center glass rounded-full hover:border-white/30"
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
                <span className={cn('block h-1 rounded-full transition-all duration-300', k === i ? 'w-10 bg-gradient-to-r from-violet-hi to-green' : 'w-4 bg-white/25')} />
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

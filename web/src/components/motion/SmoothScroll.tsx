'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

// Lenis smooth scroll (SRS §7.3) + spotlight pointer tracking for .spotlight cards.
export function SmoothScroll() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>('.spotlight');
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty('--mx', `${e.clientX - r.left}px`);
      el.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => document.removeEventListener('pointermove', onMove);
    }
    const lenis = new Lenis({ duration: 1.1, wheelMultiplier: 1 });
    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      document.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);
  return null;
}

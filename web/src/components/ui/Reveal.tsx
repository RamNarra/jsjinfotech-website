'use client';

import { useLayoutEffect, useRef, type ReactNode } from 'react';

/**
 * One-shot fade + rise as a block scrolls into view.
 * Server markup is fully visible (no-JS, print, reduced motion). After hydration, only blocks that start
 * below the fold are hidden and then revealed by a single IntersectionObserver — no animation library.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.92) return;

    el.style.transitionDelay = `${delay}s`;
    el.dataset.reveal = 'hidden';
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.reveal = 'shown';
        io.disconnect();
      },
      { rootMargin: '0px 0px -10% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

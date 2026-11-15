'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

type Step = { n: string; name: string; body: string };

// Engagement model: pinned on desktop via GSAP ScrollTrigger (lazy-loaded); stacked list on mobile / reduced motion.
export function PinnedSteps({ steps }: { steps: Step[] }) {
  const root = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [pinned, setPinned] = useState(false);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1024px)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!desktop || reduce || !root.current) return;
    let cleanup = () => {};
    let cancelled = false;
    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      if (cancelled || !root.current) return;
      gsap.registerPlugin(ScrollTrigger);
      setPinned(true);
      const st = ScrollTrigger.create({
        trigger: root.current,
        start: 'top top+=96',
        end: '+=1800',
        pin: true,
        onUpdate: (self) => setActive(Math.min(steps.length - 1, Math.floor(self.progress * steps.length))),
      });
      cleanup = () => st.kill();
    })();
    return () => {
      cancelled = true;
      cleanup();
    };
  }, [steps.length]);

  return (
    <div ref={root} className="grid gap-4 lg:grid-cols-4">
      {steps.map((s, i) => {
        const on = !pinned || i <= active;
        return (
          <div
            key={s.n}
            className={cn(
              'relative rounded-2xl border p-6 transition-all duration-500 ease-reveal',
              on ? 'border-white/15 bg-white/[0.04]' : 'border-line bg-transparent opacity-40',
              pinned && i === active && 'border-violet/60 shadow-[0_0_60px_-20px_rgba(123,92,255,0.9)]',
            )}
          >
            <p className="font-mono text-sm text-violet">{s.n}</p>
            <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{s.name}</h3>
            <p className="mt-3 leading-7 text-muted">{s.body}</p>
          </div>
        );
      })}
    </div>
  );
}

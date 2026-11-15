'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/cn';

type Step = { n: string; name: string; body: string; who: string };

const colors = ['#0b7f91', '#4379bd', '#7761aa', '#a353a0'];

// Sticky scrollytelling: left panel stays pinned (CSS sticky, no scroll-jacking or pin spacer),
// right column scrolls through four steps; IntersectionObserver marks the active one.
export function StickySteps({ steps }: { steps: Step[] }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.i));
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const s = steps[active];
  return (
    <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
      <div className="lg:sticky lg:top-32 lg:h-fit">
        <div className="on-ink relative overflow-hidden rounded-[32px] bg-ink p-8 text-on-ink md:p-10">
          <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
          <div aria-hidden className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full blur-3xl transition-colors duration-700" style={{ background: colors[active], opacity: 0.45 }} />
          <div className="relative">
            <p className="label-caps text-violet-hi">Step {s.n} of 04</p>
            <p aria-hidden className="mt-6 font-display text-[120px] leading-none font-semibold tracking-[-0.06em] md:text-[160px]" style={{ color: colors[active] }}>
              {s.n}
            </p>
            <p className="mt-4 font-display text-3xl font-semibold text-white md:text-4xl">{s.name}</p>
            <p className="mt-2 text-on-ink-muted">{s.who}</p>
            <div className="mt-8 flex gap-2" aria-hidden>
              {steps.map((st, i) => (
                <span key={st.n} className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10">
                  <span className="block h-full rounded-full transition-all duration-700 ease-reveal" style={{ width: i <= active ? '100%' : '0%', background: colors[i] }} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ol className="relative space-y-6 lg:space-y-[18vh] lg:py-[8vh]">
        <span aria-hidden className="absolute top-0 bottom-0 left-[27px] w-px bg-gradient-to-b from-teal via-violet to-magenta opacity-30" />
        {steps.map((st, i) => (
          <li
            key={st.n}
            data-i={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
            className={cn('relative flex gap-6 transition-opacity duration-500', i === active ? 'opacity-100' : 'lg:opacity-40')}
          >
            <span
              className="relative z-10 inline-flex size-14 shrink-0 items-center justify-center rounded-2xl border bg-white font-mono text-sm font-semibold transition-all duration-500"
              style={{ borderColor: i === active ? colors[i] : 'var(--color-line)', color: colors[i], boxShadow: i === active ? `0 10px 30px -10px ${colors[i]}` : undefined }}
            >
              {st.n}
            </span>
            <div className="card rounded-3xl p-6 md:p-8">
              <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">{st.name}</h3>
              <p className="mt-3 text-lg leading-8 text-muted">{st.body}</p>
              <p className="mt-4 label-caps" style={{ color: colors[i] }}>{st.who}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

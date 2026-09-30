'use client';

import Link from 'next/link';
import { useRef, useState, type KeyboardEvent } from 'react';
import { ArrowRight } from 'lucide-react';
import { clsx } from 'clsx';
import { SOLUTION_ORDER, SOLUTIONS_DATA } from '@/shared';
import { SolutionDiagram } from '@/components/solutions/SolutionDiagram';
import { SOLUTION_ICONS } from '@/components/solutions/icons';

/** One large stage, nine solutions. Content for the first solution is server-rendered. */
export function SolutionExplorer() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const slug = SOLUTION_ORDER[active];
  const s = SOLUTIONS_DATA[slug];
  const Icon = SOLUTION_ICONS[slug];

  const move = (to: number) => {
    const n = (to + SOLUTION_ORDER.length) % SOLUTION_ORDER.length;
    setActive(n);
    tabs.current[n]?.focus();
  };
  const onKey = (e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') { e.preventDefault(); move(active + 1); }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') { e.preventDefault(); move(active - 1); }
    if (e.key === 'Home') { e.preventDefault(); move(0); }
    if (e.key === 'End') { e.preventDefault(); move(SOLUTION_ORDER.length - 1); }
  };

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      {/* Tabs: a scrollable strip on phones, a numbered list on desktop */}
      <div
        role="tablist"
        aria-label="Solutions"
        aria-orientation="vertical"
        onKeyDown={onKey}
        className="-mx-5 flex snap-x gap-2 overflow-x-auto px-5 pb-2 lg:col-span-5 lg:mx-0 lg:block lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {SOLUTION_ORDER.map((sl, i) => {
          const on = i === active;
          return (
            <button
              key={sl}
              ref={(el) => { tabs.current[i] = el; }}
              role="tab"
              id={`sol-tab-${sl}`}
              aria-selected={on}
              aria-controls="sol-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setActive(i)}
              className={clsx(
                'group relative shrink-0 snap-start whitespace-nowrap rounded-full border px-5 py-3 text-left text-[1.0625rem] font-medium transition-colors duration-[var(--duration-fast)]',
                'lg:flex lg:w-full lg:items-center lg:gap-5 lg:whitespace-normal lg:rounded-none lg:border-0 lg:border-t lg:border-line lg:px-2 lg:py-5 lg:last:border-b',
                on ? 'border-brand bg-brand text-white lg:bg-transparent lg:text-ink' : 'border-line bg-white text-ink-2 hover:text-ink',
              )}
            >
              <span className={clsx('t-num hidden lg:inline', on && '!text-brand-text')}>{SOLUTIONS_DATA[sl].number}</span>
              <span className="lg:text-[1.375rem] lg:font-semibold lg:tracking-[-0.015em]">{SOLUTIONS_DATA[sl].shortTitle}</span>
              <span
                aria-hidden
                className={clsx(
                  'absolute inset-y-0 left-0 hidden w-[3px] origin-top rounded-full bg-brand transition-transform duration-[var(--duration-base)] ease-[var(--ease-out)] lg:block',
                  on ? 'scale-y-100' : 'scale-y-0',
                )}
              />
              <ArrowRight
                aria-hidden
                className={clsx('ml-auto hidden size-5 transition-all lg:block', on ? 'translate-x-0 text-brand opacity-100' : '-translate-x-1 opacity-0')}
              />
            </button>
          );
        })}
      </div>

      {/* Stage */}
      <div
        role="tabpanel"
        id="sol-panel"
        aria-labelledby={`sol-tab-${slug}`}
        className="lg:col-span-7"
      >
        <div className="overflow-hidden rounded-[28px] border border-line bg-white shadow-[0_30px_80px_-40px_rgb(0_64_176/0.35)]">
          <div className="art-panel px-6 pb-2 pt-10 sm:px-12">
            <div key={slug} className="rise">
              <SolutionDiagram slug={slug} className="mx-auto h-auto w-full max-w-lg" />
            </div>
          </div>
          <div key={`t-${slug}`} className="rise border-t border-line-soft p-7 sm:p-10">
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-text">
                <Icon aria-hidden className="size-5" />
              </span>
              <span className="t-num">{s.number} / 09</span>
            </div>
            <h3 className="t-h3 mt-4 !text-[clamp(1.5rem,2.2vw,2rem)]">{s.title}</h3>
            <p className="t-small mt-2 max-w-xl">{s.summary}</p>
            {s.capabilities.length > 0 ? (
              <ul className="mt-6 flex flex-wrap gap-2">
                {s.capabilities.slice(0, 4).map((c) => (
                  <li key={c} className="rounded-full bg-surface px-3.5 py-1.5 text-[0.9375rem] text-ink-2">
                    {c}
                  </li>
                ))}
                {s.capabilities.length > 4 ? (
                  <li className="rounded-full px-2 py-1.5 text-[0.9375rem] text-ink-3">+{s.capabilities.length - 4} more</li>
                ) : null}
              </ul>
            ) : null}
            <Link
              href={`/solutions/${slug}`}
              className="group mt-8 inline-flex items-center gap-2 font-medium text-brand-text hover:text-brand-hover"
            >
              Explore {s.shortTitle.toLowerCase()}
              <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

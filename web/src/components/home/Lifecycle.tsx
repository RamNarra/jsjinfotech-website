'use client';

import { useState } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { clsx } from 'clsx';
import { PROJECT_DELIVERY_STAGES } from '@/shared';

/**
 * Six-stage delivery model. All copy is always visible; hover/focus/tap only moves the emphasis.
 */
export function Lifecycle() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const last = PROJECT_DELIVERY_STAGES.length - 1;

  return (
    <LazyMotion features={domAnimation} strict>
      <div className="relative">
        {/* Desktop rail */}
        <div aria-hidden className="absolute inset-x-0 top-[0.7rem] hidden h-px bg-line lg:block">
          <m.div
            className="h-px bg-brand"
            initial={false}
            animate={{ width: `calc(${active} * (100% + 1.5rem) / 6 + 1.4rem)` }}
            transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>

        <ol className="grid gap-0 lg:grid-cols-6 lg:gap-6">
          {PROJECT_DELIVERY_STAGES.map((stage, i) => {
            const on = i === active;
            const done = i <= active;
            return (
              <li key={stage.stepNumber} className="relative">
                {/* Mobile rail */}
                {i < last ? (
                  <span aria-hidden className="absolute bottom-0 left-[0.6rem] top-6 w-px bg-line lg:hidden" />
                ) : null}
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-current={on ? 'step' : undefined}
                  className="relative grid w-full grid-cols-[1.5rem_1fr] gap-x-5 pb-10 text-left lg:block lg:pb-0"
                >
                  <span
                    aria-hidden
                    className={clsx(
                      'relative z-10 mt-1 block size-[1.4rem] rounded-full border transition-colors duration-[var(--duration-fast)] lg:mt-0',
                      done ? 'border-brand' : 'border-line',
                      on ? 'bg-brand ring-4 ring-brand-tint' : 'bg-white',
                    )}
                  />
                  <span className="lg:mt-8 lg:block">
                    <span className={clsx('t-num block transition-colors', on && '!text-brand-text')}>
                      {stage.stepNumber}
                    </span>
                    <span className="t-h3 mt-2 block !text-[1.125rem]">{stage.title}</span>
                    <span className="t-small mt-2 block">{stage.description}</span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </LazyMotion>
  );
}

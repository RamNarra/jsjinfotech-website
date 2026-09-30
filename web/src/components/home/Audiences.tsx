import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA, INDUSTRY_ORDER } from '@/shared';
import { Reveal } from '@/components/ui/Reveal';

const tone = {
  government: 'bg-soft border-line',
  enterprise: 'bg-white border-line',
} as const;

export function Audiences() {
  return (
    <section className="section-y border-t border-line-soft">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="t-eyebrow">Who we serve</p>
          <h2 className="t-h2 mt-3">Built for public institutions and for enterprises.</h2>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {INDUSTRY_ORDER.map((slug, i) => {
            const ind = INDUSTRIES_DATA[slug];
            return (
              <Reveal key={slug} delay={i * 0.08}>
                <Link
                  href={`/industries/${slug}`}
                  className={`group flex h-full flex-col rounded-[var(--radius-lg)] border p-8 transition-[border-color,box-shadow] duration-[var(--duration-base)] hover:border-brand/40 hover:shadow-lift sm:p-10 ${tone[slug]}`}
                >
                  <p className="t-eyebrow">{ind.title}</p>
                  <h3 className="t-h3 mt-3 max-w-md">{ind.headline}</h3>
                  <ul className="mt-8 grid gap-3">
                    {ind.focusAreas.slice(0, 4).map((f) => (
                      <li key={f.title} className="t-small flex gap-3 border-t border-line pt-3">
                        <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-brand" />
                        {f.title}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 pt-10 text-[0.9375rem] font-medium text-brand-text">
                    {ind.title} solutions
                    <ArrowRight
                      aria-hidden
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { INDUSTRIES_DATA, INDUSTRY_ORDER } from '@/shared';
import { PageHero } from '@/components/ui/PageHero';
import { ClosingCta } from '@/components/ui/ClosingCta';

export const metadata: Metadata = pageMetadata({
  title: 'Industries',
  description: 'Technology and project execution for government organisations and enterprises.',
  path: '/industries',
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        trail={[{ name: 'Industries' }]}
        eyebrow="Industries"
        title="Two audiences, tailored approaches."
        lead="Public institutions and enterprises need different things from a technology partner. JSJ works with both."
      />
      <section className="container-x pb-24">
        <div className="grid gap-5 lg:grid-cols-2">
          {INDUSTRY_ORDER.map((slug) => {
            const i = INDUSTRIES_DATA[slug];
            return (
              <Link
                key={slug}
                href={`/industries/${slug}`}
                className="group flex flex-col rounded-[var(--radius-lg)] border border-line p-8 transition-[border-color,box-shadow] hover:border-brand/40 hover:shadow-lift sm:p-10"
              >
                <p className="t-eyebrow">{i.title}</p>
                <h2 className="t-h3 mt-3">{i.headline}</h2>
                <p className="t-small mt-3">{i.summary}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand-text">
                  Explore {i.title.toLowerCase()}
                  <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

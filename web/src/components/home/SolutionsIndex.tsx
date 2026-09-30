import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SOLUTIONS_DATA, type SolutionSlug } from '@/shared';
import { Reveal } from '@/components/ui/Reveal';
import { SolutionDiagram } from '@/components/solutions/SolutionDiagram';

function Feature({ slug, span, as: H = 'h3' }: { slug: SolutionSlug; span: string; as?: 'h2' | 'h3' }) {
  const s = SOLUTIONS_DATA[slug];
  return (
    <Link
      href={`/solutions/${slug}`}
      className={`group relative flex min-h-[19rem] flex-col justify-between overflow-hidden rounded-[var(--radius-lg)] border border-line bg-white p-7 transition-[border-color,box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-lift sm:p-9 ${span}`}
    >
      <div>
        <p className="t-num">{s.number}</p>
        <H className="t-h3 mt-3">{s.title}</H>
        <p className="t-small mt-2 max-w-sm">{s.summary}</p>
      </div>
      <SolutionDiagram
        slug={slug}
        className="pointer-events-none absolute -bottom-3 -right-3 w-[58%] max-w-[18rem] opacity-90"
      />
      <ArrowUpRight
        aria-hidden
        className="size-5 text-ink-3 transition-[transform,color] duration-[var(--duration-fast)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-text"
      />
    </Link>
  );
}

function Row({ slug }: { slug: SolutionSlug }) {
  const s = SOLUTIONS_DATA[slug];
  return (
    <li>
      <Link
        href={`/solutions/${slug}`}
        className="group grid items-baseline gap-x-8 gap-y-1 border-t border-line py-6 transition-colors sm:grid-cols-[3rem_minmax(0,1fr)_minmax(0,1.3fr)_1.5rem]"
      >
        <span className="t-num">{s.number}</span>
        <span className="text-[1.125rem] font-semibold tracking-[-0.01em] transition-colors group-hover:text-brand-text">
          {s.title}
        </span>
        <span className="t-small sm:pl-2">{s.summary}</span>
        <ArrowUpRight
          aria-hidden
          className="hidden size-5 self-center text-ink-3 transition-[transform,color] group-hover:translate-x-0.5 group-hover:text-brand-text sm:block"
        />
      </Link>
    </li>
  );
}

export function SolutionsIndex({ heading = true }: { heading?: boolean }) {
  // On the hub page the H1 sits directly above, so cards are H2; on the home page an H2 introduces them.
  const lvl = heading ? 'h3' : 'h2';
  return (
    <section id="solutions" className={heading ? 'section-y' : 'pb-24'}>
      <div className="container-x">
        {heading ? (
          <Reveal className="max-w-2xl">
            <p className="t-eyebrow">Solutions</p>
            <h2 className="t-h2 mt-3">Nine capabilities, one delivery model.</h2>
            <p className="t-lead mt-5">
              From enterprise platforms to drone-enabled data capture — each delivered through the
              same structured lifecycle.
            </p>
          </Reveal>
        ) : null}

        <div className={`${heading ? 'mt-16' : ''} grid gap-5 md:grid-cols-12`}>
          <Reveal className="md:col-span-7 [&>a]:h-full">
            <Feature slug="sap-erp" span="" as={lvl} />
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5 [&>a]:h-full">
            <Feature slug="artificial-intelligence" span="" as={lvl} />
          </Reveal>
          <Reveal className="md:col-span-5 [&>a]:h-full">
            <Feature slug="software-development" span="" as={lvl} />
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-7 [&>a]:h-full">
            <Feature slug="government-technology" span="" as={lvl} />
          </Reveal>
        </div>

        <ul className="mt-12 border-b border-line">
          {(['digital-it', 'cybersecurity', 'digital-content', 'drone-technology', 'project-management'] as const).map(
            (slug) => (
              <Row key={slug} slug={slug} />
            ),
          )}
        </ul>
      </div>
    </section>
  );
}

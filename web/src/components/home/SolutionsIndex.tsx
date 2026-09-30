import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SOLUTIONS_DATA, type SolutionSlug } from '@/shared';
import { Reveal } from '@/components/ui/Reveal';
import { SolutionDiagram } from '@/components/solutions/SolutionDiagram';
import { SOLUTION_ICONS } from '@/components/solutions/icons';

function Feature({ slug, as: H = 'h3' }: { slug: SolutionSlug; span?: string; as?: 'h2' | 'h3' }) {
  const s = SOLUTIONS_DATA[slug];
  const Icon = SOLUTION_ICONS[slug];
  return (
    <Link
      href={`/solutions/${slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-line bg-white transition-[border-color,box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift"
    >
      <div className="art-panel border-b border-line-soft px-6 pb-2 pt-7">
        <SolutionDiagram
          slug={slug}
          className="mx-auto w-full max-w-[26rem] transition-transform duration-[var(--duration-slow)] ease-[var(--ease-out)] group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-text">
            <Icon aria-hidden className="size-5" />
          </span>
          <span className="t-num">{s.number}</span>
        </div>
        <H className="t-h3 mt-4">{s.title}</H>
        <p className="t-small mt-2 max-w-md">{s.summary}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 pt-6 font-medium text-brand-text">
          Explore
          <ArrowUpRight
            aria-hidden
            className="size-5 transition-transform duration-[var(--duration-fast)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}

function Row({ slug }: { slug: SolutionSlug }) {
  const s = SOLUTIONS_DATA[slug];
  const Icon = SOLUTION_ICONS[slug];
  return (
    <li>
      <Link
        href={`/solutions/${slug}`}
        className="group grid items-center gap-x-6 gap-y-1 border-t border-line py-7 transition-colors hover:bg-soft sm:grid-cols-[3rem_3.5rem_minmax(0,1fr)_minmax(0,1.3fr)_1.5rem] sm:px-3"
      >
        <span className="t-num">{s.number}</span>
        <span className="hidden size-11 place-items-center rounded-xl bg-brand-50 text-brand-text sm:grid">
          <Icon aria-hidden className="size-5" />
        </span>
        <span className="text-[1.3125rem] font-semibold tracking-[-0.01em] transition-colors group-hover:text-brand-text">
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
            <Feature slug="sap-erp" as={lvl} />
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-5 [&>a]:h-full">
            <Feature slug="artificial-intelligence" as={lvl} />
          </Reveal>
          <Reveal className="md:col-span-5 [&>a]:h-full">
            <Feature slug="software-development" as={lvl} />
          </Reveal>
          <Reveal delay={0.08} className="md:col-span-7 [&>a]:h-full">
            <Feature slug="government-technology" as={lvl} />
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

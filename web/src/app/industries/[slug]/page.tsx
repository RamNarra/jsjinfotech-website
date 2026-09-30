import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { getAllIndustries, getIndustryBySlug } from '@/lib/content/adapter';
import { PROJECT_DELIVERY_STAGES, SOLUTIONS_DATA } from '@/shared';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ClosingCta } from '@/components/ui/ClosingCta';
import { Reveal } from '@/components/ui/Reveal';
import { SolutionDiagram } from '@/components/solutions/SolutionDiagram';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getAllIndustries()).map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const i = await getIndustryBySlug((await params).slug);
  if (!i) return {};
  return pageMetadata({ title: i.seo.title, description: i.seo.description, path: `/industries/${i.slug}` });
}

export default async function IndustryPage({ params }: Props) {
  const i = await getIndustryBySlug((await params).slug);
  if (!i) notFound();
  const gov = i.slug === 'government';

  return (
    <>
      <section className="relative">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(55%_60%_at_85%_0%,rgb(0_112_242/0.1),transparent_70%)]" />
        <div className="container-x relative pb-20 pt-8 lg:pb-28">
          <Breadcrumbs trail={[{ name: 'Industries', href: '/industries' }, { name: i.title }]} />
          <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="t-eyebrow rise">{i.eyebrow}</p>
              <h1 className="t-h1 mt-4">{i.headline}</h1>
              <p className="t-lead mt-7 max-w-2xl">{i.lead}</p>
            </div>
            <div className="lg:col-span-5">
              <div className="rise art-panel rounded-[28px] border border-line p-6 shadow-card sm:p-10" style={{ ['--i' as string]: 2 }}>
                <SolutionDiagram slug={gov ? 'government-technology' : 'sap-erp'} className="mx-auto h-auto w-full max-w-md" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`section-y border-t border-line-soft ${gov ? 'bg-soft' : ''}`}>
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="t-eyebrow">Where JSJ can help</p>
            <h2 className="t-h2 mt-3">{gov ? 'Public-sector focus areas.' : 'Enterprise focus areas.'}</h2>
          </Reveal>
          <ul className="mt-14">
            {i.focusAreas.map((f, n) => (
              <li key={f.title}>
                <Link
                  href={`/solutions/${f.solution}`}
                  className="group grid items-baseline gap-x-8 gap-y-2 border-t border-line py-7 last:border-b md:grid-cols-[3rem_1fr_1.2fr_1.5rem]"
                >
                  <span className="t-num">{String(n + 1).padStart(2, '0')}</span>
                  <span className="text-[1.25rem] font-semibold tracking-[-0.015em] group-hover:text-brand-text">
                    {f.title}
                  </span>
                  <span className="t-small">
                    {f.detail}
                    <span className="mt-2 block !text-ink-3">{SOLUTIONS_DATA[f.solution].shortTitle}</span>
                  </span>
                  <ArrowUpRight aria-hidden className="hidden size-5 self-center text-ink-3 group-hover:text-brand-text md:block" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="t-eyebrow">How we work</p>
            <h2 className="t-h2 mt-3">{gov ? 'Assess first. Upgrade with care.' : 'Requirement first, then technology.'}</h2>
          </Reveal>
          <ul className="grid gap-0 lg:col-span-6 lg:col-start-7">
            {i.approach.map((a) => (
              <li key={a} className="t-lead border-t border-line py-6 last:border-b">
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div className="container-x mt-16">
          <ol className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
            {PROJECT_DELIVERY_STAGES.map((st) => (
              <li key={st.stepNumber} className="bg-white p-5">
                <span className="t-num">{st.stepNumber}</span>
                <p className="mt-2 text-[1.0625rem] font-semibold leading-snug">{st.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta title={i.closing} />
    </>
  );
}

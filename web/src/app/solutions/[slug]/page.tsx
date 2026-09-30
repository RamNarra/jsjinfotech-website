import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowUpRight, Info } from 'lucide-react';
import { pageMetadata } from '@/lib/metadata';
import { getAllSolutions, getSolutionBySlug } from '@/lib/content/adapter';
import { BRAND, PROJECT_DELIVERY_STAGES, SOLUTIONS_DATA, type SolutionSlug } from '@/shared';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ClosingCta } from '@/components/ui/ClosingCta';
import { JsonLd } from '@/components/ui/JsonLd';
import { Reveal } from '@/components/ui/Reveal';
import { SolutionDiagram } from '@/components/solutions/SolutionDiagram';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getAllSolutions()).map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const s = await getSolutionBySlug((await params).slug);
  if (!s) return {};
  return pageMetadata({ title: s.seo.title, description: s.seo.description, path: `/solutions/${s.slug}` });
}

export default async function SolutionPage({ params }: Props) {
  const s = await getSolutionBySlug((await params).slug);
  if (!s) notFound();

  const flip = Number(s.number) % 2 === 0;
  const dense = s.capabilities.length > 9;

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: s.seo.description,
    url: `${BRAND.canonicalUrl}/solutions/${s.slug}`,
    areaServed: 'IN',
    provider: { '@type': 'Organization', name: BRAND.name, url: BRAND.canonicalUrl },
  };

  return (
    <>
      <JsonLd data={ld} />

      {/* Hero */}
      <section className="container-x pb-20 pt-8 lg:pb-28">
        <Breadcrumbs trail={[{ name: 'Solutions', href: '/solutions' }, { name: s.shortTitle }]} />
        <div className="mt-14 grid items-center gap-12 lg:grid-cols-12">
          <div className={`lg:col-span-7 ${flip ? 'lg:order-2' : ''}`}>
            <p className="t-eyebrow rise">{s.eyebrow}</p>
            <h1 className="t-h1 mt-4">
              {s.headline}
            </h1>
            <p className="t-lead mt-7 max-w-2xl">
              {s.lead}
            </p>
          </div>
          <div className={`lg:col-span-5 ${flip ? 'lg:order-1' : ''}`}>
            <div className="rise rounded-[var(--radius-lg)] border border-line bg-soft p-6 sm:p-10" style={{ ['--i' as string]: 2 }}>
              <SolutionDiagram slug={s.slug} className="mx-auto h-auto w-full max-w-sm" />
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      {s.capabilities.length > 0 ? (
        <section className="section-y border-t border-line-soft">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="t-eyebrow">What it covers</p>
              <h2 className="t-h2 mt-3">Capabilities</h2>
              <p className="t-small mt-5 max-w-sm">{s.capabilitiesIntro}</p>
            </Reveal>
            <ol className={`lg:col-span-8 ${dense ? 'grid gap-x-10 sm:grid-cols-2' : ''}`}>
              {s.capabilities.map((c, i) => (
                <li
                  key={c}
                  className="grid grid-cols-[2.5rem_1fr] items-baseline gap-x-3 border-t border-line py-5 last:border-b sm:[&:nth-last-child(2):nth-child(odd)]:border-b"
                >
                  <span className="t-num">{String(i + 1).padStart(2, '0')}</span>
                  <span className={dense ? 'text-[1.0625rem] font-medium' : 't-h3 !font-medium'}>{c}</span>
                </li>
              ))}
            </ol>
          </div>
          {s.notice ? (
            <div className="container-x mt-12">
              <p className="t-small flex max-w-3xl gap-3 rounded-[var(--radius-md)] bg-brand-50 p-5 !text-ink lg:ml-[33.333%]">
                <Info aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-text" />
                {s.notice}
              </p>
            </div>
          ) : null}
        </section>
      ) : (
        <section className="section-y border-t border-line-soft">
          <div className="container-x grid gap-12 lg:grid-cols-12">
            <Reveal className="lg:col-span-4">
              <p className="t-eyebrow">Scope</p>
              <h2 className="t-h2 mt-3">Defined with you.</h2>
            </Reveal>
            <Reveal className="lg:col-span-7 lg:col-start-6" delay={0.05}>
              <p className="t-lead !text-ink">
                Formats, volumes and delivery requirements are agreed once the requirement is understood.
              </p>
              <p className="t-small mt-6">
                Contact JSJ to discuss what you need. It is then scoped through the same six-stage
                lifecycle used across every engagement.
              </p>
            </Reveal>
          </div>
        </section>
      )}

      {/* How we execute */}
      <section className="section-y bg-soft">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="t-eyebrow">How we execute</p>
            <h2 className="t-h2 mt-3">Every engagement follows the same six stages.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-6">
            {PROJECT_DELIVERY_STAGES.map((st) => (
              <li key={st.stepNumber} className="bg-white p-5">
                <span className="t-num">{st.stepNumber}</span>
                <p className="mt-2 text-[0.9375rem] font-semibold leading-snug">{st.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Where it connects */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="t-eyebrow">Where it connects</p>
            <h2 className="t-h2 mt-3">Its role in the JSJ model.</h2>
            <p className="t-lead mt-5">{s.coreRole}</p>
            <p className="t-num mt-6">Layer · {s.layer}</p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-[0.9375rem] font-semibold">Related solutions</p>
            <ul className="mt-4">
              {s.related.map((slug: SolutionSlug) => (
                <li key={slug}>
                  <Link
                    href={`/solutions/${slug}`}
                    className="group flex items-center justify-between gap-6 border-t border-line py-5 last:border-b"
                  >
                    <span>
                      <span className="block text-[1.125rem] font-semibold tracking-[-0.01em] group-hover:text-brand-text">
                        {SOLUTIONS_DATA[slug].title}
                      </span>
                      <span className="t-small mt-1 block">{SOLUTIONS_DATA[slug].summary}</span>
                    </span>
                    <ArrowUpRight aria-hidden className="size-5 shrink-0 text-ink-3 group-hover:text-brand-text" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ClosingCta
        title={`Discuss ${s.shortTitle.toLowerCase()} with JSJ.`}
        href={`/contact?interest=${s.slug}`}
      />
    </>
  );
}

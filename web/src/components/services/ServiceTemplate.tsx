import Link from 'next/link';
import { Check } from 'lucide-react';
import type { Vertical } from '@/content/verticals';
import { verticals } from '@/content/verticals';
import { engagementSteps, authorizations, sgn } from '@/content/sap';
import { site } from '@/content/site';
import { PageHero, Button, Eyebrow, H2, ArrowLink, JsonLd } from '@/components/ui';
import { PartnershipLockup, SapBadge } from '@/components/brand/SapBadge';
import { ClientMatrix } from '@/components/sections/ClientMatrix';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { breadcrumbLd } from '@/lib/seo';

export function ServiceTemplate({ v }: { v: Vertical }) {
  const idx = verticals.findIndex((x) => x.slug === v.slug);
  const related = [verticals[(idx + 1) % verticals.length], verticals[(idx + 2) % verticals.length]];
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: v.name, path: `/services/${v.slug}/` }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: v.name, description: v.promise, provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: 'IN' }} />
      <PageHero eyebrow={`Service ${v.number}${v.research ? ' · Research track' : ''}`} title={v.name} lead={v.promise}>
        {v.sgn && <SapBadge dark showId className="mt-6" />}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact" variant="light">Discuss a Project</Button>
          <Button href="/services" variant="ghost-dark">All services</Button>
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-x">
          <Eyebrow>What we deliver</Eyebrow>
          <H2>{v.title}</H2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {v.capabilities.map((c) => (
              <li key={c} className="flex gap-3 rounded-2xl border border-line bg-white/[0.025] spotlight p-5 leading-7">
                <Check aria-hidden className="mt-1 size-5 shrink-0 text-violet" strokeWidth={1.75} />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x">
          <Eyebrow>How we work</Eyebrow>
          <H2>Engage · Design · Deliver · Run &amp; Evolve</H2>
          <ol className="mt-10 grid gap-4 md:grid-cols-4">
            {engagementSteps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-line bg-white/[0.025] spotlight p-6">
                <p className="font-mono text-sm text-violet">{s.n}</p>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-6 text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Relevant sectors</Eyebrow>
            <ul className="flex flex-wrap gap-2">
              {v.sectors.map((s) => (
                <li key={s}><Link href="/industries" className="inline-flex min-h-11 items-center rounded-full border border-line px-4 hover:border-violet">{s}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <Eyebrow>Proof</Eyebrow>
            <p className="leading-7 text-muted">
              {v.sgn ? 'SAP client references served by SGN Software are listed below.' : 'Case studies are available on request. Contact us to discuss comparable engagements.'}
            </p>
          </div>
        </div>
      </section>

      {v.sgn && (
        <>
          <section className="section-y bg-mist">
            <div className="container-x">
              <PartnershipLockup />
              <H2 className="mt-8">Licensing and authorisations</H2>
              <p className="mt-4 max-w-[68ch] text-muted">
                {sgn.legalName} is an {sgn.level} (Partner ID {sgn.partnerId}). Customers can buy SAP cloud licences through SAP PartnerEdge Cloud Choice with SGN supporting them throughout the contract.
              </p>
              <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {authorizations.map((a) => (
                  <li key={a.name} className="rounded-xl border border-line bg-white/[0.025] spotlight p-4">
                    <p className="font-medium">{a.name}</p>
                    <p className="mt-1 text-sm text-muted">{a.note}</p>
                  </li>
                ))}
              </ul>
              <ArrowLink href="/partnership" className="mt-6">Competencies and credentials</ArrowLink>
            </div>
          </section>
          <section className="section-y">
            <div className="container-x">
              <H2 className="mb-10">SAP clients served by SGN Software</H2>
              <ClientMatrix />
            </div>
          </section>
        </>
      )}

      <section className="section-y border-t border-line">
        <div className="container-x">
          <Eyebrow>Related services</Eyebrow>
          <ul className="grid gap-4 md:grid-cols-2">
            {related.map((r) => (
              <li key={r.slug}>
                <Link href={`/services/${r.slug}`} className="block rounded-2xl border border-line bg-white/[0.025] spotlight p-6 transition-colors hover:border-violet">
                  <span className="font-mono text-sm text-violet">{r.number}</span>
                  <h3 className="mt-3 font-display text-xl font-semibold">{r.name}</h3>
                  <p className="mt-2 text-[15px] text-muted">{r.promise}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

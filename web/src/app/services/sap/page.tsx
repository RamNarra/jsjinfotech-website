import { ArrowRight, Boxes, Cloud, ExternalLink, Server, ShoppingCart, Users, Workflow, type LucideIcon } from 'lucide-react';
import { PageHero, Button, Eyebrow, H2, JsonLd } from '@/components/ui';
import { SapBadge, SapLogo, SgnLogo } from '@/components/brand/SapBadge';
import { LogoLockup } from '@/components/brand/Logo';
import { ClientMatrix } from '@/components/sections/ClientMatrix';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { competencies, sapProducts, sapScenarios, serviceLines, sgn, sgnMetrics } from '@/content/sap';
import { site } from '@/content/site';
import { breadcrumbLd, pageMeta } from '@/lib/seo';

export const metadata = pageMeta(
  'SAP Solutions with SGN',
  'Buy, implement, migrate and run SAP with JSJ INFOTECH and SGN Software, SAP Gold Partner. GROW and RISE with SAP, S/4HANA, Ariba, SuccessFactors and BTP.',
  '/services/sap/',
);

const icons: Record<string, LucideIcon> = { cloud: Cloud, server: Server, boxes: Boxes, cart: ShoppingCart, users: Users, flow: Workflow };

export default function Page() {
  return (
    <>
      <JsonLd data={breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Services', path: '/services/' }, { name: 'SAP Solutions with SGN', path: '/services/sap/' }])} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'Service', name: 'SAP Solutions with SGN', provider: { '@type': 'Organization', name: site.name, url: site.url }, areaServed: 'IN' }} />

      <PageHero eyebrow="SAP Solutions with SGN" title="Buy, implement and run SAP with one partnership." lead="JSJ INFOTECH delivers SAP projects with SGN Software, our joint venture partner for SAP projects and a certified SAP Gold Partner.">
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5 rounded-3xl bg-white px-6 py-5 shadow-[0_16px_40px_-24px_rgba(11,21,48,0.45)] ring-1 ring-line sm:inline-flex">
          <LogoLockup height={64} />
          <span aria-hidden className="text-2xl font-light text-muted">×</span>
          <SgnLogo height={34} />
          <SapLogo height={40} />
          <SapBadge size="md" />
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/contact">Discuss an SAP project</Button>
          <Button href="/partnership" variant="outline">How the partnership works</Button>
        </div>
      </PageHero>

      {/* Where you are -> what we do */}
      <section className="section-y">
        <div className="container-x">
          <Eyebrow>Start where you are</Eyebrow>
          <H2 className="max-w-3xl">Four common starting points, and what we do for each.</H2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {sapScenarios.map((s) => (
              <li key={s.from} className="rounded-3xl bg-mist p-6 md:p-8">
                <p className="text-[15px] font-semibold text-muted">If you are</p>
                <p className="mt-1 font-display text-xl font-semibold">{s.from}</p>
                <p className="mt-4 flex gap-3 text-[16px] leading-7"><ArrowRight aria-hidden className="mt-1 size-5 shrink-0 text-violet" />{s.to}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Products */}
      <section className="on-ink section-y bg-ink text-on-ink">
        <div className="container-x">
          <Eyebrow dark>What SGN is authorised to sell and implement</Eyebrow>
          <H2 className="max-w-3xl text-white">SAP products, explained in one line each.</H2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sapProducts.map((p) => {
              const I = icons[p.key];
              return (
                <li key={p.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <I aria-hidden className="size-6 text-violet-hi" strokeWidth={1.5} />
                  <p className="mt-4 font-display text-xl font-semibold text-white">{p.name}</p>
                  <p className="mt-1 text-[15px] leading-6 text-on-ink-muted">{p.what}</p>
                </li>
              );
            })}
          </ul>
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {serviceLines.map((l, i) => (
              <li key={l} className="flex items-center gap-3 rounded-2xl bg-white/[0.06] px-4 py-3 text-[15px] text-white">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-violet-hi font-semibold text-ink">{i + 1}</span>{l}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Credentials */}
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>SAP credentials</Eyebrow>
            <H2>{sgn.legalName} is an {sgn.level}.</H2>
            <p className="mt-4 text-lg leading-8 text-muted">SAP Partner ID <span className="font-semibold text-text">{sgn.partnerId}</span>, {sgn.city}. SAP certificate issued {sgn.certificateIssued}.</p>
            <a href="https://partnerfinder.sap.com/" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-1.5 font-semibold text-violet underline decoration-violet/30 underline-offset-4 hover:decoration-violet">
              Check on SAP Partner Finder <ExternalLink aria-hidden className="size-4" />
            </a>
            <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
              {sgnMetrics.map((m) => (
                <div key={m.label}>
                  <dd className="font-display text-4xl font-semibold text-violet">{m.value}{m.suffix}</dd>
                  <dt className="mt-1 text-sm text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-xs text-muted">Figures are SGN Software’s.</p>
          </div>
          <ul className="space-y-3">
            {competencies.map((c) => (
              <li key={c.name} className="flex items-start justify-between gap-4 rounded-2xl bg-mist p-5">
                <div>
                  <p className="font-display text-lg font-semibold">{c.name}</p>
                  <p className="mt-1 text-[15px] text-muted">{c.specializations.join(', ')}</p>
                </div>
                <span className="shrink-0 rounded-full bg-white px-3 py-1 text-sm font-semibold text-violet ring-1 ring-line">{c.tier}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x">
          <Eyebrow>Client proof</Eyebrow>
          <H2 className="mb-10">SAP clients served by SGN Software.</H2>
          <ClientMatrix />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

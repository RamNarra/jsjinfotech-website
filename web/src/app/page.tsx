/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Boxes, Cloud, ShoppingCart, Users, Workflow, Server } from 'lucide-react';
import { site } from '@/content/site';
import { sgn } from '@/content/sap';
import { HeroCarousel } from '@/components/motion/HeroCarousel';
import { PartnerStrip } from '@/components/sections/PartnerStrip';
import { CapabilityRibbon } from '@/components/sections/CapabilityRibbon';
import { PartnershipTable } from '@/components/sections/PartnershipTable';
import { VerticalCards } from '@/components/sections/VerticalCards';
import { ClientMatrix } from '@/components/sections/ClientMatrix';
import { AiDiagram } from '@/components/sections/AiDiagram';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { EngagementSteps } from '@/components/sections/EngagementSteps';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { SapBadge, SgnLogo } from '@/components/brand/SapBadge';
import { LogoLockup } from '@/components/brand/Logo';
import { ArrowLink, Eyebrow, H2, JsonLd } from '@/components/ui';
import { organizationLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'JSJ INFOTECH | Enterprise IT, SAP with SGN, AI, Drones, Software, Smart Infrastructure' },
  description: 'One technology partner for enterprise IT, SAP with SGN Software (SAP Gold Partner), AI, drones, software and government HVAC. Hyderabad, India.',
  alternates: { canonical: `${site.url}/` },
};

// SAP offerings explained in plain words. Product names are text references; no SAP logos (reserved for SAP).
const sapOffers = [
  { icon: Cloud, name: 'GROW with SAP', what: 'Cloud ERP for growing companies, ready in weeks.' },
  { icon: Server, name: 'RISE with SAP', what: 'Move your existing SAP to a managed private cloud.' },
  { icon: Boxes, name: 'SAP S/4HANA', what: 'The ERP core for finance, supply chain and manufacturing.' },
  { icon: ShoppingCart, name: 'SAP Ariba', what: 'Buying, supplier management and spend control.' },
  { icon: Users, name: 'SAP SuccessFactors', what: 'HR, payroll, hiring and talent in one place.' },
  { icon: Workflow, name: 'SAP BTP', what: 'Connect SAP to your other systems and add AI.' },
];

// Section order follows master prompt §4.
export default function Home() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url }} />
      <HeroCarousel />
      <PartnerStrip />
      <CapabilityRibbon />

      {/* About: copy left, real photos right */}
      <section className="section-y" aria-labelledby="about-h">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>About JSJ INFOTECH</Eyebrow>
            <H2><span id="about-h">Engineering the connection between physical and digital operations.</span></H2>
            <p className="mt-6 max-w-[62ch] text-lg leading-8 text-muted">
              JSJ INFOTECH is a technology and engineering company working across enterprise IT, SAP systems, artificial intelligence, autonomous drones, custom software and government infrastructure maintenance. We connect these into one ecosystem that supports daily operations and opens the way to automation and modernisation.
            </p>
            <ArrowLink href="/about" className="mt-6">More about JSJ</ArrowLink>
          </div>
          <div className="grid grid-cols-5 grid-rows-2 gap-4">
            <figure className="col-span-3 row-span-2 overflow-hidden rounded-[28px]">
              <img src="/images/hvac-800.webp" alt="Air handling unit in a government plant room" loading="lazy" className="h-full min-h-80 w-full object-cover" />
            </figure>
            <figure className="col-span-2 overflow-hidden rounded-[28px]">
              <img src="/images/solar-800.webp" alt="Solar farm seen from above" loading="lazy" className="h-full w-full object-cover" />
            </figure>
            <figure className="col-span-2 overflow-hidden rounded-[28px]">
              <img src="/images/technician-800.webp" alt="Engineer servicing a server rack" loading="lazy" className="h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      {/* Partnership spotlight */}
      <section className="section-y bg-mist" aria-labelledby="partner-h">
        <div className="container-x">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div>
              <Eyebrow>JSJ × SGN partnership</Eyebrow>
              <H2><span id="partner-h">Two companies. Complementary strengths. One coordinated delivery partnership.</span></H2>
              <p className="mt-6 max-w-[62ch] text-lg leading-8 text-muted">
                SGN Software Pvt. Ltd. is JSJ INFOTECH’s joint venture partner for SAP projects and a strategic partner across our wider work. You get JSJ’s engineering and innovation with SGN’s SAP Gold Partner credentials, as one team.
              </p>
            </div>
            <div className="rounded-[32px] bg-white p-8 shadow-[0_30px_80px_-40px_rgba(11,21,48,0.4)] ring-1 ring-line md:p-10">
              <div className="flex items-center justify-between gap-6">
                <LogoLockup height={96} />
                <span aria-hidden className="font-display text-4xl font-light text-muted">×</span>
                <SgnLogo height={44} />
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                <SapBadge size="lg" />
                <p className="text-sm text-muted">SAP Partner ID <span className="font-semibold text-text">{sgn.partnerId}</span></p>
              </div>
            </div>
          </div>
          <div className="mt-14"><PartnershipTable /></div>
          <ArrowLink href="/partnership" className="mt-6">How the partnership works</ArrowLink>
        </div>
      </section>

      {/* Seven verticals with real visuals */}
      <section className="section-y" aria-labelledby="vert-h">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>What we do</Eyebrow>
              <H2 className="max-w-3xl"><span id="vert-h">One technology partner. Seven integrated verticals.</span></H2>
            </div>
            <ArrowLink href="/services">All services</ArrowLink>
          </div>
          <div className="mt-12"><VerticalCards /></div>
        </div>
      </section>

      {/* SAP practice, simplified */}
      <section className="on-ink section-y bg-ink text-on-ink" aria-labelledby="sap-h">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div>
            <Eyebrow dark>SAP with SGN Software</Eyebrow>
            <H2 className="text-white"><span id="sap-h">Buy, implement and run SAP with one partnership.</span></H2>
            <p className="mt-5 text-lg leading-8 text-on-ink-muted">
              SGN Software is authorised by SAP to sell and implement these products. JSJ connects them with AI, IoT and your other systems.
            </p>

            <div><ArrowLink href="/services/sap" className="mt-6 text-violet-hi decoration-violet-hi/40 hover:decoration-violet-hi">See the full SAP practice</ArrowLink></div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {sapOffers.map((o) => (
              <li key={o.name} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                <o.icon aria-hidden className="size-6 text-violet-hi" strokeWidth={1.5} />
                <p className="mt-4 font-display text-xl font-semibold text-white">{o.name}</p>
                <p className="mt-1 text-[15px] leading-6 text-on-ink-muted">{o.what}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* AI */}
      <section className="on-ink section-y border-t border-white/10 bg-ink text-on-ink" aria-labelledby="ai-h">
        <div className="container-x">
          <Eyebrow dark>AI and connected intelligence</Eyebrow>
          <H2 className="max-w-3xl text-white"><span id="ai-h">From enterprise intelligence to smart infrastructure.</span></H2>
          <div className="mt-12"><AiDiagram /></div>
        </div>
      </section>

      {/* Industries */}
      <section className="section-y" aria-labelledby="ind-h">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Eyebrow>Industries served</Eyebrow>
              <H2><span id="ind-h">Fourteen industries, one delivery model.</span></H2>
            </div>
            <ArrowLink href="/industries">View industries</ArrowLink>
          </div>
          <div className="mt-10"><IndustryGrid /></div>
        </div>
      </section>

      {/* Engagement, compact */}
      <section className="section-y bg-mist" aria-labelledby="eng-h">
        <div className="container-x">
          <Eyebrow>How we engage</Eyebrow>
          <H2 className="mb-12"><span id="eng-h">Four steps from first meeting to running system.</span></H2>
          <EngagementSteps />
        </div>
      </section>

      {/* Roadmap */}
      <section className="section-y" aria-labelledby="road-h">
        <div className="container-x">
          <Eyebrow>Future direction</Eyebrow>
          <H2 className="mb-12"><span id="road-h">JSJ INFOTECH 2030</span></H2>
          <RoadmapTimeline />
        </div>
      </section>

      {/* Client proof with logos */}
      <section className="section-y bg-mist" aria-labelledby="proof-h">
        <div className="container-x">
          <Eyebrow>Client proof</Eyebrow>
          <H2 className="mb-12 max-w-3xl"><span id="proof-h">SAP clients served by SGN Software.</span></H2>
          <ClientMatrix />
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

import type { Metadata } from 'next';
import { Cpu, Network, Building2 } from 'lucide-react';
import { site } from '@/content/site';
import { sgn, serviceLines, authorizations, engagementSteps, sgnMetrics } from '@/content/sap';
import { industries } from '@/content/industries';
import { partners } from '@/content/partners';
import { HeroCarousel } from '@/components/motion/HeroCarousel';
import { CapabilityRibbon } from '@/components/sections/CapabilityRibbon';
import { PartnershipTable } from '@/components/sections/PartnershipTable';
import { VerticalCards } from '@/components/sections/VerticalCards';
import { ClientMatrix } from '@/components/sections/ClientMatrix';
import { AiDiagram } from '@/components/sections/AiDiagram';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { PinnedSteps } from '@/components/motion/PinnedSteps';
import { Reveal } from '@/components/motion/Reveal';
import { PartnershipLockup, SapBadge } from '@/components/brand/SapBadge';
import { ArrowLink, Eyebrow, H2, JsonLd } from '@/components/ui';
import { organizationLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'JSJ INFOTECH | Enterprise IT, SAP with SGN, AI, Drones, Software, Smart Infrastructure' },
  description: 'One technology partner for enterprise IT, SAP with SGN Software (SAP Gold Partner), AI, drones, software and government HVAC. Hyderabad, India.',
  alternates: { canonical: `${site.url}/` },
};

const pillars = [
  { icon: Network, title: 'Enterprise IT and SAP', body: 'Cloud, cybersecurity and SAP programmes delivered with SGN Software.' },
  { icon: Cpu, title: 'AI and autonomous data', body: 'Computer vision, predictive models and drone data in one intelligence layer.' },
  { icon: Building2, title: 'Smart infrastructure', body: 'Connected HVAC and facility systems for government and enterprise.' },
];

export default function Home() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url }} />
      {/* 01 Partnership strip renders in layout (home only). */}
      {/* 02 */}
      <HeroCarousel />
      {/* 03 */}
      <CapabilityRibbon />

      {/* 04 About */}
      <section className="section-y" aria-labelledby="about-h">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <Eyebrow>About JSJ INFOTECH</Eyebrow>
            <H2><span id="about-h">Engineering the Connection Between Physical and Digital Operations.</span></H2>
            <p className="mt-6 max-w-[68ch] text-lg leading-8 text-muted">
              JSJ INFOTECH is a diversified technology and engineering company. It works across enterprise IT, SAP systems, artificial intelligence, drones, custom software and government HVAC maintenance — as one partner that maintains today’s systems and keeps upgrading them with AI, automation and connected intelligence.
            </p>
            <p className="mt-6 font-medium text-violet-deep">{site.tagline}</p>
            <ArrowLink href="/about" className="mt-6">More about JSJ</ArrowLink>
          </Reveal>
          <ul className="grid gap-4">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.08} className="flex gap-4 rounded-2xl border border-line p-5">
                  <p.icon aria-hidden className="mt-0.5 size-6 shrink-0 text-violet" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-[15px] leading-6 text-muted">{p.body}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 05 Partnership spotlight */}
      <section className="section-y bg-mist" aria-labelledby="partner-h">
        <div className="container-x">
          <PartnershipLockup />
          <H2 className="mt-10 max-w-4xl"><span id="partner-h">Two Companies. Complementary Strengths. One Coordinated Delivery Partnership.</span></H2>
          <p className="mt-6 max-w-[68ch] text-lg leading-8 text-muted">
            SGN Software Pvt. Ltd. is JSJ INFOTECH’s joint venture partner for SAP projects and a strategic partner across the wider portfolio. Clients engage one team.
          </p>
          <div className="mt-10"><PartnershipTable /></div>
          <ArrowLink href="/partnership" className="mt-6">How the partnership works</ArrowLink>
        </div>
      </section>

      {/* 06 Verticals */}
      <section className="section-y" aria-labelledby="vert-h">
        <div className="container-x">
          <Eyebrow>Services</Eyebrow>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <H2 className="max-w-3xl"><span id="vert-h">Seven integrated verticals. One converged ecosystem.</span></H2>
            <ArrowLink href="/services">All services</ArrowLink>
          </div>
          <div className="mt-12"><VerticalCards /></div>
        </div>
      </section>

      {/* 07 SAP practice & licensing */}
      <section className="on-ink section-y bg-ink text-on-ink" aria-labelledby="sap-h">
        <div className="container-x">
          <Eyebrow dark>Joint SAP practice</Eyebrow>
          <H2 className="max-w-4xl text-white"><span id="sap-h">Enterprise SAP Delivery &amp; Licensing, Backed by an SAP Gold Partner.</span></H2>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="rounded-2xl border border-white/10 bg-ink-2 p-6">
              <SapBadge dark />
              <dl className="mt-6 space-y-4 text-[15px]">
                <div><dt className="text-on-ink-muted">Partner</dt><dd className="font-medium text-white">{sgn.legalName}, {sgn.city}</dd></div>
                <div><dt className="text-on-ink-muted">SAP Partner ID</dt><dd className="font-mono text-white">{sgn.partnerId}</dd></div>
                <div><dt className="text-on-ink-muted">Engagement model</dt><dd className="text-white">{sgn.engagementModel}</dd></div>
                <div><dt className="text-on-ink-muted">Certificate issued</dt><dd className="text-white">{sgn.certificateIssued}</dd></div>
              </dl>
            </div>
            <div>
              <p className="label-caps text-violet-hi">Service lines</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {serviceLines.map((s) => <li key={s} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white">{s}</li>)}
              </ul>
              <p className="mt-8 label-caps text-violet-hi">Authorized to sell (SGN Software)</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {authorizations.map((a) => (
                  <li key={a.name} className="rounded-xl border border-white/10 p-4">
                    <p className="font-medium text-white">{a.name}</p>
                    <p className="mt-1 text-sm text-on-ink-muted">{a.note}</p>
                  </li>
                ))}
                <li className="rounded-xl border border-white/10 p-4">
                  <p className="font-medium text-white">CastingSoft</p>
                  <p className="mt-1 text-sm text-on-ink-muted">SAP-qualified partner-packaged solution for metals and mining</p>
                </li>
              </ul>
              <p className="mt-8 text-sm text-on-ink-muted">
                SGN Software: {sgnMetrics.map((m) => `${m.value}${m.suffix} ${m.label.toLowerCase()}`).join(' · ')}.
              </p>
              <ArrowLink href="/services/sap" className="mt-4 text-violet-hi hover:text-white">Explore SAP solutions</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* 08 AI */}
      <section className="on-ink section-y border-t border-white/10 bg-ink text-on-ink" aria-labelledby="ai-h">
        <div className="container-x">
          <Eyebrow dark>AI and connected intelligence</Eyebrow>
          <H2 className="max-w-3xl text-white"><span id="ai-h">From Enterprise Intelligence to Smart Infrastructure.</span></H2>
          <div className="mt-12"><AiDiagram /></div>
        </div>
      </section>

      {/* 09 Industries */}
      <section className="section-y" aria-labelledby="ind-h">
        <div className="container-x">
          <Eyebrow>Industries</Eyebrow>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <H2><span id="ind-h">Fourteen sectors. One delivery model.</span></H2>
            <ArrowLink href="/industries">View industries</ArrowLink>
          </div>
          <ul className="mt-10 flex flex-wrap gap-2">
            {industries.map((x) => <li key={x.name} className="rounded-full border border-line px-4 py-2 text-[15px]">{x.name}</li>)}
          </ul>
        </div>
      </section>

      {/* 10 Partner ecosystem */}
      <section className="section-y bg-mist" aria-labelledby="eco-h">
        <div className="container-x">
          <Eyebrow>Partner solutions</Eyebrow>
          <H2 className="max-w-3xl"><span id="eco-h">Engineered with partner solutions.</span></H2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((p) => (
              <li key={p.name} className="rounded-2xl border border-line bg-paper p-6">
                <p className="label-caps text-muted">{p.category}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{p.name}</h3>
                <p className="mt-2 text-[15px] leading-6 text-muted">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11 Engagement model */}
      <section className="section-y" aria-labelledby="eng-h">
        <div className="container-x">
          <Eyebrow>How we engage</Eyebrow>
          <H2 className="mb-12"><span id="eng-h">Engage · Design · Deliver · Run &amp; Evolve</span></H2>
          <PinnedSteps steps={engagementSteps} />
        </div>
      </section>

      {/* 12 Roadmap */}
      <section className="section-y border-t border-line" aria-labelledby="road-h">
        <div className="container-x">
          <Eyebrow>Roadmap</Eyebrow>
          <H2 className="mb-12"><span id="road-h">JSJ INFOTECH 2030</span></H2>
          <RoadmapTimeline />
          <ArrowLink href="/roadmap" className="mt-6">Milestones by vertical</ArrowLink>
        </div>
      </section>

      {/* 13 Client proof */}
      <section className="section-y bg-mist" aria-labelledby="proof-h">
        <div className="container-x">
          <Eyebrow>Client proof</Eyebrow>
          <H2 className="mb-12 max-w-3xl"><span id="proof-h">Proven Across Leading Enterprises.</span></H2>
          <ClientMatrix />
        </div>
      </section>

      {/* 14 Insights */}
      <section className="section-y" aria-labelledby="ins-h">
        <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Insights</Eyebrow>
            <H2><span id="ins-h">Insights are coming soon.</span></H2>
            <p className="mt-4 max-w-[60ch] text-muted">We will publish notes on SAP, AI and smart infrastructure here.</p>
          </div>
          <ArrowLink href="/insights">Visit insights</ArrowLink>
        </div>
      </section>

      {/* 15 */}
      <ClosingCta />
    </>
  );
}

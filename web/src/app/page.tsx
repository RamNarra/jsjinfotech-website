import type { Metadata } from 'next';
import { Cpu, Network, Building2 } from 'lucide-react';
import { site } from '@/content/site';
import { sgn, serviceLines, authorizations, engagementSteps } from '@/content/sap';
import { industries } from '@/content/industries';
import { HeroCarousel } from '@/components/motion/HeroCarousel';
import { PartnerStrip } from '@/components/sections/PartnerStrip';
import { CapabilityRibbon } from '@/components/sections/CapabilityRibbon';
import { PartnershipTable } from '@/components/sections/PartnershipTable';
import { VerticalCards } from '@/components/sections/VerticalCards';
import { ClientMatrix } from '@/components/sections/ClientMatrix';
import { ClientMarquee } from '@/components/sections/ClientMarquee';
import { AiDiagram } from '@/components/sections/AiDiagram';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { StickySteps } from '@/components/motion/StickySteps';
import { Reveal } from '@/components/motion/Reveal';
import { Aurora } from '@/components/motion/Aurora';
import { PartnershipLockup, SapBadge, SgnLogo } from '@/components/brand/SapBadge';
import { ArrowLink, Eyebrow, GradientText, H2, JsonLd } from '@/components/ui';
import { organizationLd } from '@/lib/seo';

export const metadata: Metadata = {
  title: { absolute: 'JSJ INFOTECH | Enterprise IT, SAP with SGN, AI, Drones, Software, Smart Infrastructure' },
  description: 'One technology partner for enterprise IT, SAP with SGN Software (SAP Gold Partner), AI, drones, software and government HVAC. Hyderabad, India.',
  alternates: { canonical: `${site.url}/` },
};

const pillars = [
  { icon: Network, title: 'Enterprise IT and SAP', body: 'Cloud, cybersecurity and SAP programmes delivered with SGN Software.', color: '#4379bd' },
  { icon: Cpu, title: 'AI and autonomous data', body: 'Computer vision, predictive models and drone data in one intelligence layer.', color: '#7761aa' },
  { icon: Building2, title: 'Smart infrastructure', body: 'Connected HVAC and facility systems for government and enterprise.', color: '#0b7f91' },
];

// Section order: master prompt §4 (01–15).
export default function Home() {
  return (
    <>
      <JsonLd data={organizationLd} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', name: site.name, url: site.url }} />
      {/* 01 Partnership strip renders in layout (home only). */}
      {/* 02 */}
      <HeroCarousel />
      <PartnerStrip />
      {/* 03 */}
      <CapabilityRibbon />

      {/* 04 About */}
      <section className="section-y" aria-labelledby="about-h">
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <Eyebrow>About JSJ INFOTECH</Eyebrow>
            <H2><span id="about-h">Engineering the Connection Between <GradientText>Physical and Digital</GradientText> Operations.</span></H2>
            <p className="mt-6 max-w-[68ch] text-lg leading-8 text-muted">
              JSJ INFOTECH is a technology and engineering company working across enterprise IT, SAP systems, artificial intelligence, autonomous drones, custom software and government infrastructure maintenance. Our approach connects these capabilities into an integrated technology ecosystem—supporting operational needs while creating pathways for automation, intelligence and modernization.
            </p>
            <p className="mt-6 inline-block rounded-full border border-line bg-mist px-4 py-2 text-sm font-medium text-violet">{site.tagline}</p>
            <div><ArrowLink href="/about" className="mt-4">More about JSJ</ArrowLink></div>
          </Reveal>
          <ul className="grid gap-4">
            {pillars.map((p, i) => (
              <li key={p.title}>
                <Reveal delay={i * 0.08} className="card spotlight flex gap-4 rounded-2xl p-5">
                  <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl text-white" style={{ background: p.color, boxShadow: `0 10px 24px -10px ${p.color}` }}>
                    <p.icon aria-hidden className="size-5" strokeWidth={1.5} />
                  </span>
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
      <section className="section-y relative overflow-hidden bg-mist" aria-labelledby="partner-h">
        <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <Eyebrow>JSJ × SGN partnership</Eyebrow>
              <H2 className="max-w-4xl"><span id="partner-h">Two Companies. Complementary Strengths. <GradientText>One Coordinated Delivery Partnership.</GradientText></span></H2>
              <p className="mt-6 max-w-[68ch] text-lg leading-8 text-muted">
                JSJ INFOTECH and SGN Software Pvt. Ltd. work together as a combined technology and delivery partnership. SGN is JSJ INFOTECH’s joint venture partner for SAP projects and a strategic partner across the wider JSJ portfolio. For SAP engagements, the partnership brings together JSJ’s client engagement, engineering and innovation capabilities with SGN’s SAP Gold Partner credentials and SAP delivery expertise.
              </p>
            </div>
            <PartnershipLockup />
          </div>
          <div className="mt-12"><PartnershipTable /></div>
          <ArrowLink href="/partnership" className="mt-6">How the partnership works</ArrowLink>
        </div>
      </section>

      {/* 06 Verticals */}
      <section className="section-y" aria-labelledby="vert-h">
        <div className="container-x">
          <Eyebrow>Seven integrated verticals</Eyebrow>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <H2 className="max-w-3xl"><span id="vert-h">One technology partner. <GradientText>Seven integrated verticals.</GradientText></span></H2>
            <ArrowLink href="/services">All services</ArrowLink>
          </div>
          <div className="mt-12"><VerticalCards /></div>
        </div>
      </section>

      {/* 07 SAP practice & SGN credential panel */}
      <section className="on-ink section-y relative overflow-hidden bg-ink text-on-ink" aria-labelledby="sap-h">
        <Aurora intensity={0.35} dark />
        <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
        <div className="container-x relative">
          <Eyebrow dark>Joint SAP practice</Eyebrow>
          <H2 className="max-w-4xl text-white"><span id="sap-h">Enterprise SAP Delivery &amp; Licensing, <GradientText>Backed by an SAP Gold Partner.</GradientText></span></H2>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
            <div className="glass rounded-3xl p-6 lg:p-8">
              <div className="inline-flex flex-col gap-4 rounded-2xl bg-white p-4">
                <SgnLogo height={28} />
                <SapBadge size="md" />
              </div>
              <dl className="mt-6 space-y-4 text-[15px]">
                <div><dt className="text-on-ink-muted">Partner</dt><dd className="font-medium text-white">{sgn.legalName}, {sgn.city}</dd></div>
                <div><dt className="text-on-ink-muted">SAP Partner ID</dt><dd className="font-mono text-white">{sgn.partnerId}</dd></div>
                <div><dt className="text-on-ink-muted">Engagement model</dt><dd className="text-white">{sgn.engagementModel}</dd></div>
                <div><dt className="text-on-ink-muted">SAP certificate issued</dt><dd className="text-white">{sgn.certificateIssued}</dd></div>
              </dl>
            </div>
            <div>
              <p className="label-caps text-violet-hi">Service lines</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {serviceLines.map((s) => <li key={s} className="glass rounded-full px-4 py-2 text-sm text-white">{s}</li>)}
              </ul>
              <p className="mt-8 label-caps text-violet-hi">Authorized to sell (SGN Software)</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {authorizations.map((a) => (
                  <li key={a.name} className="card spotlight rounded-2xl p-4">
                    <p className="font-medium text-white">{a.name}</p>
                    <p className="mt-1 text-sm text-on-ink-muted">{a.note}</p>
                  </li>
                ))}
                <li className="card spotlight rounded-2xl p-4">
                  <p className="font-medium text-white">CastingSoft</p>
                  <p className="mt-1 text-sm text-on-ink-muted">SAP-qualified partner-packaged solution for metals and mining</p>
                </li>
              </ul>
              <ArrowLink href="/services/sap" className="mt-6 text-violet-hi hover:text-white">Explore SAP solutions</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      {/* 08 AI */}
      <section className="on-ink section-y relative overflow-hidden border-t border-white/10 bg-ink text-on-ink" aria-labelledby="ai-h">
        <div className="container-x relative">
          <Eyebrow dark>AI and connected intelligence</Eyebrow>
          <H2 className="max-w-3xl text-white"><span id="ai-h">From Enterprise Intelligence to <GradientText>Smart Infrastructure.</GradientText></span></H2>
          <div className="mt-12"><AiDiagram /></div>
        </div>
      </section>

      {/* 09 Industries */}
      <section className="section-y" aria-labelledby="ind-h">
        <div className="container-x">
          <Eyebrow>Industries served</Eyebrow>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <H2><span id="ind-h">Fourteen industries. <GradientText>One delivery model.</GradientText></span></H2>
            <ArrowLink href="/industries">View industries</ArrowLink>
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {industries.map((x) => (
              <li key={x.name} className="card spotlight flex min-h-24 items-end rounded-2xl p-4 font-display text-[17px] font-medium leading-6">{x.name}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10 Engagement model */}
      <section className="section-y bg-mist" aria-labelledby="eng-h">
        <div className="container-x">
          <Eyebrow>How we engage</Eyebrow>
          <H2 className="mb-14 max-w-3xl"><span id="eng-h">Engage → Design → Deliver → <GradientText>Run &amp; Evolve.</GradientText></span></H2>
          <StickySteps steps={engagementSteps} />
        </div>
      </section>

      {/* 11 Roadmap */}
      <section className="section-y" aria-labelledby="road-h">
        <div className="container-x">
          <Eyebrow>Future direction</Eyebrow>
          <H2 className="mb-14 max-w-3xl"><span id="road-h">JSJ INFOTECH <GradientText>2030</GradientText></span></H2>
          <RoadmapTimeline />
          <ArrowLink href="/roadmap" className="mt-6">Milestones by vertical</ArrowLink>
        </div>
      </section>

      {/* 12 Client proof */}
      <section className="section-y bg-mist" aria-labelledby="proof-h">
        <div className="container-x">
          <Eyebrow>Client proof</Eyebrow>
          <H2 className="mb-12 max-w-3xl"><span id="proof-h">SAP clients <GradientText>served by SGN Software.</GradientText></span></H2>
          <ClientMatrix />
        </div>
        <div className="mt-16"><ClientMarquee /></div>
      </section>

      {/* 13 Insights */}
      <section className="section-y" aria-labelledby="ins-h">
        <div className="container-x flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Insights</Eyebrow>
            <H2><span id="ins-h">Insights are coming soon.</span></H2>
            <p className="mt-4 max-w-[60ch] text-muted">Articles, announcements and technology perspectives on SAP, AI and smart infrastructure.</p>
          </div>
          <ArrowLink href="/insights">Visit insights</ArrowLink>
        </div>
      </section>

      {/* 14 */}
      <ClosingCta />
    </>
  );
}

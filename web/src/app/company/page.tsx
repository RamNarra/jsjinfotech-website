import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { BRAND, MISSION_POINTS, PROJECT_VERTICALS } from '@/shared';
import { PageHero } from '@/components/ui/PageHero';
import { ClosingCta } from '@/components/ui/ClosingCta';
import { Reveal } from '@/components/ui/Reveal';
import { DeliverySection } from '@/components/home/DeliverySection';
import { Ecosystem } from '@/components/home/Ecosystem';
import { MapPin, Layers, Users, Route } from 'lucide-react';

const GLANCE = [
  { icon: MapPin, k: 'Headquarters', v: 'Jubilee Hills, Hyderabad' },
  { icon: Layers, k: 'Solutions', v: 'Nine, across IT, SAP, AI, software, drones and government' },
  { icon: Users, k: 'Serves', v: 'Enterprises, government organisations, institutions, partners' },
  { icon: Route, k: 'Delivery', v: 'One six-stage lifecycle, from requirement to support' },
] as const;

export const metadata: Metadata = pageMetadata({
  title: 'Company',
  description: 'JSJ INFOTECH is a technology-driven IT consulting and project execution company in Hyderabad: our vision, mission, project verticals, delivery model and partnerships.',
  path: '/company',
});

export default function CompanyPage() {
  return (
    <>
      <PageHero
        trail={[{ name: 'Company' }]}
        eyebrow="Company"
        title="A practical, scalable and secure project execution partner."
        lead="JSJ INFOTECH helps organisations adopt, implement and enhance modern digital technologies — focusing on practical implementation and measurable project outcomes rather than advisory alone."
      />

      <section className="container-x pb-16">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {GLANCE.map((g) => (
            <li key={g.k} className="art-panel rounded-[var(--radius-lg)] border border-line p-6">
              <span className="grid size-11 place-items-center rounded-xl bg-white text-brand-text shadow-card">
                <g.icon aria-hidden className="size-5" />
              </span>
              <p className="t-num mt-5">{g.k}</p>
              <p className="mt-1 text-[1.1875rem] font-semibold leading-snug tracking-[-0.01em]">{g.v}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x pb-24">
        <div className="grid gap-12 border-t border-line pt-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <p className="t-eyebrow">Introduction</p>
          </Reveal>
          <Reveal className="grid gap-6 lg:col-span-8" delay={0.05}>
            <p className="t-lead !text-ink">
              Based in Hyderabad, JSJ brings together capabilities across IT consulting, SAP
              implementation and management, software development, project management, artificial
              intelligence, drone technology and government technology projects.
            </p>
            <p className="t-lead">
              The approach starts with the business requirement, then develops the technology,
              implementation and execution strategy. JSJ works with enterprises, government
              organisations, institutions and strategic partners to improve operational efficiency,
              transparency, scalability and decision-making.
            </p>
            <p className="t-lead">
              With Hyderabad emerging as one of India&apos;s major technology and innovation centres,
              JSJ is positioned to collaborate with technology providers, system integrators, software
              companies, AI specialists and drone technology companies — across India and, where
              appropriate, international markets.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-soft">
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="t-eyebrow">Vision</p>
            <p className="t-h2 mt-3">
              To become a trusted technology and project execution partner.
            </p>
            <p className="t-lead mt-6">
              For organisations seeking digital transformation, intelligent technology adoption and
              large-scale project implementation — combining enterprise platforms such as SAP with AI,
              automation, drones, analytics, cloud and advanced software.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="t-eyebrow">Mission</p>
            <p className="t-h3 mt-3">
              Technology solutions that are practical, scalable, secure and aligned with clients&apos;
              strategic objectives.
            </p>
            <ul className="mt-6">
              {MISSION_POINTS.map((m) => (
                <li key={m} className="t-small border-t border-line py-3 !text-ink">
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="t-eyebrow">Project verticals</p>
            <h2 className="t-h2 mt-3">From conventional IT to emerging technology.</h2>
          </Reveal>
          <ul className="mt-14 grid gap-x-12 md:grid-cols-2">
            {PROJECT_VERTICALS.map((v) => (
              <li key={v.title} className="border-t border-line py-7">
                <h3 className="t-h3">{v.title}</h3>
                <p className="t-small mt-2">{v.text}</p>
              </li>
            ))}
          </ul>
          <Link href="/solutions" className="mt-10 inline-block text-[1.0625rem] font-medium text-brand-text hover:text-brand-hover">
            See all solutions →
          </Link>
        </div>
      </section>

      <div id="delivery">
        <DeliverySection />
      </div>
      <Ecosystem />

      <section className="section-y border-t border-line-soft">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="t-eyebrow">Hyderabad</p>
            <h2 className="t-h2 mt-3">Headquartered in Jubilee Hills.</h2>
          </Reveal>
          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.05}>
            <address className="t-lead not-italic !text-ink">{BRAND.address.formatted}</address>
            <p className="t-small mt-6">
              Our long-term aim is a scalable technology platform that combines local execution
              capability with national and international technology partnerships — turning technology
              opportunities into practical, measurable and sustainable project outcomes.
            </p>
            <Link href="/vision-2030" className="mt-6 inline-block text-[1.0625rem] font-medium text-brand-text hover:text-brand-hover">
              Read the 2030 vision →
            </Link>
          </Reveal>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import Link from 'next/link';
import { PageHero } from '@/components/ui/PageHero';
import { ClosingCta } from '@/components/ui/ClosingCta';
import { Reveal } from '@/components/ui/Reveal';
import { AutonomousCore } from '@/components/home/AutonomousCore';

export const metadata: Metadata = pageMetadata({
  title: 'Technology',
  description: 'How JSJ connects applications, systems, intelligence, infrastructure and physical systems into one integrated technology model.',
  path: '/technology',
});

const stack = [
  {
    name: 'Experience',
    text: 'Web and mobile applications, dashboards and analytics platforms that people use.',
    links: [['Software development', '/solutions/software-development']],
  },
  {
    name: 'Applications',
    text: 'Enterprise applications, SAP and business-process applications.',
    links: [
      ['SAP & ERP', '/solutions/sap-erp'],
      ['Software development', '/solutions/software-development'],
    ],
  },
  {
    name: 'Systems',
    text: 'System integration, APIs, workflow automation and data management that connect applications.',
    links: [['Digital & IT consulting', '/solutions/digital-it']],
  },
  {
    name: 'Intelligence',
    text: 'AI, predictive analytics, computer vision and digital twins, integrated into existing systems.',
    links: [['Artificial intelligence', '/solutions/artificial-intelligence']],
  },
  {
    name: 'Infrastructure',
    text: 'Cloud-native and hybrid infrastructure with zero-trust security architecture and continuous hardening.',
    links: [
      ['Cybersecurity', '/solutions/cybersecurity'],
      ['Digital & IT consulting', '/solutions/digital-it'],
    ],
  },
  {
    name: 'Physical systems',
    text: 'HVAC, drones and IoT: the facilities and field assets that generate operational data.',
    links: [
      ['Drone technology', '/solutions/drone-technology'],
      ['Government technology', '/solutions/government-technology'],
    ],
  },
] as const;

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        trail={[{ name: 'Technology' }]}
        eyebrow="Technology"
        title="How the layers connect."
        lead="JSJ is organised around how technology is actually assembled — from the physical systems where data begins to the experiences where decisions are made."
      />

      <section className="container-x pb-24">
        <ol className="border-t border-line">
          {stack.map((l, i) => (
            <li key={l.name} className="grid gap-x-10 gap-y-4 border-b border-line py-9 md:grid-cols-12">
              <Reveal className="md:col-span-4">
                <span className="t-num">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="t-h3 mt-2">{l.name}</h2>
              </Reveal>
              <Reveal className="md:col-span-5" delay={0.05}>
                <p className="t-lead !text-[1.125rem]">{l.text}</p>
              </Reveal>
              <ul className="flex flex-wrap content-start gap-x-5 gap-y-1 md:col-span-3">
                {l.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="t-small !text-brand-text hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="section-y bg-soft">
        <div className="container-x grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="t-eyebrow">The convergence model</p>
            <h2 className="t-h2 mt-3">Physical, enterprise and intelligence layers, feeding one core.</h2>
            <p className="t-lead mt-5">
              The value is in the connections: drone and facility data reaching SAP, and AI acting on
              both. That is what JSJ is built to deliver.
            </p>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            <AutonomousCore />
          </div>
        </div>
      </section>

      <ClosingCta />
    </>
  );
}

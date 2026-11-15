import { PageHero, Eyebrow, H2 } from '@/components/ui';
import { site } from '@/content/site';
import { engagementSteps } from '@/content/sap';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('About', 'JSJ INFOTECH is a technology and engineering company in Hyderabad building intelligent systems for enterprises and government.', '/about/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="About JSJ INFOTECH" title="Engineering the connection between physical and digital operations." lead="A future-focused technology and engineering company building the intelligent systems that run enterprises, cities and government infrastructure." />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Company</Eyebrow>
            <H2>One integrated partner</H2>
            <p className="mt-6 leading-8 text-muted">
              JSJ INFOTECH operates at the intersection of enterprise IT, SAP systems, artificial intelligence, drones, custom software and government HVAC maintenance. The company is built to be a single technology partner — one that maintains today’s systems and continuously upgrades them with AI, automation and connected intelligence.
            </p>
            <p className="mt-4 leading-8 text-muted">
              JSJ INFOTECH delivers SAP programmes through a combined technology and delivery partnership with SGN Software Pvt. Ltd., an SAP Gold Partner. SGN is JSJ’s joint venture partner for SAP projects and a strategic partner across the wider JSJ portfolio.
            </p>
          </div>
          <div>
            <Eyebrow>Vision</Eyebrow>
            <H2>Converge physical and digital</H2>
            <p className="mt-6 leading-8 text-muted">
              Traditional firms treat software, hardware and maintenance as separate disciplines. JSJ INFOTECH builds them as one ecosystem: self-monitoring infrastructure, AI-augmented enterprise systems and autonomous data capture working together.
            </p>
            <p className="mt-4 rounded-xl border-l-4 border-violet bg-mist p-5 leading-7">
              Our ambition: to be the technology backbone behind India’s next generation of smart government infrastructure and intelligent enterprise operations.
            </p>
          </div>
        </div>
      </section>
      <section className="section-y bg-mist">
        <div className="container-x">
          <Eyebrow>Delivery approach</Eyebrow>
          <ol className="grid gap-4 md:grid-cols-4">
            {engagementSteps.map((s) => (
              <li key={s.n} className="rounded-2xl border border-line bg-paper p-6">
                <p className="font-mono text-sm text-violet">{s.n}</p>
                <h3 className="mt-4 font-display text-xl font-semibold">{s.name}</h3>
                <p className="mt-2 text-[15px] leading-6 text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-muted">Head office: {site.address.full}</p>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

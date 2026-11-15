import { Handshake, Layers, Users } from 'lucide-react';
import { PageHero, Eyebrow, H2, ArrowLink } from '@/components/ui';
import { SapBadge, SapLogo, SgnLogo } from '@/components/brand/SapBadge';
import { LogoLockup } from '@/components/brand/Logo';
import { PartnershipTable } from '@/components/sections/PartnershipTable';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { sgn } from '@/content/sap';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Partnership', 'JSJ INFOTECH × SGN Software: joint venture partner for SAP projects and strategic partner across the JSJ portfolio. SGN Software is an SAP Gold Partner.', '/partnership/');

// Roles from the corporate profile §03.
const roles = [
  { icon: Handshake, t: 'Joint venture partner for SAP projects', d: 'JSJ and SGN pursue, scope and deliver SAP work together: licensing, implementation, migration to RISE with SAP and post go-live support, under shared governance.' },
  { icon: Layers, t: 'Strategic partner across JSJ’s work', d: 'SGN connects the SAP core with JSJ’s AI, software, IT infrastructure, drone and smart-infrastructure programmes.' },
  { icon: Users, t: 'One accountable team', d: 'You deal with one team from the first workshop to hypercare, not two vendors.' },
];

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Partnership"
        title={<><span className="whitespace-nowrap">JSJ INFOTECH</span> <span className="text-gradient">×</span> <span className="whitespace-nowrap">SGN Software</span></>}
        lead="A combined technology and delivery partnership. JSJ brings engineering and innovation; SGN brings SAP Gold Partner credentials and a certified SAP delivery team."
      >
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 rounded-[28px] bg-white px-6 py-8 shadow-[0_20px_50px_-28px_rgba(11,21,48,0.45)] ring-1 ring-line sm:justify-start md:px-10">
          <LogoLockup height={96} />
          <span aria-hidden className="font-display text-4xl font-light text-muted">×</span>
          <SgnLogo height={48} className="max-w-full" />
          <span aria-hidden className="hidden h-14 w-px bg-line lg:block" />
          <SapLogo height={48} />
          <SapBadge size="lg" />
        </div>
      </PageHero>

      <section className="section-y">
        <div className="container-x">
          <Eyebrow>How it works</Eyebrow>
          <H2 className="max-w-3xl">Two roles, one team.</H2>
          <ul className="mt-10 grid gap-4 md:grid-cols-3">
            {roles.map((r) => (
              <li key={r.t} className="rounded-3xl bg-mist p-6 md:p-8">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-white text-violet ring-1 ring-line"><r.icon aria-hidden className="size-6" strokeWidth={1.6} /></span>
                <h3 className="mt-5 font-display text-xl font-semibold">{r.t}</h3>
                <p className="mt-2 leading-7 text-muted">{r.d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-y bg-mist">
        <div className="container-x">
          <Eyebrow>Who brings what</Eyebrow>
          <H2 className="mb-10 max-w-3xl">Clear split of responsibilities.</H2>
          <PartnershipTable />
        </div>
      </section>

      <section className="section-y">
        <div className="container-x flex flex-col gap-8 rounded-[32px] bg-ink p-8 text-on-ink md:flex-row md:items-center md:justify-between md:p-12">
          <div className="max-w-2xl">
            <p className="font-semibold text-violet-hi">SAP credentials</p>
            <p className="mt-2 font-display text-2xl font-semibold text-white md:text-3xl">{sgn.legalName} is a certified {sgn.level}, Partner ID {sgn.partnerId}.</p>
            <p className="mt-3 text-on-ink-muted">Competencies, authorisations, track record and client references are on the SAP page.</p>
          </div>
          <ArrowLink href="/services/sap" className="text-violet-hi decoration-violet-hi/40 hover:decoration-violet-hi">See the SAP practice</ArrowLink>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

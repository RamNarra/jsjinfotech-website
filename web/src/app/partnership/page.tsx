import { PageHero, Eyebrow, H2 } from '@/components/ui';
import { PartnershipLockup } from '@/components/brand/SapBadge';
import { PartnershipTable } from '@/components/sections/PartnershipTable';
import { ClientMatrix } from '@/components/sections/ClientMatrix';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { competencies, designations, authorizations, sgn, sgnMetrics } from '@/content/sap';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Partnership', 'JSJ INFOTECH × SGN Software: joint venture partner for SAP projects. SGN Software is an SAP Gold Partner, Partner ID 0001635021.', '/partnership/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Partnership" title={<><span className="whitespace-nowrap">JSJ INFOTECH</span> <span className="text-gradient">×</span> <span className="whitespace-nowrap">SGN Software</span></>} lead="A combined technology and delivery partnership. SGN is JSJ INFOTECH’s joint venture partner for SAP projects and a strategic partner across JSJ’s technology portfolio." />
      <section className="section-y">
        <div className="container-x">
          <PartnershipLockup />
          <H2 className="mt-10 mb-10">Who brings what</H2>
          <PartnershipTable />
        </div>
      </section>
      <section className="section-y bg-mist">
        <div className="container-x">
          <Eyebrow>SAP Gold Partner credentials</Eyebrow>
          <H2>{sgn.legalName} is certified by SAP as an {sgn.level}.</H2>
          <p className="mt-4 max-w-[68ch] text-muted">
            Partner ID <span className="font-mono">{sgn.partnerId}</span> · {sgn.city} · {sgn.engagementModel}. SAP certificate issued {sgn.certificateIssued}.
          </p>
          <p className="mt-3 max-w-[68ch] text-sm text-muted">
            Verification: SGN Software’s status can be checked on the{' '}
            <a className="text-violet underline" href="https://partnerfinder.sap.com/" target="_blank" rel="noopener noreferrer">SAP Partner Finder</a>. A copy of the SAP partner certificate is available on request.
          </p>
          <div className="mt-10 overflow-x-auto rounded-2xl card">
            <table className="w-full min-w-[640px] text-left text-[15px]">
              <caption className="sr-only">SAP-certified competencies of SGN Software</caption>
              <thead><tr className="border-b border-line bg-mist"><th scope="col" className="p-4">Competency</th><th scope="col" className="p-4">Specialization</th><th scope="col" className="p-4">Tier</th></tr></thead>
              <tbody>
                {competencies.map((c) => (
                  <tr key={c.name} className="border-b border-line last:border-0">
                    <th scope="row" className="p-4 align-top font-medium">{c.name}</th>
                    <td className="p-4 align-top text-muted">{c.specializations.join(', ')}</td>
                    <td className="p-4 align-top"><span className="rounded-full bg-mist px-2.5 py-1 text-sm font-medium text-violet-deep">{c.tier}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-semibold">Authorized to sell</h3>
              <ul className="mt-4 space-y-2 text-muted">{authorizations.map((a) => <li key={a.name}>• {a.name} — {a.note}</li>)}</ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold">Designations and recognition</h3>
              <ul className="mt-4 space-y-2 text-muted">{designations.map((d) => <li key={d}>• {d}</li>)}</ul>
            </div>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {sgnMetrics.map((m) => (
              <div key={m.label}><dd className="font-display text-4xl font-semibold text-violet-deep">{m.value}{m.suffix}</dd><dt className="mt-1 text-sm text-muted">{m.label} (SGN)</dt></div>
            ))}
          </dl>
        </div>
      </section>
      <section className="section-y">
        <div className="container-x">
          <H2 className="mb-10">SAP clients served by SGN Software</H2>
          <ClientMatrix />
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

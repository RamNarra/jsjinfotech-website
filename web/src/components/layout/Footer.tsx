import Link from 'next/link';
import { site } from '@/content/site';
import { verticals } from '@/content/verticals';
import { PartnershipLockup } from '@/components/brand/SapBadge';

const groups = [
  { title: 'Company', links: [['About', '/about'], ['Partnership', '/partnership'], ['Careers', '/careers'], ['Insights', '/insights']] },
  { title: 'Services', links: verticals.map((v) => [v.name, `/services/${v.slug}`]) },
  { title: 'Solutions', links: [['SAP', '/services/sap'], ['Industries', '/industries'], ['Roadmap', '/roadmap']] },
] as const;

const legal = [['Privacy', '/privacy'], ['Terms', '/terms'], ['Cookie policy', '/cookies'], ['Accessibility', '/accessibility']] as const;

export function Footer() {
  return (
    <footer className="on-ink relative overflow-hidden bg-ink text-on-ink">
      <div className="spectrum-line" />
      <div className="container-x py-16 lg:py-20">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <PartnershipLockup dark />
            <p className="mt-6 text-sm leading-6 text-on-ink-muted">{site.tagline}</p>
          </div>
        </div>
        <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-5">
          {groups.map((g) => (
            <nav key={g.title} aria-label={g.title}>
              <p className="label-caps text-violet-hi">{g.title}</p>
              <ul className="mt-4 space-y-1">
                {g.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="inline-flex min-h-9 items-center text-[14px] text-on-ink-muted hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div className="lg:col-span-2">
            <p className="label-caps text-violet-hi">Contact</p>
            <address className="mt-4 space-y-2 text-[14px] leading-6 text-on-ink-muted not-italic">
              <p>{site.address.full}</p>
              <p><a className="hover:text-white" href={`tel:${site.phone.tel}`}>{site.phone.display}</a></p>
              <p><a className="hover:text-white" href={`mailto:${site.email.enquiry}`}>{site.email.enquiry}</a></p>
              <p><a className="hover:text-white" href={`mailto:${site.email.support}`}>{site.email.support}</a></p>
              <p>www.jsjinfotech.co.in</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-[13px] text-on-ink-muted lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} {site.legal.name}. SAP delivery with SGN Software Pvt. Ltd., SAP Gold Partner.</p>
            <p>LLPIN {site.legal.llpin}. GSTIN {site.legal.gstin}. Registered office: {site.legal.registeredOffice}.</p>
          </div>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5">
              {legal.map(([l, h]) => (
                <li key={h}><Link href={h} className="inline-flex min-h-9 items-center hover:text-white">{l}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <p className="mt-6 max-w-4xl text-[12px] leading-5 text-on-ink-muted/80">
          SAP, SAP S/4HANA, RISE with SAP, GROW with SAP, SAP Ariba, SAP SuccessFactors, SAP Business AI, SAP BTP, SAP PartnerEdge and SAP Gold Partner are trademarks or registered trademarks of SAP SE in Germany and other countries. This site is not affiliated with SAP SE or an SAP affiliate company. All other names are trademarks of their owners.
        </p>
      </div>
    </footer>
  );
}

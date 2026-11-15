import { Award, ExternalLink } from 'lucide-react';
import { SapBadge, SgnLogo } from '@/components/brand/SapBadge';
import { sgn } from '@/content/sap';

// SAP solution names are textual references (allowed by SAP trademark policy); the SAP corporate logo is
// reserved for SAP and is deliberately not used. Partner badge links to sap.com and is not animated.
const solutions = ['SAP S/4HANA', 'RISE with SAP', 'GROW with SAP', 'SAP BTP', 'SAP Business Data Cloud', 'SAP Ariba', 'SAP SuccessFactors', 'SAP Signavio', 'SAP Business AI', 'SAP PartnerEdge Cloud Choice'];

export function PartnerStrip() {
  return (
    <section aria-label="SAP partnership credentials" className="relative border-y border-line bg-white">
      <div className="container-x grid items-center gap-8 py-8 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
        <div className="flex flex-wrap items-center gap-6">
          <div>
            <p className="label-caps text-muted">JV partner for SAP projects</p>
            <SgnLogo height={36} className="mt-3" />
          </div>
          <span aria-hidden className="hidden h-14 w-px bg-line sm:block" />
          <SapBadge size="lg" />
        </div>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[14px] text-muted lg:justify-center">
          <li className="flex items-center gap-2"><Award aria-hidden className="size-4 text-amber" strokeWidth={1.75} /><span><strong className="font-semibold text-text">Growth Champion Partner of the Year 2024</strong> · awarded to SGN by SAP</span></li>
          <li><span className="font-mono text-text">ID {sgn.partnerId}</span> · {sgn.city}</li>
          <li>SAP PartnerEdge Sell — Solution Sales</li>
        </ul>
        <a href="https://partnerfinder.sap.com/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 justify-self-start rounded-full border border-line px-4 text-sm font-medium text-violet hover:border-violet lg:justify-self-end">
          Verify on SAP Partner Finder <ExternalLink aria-hidden className="size-3.5" />
        </a>
      </div>
      <div className="border-t border-line bg-mist/60 py-4">
        <div className="marquee overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((k) => (
              <ul key={k} aria-hidden={k === 1 || undefined} className={k === 1 ? 'flex motion-reduce:hidden' : 'flex flex-wrap motion-safe:flex-nowrap'}>
                {solutions.map((n) => (
                  <li key={n} className="flex items-center gap-8 px-8 font-display text-lg font-medium whitespace-nowrap text-text/70">
                    {n}
                    <span aria-hidden className="size-1 rounded-full bg-violet/50" />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

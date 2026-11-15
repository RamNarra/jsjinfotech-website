import { SapBadge, SapLogo, SgnLogo } from '@/components/brand/SapBadge';
import { ClientMarquee } from './ClientMarquee';

// Proof band right under the hero: who our SAP partner is, in plain words, then the logos of SAP clients served by SGN.
// SAP logo shown by owner decision (2026-11-15); SAP logos link to sap.com and are not animated.
export function PartnerStrip() {
  return (
    <section aria-labelledby="partner-strip-h" className="relative border-y border-line bg-white">
      <div className="container-x grid items-center gap-8 py-10 xl:grid-cols-[auto_1fr] xl:gap-16">
        <div className="flex flex-wrap items-center gap-x-10 gap-y-6 xl:flex-nowrap">
          <SgnLogo height={48} />
          <SapLogo height={52} />
          <SapBadge size="lg" />
        </div>
        <div className="max-w-md">
          <h2 id="partner-strip-h" className="font-display text-xl font-semibold tracking-tight">SAP projects delivered with SGN Software</h2>
          <p className="mt-2 text-[15px] leading-6 text-muted">
            SGN Software is our joint venture partner for SAP projects and a certified SAP Gold Partner.{' '}
            <a href="https://partnerfinder.sap.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-violet underline decoration-violet/30 underline-offset-4 hover:decoration-violet">
              Check on SAP Partner Finder
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-line py-6">
        <p className="container-x mb-4 text-sm text-muted">SAP clients served by SGN Software</p>
        <ClientMarquee />
      </div>
    </section>
  );
}

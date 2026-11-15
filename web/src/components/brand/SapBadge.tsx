/* eslint-disable @next/next/no-img-element */
import { sgn } from '@/content/sap';
import { cn } from '@/lib/cn';
import { LogoLockup } from './Logo';

// Artwork from supplied corporate profile (JSJ_INFOTECH_Corporate_Profile_SGN_SAP_Gold.docx):
// SGN logo and "SAP Gold Partner, SGN Software Pvt. Ltd., SAP PartnerEdge" badge. Used unmodified.
// VERIFY: confirm SAP partner-logo usage rights with SGN before launch (LR-09).
export function SapBadge({ className, showId = false, size = 'md', link = true }: { className?: string; dark?: boolean; showId?: boolean; size?: 'sm' | 'md' | 'lg'; link?: boolean }) {
  const h = { sm: 32, md: 44, lg: 60 }[size];
  const img = (
    <img src="/brand/sap-gold-partner-badge.webp" alt="SAP Gold Partner, SGN Software Pvt. Ltd., SAP PartnerEdge" height={h} width={Math.round(h * 4.67)} style={{ height: h, width: 'auto' }} />
  );
  return (
    <span className={cn('inline-flex flex-col items-start gap-1.5', className)}>
      {/* SAP partner-logo rule: on-screen logo links to sap.com and is never animated. */}
      {link ? <a href="https://www.sap.com" target="_blank" rel="noopener noreferrer" aria-label="SAP Gold Partner, SGN Software (opens sap.com)">{img}</a> : img}
      {showId && <span className="font-mono text-[12px] tracking-wide opacity-80">SAP Partner ID {sgn.partnerId}</span>}
    </span>
  );
}

export function SgnLogo({ height = 32, className }: { height?: number; className?: string }) {
  return <img src="/brand/sgn-logo.webp" alt="SGN Software" height={height} width={Math.round(height * 4.87)} style={{ height, width: 'auto' }} className={className} />;
}

// Lock-up per SRS §4.4: [JSJ logo] × [SGN logo] [SAP Gold Partner badge]. Logos sit on white so both read correctly.
export function PartnershipLockup({ dark = false, compact = false, className }: { dark?: boolean; compact?: boolean; className?: string }) {
  return (
    <div className={cn('inline-flex flex-col gap-3', className)}>
      <div className="flex flex-wrap items-center gap-x-5 gap-y-3 rounded-2xl border border-line bg-white px-5 py-3 shadow-[0_8px_30px_-16px_rgba(11,21,48,0.35)]">
        <LogoLockup height={compact ? 44 : 72} />
        <span aria-hidden className="text-2xl font-light text-muted">×</span>
        <SgnLogo height={compact ? 24 : 38} />
        <span aria-hidden className="hidden h-10 w-px bg-line sm:block" />
        <SapBadge size={compact ? 'sm' : 'md'} />
      </div>
      {!compact && <p className={cn('text-sm', dark ? 'text-on-ink-muted' : 'text-muted')}>Joint Venture Partner for SAP Projects, SGN Software, SAP Gold Partner</p>}
    </div>
  );
}

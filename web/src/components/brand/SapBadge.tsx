import { BadgeCheck } from 'lucide-react';
import { sgn } from '@/content/sap';
import { cn } from '@/lib/cn';

// VERIFY: official SAP Gold Partner logo artwork not yet supplied as a file.
// Text badge used until SGN provides the SAP-approved logo asset (AR-03, LR-09).
export function SapBadge({ className, dark = false, showId = false }: { className?: string; dark?: boolean; showId?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[13px] font-medium',
        'border-amber/35 bg-amber/[0.08] text-on-ink shadow-[0_0_24px_-8px_rgba(253,199,12,0.5)]',
        className,
      )}
    >
      <BadgeCheck aria-hidden className={cn('size-4', 'text-amber')} strokeWidth={1.75} />
      <span>
        SGN Software — {sgn.level}
        {showId && <span className="font-mono text-[12px] opacity-80"> · Partner ID {sgn.partnerId}</span>}
      </span>
    </span>
  );
}

export function PartnershipLockup({ dark = false }: { dark?: boolean }) {
  return (
    <div className={cn('flex flex-wrap items-center gap-x-4 gap-y-3', dark ? 'text-on-ink' : 'text-text')}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/brand/jsj-logo.svg" alt="JSJ INFOTECH" width={55} height={40} />
      <span aria-hidden className={cn('text-2xl font-light', dark ? 'text-on-ink-muted' : 'text-muted')}>×</span>
      <span className="font-display text-xl font-semibold tracking-tight">SGN Software</span>
      <SapBadge dark={dark} />
      <p className={cn('basis-full text-sm', dark ? 'text-on-ink-muted' : 'text-muted')}>Joint Venture Partner for SAP Projects</p>
    </div>
  );
}

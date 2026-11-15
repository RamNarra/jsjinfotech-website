/* eslint-disable @next/next/no-img-element */
import type { Client } from '@/content/sap';
import { cn } from '@/lib/cn';

// Logo + name. Clients without a verified logo file get a neutral monogram so the grid stays even.
export function ClientLogo({ c, className, compact = false }: { c: Client; className?: string; compact?: boolean }) {
  const initials = c.name.replace(/[^A-Za-z ]/g, '').split(' ').filter(Boolean).slice(0, 2).map((w) => w[0]).join('');
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 text-center', className)}>
      <div className={cn('flex w-full items-center justify-center', compact ? 'h-10' : 'h-12')}>
        {c.logo ? (
          <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-full max-w-[140px] object-contain" />
        ) : (
          <span aria-hidden className="inline-flex size-10 items-center justify-center rounded-full bg-mist font-display text-sm font-semibold text-muted ring-1 ring-line">{initials}</span>
        )}
      </div>
      <span className="text-[13px] leading-4 font-medium text-text">{c.name}</span>
    </div>
  );
}

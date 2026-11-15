/* eslint-disable @next/next/no-img-element */
import type { Client } from '@/content/sap';
import { cn } from '@/lib/cn';

// Logo wall item: full-colour logo with name. Clients without a logo file
// render their name as a quiet wordmark so the wall stays even.
export function ClientLogo({ c, className }: { c: Client; className?: string }) {
  return (
    <div className={cn('group flex h-28 flex-col items-center justify-center gap-2 px-4 text-center', className)} title={c.name}>
      {c.logo ? (
        <img
          src={c.logo}
          alt={`${c.name} logo`}
          loading="lazy"
          className="max-h-11 max-w-[150px] object-contain"
        />
      ) : (
        <span className="font-display text-[17px] leading-5 font-semibold tracking-tight text-text">{c.name}</span>
      )}
      {c.logo && <span className="text-[12px] text-muted">{c.name}</span>}
    </div>
  );
}

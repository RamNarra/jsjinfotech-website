/* eslint-disable @next/next/no-img-element */
import { clientGroups, logoBox } from '@/content/sap';

// Logo ticker (only clients with a logo file). Second copy is aria-hidden and hidden under reduced motion.
export function ClientMarquee() {
  const withLogo = clientGroups.flatMap((g) => g.clients).filter((c) => c.logo);
  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track items-center">
        {[0, 1].map((k) => (
          <ul key={k} aria-hidden={k === 1 || undefined} className={k === 1 ? 'flex items-center motion-reduce:hidden' : 'flex flex-wrap items-center motion-safe:flex-nowrap'}>
            {withLogo.map((c) => (
              <li key={c.name} className="flex h-24 items-center px-7 sm:h-28 sm:px-10">
                <img src={c.logo!} alt={k === 0 ? `${c.name} logo` : ''} loading="lazy" {...logoBox(c.logo!, 76, 68)} className="object-contain" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
import { clientGroups } from '@/content/sap';

// Logo ticker (only clients with a logo file). Second copy is aria-hidden and hidden under reduced motion.
export function ClientMarquee() {
  const withLogo = clientGroups.flatMap((g) => g.clients).filter((c) => c.logo);
  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track items-center">
        {[0, 1].map((k) => (
          <ul key={k} aria-hidden={k === 1 || undefined} className={k === 1 ? 'flex items-center motion-reduce:hidden' : 'flex flex-wrap items-center motion-safe:flex-nowrap'}>
            {withLogo.map((c) => (
              <li key={c.name} className="flex h-16 items-center px-8">
                <img src={c.logo} alt={k === 0 ? `${c.name} logo` : ''} loading="lazy" className="max-h-10 max-w-[130px] object-contain opacity-80 grayscale transition hover:opacity-100 hover:grayscale-0" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

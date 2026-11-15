/* eslint-disable @next/next/no-img-element */
import { clientGroups } from '@/content/sap';

const about: Record<string, string> = {
  'SAP Public Cloud': 'GROW with SAP: cloud ERP rolled out fast.',
  'RISE with SAP': 'Managed private cloud ERP transformations.',
  'SAP S/4HANA': 'The core digital backbone for enterprise scale.',
  'Finance & Spend (SAP Ariba)': 'Intelligent procurement & spend management.',
};

export function ClientMatrix() {
  const total = clientGroups.reduce((n, x) => n + x.clients.length, 0);
  const allClients = clientGroups.flatMap((g) => g.clients.map((c) => ({ ...c, group: g.name })));
  const half = Math.ceil(allClients.length / 2);
  const row1 = allClients.slice(0, half);
  const row2 = allClients.slice(half);

  const renderCard = (c: (typeof allClients)[0], keyPrefix: string | number) => (
    <li
      key={`${keyPrefix}-${c.name}`}
      className="flex h-32 w-60 shrink-0 flex-col items-center justify-center gap-2 rounded-2xl bg-white px-5 shadow-[0_8px_25px_-12px_rgba(11,21,48,0.25)] ring-1 ring-line/60 transition-transform duration-200 hover:-translate-y-1 sm:h-36 sm:w-68 sm:rounded-3xl"
    >
      {c.logo ? (
        <>
          <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-12 max-w-[85%] object-contain sm:max-h-14" />
          <span className="text-center text-[12px] font-medium text-muted sm:text-[13px]">{c.name}</span>
        </>
      ) : (
        <span className="text-center font-display text-lg leading-tight font-bold tracking-tight text-text/80">{c.name}</span>
      )}
      <span className="rounded-full bg-mist px-2 py-0.5 text-[10px] font-semibold text-violet">{c.group.replace('Finance & Spend (SAP Ariba)', 'SAP Ariba')}</span>
    </li>
  );

  return (
    <div>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            {total} enterprise references across public and private cloud programmes delivered by SGN Software, JSJ INFOTECH’s joint venture partner for SAP projects.
          </p>
        </div>
      </div>

      {/* Programme highlights */}
      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {clientGroups.map((g) => (
          <div key={g.name} className="rounded-2xl border border-line bg-white/60 p-4">
            <h3 className="font-display text-sm font-semibold text-text">{g.name}</h3>
            <p className="mt-1 text-xs text-muted leading-relaxed">{about[g.name]}</p>
          </div>
        ))}
      </div>

      {/* Two-lane continuous logo carousel */}
      <div className="mt-10 space-y-4">
        {/* Row 1 - scrolling left */}
        <div className="marquee overflow-hidden py-2">
          <div className="marquee-track items-center gap-4">
            {[0, 1].map((copy) => (
              <ul
                key={`r1-${copy}`}
                aria-hidden={copy === 1 || undefined}
                className={copy === 1 ? 'flex items-center gap-4 motion-reduce:hidden' : 'flex flex-wrap items-center gap-4 motion-safe:flex-nowrap'}
              >
                {row1.map((c) => renderCard(c, `r1-${copy}`))}
              </ul>
            ))}
          </div>
        </div>

        {/* Row 2 - scrolling reverse (right) */}
        <div className="marquee overflow-hidden py-2">
          <div className="marquee-track-reverse items-center gap-4">
            {[0, 1].map((copy) => (
              <ul
                key={`r2-${copy}`}
                aria-hidden={copy === 1 || undefined}
                className={copy === 1 ? 'flex items-center gap-4 motion-reduce:hidden' : 'flex flex-wrap items-center gap-4 motion-safe:flex-nowrap'}
              >
                {row2.map((c) => renderCard(c, `r2-${copy}`))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

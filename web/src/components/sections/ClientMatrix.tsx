/* eslint-disable @next/next/no-img-element */
import { clientGroups } from '@/content/sap';

// Open logo wall: no boxes, full-colour logos at one optical height, grouped by SAP offering.
// Clients without a logo file show their name set as a wordmark.
export function ClientMatrix() {
  return (
    <div className="space-y-16">
      {clientGroups.map((g) => (
        <div key={g.name}>
          <div className="flex items-baseline justify-between border-b border-line pb-3">
            <h3 className="font-display text-lg font-semibold">{g.name}</h3>
            <span className="text-sm text-muted">{g.clients.length} clients</span>
          </div>
          <ul className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-5">
            {g.clients.map((c) => (
              <li key={c.name} className="flex h-14 items-center justify-center" title={c.name}>
                {c.logo ? (
                  <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-12 max-w-[160px] object-contain" />
                ) : (
                  <span className="text-center font-display text-lg leading-tight font-bold tracking-tight text-text/70">{c.name}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-sm text-muted">SAP clients served by SGN Software, JSJ INFOTECH’s joint venture partner for SAP projects. Logos belong to their owners.</p>
    </div>
  );
}

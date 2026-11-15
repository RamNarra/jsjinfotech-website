/* eslint-disable @next/next/no-img-element */
import { clientGroups } from '@/content/sap';

const about: Record<string, string> = {
  'SAP Public Cloud': 'GROW with SAP: cloud ERP rolled out fast with standard best practices.',
  'RISE with SAP': 'Existing SAP moved to a managed private cloud.',
  'SAP S/4HANA': 'The ERP core for finance, supply chain and manufacturing.',
  'Finance & Spend (SAP Ariba)': 'Procurement, supplier management and spend control.',
};

// Client proof: every SAP programme shown at once, a one-line explanation, large logos on soft tiles.
export function ClientMatrix() {
  const total = clientGroups.reduce((n, x) => n + x.clients.length, 0);
  return (
    <div>
      <p className="max-w-2xl text-lg leading-8 text-muted">
        {total} enterprises run SAP programmes delivered by SGN Software, JSJ INFOTECH’s joint venture partner for SAP projects.
      </p>
      <div className="mt-12 space-y-14">
        {clientGroups.map((g) => (
          <div key={g.name}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display text-xl font-semibold">{g.name}</h3>
              <p className="text-[15px] text-muted">{about[g.name]}</p>
            </div>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
              {g.clients.map((c) => (
                <li key={c.name} className="flex h-28 flex-col items-center justify-center gap-2 rounded-2xl bg-white px-4 shadow-[0_10px_30px_-18px_rgba(11,21,48,0.35)] sm:h-32 sm:rounded-3xl">
                  {c.logo ? (
                    <>
                      <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-12 max-w-[85%] object-contain sm:max-h-14" />
                      <span className="text-center text-[12px] font-medium text-muted sm:text-[13px]">{c.name}</span>
                    </>
                  ) : (
                    <span className="text-center font-display text-lg leading-tight font-bold tracking-tight text-text/80">{c.name}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

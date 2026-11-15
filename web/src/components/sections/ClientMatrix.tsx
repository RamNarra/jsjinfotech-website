'use client';

/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import { clientGroups } from '@/content/sap';
import { cn } from '@/lib/cn';

const about: Record<string, string> = {
  'SAP Public Cloud': 'GROW with SAP: cloud ERP rolled out fast with standard best practices.',
  'RISE with SAP': 'Existing SAP moved to a managed private cloud.',
  'SAP S/4HANA': 'The ERP core for finance, supply chain and manufacturing.',
  'Finance & Spend (SAP Ariba)': 'Procurement, supplier management and spend control.',
};

// Client proof: filter by SAP programme, large logos on soft tiles, a one-line explanation per programme.
export function ClientMatrix() {
  const [active, setActive] = useState(0);
  const g = clientGroups[active];
  const total = clientGroups.reduce((n, x) => n + x.clients.length, 0);
  return (
    <div>
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <p className="max-w-xl text-lg leading-8 text-muted">
          {total} enterprises run SAP programmes delivered by SGN Software, JSJ INFOTECH’s joint venture partner for SAP projects.
        </p>
        <div role="tablist" aria-label="SAP programme" className="flex flex-wrap gap-2">
          {clientGroups.map((x, k) => (
            <button
              key={x.name}
              role="tab"
              type="button"
              aria-selected={k === active}
              aria-controls="client-panel"
              onClick={() => setActive(k)}
              className={cn(
                'min-h-11 rounded-full px-5 text-[15px] font-medium transition-colors',
                k === active ? 'bg-ink text-white' : 'bg-white text-text ring-1 ring-line hover:ring-violet/50',
              )}
            >
              {x.name}
            </button>
          ))}
        </div>
      </div>

      <div id="client-panel" role="tabpanel" className="mt-10">
        <p className="mb-6 text-[15px] text-muted"><span className="font-semibold text-text">{g.name}.</span> {about[g.name]}</p>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {g.clients.map((c) => (
            <li key={c.name} className="flex h-36 flex-col items-center justify-center gap-3 rounded-3xl bg-white px-5 shadow-[0_10px_30px_-18px_rgba(11,21,48,0.35)] transition-transform hover:-translate-y-0.5">
              {c.logo ? (
                <img src={c.logo} alt={`${c.name} logo`} loading="lazy" className="max-h-14 max-w-[170px] object-contain" />
              ) : (
                <span className="text-center font-display text-xl leading-tight font-bold tracking-tight text-text/80">{c.name}</span>
              )}
              {c.logo && <span className="text-[13px] font-medium text-muted">{c.name}</span>}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-8 text-sm text-muted">Logos belong to their owners and are shown as SAP client references of SGN Software.</p>
    </div>
  );
}

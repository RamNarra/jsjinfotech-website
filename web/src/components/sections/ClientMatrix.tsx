import { clientGroups } from '@/content/sap';

export function ClientMatrix() {
  return (
    <div>
      <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {clientGroups.map((g) => (
          <div key={g.name} className="bg-ink-2 p-6">
            <h3 className="label-caps text-violet">{g.name}</h3>
            <ul className="mt-5 space-y-2.5">
              {g.clients.map((c) => (
                <li key={c} className="font-display text-[17px] font-medium tracking-tight">{c}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-muted">SAP clients served by SGN Software, JSJ INFOTECH’s joint venture partner for SAP projects.</p>
    </div>
  );
}

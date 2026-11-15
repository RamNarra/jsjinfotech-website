import { clientGroups } from '@/content/sap';
import { ClientLogo } from './ClientLogo';

export function ClientMatrix() {
  return (
    <div className="space-y-10">
      {clientGroups.map((g) => (
        <div key={g.name}>
          <h3 className="font-display text-lg font-semibold">{g.name}</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
            {g.clients.map((c) => (
              <li key={c.name} className="rounded-2xl border border-line bg-white px-2 py-4">
                <ClientLogo c={c} />
              </li>
            ))}
          </ul>
        </div>
      ))}
      <p className="text-sm text-muted">SAP clients served by SGN Software, JSJ INFOTECH’s joint venture partner for SAP projects. Logos belong to their owners.</p>
    </div>
  );
}

import { clientGroups } from '@/content/sap';
import { ClientLogo } from './ClientLogo';

// Logo wall per SAP offering: hairline grid, full-colour logos.
export function ClientMatrix() {
  return (
    <div className="space-y-14">
      {clientGroups.map((g) => (
        <div key={g.name} className="grid gap-6 lg:grid-cols-[220px_1fr]">
          <div>
            <h3 className="font-display text-xl font-semibold">{g.name}</h3>
            <p className="mt-1 text-sm text-muted">{g.clients.length} clients</p>
          </div>
          <ul className="grid grid-cols-2 border-t border-l border-line sm:grid-cols-3 lg:grid-cols-5">
            {g.clients.map((c) => (
              <li key={c.name} className="border-r border-b border-line bg-white">
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

// §6.2 #08: data sources → models → digital twin → decisions. Static SVG with optional dash animation.
export function AiDiagram() {
  const cols = [
    { title: 'Data sources', items: ['Drone surveys', 'HVAC sensors', 'Enterprise systems (SAP)'] },
    { title: 'Models', items: ['Computer vision', 'Predictive maintenance', 'Generative AI'] },
    { title: 'Digital twin', items: ['Asset model', 'Simulation', 'Monitoring'] },
    { title: 'Decisions', items: ['Dashboards', 'Work orders', 'Copilots'] },
  ];
  return (
    <figure>
      <div className="grid gap-4 md:grid-cols-4">
        {cols.map((c, i) => (
          <div key={c.title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] spotlight p-5">
            <p className="font-mono text-xs text-violet-hi">{String(i + 1).padStart(2, '0')}</p>
            <p className="mt-3 font-display text-lg font-semibold text-white">{c.title}</p>
            <ul className="mt-3 space-y-1.5 text-sm text-on-ink-muted">
              {c.items.map((it) => (
                <li key={it} className="flex items-center gap-2"><span aria-hidden className="size-1.5 rounded-full bg-green" />{it}</li>
              ))}
            </ul>
            {i < cols.length - 1 && (
              <svg aria-hidden className="absolute top-1/2 -right-4 hidden h-2 w-4 md:block" viewBox="0 0 16 8">
                <line x1="0" y1="4" x2="16" y2="4" stroke="#6ebe44" strokeOpacity="0.7" className="data-path" />
              </svg>
            )}
          </div>
        ))}
      </div>
      <figcaption className="mt-4 text-sm text-on-ink-muted">How data moves from capture to decision across JSJ verticals.</figcaption>
    </figure>
  );
}

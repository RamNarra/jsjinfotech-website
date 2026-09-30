import { CORE_LAYERS, type CoreLayer } from '@/shared';

const C = 150;
const R = { Physical: 128, Enterprise: 88, Intelligence: 48 } as const;

/** Small static map of the three JSJ layers, with the solution's own layer highlighted. */
export function LayerMap({ layer }: { layer: CoreLayer }) {
  const active = layer === 'Delivery' ? null : layer;
  return (
    <div className="grid items-center gap-8 sm:grid-cols-[260px_1fr]">
      <svg viewBox="0 0 300 300" role="img" aria-label={`The JSJ model: physical, enterprise and intelligence layers around one core. This solution sits in: ${layer}.`} className="mx-auto h-auto w-full max-w-[260px]">
        {(Object.keys(R) as (keyof typeof R)[]).map((k) => (
          <circle key={k} cx={C} cy={C} r={R[k]} fill={active === k ? 'rgb(0 112 242 / 0.09)' : 'none'} stroke={active === k ? 'var(--color-brand)' : 'var(--color-line)'} strokeWidth={active === k ? 2.2 : 1.4} />
        ))}
        <circle cx={C} cy={C} r={22} fill="#fff" stroke="var(--color-brand)" strokeWidth={1.6} />
        <text x={C} y={C + 5} textAnchor="middle" fontSize={13} fontWeight={700} fill="var(--color-ink)">JSJ</text>
        {active === null ? (
          <circle cx={C} cy={C} r={R.Physical + 14} fill="none" stroke="var(--color-brand)" strokeWidth={1.4} strokeDasharray="4 6" />
        ) : null}
      </svg>
      <ul className="grid gap-2">
        {CORE_LAYERS.map((l) => {
          const on = l.id === active?.toLowerCase();
          return (
            <li key={l.id} className={`rounded-[var(--radius-md)] border px-4 py-3 ${on ? 'border-brand bg-brand-50' : 'border-line'}`}>
              <p className={`font-semibold ${on ? 'text-brand-deep' : 'text-ink'}`}>{l.name}</p>
              <p className="t-small !text-[0.9375rem]">{l.nodes.join(' · ')}</p>
            </li>
          );
        })}
        <li className={`rounded-[var(--radius-md)] border px-4 py-3 ${active === null ? 'border-brand bg-brand-50' : 'border-line border-dashed'}`}>
          <p className={`font-semibold ${active === null ? 'text-brand-deep' : 'text-ink'}`}>Delivery</p>
          <p className="t-small !text-[0.9375rem]">Project management, governance and content that span every layer</p>
        </li>
      </ul>
    </div>
  );
}

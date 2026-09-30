const LAYERS = [
  { name: 'Experience', hint: 'Applications people use', accent: false },
  { name: 'Applications', hint: 'Enterprise and SAP', accent: false },
  { name: 'Systems', hint: 'Integration and data', accent: false },
  { name: 'Intelligence', hint: 'AI and analytics', accent: true },
  { name: 'Infrastructure', hint: 'Cloud and security', accent: false },
  { name: 'Physical systems', hint: 'HVAC, drones, IoT', accent: false },
] as const;

/** Isometric stack of the six technology layers. Decorative; the list beside it carries the content. */
export function LayerStack({ className }: { className?: string }) {
  const step = 58;
  return (
    <svg viewBox="0 0 600 420" aria-hidden className={className} fill="none">
      <line x1={200} y1={30} x2={200} y2={370} stroke="var(--color-brand)" strokeWidth={1.4} strokeDasharray="3 6" />
      {LAYERS.map((l, i) => {
        const y = 24 + i * step;
        const top = `M50 ${y + 32} L200 ${y} L350 ${y + 32} L200 ${y + 64} Z`;
        const left = `M50 ${y + 32} L200 ${y + 64} L200 ${y + 80} L50 ${y + 48} Z`;
        const right = `M350 ${y + 32} L200 ${y + 64} L200 ${y + 80} L350 ${y + 48} Z`;
        return (
          <g key={l.name}>
            <path d={left} fill={l.accent ? 'rgb(0 112 242 / 0.22)' : '#eef2f7'} stroke="var(--color-ink-3)" strokeWidth={1.3} strokeLinejoin="round" />
            <path d={right} fill={l.accent ? 'rgb(0 112 242 / 0.32)' : '#e3e9f0'} stroke="var(--color-ink-3)" strokeWidth={1.3} strokeLinejoin="round" />
            <path d={top} fill={l.accent ? 'rgb(0 112 242 / 0.12)' : '#ffffff'} stroke={l.accent ? 'var(--color-brand)' : 'var(--color-ink-3)'} strokeWidth={l.accent ? 2 : 1.3} strokeLinejoin="round" />
            <circle cx={200} cy={y + 32} r={5} fill="#fff" stroke="var(--color-brand)" strokeWidth={1.6} />
            <line x1={356} y1={y + 34} x2={392} y2={y + 34} stroke="var(--color-line)" strokeWidth={1.2} />
            <text x={402} y={y + 32} fontSize={17} fontWeight={600} fill="var(--color-ink)">{l.name}</text>
            <text x={402} y={y + 52} fontSize={14} fill="var(--color-ink-3)">{l.hint}</text>
          </g>
        );
      })}
    </svg>
  );
}

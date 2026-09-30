'use client';

import { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'motion/react';
import { clsx } from 'clsx';
import { CORE_LAYERS } from '@/shared';

const C = 300;
const RADII = { physical: 252, enterprise: 176, intelligence: 104 } as const;
const OFFSET = { physical: -70, enterprise: -18, intelligence: 32 } as const;

type LayerId = keyof typeof RADII;

interface NodePoint {
  key: string;
  label: string;
  layer: LayerId;
  x: number;
  y: number;
  angle: number;
}

const nodes: NodePoint[] = CORE_LAYERS.flatMap((layer) =>
  layer.nodes.map((label, i) => {
    const id = layer.id as LayerId;
    const angle = OFFSET[id] + (i * 360) / layer.nodes.length;
    const rad = (angle * Math.PI) / 180;
    return {
      key: `${id}-${label}`,
      label,
      layer: id,
      angle,
      x: Math.round((C + RADII[id] * Math.cos(rad)) * 100) / 100,
      y: Math.round((C + RADII[id] * Math.sin(rad)) * 100) / 100,
    };
  }),
);

/** Light, precise convergence diagram: three layers feeding one core. */
export function AutonomousCore({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const activeNode = nodes.find((n) => n.key === active);
  const activeLayer = activeNode?.layer ?? null;

  return (
    <div className={className}>
      <svg
        viewBox="0 0 600 600"
        role="img"
        aria-label="Diagram: the physical layer (HVAC, drones, IoT), the enterprise layer (SAP, ERP, IT, software) and the intelligence layer (AI, analytics, computer vision, digital twins) converge on the JSJ core."
        className="mx-auto block h-auto w-full max-w-[600px] overflow-visible"
      >
        {/* Rings */}
        {(Object.keys(RADII) as LayerId[]).map((id, i) => {
          const r = RADII[id];
          const len = Math.round(2 * Math.PI * r);
          const on = activeLayer === id;
          return (
            <circle
              key={id}
              cx={C}
              cy={C}
              r={r}
              fill="none"
              className="draw"
              style={{ ['--len' as string]: len, ['--i' as string]: i } as React.CSSProperties}
              stroke={on ? 'var(--color-brand)' : 'var(--color-line)'}
              strokeWidth={on ? 1.5 : 1}
              transform={`rotate(-90 ${C} ${C})`}
              vectorEffect="non-scaling-stroke"
            />
          );
        })}

        {/* Faint convergence spokes */}
        {nodes.map((n) => (
          <line
            key={`s-${n.key}`}
            x1={n.x}
            y1={n.y}
            x2={C}
            y2={C}
            stroke="var(--color-line-soft)"
            strokeWidth={1}
          />
        ))}

        {/* Active path */}
        <LazyMotion features={domAnimation} strict>
          {activeNode ? (
            <m.line
              key={activeNode.key}
              x1={activeNode.x}
              y1={activeNode.y}
              x2={C}
              y2={C}
              stroke="var(--color-brand)"
              strokeWidth={1.5}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          ) : null}
        </LazyMotion>

        {/* Nodes */}
        {nodes.map((n, i) => {
          const on = active === n.key;
          const dx = n.x - C;
          const anchor = Math.abs(dx) < 18 ? 'middle' : dx > 0 ? 'start' : 'end';
          const lx = anchor === 'middle' ? n.x : n.x + (dx > 0 ? 14 : -14);
          const ly = anchor === 'middle' ? n.y + (n.y < C ? -14 : 24) : n.y + 4.5;
          return (
            <g
              key={n.key}
              className="rise"
              style={{ ['--i' as string]: 5 + i } as React.CSSProperties}
              onMouseEnter={() => setActive(n.key)}
              onMouseLeave={() => setActive(null)}
            >
              <circle
                cx={n.x}
                cy={n.y}
                r={on ? 8 : 6}
                fill={on ? 'var(--color-brand)' : '#fff'}
                stroke={on ? 'var(--color-brand)' : 'var(--color-ink-3)'}
                strokeWidth={1.5}
                style={{ transition: 'all 160ms var(--ease-out)' }}
              />
              <text
                x={lx}
                y={ly}
                textAnchor={anchor}
                className="max-sm:hidden"
                fontSize={15}
                fontWeight={on ? 600 : 500}
                fill={on ? 'var(--color-brand)' : 'var(--color-ink-2)'}
                style={{ paintOrder: 'stroke', stroke: '#fff', strokeWidth: 5, strokeLinejoin: 'round' }}
              >
                {n.label}
              </text>
            </g>
          );
        })}

        {/* Core */}
        <circle cx={C} cy={C} r={50} fill="#fff" stroke="var(--color-brand)" strokeWidth={1.5} />
        <circle cx={C} cy={C} r={58} fill="none" stroke="var(--color-brand-tint)" strokeWidth={6} />
        <text
          x={C}
          y={C + 6}
          textAnchor="middle"
          fontSize={22}
          fontWeight={600}
          letterSpacing="-0.02em"
          fill="var(--color-ink)"
        >
          JSJ
        </text>
      </svg>

      {/* Accessible, keyboard-operable legend (also the mobile labelling) */}
      <ul className="mt-6 grid gap-5 sm:grid-cols-3">
        {CORE_LAYERS.map((layer) => (
          <li key={layer.id}>
            <p
              className={clsx(
                't-small font-semibold transition-colors',
                activeLayer === layer.id ? '!text-brand-text' : '!text-ink',
              )}
            >
              {layer.name}
            </p>
            <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1">
              {layer.nodes.map((label) => {
                const key = `${layer.id}-${label}`;
                return (
                  <li key={key}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(key)}
                      onMouseLeave={() => setActive(null)}
                      onFocus={() => setActive(key)}
                      onBlur={() => setActive(null)}
                      className={clsx(
                        'py-1 text-[0.875rem] transition-colors',
                        active === key ? 'text-brand-text' : 'text-ink-2 hover:text-ink',
                      )}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

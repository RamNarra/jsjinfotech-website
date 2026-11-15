import { Server, Boxes, BrainCircuit, Plane, Code2, Fan, FlaskConical, type LucideIcon } from 'lucide-react';
import type { Slide } from '@/content/hero';

// Hero panels: labelled, product-UI style diagrams (HTML + SVG) instead of abstract shapes.
// Animated parts are CSS-only (.data-path, pulse) and stop under prefers-reduced-motion.

const C = { teal: '#0b7f91', blue: '#4379bd', violet: '#604b9f', magenta: '#a353a0', green: '#4f9a2e', amber: '#b88a00' };

function Node({ icon: Icon, label, color, className, style }: { icon: LucideIcon; label: string; color: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${className ?? ''}`} style={style}>
      <span className="inline-flex size-11 items-center justify-center rounded-[14px] text-white sm:size-16 sm:rounded-[20px]" style={{ background: `linear-gradient(140deg, ${color}, ${color}cc)`, boxShadow: `0 14px 28px -12px ${color}, inset 0 1px 0 rgba(255,255,255,0.35)` }}>
        <Icon aria-hidden className="size-5 sm:size-7" strokeWidth={1.7} />
      </span>
      <span className="rounded-full bg-white px-2 py-1 text-center text-[11px] leading-4 font-semibold sm:px-3.5 sm:py-1.5 sm:text-[14px] whitespace-nowrap text-text shadow-md ring-1 ring-line">{label}</span>
    </div>
  );
}

function Ecosystem() {
  const items: [LucideIcon, string, string][] = [
    [Server, 'IT & Consulting', C.blue],
    [Boxes, 'SAP with SGN', C.amber],
    [BrainCircuit, 'AI', C.violet],
    [Plane, 'Drones', C.teal],
    [Code2, 'Software', C.blue],
    [Fan, 'HVAC Govt', C.green],
    [FlaskConical, 'R&D', C.magenta],
  ];
  const R = 38;
  const pts = items.map((_, i) => {
    const a = (i / items.length) * Math.PI * 2 - Math.PI / 2;
    return [50 + Math.cos(a) * R, 50 + Math.sin(a) * R] as const;
  });
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(11,21,48,0.10)" strokeWidth="0.3" />
        <circle cx="50" cy="50" r={R * 0.55} fill="none" stroke="rgba(11,21,48,0.08)" strokeWidth="0.3" strokeDasharray="1 1.5" />
        {pts.map(([x, y], i) => (
          <line key={i} x1={x} y1={y} x2="50" y2="50" stroke={items[i][2]} strokeOpacity="0.7" strokeWidth="0.6" className="data-path" />
        ))}
        {pts.map(([x, y], i) => {
          const [nx, ny] = pts[(i + 1) % pts.length];
          return <line key={`r${i}`} x1={x} y1={y} x2={nx} y2={ny} stroke="rgba(11,21,48,0.08)" strokeWidth="0.3" />;
        })}
      </svg>
      <span aria-hidden className="absolute top-1/2 left-1/2 size-36 sm:size-48 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(119,97,170,0.18),transparent_70%)] motion-reduce:animate-none" />
      <div className="absolute top-1/2 left-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-line bg-white sm:size-40 text-center shadow-[0_24px_60px_-20px_rgba(96,75,159,0.7)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/jsj-mark.svg" alt="" width={100} height={62} className="w-16 sm:w-[100px]" />
        <span className="mt-1.5 font-display text-[13px] font-semibold tracking-wide text-text">JSJ INFOTECH</span>
      </div>
      {items.map(([icon, label, color], i) => (
        <Node key={label} icon={icon} label={label} color={color} style={{ left: `${pts[i][0]}%`, top: `${pts[i][1]}%` }} />
      ))}
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
// Slide 2: who brings what, with the real logos.
function PartnershipPanel() {
  const rows = [
    ['JSJ INFOTECH', 'Client engagement, engineering, AI, IoT and integration'],
    ['SGN Software', 'SAP licences, certified SAP consultants, implementation and support'],
    ['Together', 'One team from the first workshop to post go-live support'],
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-4 p-4 sm:gap-6 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <img src="/brand/jsj-mark.svg" alt="JSJ INFOTECH" className="h-10 w-auto sm:h-16" />
        <span aria-hidden className="font-display text-4xl font-light text-muted">×</span>
        <img src="/brand/sgn-logo.webp" alt="SGN Software" className="h-7 w-auto sm:h-11" />
      </div>
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-mist p-3 sm:gap-4 sm:p-4">
        <img src="/brand/sap-logo.webp" alt="SAP" className="h-8 w-auto sm:h-12" />
        <img src="/brand/sap-gold-partner-badge.webp" alt="SAP Gold Partner, SGN Software" className="h-8 w-auto sm:h-12" />
      </div>
      <dl className="divide-y divide-line">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[96px_1fr] gap-3 py-2.5 text-[13px] leading-5 sm:grid-cols-[120px_1fr] sm:gap-4 sm:py-3.5 sm:text-[15px] sm:leading-6">
            <dt className="font-semibold text-violet">{k}</dt>
            <dd className="text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function HeroVisual({ kind }: { kind: Slide['visual'] }) {
  if (kind === 'seven') return <Ecosystem />;
  return <PartnershipPanel />;
}

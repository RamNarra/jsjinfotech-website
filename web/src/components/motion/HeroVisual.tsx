import { Server, Boxes, BrainCircuit, Plane, Code2, Fan, FlaskConical, Cloud, Building2, Database, Gauge, type LucideIcon } from 'lucide-react';
import type { Slide } from '@/content/hero';

// Hero panels: labelled, product-UI style diagrams (HTML + SVG) instead of abstract shapes.
// Animated parts are CSS-only (.data-path, pulse) and stop under prefers-reduced-motion.

const C = { teal: '#0b7f91', blue: '#4379bd', violet: '#604b9f', magenta: '#a353a0', green: '#4f9a2e', amber: '#b88a00' };

function Node({ icon: Icon, label, color, className, style }: { icon: LucideIcon; label: string; color: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${className ?? ''}`} style={style}>
      <span className="inline-flex size-14 items-center justify-center rounded-2xl border-2 bg-white" style={{ borderColor: `${color}66`, color, boxShadow: `0 8px 20px -10px ${color}` }}>
        <Icon aria-hidden className="size-6" strokeWidth={1.7} />
      </span>
      <span className="rounded-full bg-white px-3 py-1 text-center text-[13px] leading-4 font-semibold whitespace-nowrap text-text shadow-sm ring-1 ring-line">{label}</span>
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
  const R = 40;
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
          <line key={i} x1={x} y1={y} x2="50" y2="50" stroke={items[i][2]} strokeOpacity="0.55" strokeWidth="0.35" className="data-path" />
        ))}
        {pts.map(([x, y], i) => {
          const [nx, ny] = pts[(i + 1) % pts.length];
          return <line key={`r${i}`} x1={x} y1={y} x2={nx} y2={ny} stroke="rgba(11,21,48,0.08)" strokeWidth="0.3" />;
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-line bg-white text-center shadow-[0_20px_50px_-20px_rgba(96,75,159,0.6)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/jsj-mark.svg" alt="" width={84} height={52} />
        <span className="mt-1 font-display text-[11px] font-semibold text-text">JSJ INFOTECH</span>
      </div>
      {items.map(([icon, label, color], i) => (
        <Node key={label} icon={icon} label={label} color={color} style={{ left: `${pts[i][0]}%`, top: `${pts[i][1]}%` }} />
      ))}
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
// Slide 1: the enterprise in the centre, the four things JSJ connects around it (same visual language as slide 4).
function ConnectedMap() {
  const items: [LucideIcon, string, string, number, number][] = [
    [Boxes, 'ERP and SAP', C.amber, 50, 12],
    [Cloud, 'Cloud and security', C.blue, 88, 50],
    [BrainCircuit, 'AI and data', C.violet, 50, 88],
    [Fan, 'Drones, HVAC, IoT', C.teal, 12, 50],
  ];
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(11,21,48,0.08)" strokeWidth="0.3" strokeDasharray="1 1.5" />
        {items.map(([, , c, x, y]) => <line key={`${x}${y}`} x1={x} y1={y} x2="50" y2="50" stroke={c} strokeOpacity="0.6" strokeWidth="0.5" className="data-path" />)}
      </svg>
      <div className="absolute top-1/2 left-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-white text-center shadow-[0_20px_50px_-20px_rgba(96,75,159,0.6)] ring-1 ring-line">
        <Building2 aria-hidden className="size-8 text-violet" strokeWidth={1.5} />
        <span className="mt-2 font-display text-[15px] leading-5 font-semibold">Your enterprise</span>
        <span className="text-[12px] text-muted">one connected system</span>
      </div>
      {items.map(([icon, label, color, x, y]) => <Node key={label} icon={icon} label={label} color={color} style={{ left: `${x}%`, top: `${y}%` }} />)}
    </div>
  );
}

// Slide 2: who brings what, with the real logos.
function PartnershipPanel() {
  const rows = [
    ['JSJ INFOTECH', 'Client engagement, engineering, AI, IoT and integration'],
    ['SGN Software', 'SAP licences, certified SAP consultants, implementation and support'],
    ['Together', 'One team from the first workshop to post go-live support'],
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-6 p-6">
      <div className="flex items-center justify-between gap-4">
        <img src="/brand/jsj-mark.svg" alt="JSJ INFOTECH" className="h-16 w-auto" />
        <span aria-hidden className="font-display text-4xl font-light text-muted">×</span>
        <img src="/brand/sgn-logo.webp" alt="SGN Software" className="h-11 w-auto" />
      </div>
      <div className="flex items-center justify-between gap-4 rounded-2xl bg-mist p-4">
        <img src="/brand/sap-gold-partner-badge.webp" alt="SAP Gold Partner, SGN Software" className="h-12 w-auto" />
        <img src="/brand/sap-logo.webp" alt="SAP" className="h-12 w-auto" />
      </div>
      <dl className="divide-y divide-line">
        {rows.map(([k, v]) => (
          <div key={k} className="grid grid-cols-[120px_1fr] gap-4 py-3.5 text-[15px] leading-6">
            <dt className="font-semibold text-violet">{k}</dt>
            <dd className="text-muted">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// Slide 3: drone scan -> digital twin -> defects, drawn so each claim is visible.
function DroneTwin() {
  return (
    <div className="flex h-full flex-col p-4">
      <div className="relative flex-1 overflow-hidden rounded-3xl bg-gradient-to-b from-[#eaf0fa] to-white ring-1 ring-line">
        <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs><pattern id="tg" width="16" height="16" patternUnits="userSpaceOnUse"><path d="M16 0H0V16" fill="none" stroke="#dde4f0" strokeWidth="0.6" /></pattern></defs>
          <rect width="400" height="300" fill="url(#tg)" />
          {/* building as wireframe twin */}
          <path d="M110 250 L110 150 L210 110 L310 150 L310 250 L210 290 Z" fill="#ffffff" stroke="#604b9f" strokeWidth="1.6" />
          <path d="M110 150 L210 190 L310 150 M210 190 L210 290" fill="none" stroke="#604b9f" strokeWidth="1.2" />
          <path d="M110 150 L210 110 L310 150 L210 190 Z" fill="#604b9f14" />
          {/* scan beam from drone */}
          <path d="M210 40 L120 152 L300 152 Z" fill="#0b7f9122" />
          {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={130 + k * 40} y1={146 - k * 2} x2={170 + k * 30} y2={176 - k * 6} stroke="#0b7f91" strokeWidth="0.8" opacity="0.6" className="data-path" />)}
          {/* defects */}
          <circle cx="170" cy="150" r="9" fill="none" stroke="#f3903f" strokeWidth="2.5" />
          <circle cx="255" cy="165" r="9" fill="none" stroke="#f3903f" strokeWidth="2.5" />
          {/* drone */}
          <g transform="translate(210 36)">
            <rect x="-14" y="-4" width="28" height="8" rx="4" fill="#0b1530" />
            <line x1="-30" y1="-6" x2="-12" y2="-2" stroke="#0b1530" strokeWidth="2" />
            <line x1="12" y1="-2" x2="30" y2="-6" stroke="#0b1530" strokeWidth="2" />
            <ellipse cx="-32" cy="-7" rx="10" ry="2" fill="#4379bd" />
            <ellipse cx="32" cy="-7" rx="10" ry="2" fill="#4379bd" />
          </g>
        </svg>
        <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-[13px] font-semibold shadow-md"><Plane aria-hidden className="size-4 text-teal" /> Drone scan</span>
        <span className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-[13px] font-semibold shadow-md"><Gauge aria-hidden className="size-4 text-orange" /> 2 roof defects found</span>
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-xl bg-white px-3 py-1.5 text-[13px] font-semibold shadow-md"><Database aria-hidden className="size-4 text-violet" /> Digital twin</span>
      </div>
    </div>
  );
}

export function HeroVisual({ kind }: { kind: Slide['visual'] }) {
  if (kind === 'seven') return <Ecosystem />;
  if (kind === 'sap') return <PartnershipPanel />;
  if (kind === 'twin') return <DroneTwin />;
  return <ConnectedMap />;
}

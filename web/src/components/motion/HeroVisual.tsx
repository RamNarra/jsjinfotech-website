import { Server, Boxes, BrainCircuit, Plane, Code2, Fan, FlaskConical, Cloud, Building2, Database, Gauge, type LucideIcon } from 'lucide-react';
import type { Slide } from '@/content/hero';

// Hero panels: labelled, product-UI style diagrams (HTML + SVG) instead of abstract shapes.
// Animated parts are CSS-only (.data-path, pulse) and stop under prefers-reduced-motion.

const C = { teal: '#0b7f91', blue: '#4379bd', violet: '#604b9f', magenta: '#a353a0', green: '#4f9a2e', amber: '#b88a00' };

function Node({ icon: Icon, label, color, className, style }: { icon: LucideIcon; label: string; color: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${className ?? ''}`} style={style}>
      <span className="inline-flex size-16 items-center justify-center rounded-[20px] text-white" style={{ background: `linear-gradient(140deg, ${color}, ${color}cc)`, boxShadow: `0 14px 28px -12px ${color}, inset 0 1px 0 rgba(255,255,255,0.35)` }}>
        <Icon aria-hidden className="size-7" strokeWidth={1.7} />
      </span>
      <span className="rounded-full bg-white px-3.5 py-1.5 text-center text-[14px] leading-4 font-semibold whitespace-nowrap text-text shadow-md ring-1 ring-line">{label}</span>
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
      <span aria-hidden className="absolute top-1/2 left-1/2 size-48 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-[radial-gradient(circle,rgba(119,97,170,0.18),transparent_70%)] motion-reduce:animate-none" />
      <div className="absolute top-1/2 left-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-line bg-white text-center shadow-[0_24px_60px_-20px_rgba(96,75,159,0.7)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/jsj-mark.svg" alt="" width={100} height={62} />
        <span className="mt-1.5 font-display text-[13px] font-semibold tracking-wide text-text">JSJ INFOTECH</span>
      </div>
      {items.map(([icon, label, color], i) => (
        <Node key={label} icon={icon} label={label} color={color} style={{ left: `${pts[i][0]}%`, top: `${pts[i][1]}%` }} />
      ))}
    </div>
  );
}

/* eslint-disable @next/next/no-img-element */
// Slide 1: the enterprise in the centre and the four domains JSJ connects, each with what it covers.
function ConnectedMap() {
  const items: [LucideIcon, string, string, string, string][] = [
    [Boxes, 'ERP and SAP', 'Finance, supply chain, HR', C.amber, 'left-0 top-0'],
    [Cloud, 'Cloud and security', 'Hybrid cloud, zero trust', C.blue, 'right-0 top-0'],
    [Fan, 'Field and facilities', 'Drones, HVAC, IoT sensors', C.teal, 'left-0 bottom-0'],
    [BrainCircuit, 'AI and data', 'Predictions, assistants', C.violet, 'right-0 bottom-0'],
  ];
  return (
    <div className="relative h-full w-full p-4">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" aria-hidden>
        {[[22, 22], [78, 22], [22, 78], [78, 78]].map(([x, y], k) => (
          <line key={k} x1={x} y1={y} x2="50" y2="50" stroke={items[k][3]} strokeOpacity="0.75" strokeWidth="0.6" vectorEffect="non-scaling-stroke" className="data-path" />
        ))}
      </svg>
      <div className="relative h-full w-full">
        {items.map(([I, t, d, c, pos]) => (
          <div key={t} className={`absolute w-[46%] rounded-2xl bg-white p-4 shadow-[0_16px_40px_-20px_rgba(11,21,48,0.45)] ring-1 ring-line ${pos}`}>
            <span className="inline-flex size-11 items-center justify-center rounded-xl text-white" style={{ background: c }}><I aria-hidden className="size-5" strokeWidth={1.8} /></span>
            <p className="mt-3 font-display text-[16px] font-semibold">{t}</p>
            <p className="text-[13px] text-muted">{d}</p>
            <span className="mt-2 inline-flex items-center gap-1.5 text-[12px] font-medium text-[#2f7a3c]"><span className="size-1.5 rounded-full bg-[#3aa35a]" /> Connected</span>
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 flex size-36 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-ink text-center text-white shadow-[0_24px_60px_-20px_rgba(11,21,48,0.8)] ring-8 ring-white">
          <Building2 aria-hidden className="size-8 text-violet-hi" strokeWidth={1.5} />
          <span className="mt-2 font-display text-[15px] leading-5 font-semibold">Your enterprise</span>
          <span className="text-[12px] text-on-ink-muted">one connected system</span>
        </div>
      </div>
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
        <img src="/brand/sap-logo.webp" alt="SAP" className="h-12 w-auto" />
        <img src="/brand/sap-gold-partner-badge.webp" alt="SAP Gold Partner, SGN Software" className="h-12 w-auto" />
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

// Slide 3: a drone inspection screen: roof map with the two defects pinned, findings list, twin status.
function DroneTwin() {
  const rows = 6, cols = 9;
  const defects = [
    { r: 1, c: 2, label: 'Cracked panel' },
    { r: 4, c: 6, label: 'Water pooling' },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-line">
        <span className="flex items-center gap-2 font-semibold"><Plane aria-hidden className="size-4 text-teal" /> Drone inspection: Plant 2 roof</span>
        <span className="rounded-full bg-[#e9f6ec] px-2.5 py-1 text-[12px] font-medium text-[#2f7a3c]">Flight complete</span>
      </div>
      <div className="grid flex-1 grid-cols-[1.5fr_1fr] gap-3">
        <div className="relative overflow-hidden rounded-2xl bg-[#e7ecf4] p-3 ring-1 ring-line">
          <div className="grid h-full gap-1.5" style={{ gridTemplateColumns: `repeat(${cols},1fr)`, gridTemplateRows: `repeat(${rows},1fr)` }}>
            {Array.from({ length: rows * cols }, (_, k) => {
              const d = defects.find((x) => x.r * cols + x.c === k);
              return <span key={k} className={`rounded-[3px] ${d ? 'bg-[#2b3a63] ring-2 ring-orange' : 'bg-[#2b3a63]/85'}`} />;
            })}
          </div>
          <span aria-hidden className="absolute inset-x-3 top-0 h-full bg-gradient-to-b from-teal/25 via-transparent to-transparent motion-safe:animate-pulse" />
          {defects.map((d, k) => (
            <span key={d.label} className="absolute rounded-lg bg-white px-2 py-1 text-[11px] font-semibold text-text shadow-md" style={{ left: `${((d.c + 0.6) / cols) * 100}%`, top: `${((d.r + 1.1) / rows) * 100}%` }}>
              {k + 1}. {d.label}
            </span>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="rounded-2xl bg-white p-3 ring-1 ring-line">
            <p className="flex items-center gap-1.5 text-[13px] font-semibold"><Gauge aria-hidden className="size-4 text-orange" /> 2 defects found</p>
            <ul className="mt-2 space-y-1.5 text-[12px] text-muted">
              {defects.map((d, k) => <li key={d.label} className="flex items-center gap-2"><span className="inline-flex size-4 items-center justify-center rounded-full bg-orange text-[10px] font-bold text-white">{k + 1}</span>{d.label}</li>)}
            </ul>
          </div>
          <div className="flex flex-1 flex-col rounded-2xl bg-white p-3 ring-1 ring-line">
            <p className="flex items-center gap-1.5 text-[13px] font-semibold"><Database aria-hidden className="size-4 text-violet" /> Digital twin</p>
            <svg viewBox="0 0 120 80" className="mt-1 h-full max-h-24 w-full" aria-hidden>
              <path d="M20 60 L20 32 L60 18 L100 32 L100 60 L60 74 Z" fill="#604b9f10" stroke="#604b9f" strokeWidth="1.2" />
              <path d="M20 32 L60 46 L100 32 M60 46 L60 74" fill="none" stroke="#604b9f" strokeWidth="1" />
              <circle cx="44" cy="30" r="3.5" fill="none" stroke="#f3903f" strokeWidth="1.6" />
              <circle cx="78" cy="36" r="3.5" fill="none" stroke="#f3903f" strokeWidth="1.6" />
            </svg>
            <p className="text-[11px] text-muted">Updated after this flight</p>
          </div>
        </div>
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

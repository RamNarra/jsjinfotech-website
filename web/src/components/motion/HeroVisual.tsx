import { Server, Boxes, BrainCircuit, Plane, Code2, Fan, FlaskConical, Cloud, ShieldCheck, Building2, Database, Cpu, ScanLine, Gauge, type LucideIcon } from 'lucide-react';
import type { Slide } from '@/content/hero';

// Hero panels: labelled, product-UI style diagrams (HTML + SVG) instead of abstract shapes.
// Animated parts are CSS-only (.data-path, pulse) and stop under prefers-reduced-motion.

const C = { teal: '#5fd0dd', blue: '#8fb7ec', violet: '#b9abf0', magenta: '#e19bd9', green: '#8fd97a', amber: '#fdc70c' };

function Node({ icon: Icon, label, color, className, style }: { icon: LucideIcon; label: string; color: string; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 ${className ?? ''}`} style={style}>
      <span className="inline-flex size-11 items-center justify-center rounded-2xl border bg-ink-2/90 backdrop-blur" style={{ borderColor: `${color}66`, color, boxShadow: `0 0 24px -6px ${color}` }}>
        <Icon aria-hidden className="size-5" strokeWidth={1.6} />
      </span>
      <span className="rounded-full bg-ink/80 px-2 py-0.5 text-center text-[11px] leading-4 font-medium whitespace-nowrap text-on-ink">{label}</span>
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
        <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="0.3" />
        <circle cx="50" cy="50" r={R * 0.55} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" strokeDasharray="1 1.5" />
        {pts.map(([x, y], i) => (
          <line key={i} x1={x} y1={y} x2="50" y2="50" stroke={items[i][2]} strokeOpacity="0.55" strokeWidth="0.35" className="data-path" />
        ))}
        {pts.map(([x, y], i) => {
          const [nx, ny] = pts[(i + 1) % pts.length];
          return <line key={`r${i}`} x1={x} y1={y} x2={nx} y2={ny} stroke="rgba(255,255,255,0.10)" strokeWidth="0.3" />;
        })}
      </svg>
      <div className="absolute top-1/2 left-1/2 flex size-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white/15 bg-[radial-gradient(circle,rgba(119,97,170,0.45),rgba(18,30,63,0.9)_70%)] text-center shadow-[0_0_60px_-10px_rgba(185,171,240,0.8)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/jsj-mark.svg" alt="" width={56} height={34} />
        <span className="mt-1 font-display text-[10px] font-semibold tracking-[0.2em] text-white">ECOSYSTEM</span>
      </div>
      {items.map(([icon, label, color], i) => (
        <Node key={label} icon={icon} label={label} color={color} style={{ left: `${pts[i][0]}%`, top: `${pts[i][1]}%` }} />
      ))}
    </div>
  );
}

function SapStack() {
  const layers = [
    { t: 'AI & automation layer', s: 'JSJ INFOTECH · copilots, document AI, IoT', c: C.violet },
    { t: 'Integration & data', s: 'SAP BTP · Business Data Cloud · Signavio', c: C.blue },
    { t: 'SAP S/4HANA core', s: 'GROW (public) · RISE (private) · on-premise', c: C.amber },
    { t: 'Lines of business', s: 'Ariba spend · SuccessFactors HCM · CX', c: C.teal },
  ];
  return (
    <div className="flex h-full flex-col justify-center gap-3 px-2">
      <div className="mb-1 flex items-center justify-between text-[11px] text-on-ink-muted">
        <span className="label-caps">Joint SAP architecture</span>
        <span className="rounded-full border border-amber/40 px-2 py-0.5 text-amber">SGN · SAP Gold Partner</span>
      </div>
      {layers.map((l, i) => (
        <div key={l.t} className="relative">
          <div className="rounded-2xl border bg-ink-2/80 px-4 py-3" style={{ borderColor: `${l.c}55`, marginInline: `${i * 10}px`, boxShadow: `inset 3px 0 0 ${l.c}` }}>
            <p className="text-sm font-semibold text-white">{l.t}</p>
            <p className="mt-0.5 text-[12px] text-on-ink-muted">{l.s}</p>
          </div>
          {i < layers.length - 1 && (
            <svg aria-hidden className="mx-auto block h-3 w-2" viewBox="0 0 2 12"><line x1="1" y1="0" x2="1" y2="12" stroke={C.green} strokeWidth="1" className="data-path" /></svg>
          )}
        </div>
      ))}
    </div>
  );
}

function TwinPipeline() {
  const bars = [38, 52, 44, 68, 59, 81, 73];
  return (
    <div className="grid h-full grid-rows-[auto_1fr_auto] gap-3">
      <div className="flex items-center gap-2 text-[11px] text-on-ink-muted">
        <span className="label-caps">Drone scan → digital twin → dashboard</span>
      </div>
      <div className="grid grid-cols-3 items-center gap-3">
        <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-ink-2/80">
          <Plane aria-hidden className="size-8 text-teal-hi" strokeWidth={1.4} />
          <ScanLine aria-hidden className="mt-2 size-10 animate-pulse text-teal-hi/70" strokeWidth={1} />
          <span className="mt-2 text-[11px] text-on-ink-muted">Aerial capture</span>
        </div>
        <div className="flex aspect-square flex-col items-center justify-center rounded-2xl border border-white/10 bg-ink-2/80">
          <svg viewBox="0 0 60 60" className="h-16 w-16" aria-hidden>
            <path d="M10 48 L10 26 L30 14 L50 26 L50 48 Z M30 14 L30 36 M10 26 L30 36 L50 26 M30 36 L30 48" fill="none" stroke={C.violet} strokeWidth="1.2" />
          </svg>
          <span className="mt-2 text-[11px] text-on-ink-muted">Digital twin</span>
        </div>
        <div className="flex aspect-square flex-col justify-end rounded-2xl border border-white/10 bg-ink-2/80 p-3">
          <div className="flex h-16 items-end gap-1">
            {bars.map((b, i) => <span key={i} className="flex-1 rounded-t-sm" style={{ height: `${b}%`, background: i === bars.length - 2 ? C.green : `${C.magenta}99` }} />)}
          </div>
          <span className="mt-2 text-center text-[11px] text-on-ink-muted">Analytics</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {[
          [Gauge, 'Anomalies flagged', 'Computer vision'],
          [Database, 'Asset model', 'Live sensor data'],
          [Cpu, 'Predictive', 'Maintenance AI'],
        ].map(([Icon, t, s]) => {
          const I = Icon as LucideIcon;
          return (
            <div key={t as string} className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
              <I aria-hidden className="size-4 text-violet-hi" strokeWidth={1.6} />
              <p className="mt-2 text-[12px] font-semibold text-white">{t as string}</p>
              <p className="text-[11px] text-on-ink-muted">{s as string}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Network() {
  const nodes: [LucideIcon, string, string, number, number][] = [
    [Cloud, 'Cloud', C.blue, 22, 22],
    [Boxes, 'Enterprise ERP', C.amber, 74, 18],
    [ShieldCheck, 'Zero-trust', C.teal, 50, 42],
    [Building2, 'Smart buildings', C.green, 20, 70],
    [BrainCircuit, 'AI models', C.violet, 78, 64],
    [Plane, 'Drone data', C.magenta, 48, 84],
  ];
  const links = [[0, 2], [1, 2], [2, 3], [2, 4], [3, 5], [4, 5], [0, 1], [3, 4]];
  return (
    <div className="relative h-full w-full">
      <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden>
        {links.map(([a, b], i) => (
          <line key={i} x1={nodes[a][3]} y1={nodes[a][4]} x2={nodes[b][3]} y2={nodes[b][4]} stroke={i % 2 ? C.teal : C.violet} strokeOpacity="0.6" strokeWidth="0.35" className="data-path" />
        ))}
      </svg>
      {nodes.map(([icon, label, color, x, y]) => (
        <Node key={label} icon={icon} label={label} color={color} style={{ left: `${x}%`, top: `${y}%` }} />
      ))}
    </div>
  );
}

export function HeroVisual({ kind }: { kind: Slide['visual'] }) {
  if (kind === 'seven') return <Ecosystem />;
  if (kind === 'sap') return <SapStack />;
  if (kind === 'twin') return <TwinPipeline />;
  return <Network />;
}

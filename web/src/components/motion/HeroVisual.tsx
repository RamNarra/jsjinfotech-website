import { Server, Boxes, BrainCircuit, Plane, Code2, Fan, FlaskConical, Cloud, Building2, Database, ScanLine, Gauge, type LucideIcon } from 'lucide-react';
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
function Photo({ src, alt, children }: { src: string; alt: string; children?: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px]">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent" />
      {children}
    </div>
  );
}

function Chip({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={`absolute inline-flex items-center gap-2 rounded-2xl bg-white/95 px-4 py-2.5 text-sm font-semibold text-text shadow-lg backdrop-blur ${className ?? ''}`}>{children}</span>;
}

export function HeroVisual({ kind }: { kind: Slide['visual'] }) {
  if (kind === 'seven') return <Ecosystem />;
  if (kind === 'sap')
    return (
      <Photo src="/images/gen/hero-enterprise.webp" alt="Enterprise operations room with finance and supply chain dashboards">
        <div className="absolute inset-x-5 bottom-5 flex flex-wrap items-center gap-5 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur">
          <img src="/brand/jsj-mark.svg" alt="JSJ INFOTECH" className="h-10 w-auto" />
          <span aria-hidden className="text-xl text-muted">×</span>
          <img src="/brand/sgn-logo.webp" alt="SGN Software" className="h-8 w-auto" />
          <img src="/brand/sap-gold-partner-badge.webp" alt="SAP Gold Partner, SGN Software" className="ml-auto h-10 w-auto" />
        </div>
      </Photo>
    );
  if (kind === 'twin')
    return (
      <Photo src="/images/gen/drone.webp" alt="Survey drone over an industrial site at dusk">
        <Chip className="top-5 left-5"><ScanLine aria-hidden className="size-4 text-teal" /> Aerial survey</Chip>
        <Chip className="top-1/2 right-5"><Database aria-hidden className="size-4 text-violet" /> Digital twin updated</Chip>
        <Chip className="bottom-5 left-5"><Gauge aria-hidden className="size-4 text-magenta" /> 2 anomalies flagged</Chip>
      </Photo>
    );
  return (
    <Photo src="/images/gen/hero-city.webp" alt="City business district and industrial zone at dusk">
      <Chip className="top-5 left-5"><Cloud aria-hidden className="size-4 text-blue" /> Cloud and ERP</Chip>
      <Chip className="right-5 bottom-20"><BrainCircuit aria-hidden className="size-4 text-violet" /> AI models</Chip>
      <Chip className="bottom-5 left-5"><Building2 aria-hidden className="size-4 text-teal" /> Smart infrastructure</Chip>
    </Photo>
  );
}

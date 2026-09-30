import type { CSSProperties } from 'react';
import type { SolutionSlug } from '@/shared';

const L = 'var(--color-line)';
const D = 'var(--color-ink-3)';
const B = 'var(--color-brand)';

function P({ d, s = D, i = 0, len = 420, w = 1.5, dash }: { d: string; s?: string; i?: number; len?: number; w?: number; dash?: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke={s}
      strokeWidth={w}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dash}
      className={dash ? undefined : 'draw'}
      style={{ ['--len' as string]: len, ['--i' as string]: i } as CSSProperties}
    />
  );
}
const Dot = ({ x, y, r = 4, f = '#fff', s = B }: { x: number; y: number; r?: number; f?: string; s?: string }) => (
  <circle cx={x} cy={y} r={r} fill={f} stroke={s} strokeWidth={1.5} />
);

const diagrams: Record<SolutionSlug, React.ReactNode> = {
  'digital-it': (
    <>
      <P d="M40 40h240a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V48a8 8 0 0 1 8-8Z" s={L} />
      <P d="M40 88h240a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8V96a8 8 0 0 1 8-8Z" s={D} i={1} />
      <P d="M40 136h240a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-20a8 8 0 0 1 8-8Z" s={L} i={2} />
      <P d="M160 76v12M160 124v12" s={B} i={3} len={30} />
      <Dot x={160} y={106} />
      <P d="M56 58h48M56 106h72M56 154h56" s={D} i={2} len={90} />
    </>
  ),
  'sap-erp': (
    <>
      {[0, 1, 2, 3].map((k) => (
        <rect key={k} x={28 + k * 72} y={60} width={52} height={52} rx={10} fill="none" stroke={k === 1 ? B : D} strokeWidth={1.5} />
      ))}
      <P d="M84 86h16M156 86h16M228 86h16" s={B} len={20} i={1} />
      <P d="M54 124v30h212v-30" s={L} len={400} i={2} />
      <P d="M258 132l8-8 8 8" s={L} len={30} i={3} />
      <P d="M40 78h28M40 94h20M112 78h28M112 94h20M184 78h28M184 94h20M256 78h28M256 94h20" s={L} len={40} i={2} />
    </>
  ),
  'artificial-intelligence': (
    <>
      {[36, 76, 116, 156].map((y, k) => (
        <g key={y}>
          <P d={`M56 ${y}C130 ${y} 130 100 196 100`} s={k === 1 ? B : L} i={k} len={220} />
          <Dot x={48} y={y} r={5} s={k === 1 ? B : D} />
        </g>
      ))}
      <Dot x={204} y={100} r={14} s={B} />
      <P d="M218 100h50" s={B} len={60} i={4} />
      <P d="M262 92l8 8-8 8" s={B} len={30} i={5} />
    </>
  ),
  cybersecurity: (
    <>
      <rect x={40} y={20} width={240} height={160} rx={24} fill="none" stroke={L} strokeWidth={1.5} />
      <rect x={68} y={44} width={184} height={112} rx={18} fill="none" stroke={D} strokeWidth={1.5} />
      <rect x={96} y={68} width={128} height={64} rx={12} fill="none" stroke={B} strokeWidth={1.5} />
      <Dot x={160} y={100} r={9} />
      <P d="M160 109v10" s={B} len={12} />
    </>
  ),
  'software-development': (
    <>
      <rect x={70} y={26} width={210} height={124} rx={12} fill="none" stroke={L} strokeWidth={1.5} />
      <rect x={40} y={46} width={210} height={124} rx={12} fill="#fff" stroke={D} strokeWidth={1.5} />
      <P d="M40 72h210" s={L} len={210} />
      <circle cx={56} cy={59} r={3} fill="none" stroke={D} />
      <circle cx={68} cy={59} r={3} fill="none" stroke={D} />
      <P d="M60 96h60M72 112h90M60 128h50" s={B} i={2} len={100} />
      <P d="M190 100l-12 12 12 12M214 100l12 12-12 12" s={D} i={3} len={80} />
    </>
  ),
  'digital-content': (
    <>
      <rect x={96} y={24} width={128} height={152} rx={10} fill="none" stroke={L} strokeWidth={1.5} transform="rotate(-6 160 100)" />
      <rect x={96} y={24} width={128} height={152} rx={10} fill="#fff" stroke={D} strokeWidth={1.5} />
      <P d="M116 52h60M116 72h88M116 90h88M116 108h72" s={L} len={90} i={1} />
      <P d="M116 140l12 12 28-28" s={B} len={70} i={3} />
    </>
  ),
  'drone-technology': (
    <>
      {[50, 90, 130, 170].map((y) => (
        <P key={y} d={`M20 ${y}h280`} s={L} len={280} w={1} />
      ))}
      {[70, 130, 190, 250].map((x) => (
        <P key={x} d={`M${x} 20v160`} s={L} len={160} w={1} />
      ))}
      <P d="M30 160C80 160 70 110 120 110S180 60 230 70 280 40 292 40" s={B} dash="4 6" />
      <g transform="translate(236 60)">
        <path d="M-10 -10l20 20M10 -10l-20 20" stroke={D} strokeWidth={1.5} strokeLinecap="round" />
        <circle r={4} fill="#fff" stroke={B} strokeWidth={1.5} />
      </g>
    </>
  ),
  'project-management': (
    <>
      {[0, 1, 2, 3, 4].map((k) => (
        <P key={k} d={`M${40 + k * 34} ${40 + k * 26}h${100 - (k % 2) * 20}`} s={k === 2 ? B : D} i={k} len={110} w={6} />
      ))}
      <P d="M28 24v150" s={L} len={150} />
      <path d="M262 30l8 8-8 8-8-8Z" fill="none" stroke={B} strokeWidth={1.5} />
      <P d="M262 46v128" s={L} len={128} />
    </>
  ),
  'government-technology': (
    <>
      <P d="M60 76L160 26l100 50Z" s={D} len={320} />
      {[84, 122, 160, 198, 236].map((x, k) => (
        <P key={x} d={`M${x} 88v62`} s={k === 2 ? B : L} i={k} len={62} w={2} />
      ))}
      <P d="M56 158h208M48 172h224" s={D} i={2} len={230} />
      <Dot x={160} y={54} r={5} />
    </>
  ),
};

export function SolutionDiagram({ slug, className }: { slug: SolutionSlug; className?: string }) {
  return (
    <svg viewBox="0 0 320 200" aria-hidden className={className} fill="none">
      {diagrams[slug]}
    </svg>
  );
}

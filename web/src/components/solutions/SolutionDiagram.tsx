import type { CSSProperties, ReactNode } from 'react';
import type { SolutionSlug } from '@/shared';

/**
 * Bespoke line illustrations, one per solution. Wording inside the drawings is limited to terms that appear
 * in the source documents. Strokes draw once (CSS); fills are static, so reduced motion loses nothing.
 */
const L = 'var(--color-line)';
const D = 'var(--color-ink-3)';
const B = 'var(--color-brand)';
const WASH = 'rgb(0 112 242 / 0.08)';
const TINT = 'rgb(0 112 242 / 0.16)';

function P({ d, s = D, i = 0, len = 500, w = 1.6, dash, f = 'none' }: { d: string; s?: string; i?: number; len?: number; w?: number; dash?: string; f?: string }) {
  return (
    <path
      d={d}
      fill={f}
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
const R = ({ x, y, w, h, r = 12, s = D, f = '#fff', sw = 1.6 }: { x: number; y: number; w: number; h: number; r?: number; s?: string; f?: string; sw?: number }) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={f} stroke={s} strokeWidth={sw} />
);
const Dot = ({ x, y, r = 5, f = '#fff', s = B }: { x: number; y: number; r?: number; f?: string; s?: string }) => (
  <circle cx={x} cy={y} r={r} fill={f} stroke={s} strokeWidth={1.6} />
);
const T = ({ x, y, children, a = 'middle', c = 'var(--color-ink-2)', s = 15, w = 500 }: { x: number; y: number; children: ReactNode; a?: 'start' | 'middle' | 'end'; c?: string; s?: number; w?: number }) => (
  <text x={x} y={y} textAnchor={a} fontSize={s} fontWeight={w} fill={c} style={{ letterSpacing: '-0.01em' }}>
    {children}
  </text>
);

const diagrams: Record<SolutionSlug, ReactNode> = {
  'digital-it': (
    <>
      {[
        { y: 28, label: 'Applications', f: '#fff', s: D },
        { y: 100, label: 'Integration', f: WASH, s: B },
        { y: 172, label: 'Infrastructure', f: '#fff', s: D },
      ].map((l, i) => (
        <g key={l.label}>
          <R x={40} y={l.y} w={320} h={60} r={14} f={l.f} s={l.s} />
          <T x={62} y={l.y + 36} a="start" c="var(--color-ink)" w={600} s={17}>{l.label}</T>
          {[0, 1, 2].map((k) => (
            <R key={k} x={236 + k * 38} y={l.y + 18} w={28} h={24} r={6} s={i === 1 ? B : L} f={i === 1 ? TINT : '#f5f8fc'} sw={1.2} />
          ))}
        </g>
      ))}
      <P d="M200 88v12M200 160v12" s={B} len={16} i={2} />
      <Dot x={200} y={94} r={4} />
      <Dot x={200} y={166} r={4} />
    </>
  ),
  'sap-erp': (
    <>
      {['Implement', 'Migrate', 'Integrate', 'Manage'].map((label, k) => (
        <g key={label}>
          <R x={22 + k * 92} y={62} w={80} h={96} r={14} s={k === 1 ? B : D} f={k === 1 ? WASH : '#fff'} />
          <P d={`M${36 + k * 92} 88h52M${36 + k * 92} 104h36M${36 + k * 92} 120h44`} s={k === 1 ? B : L} len={60} i={k} />
          <T x={62 + k * 92} y={150} c="var(--color-ink)" w={600} s={14.5}>{label}</T>
        </g>
      ))}
      <P d="M102 110h12M194 110h12M286 110h12" s={B} len={14} i={3} />
      <P d="M62 172v28h276v-28" s={B} len={360} i={4} w={1.4} />
      <P d="M330 182l8-10 8 10" s={B} len={30} i={5} />
      <T x={200} y={222} c="var(--color-brand-text)" w={600} s={15}>Optimise · upgrade · support</T>
    </>
  ),
  'artificial-intelligence': (
    <>
      {['Documents', 'Data', 'Requests'].map((label, k) => (
        <g key={label}>
          <R x={22} y={40 + k * 66} w={92} h={44} r={12} s={k === 1 ? B : D} f={k === 1 ? WASH : '#fff'} />
          <T x={68} y={67 + k * 66} c="var(--color-ink)" w={600} s={15}>{label}</T>
          <P d={`M114 ${62 + k * 66}C160 ${62 + k * 66} 160 130 206 130`} s={k === 1 ? B : D} i={k} len={220} />
        </g>
      ))}
      <circle cx={232} cy={130} r={44} fill={WASH} stroke={B} strokeWidth={1.6} />
      <circle cx={232} cy={130} r={30} fill="#fff" stroke={B} strokeWidth={1.2} strokeDasharray="3 4" />
      <T x={232} y={136} c="var(--color-brand-text)" w={700} s={20}>AI</T>
      <P d="M276 130h40" s={B} len={50} i={4} />
      <R x={316} y={104} w={66} h={52} r={12} s={B} f="#fff" />
      <T x={349} y={126} c="var(--color-ink)" w={600} s={13.5}>Decision</T>
      <T x={349} y={142} c="var(--color-ink)" w={600} s={13.5}>support</T>
    </>
  ),
  cybersecurity: (
    <>
      <R x={40} y={14} w={320} h={232} r={30} s={L} f="#fff" />
      <R x={72} y={44} w={256} h={172} r={24} s={D} f="#f7f9fc" />
      <R x={104} y={74} w={192} h={112} r={18} s={B} f={WASH} />
      <P d="M188 122v-8a12 12 0 0 1 24 0v8" s={B} len={60} i={2} w={2.2} />
      <rect x={180} y={122} width={40} height={30} rx={7} fill="#fff" stroke={B} strokeWidth={2} />
      <circle cx={200} cy={135} r={3.5} fill={B} />
      <P d="M200 138v7" s={B} len={10} i={3} w={2} />
      <T x={58} y={34} a="start" c="var(--color-ink-3)" s={14}>Architecture</T>
      <T x={90} y={64} a="start" c="var(--color-ink-3)" s={14}>Hardening</T>
      <T x={200} y={176} c="var(--color-brand-text)" w={600} s={15}>Zero trust</T>
    </>
  ),
  'software-development': (
    <>
      <R x={36} y={26} w={250} h={176} r={14} f="#fff" />
      <P d="M36 56h250" s={L} len={250} />
      {[0, 1, 2].map((k) => <circle key={k} cx={54 + k * 14} cy={41} r={3.5} fill="none" stroke={D} />)}
      <R x={50} y={70} w={60} h={118} r={8} s={L} f="#f5f8fc" sw={1.2} />
      <P d="M60 88h40M60 104h30M60 120h38" s={L} len={50} i={1} />
      {[0, 1, 2, 3, 4].map((k) => (
        <rect key={k} x={128 + k * 30} y={170 - [40, 62, 34, 82, 58][k]} width={20} height={[40, 62, 34, 82, 58][k]} rx={4} fill={k === 3 ? B : TINT} />
      ))}
      <P d="M128 70h140" s={D} len={140} i={2} />
      <R x={306} y={58} w={70} h={144} r={14} s={D} f="#fff" />
      <P d="M320 84h42M320 100h30M320 116h38" s={B} len={50} i={3} />
      <P d="M286 130h20" s={B} len={22} i={4} />
      <R x={264} y={214} w={54} h={26} r={13} s={B} f={WASH} />
      <T x={291} y={232} c="var(--color-brand-text)" w={700} s={14}>API</T>
    </>
  ),
  'digital-content': (
    <>
      <R x={132} y={26} w={140} h={186} r={12} s={L} f="#f5f8fc" />
      <g transform="rotate(-7 200 130)">
        <R x={112} y={34} w={140} h={186} r={12} s={D} f="#fff" />
        <rect x={128} y={52} width={56} height={10} rx={5} fill={B} />
        <P d="M128 82h100M128 98h100M128 114h72" s={L} len={110} i={1} />
        <rect x={128} y={134} width={100} height={50} rx={8} fill={WASH} stroke={B} strokeWidth={1.2} />
        <P d="M128 200h64" s={L} len={64} i={2} />
      </g>
      <R x={268} y={132} w={96} h={54} r={12} s={B} f="#fff" />
      <P d="M282 160l9 9 18-20" s={B} len={50} i={3} w={2} />
      <T x={338} y={164} c="var(--color-ink)" w={600} s={14}>Handover</T>
    </>
  ),
  'drone-technology': (
    <>
      <path d="M40 190L130 130H360L270 210H40Z" fill={WASH} stroke={L} strokeWidth={1.4} />
      {[0, 1, 2, 3].map((k) => <P key={k} d={`M${58 + k * 62} ${190 - k * 3}L${148 + k * 62} ${130 + k * 0.5}`} s={L} len={130} w={1} />)}
      {[0, 1, 2].map((k) => <P key={`h${k}`} d={`M${52 + k * 30} ${180 - k * 20}H${292 + k * 30 - 0}`} s={L} len={260} w={1} />).slice(0, 0)}
      <P d="M76 186C120 178 118 150 170 150S 240 166 290 142" s={B} dash="5 6" />
      <path d="M232 62L204 150H262Z" fill={TINT} opacity={0.7} />
      <g transform="translate(232 54)">
        <path d="M-22 -8l44 16M22 -8l-44 16" stroke={D} strokeWidth={1.8} strokeLinecap="round" />
        {[[-22, -8], [22, -8], [-22, 8], [22, 8]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r={7} fill="#fff" stroke={D} strokeWidth={1.4} />)}
        <circle r={8} fill="#fff" stroke={B} strokeWidth={1.8} />
      </g>
      <T x={92} y={228} a="start" c="var(--color-ink-3)" s={14}>Survey</T>
      <T x={300} y={124} a="start" c="var(--color-brand-text)" w={600} s={14.5}>Mapping · GIS</T>
    </>
  ),
  'project-management': (
    <>
      {['Plan', 'Build', 'Test', 'Handover'].map((label, k) => (
        <g key={label}>
          <T x={34} y={62 + k * 46} a="start" c="var(--color-ink)" w={600} s={15}>{label}</T>
          <rect x={112 + k * 46} y={48 + k * 46} width={[120, 130, 96, 70][k]} height={20} rx={10} fill={k === 1 ? B : TINT} />
        </g>
      ))}
      <P d="M112 30v192" s={L} len={200} w={1.2} />
      <P d="M262 30v192" s={B} dash="4 5" w={1.2} />
      <path d="M262 26l9 9-9 9-9-9Z" fill="#fff" stroke={B} strokeWidth={1.6} />
      <T x={262} y={250} c="var(--color-brand-text)" w={600} s={14}>Commissioning</T>
    </>
  ),
  'government-technology': (
    <>
      <P d="M70 96L200 34l130 62Z" s={D} f={WASH} len={360} />
      <circle cx={200} cy={70} r={8} fill="#fff" stroke={B} strokeWidth={1.6} />
      {[96, 148, 200, 252, 304].map((x, k) => <P key={x} d={`M${x} 108v76`} s={k === 2 ? B : D} i={k} len={76} w={3.5} />)}
      <P d="M62 194h276M50 210h300" s={D} i={2} len={280} />
      {['Applications', 'Data', 'Monitoring'].map((label, k) => (
        <g key={label}>
          <R x={44 + k * 112} y={226} w={100} h={26} r={13} s={k === 1 ? B : L} f={k === 1 ? WASH : '#fff'} sw={1.2} />
          <T x={94 + k * 112} y={243} c="var(--color-ink-2)" s={14}>{label}</T>
        </g>
      ))}
    </>
  ),
};

export function SolutionDiagram({ slug, className }: { slug: SolutionSlug; className?: string }) {
  return (
    <svg viewBox="0 0 400 260" aria-hidden className={className} fill="none">
      {diagrams[slug]}
    </svg>
  );
}

import type { Slide } from '@/content/hero';

// Inline SVG visuals per slide (no raster assets yet; §11.2 prefers SVG diagrams).
export function HeroVisual({ kind }: { kind: Slide['visual'] }) {
  const stroke = 'rgba(169,155,224,0.55)';
  const green = 'rgba(110,190,68,0.6)';
  if (kind === 'seven') {
    const pts = Array.from({ length: 7 }, (_, i) => {
      const a = (i / 7) * Math.PI * 2 - Math.PI / 2;
      return [250 + Math.cos(a) * 170, 250 + Math.sin(a) * 170] as const;
    });
    return (
      <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden>
        <circle cx="250" cy="250" r="170" fill="none" stroke="rgba(255,255,255,0.06)" />
        {pts.map(([x, y], i) => (
          <g key={i}>
            <line x1={x} y1={y} x2="250" y2="250" stroke={i % 2 ? green : stroke} strokeWidth="1" className="data-path" />
            <circle cx={x} cy={y} r="14" fill="#1f1b37" stroke={stroke} />
            <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fill="#edebf5" fontFamily="monospace">{`0${i + 1}`}</text>
          </g>
        ))}
        <polygon points="250,206 288,228 288,272 250,294 212,272 212,228" fill="#604b9f" fillOpacity="0.35" stroke="#a99be0" />
      </svg>
    );
  }
  if (kind === 'sap') {
    return (
      <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden>
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={90 + i * 10} y={130 + i * 64} width={320 - i * 20} height="44" rx="10" fill="#1f1b37" stroke={stroke} />
        ))}
        {['S/4HANA', 'BTP', 'Ariba', 'SuccessFactors'].map((t, i) => (
          <text key={t} x="250" y={157 + i * 64} textAnchor="middle" fontSize="13" fill="#edebf5" fontFamily="monospace">{t}</text>
        ))}
        {[0, 1, 2].map((i) => (
          <line key={i} x1="250" y1={174 + i * 64} x2="250" y2={194 + i * 64} stroke={green} className="data-path" />
        ))}
      </svg>
    );
  }
  if (kind === 'twin') {
    return (
      <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden>
        {Array.from({ length: 9 }, (_, i) => (
          <line key={`h${i}`} x1="60" x2="440" y1={120 + i * 35} y2={120 + i * 35} stroke="rgba(255,255,255,0.05)" />
        ))}
        <path d="M150 360 L150 230 L230 190 L310 230 L310 360 Z M230 190 L230 320 M150 230 L230 270 L310 230 M230 270 L230 360" fill="none" stroke={stroke} />
        <path d="M330 360 L330 280 L390 250 L390 360 Z" fill="none" stroke={stroke} />
        <g transform="translate(240 90)">
          <rect x="-18" y="-4" width="36" height="8" rx="4" fill="#a99be0" />
          <line x1="-30" x2="-10" y1="-8" y2="-8" stroke="#a99be0" />
          <line x1="10" x2="30" y1="-8" y2="-8" stroke="#a99be0" />
        </g>
        <path d="M240 100 L170 240 M240 100 L310 240" stroke={green} className="data-path" />
        {[0, 1, 2, 3].map((i) => (
          <rect key={i} x={360 + i * 16} y={160 - i * 12} width="10" height={40 + i * 12} fill={green} />
        ))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 500 500" className="h-full w-full" aria-hidden>
      {[[90, 380, 60, 90], [170, 330, 50, 140], [240, 290, 70, 180], [330, 350, 50, 120], [395, 310, 45, 160]].map(([x, y, w, h], i) => (
        <rect key={i} x={x} y={y - h + 90} width={w} height={h} fill="#1f1b37" stroke={stroke} />
      ))}
      <path d="M115 210 C 180 120, 300 120, 360 170 S 430 220, 420 150" fill="none" stroke={green} className="data-path" />
      <path d="M195 190 C 240 80, 330 90, 360 170" fill="none" stroke={stroke} className="data-path" />
      {[[115, 210], [195, 190], [275, 150], [360, 170], [420, 150]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5" fill="#a99be0" />
      ))}
    </svg>
  );
}

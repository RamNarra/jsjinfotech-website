import Link from 'next/link';
import { ArrowUpRight, Server, Boxes, BrainCircuit, Plane, Code2, Fan, FlaskConical, type LucideIcon } from 'lucide-react';
import { verticals } from '@/content/verticals';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';

const icons: Record<string, LucideIcon> = {
  'it-consulting': Server,
  sap: Boxes,
  ai: BrainCircuit,
  drones: Plane,
  software: Code2,
  'hvac-government': Fan,
  rnd: FlaskConical,
};

// Bento: size = hierarchy. SAP and AI carry the big tiles.
const span: Record<string, string> = {
  sap: 'lg:col-span-4 lg:row-span-2',
  ai: 'lg:col-span-2 lg:row-span-2',
  'it-consulting': 'lg:col-span-2',
  drones: 'lg:col-span-2',
  software: 'lg:col-span-2',
  'hvac-government': 'lg:col-span-2',
  rnd: 'lg:col-span-2',
};
const order = ['sap', 'ai', 'it-consulting', 'drones', 'software', 'hvac-government', 'rnd'];

export function VerticalCards() {
  const list = order.map((s) => verticals.find((v) => v.slug === s)!).filter(Boolean);
  return (
    <ul className="grid auto-rows-[minmax(220px,auto)] gap-4 md:grid-cols-2 lg:grid-cols-6">
      {list.map((v, i) => {
        const Icon = icons[v.slug] ?? Server;
        const big = v.slug === 'sap';
        return (
          <li key={v.slug} className={cn(span[v.slug])}>
            <Reveal delay={i * 0.05} className="h-full">
              <Link
                href={`/services/${v.slug}`}
                className={cn(
                  'spotlight group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-white/[0.025] p-6 transition-transform duration-300 ease-standard hover:-translate-y-1 motion-reduce:hover:translate-y-0 lg:p-8',
                  big && 'bg-[radial-gradient(120%_80%_at_100%_0%,rgba(123,92,255,0.25),transparent_60%)]',
                )}
              >
                {big && <div aria-hidden className="bg-grid pointer-events-none absolute inset-0 opacity-70" />}
                <div className="relative flex items-start justify-between">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-violet-hi shadow-[0_0_30px_-8px_rgba(123,92,255,0.8)]">
                    <Icon aria-hidden className="size-6" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs text-muted">{v.number}</span>
                </div>
                <div className="relative mt-auto pt-10">
                  <h3 className={cn('font-display font-semibold tracking-tight', big ? 'text-3xl md:text-4xl' : 'text-xl leading-7')}>{v.name}</h3>
                  <p className={cn('mt-2 leading-6 text-muted', big ? 'max-w-xl text-base md:text-lg md:leading-7' : 'text-[15px]')}>{v.promise}</p>
                  {big && <p className="mt-5 label-caps text-amber/90">With SGN Software · SAP Gold Partner</p>}
                  {v.research && <span className="mt-4 inline-block rounded-full border border-white/10 px-2.5 py-1 text-xs text-muted">Research track</span>}
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-violet group-hover:text-white">
                    Explore <ArrowUpRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          </li>
        );
      })}
    </ul>
  );
}

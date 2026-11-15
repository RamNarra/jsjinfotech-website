/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Server, Boxes, BrainCircuit, Plane, Code2, Fan, FlaskConical, type LucideIcon } from 'lucide-react';
import { verticals, type Vertical } from '@/content/verticals';
import { ErpScreen, CopilotScreen, DroneMapScreen, CodeScreen, HvacScreen } from '@/components/visuals/Screens';
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

// Photos: Wikimedia Commons (public domain / CC0 / CC BY), see docs/asset-log.csv.
export function VerticalMedia({ v }: { v: Vertical }) {
  switch (v.slug) {
    case 'sap':
      return <ErpScreen className="w-full" />;
    case 'ai':
      return <CopilotScreen className="w-full" />;
    case 'drones':
      return <DroneMapScreen className="w-full" />;
    case 'software':
      return <CodeScreen className="w-full" />;
    case 'hvac-government':
      return (
        <div className="relative">
          <img src="/images/hvac-800.webp" alt="Air handling unit in a plant room" loading="lazy" className="h-56 w-full rounded-2xl object-cover" />
          <HvacScreen className="absolute right-3 -bottom-6 w-[78%]" />
        </div>
      );
    case 'it-consulting':
      return <img src="/images/technician-800.webp" alt="Engineer working on a server rack" loading="lazy" className="h-56 w-full rounded-2xl object-cover" />;
    default:
      return <img src="/images/factory-800.webp" alt="Industrial robots on an automated production line" loading="lazy" className="h-56 w-full rounded-2xl object-cover" />;
  }
}

const span: Record<string, string> = {
  sap: 'lg:col-span-4',
  ai: 'lg:col-span-2',
  'it-consulting': 'lg:col-span-2',
  drones: 'lg:col-span-2',
  software: 'lg:col-span-2',
  'hvac-government': 'lg:col-span-3',
  rnd: 'lg:col-span-3',
};
const order = ['sap', 'ai', 'it-consulting', 'drones', 'software', 'hvac-government', 'rnd'];

export function VerticalCards() {
  const list = order.map((s) => verticals.find((v) => v.slug === s)).filter((v): v is Vertical => Boolean(v));
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
      {list.map((v) => {
        const Icon = icons[v.slug] ?? Server;
        const big = v.slug === 'sap';
        return (
          <li key={v.slug} className={cn(span[v.slug])}>
            <Link
              href={`/services/${v.slug}`}
              className="group flex h-full flex-col rounded-[28px] border border-line bg-mist p-4 transition-colors duration-200 hover:border-violet/40 hover:bg-white"
            >
              <div className={cn('rounded-2xl', v.slug === 'hvac-government' && 'mb-6')}>
                <VerticalMedia v={v} />
              </div>
              <div className="flex flex-1 flex-col px-2 pt-6 pb-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white text-violet ring-1 ring-line">
                    <Icon aria-hidden className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3 className={cn('font-display font-semibold tracking-tight', big ? 'text-2xl md:text-3xl' : 'text-xl')}>{v.name}</h3>
                </div>
                <p className={cn('mt-3 leading-7 text-muted', big ? 'max-w-2xl text-[17px]' : 'text-[15px] leading-6')}>{v.card}</p>
                {v.research && <p className="mt-3 text-sm font-medium text-[#a2531a]">Research track, not a current service</p>}
                <span className="mt-auto pt-5 text-sm font-semibold text-violet underline decoration-violet/30 underline-offset-4 group-hover:decoration-violet">
                  Learn about {v.name}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

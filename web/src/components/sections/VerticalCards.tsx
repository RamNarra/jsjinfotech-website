import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { verticals } from '@/content/verticals';
import { Reveal } from '@/components/motion/Reveal';
import { cn } from '@/lib/cn';

export function VerticalCards() {
  return (
    <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-12">
      {verticals.map((v, i) => (
        <li key={v.slug} className={cn(i < 3 ? 'lg:col-span-4' : 'lg:col-span-3')}>
          <Reveal delay={i * 0.04} className="h-full">
            <Link
              href={`/services/${v.slug}`}
              className="group flex h-full min-h-56 flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-200 ease-standard hover:-translate-y-1 hover:border-violet motion-reduce:hover:translate-y-0"
            >
              <div className="flex items-start justify-between">
                <span className="font-mono text-sm text-violet">{v.number}</span>
                <ArrowUpRight aria-hidden className="size-5 text-muted transition-colors group-hover:text-violet" strokeWidth={1.5} />
              </div>
              <h3 className="mt-auto pt-10 font-display text-xl leading-7 font-semibold tracking-tight">{v.name}</h3>
              <p className="mt-2 text-[15px] leading-6 text-muted">{v.promise}</p>
              {v.research && <span className="mt-4 self-start rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-muted">Research track</span>}
            </Link>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}

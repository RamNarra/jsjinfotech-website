import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ROADMAP_PHASES, VISION_2030_STATEMENT } from '@/shared';
import { Reveal } from '@/components/ui/Reveal';

export function Roadmap() {
  return (
    <section className="section-y bg-soft">
      <div className="container-x">
        <Reveal className="max-w-3xl">
          <p className="t-eyebrow">Vision 2030</p>
          <h2 className="t-h2 mt-3">{VISION_2030_STATEMENT}</h2>
        </Reveal>

        <div className="relative mt-20">
          <div aria-hidden className="absolute left-[0.45rem] top-2 h-[calc(100%-0.5rem)] w-px bg-line lg:inset-x-0 lg:top-[0.45rem] lg:h-px lg:w-auto" />
          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {ROADMAP_PHASES.map((p, i) => (
              <li key={p.phaseNumber} className="relative pl-9 lg:pl-0 lg:pt-10">
                <span
                  aria-hidden
                  className={`absolute left-0 top-1 size-[0.95rem] rounded-full border border-brand lg:top-0 ${
                    i === ROADMAP_PHASES.length - 1 ? 'bg-brand' : 'bg-white'
                  }`}
                />
                <Reveal delay={i * 0.07}>
                  <p className="t-num">Phase {p.phaseNumber}</p>
                  <h3 className="t-h3 mt-2">{p.name}</h3>
                  <p className="t-small mt-2">{p.summary}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/vision-2030"
          className="group mt-14 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand-text hover:text-brand-hover"
        >
          See the full roadmap
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

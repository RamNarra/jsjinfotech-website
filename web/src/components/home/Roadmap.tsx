import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ROADMAP_PHASES, VISION_2030_STATEMENT } from '@/shared';
import { Reveal } from '@/components/ui/Reveal';

export function Roadmap() {
  return (
    <section className="section-y bg-deep relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-40 bg-dots [mask-image:radial-gradient(70%_80%_at_80%_0%,#000,transparent)]" />
      <div className="container-x relative">
        <Reveal className="max-w-4xl">
          <p className="t-eyebrow !text-white/80">Vision 2030</p>
          <h2 className="t-h2 mt-3 !text-[clamp(1.75rem,3vw,2.6rem)] !font-medium !leading-[1.2]">{VISION_2030_STATEMENT}</h2>
        </Reveal>

        <div className="relative mt-20">
          <div aria-hidden className="absolute left-[0.45rem] top-2 h-[calc(100%-0.5rem)] w-px bg-white/30 lg:inset-x-0 lg:top-[0.45rem] lg:h-px lg:w-auto" />
          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-8">
            {ROADMAP_PHASES.map((p, i) => (
              <li key={p.phaseNumber} className="relative pl-9 lg:pl-0 lg:pt-10">
                <span
                  aria-hidden
                  className={`absolute left-0 top-1 size-[0.95rem] rounded-full border border-white lg:top-0 ${
                    i === ROADMAP_PHASES.length - 1 ? 'bg-white' : 'bg-transparent'
                  }`}
                />
                <Reveal delay={i * 0.07}>
                  <p className="t-num !text-white/70">Phase {p.phaseNumber}</p>
                  <h3 className="t-h3 mt-2">{p.name}</h3>
                  <p className="t-small mt-2 !text-white/85">{p.summary}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/vision-2030"
          className="group mt-14 inline-flex items-center gap-2 text-[1.0625rem] font-medium text-white hover:text-white/80"
        >
          See the full roadmap
          <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

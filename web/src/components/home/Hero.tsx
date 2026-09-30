import { CalendarRange, MapPin } from 'lucide-react';
import { LinkButton } from '@/components/ui/Button';
import { BRAND, CORE_LAYERS } from '@/shared';
import { AutonomousCore } from './AutonomousCore';

/** A hand-cut underline that draws once beneath the key word. */
function Underline() {
  return (
    <svg aria-hidden viewBox="0 0 300 18" preserveAspectRatio="none" className="absolute -bottom-[0.2em] left-0 h-[0.28em] w-full overflow-visible">
      <path
        d="M3 12C70 3 150 3 297 9"
        fill="none"
        stroke="var(--color-brand)"
        strokeWidth={6}
        strokeLinecap="round"
        className="draw"
        vectorEffect="non-scaling-stroke"
        style={{ ['--len' as string]: 340, ['--i' as string]: 4 }}
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(55%_70%_at_88%_15%,rgb(0_112_242/0.14),transparent_70%),radial-gradient(45%_55%_at_0%_0%,rgb(0_112_242/0.07),transparent_70%)]"
      />
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-50 [mask-image:linear-gradient(180deg,#000,transparent_65%)]" />

      <div className="container-x relative grid items-center gap-14 pb-20 pt-12 lg:grid-cols-12 lg:gap-6 lg:pb-28 lg:pt-20">
        <div className="lg:col-span-7">
          <p className="t-eyebrow inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/80 px-4 py-1.5 backdrop-blur">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            Technology &amp; project execution
          </p>
          <h1 className="t-display mt-7 max-w-[15ch] !text-[clamp(2.9rem,6.2vw,5.6rem)]">
            Technology, carried all the way to{' '}
            <span className="relative inline-block whitespace-nowrap">
              delivery.
              <Underline />
            </span>
          </h1>
          <p className="t-lead mt-9 max-w-[36rem]">
            SAP, AI, software, drone technology and project management, brought together for
            enterprises, government organisations and institutions.
          </p>
          <div className="rise mt-11 flex flex-col gap-3 sm:flex-row" style={{ ['--i' as string]: 3 }}>
            <LinkButton href="/solutions" arrow>
              Explore solutions
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Talk to JSJ
            </LinkButton>
          </div>
        </div>

        <div className="relative pb-6 lg:col-span-5">
          <div className="art-panel rounded-[32px] border border-line/80 p-5 shadow-[0_30px_80px_-30px_rgb(0_64_176/0.35)] sm:p-8">
            <AutonomousCore legend={false} />
            <ul className="mt-2 flex flex-wrap justify-center gap-2">
              {CORE_LAYERS.map((l) => (
                <li key={l.id} className="rounded-full border border-line bg-white px-3.5 py-1.5 text-[0.9375rem] font-medium">
                  {l.name}
                </li>
              ))}
            </ul>
          </div>

          {/* Floating fact cards (real content only) */}
          <div className="absolute -bottom-14 -left-10 hidden w-64 rounded-2xl border border-white/70 bg-white/85 p-4 shadow-lift backdrop-blur-xl xl:block">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center rounded-xl bg-brand text-white">
                <CalendarRange aria-hidden className="size-5" />
              </span>
              <div>
                <p className="text-[0.9375rem] font-semibold leading-tight">Six-stage delivery</p>
                <p className="text-[0.875rem] text-ink-3">Requirement to support</p>
              </div>
            </div>
            <div aria-hidden className="mt-3 flex gap-1.5">
              {[0, 1, 2, 3, 4, 5].map((k) => (
                <span key={k} className={`h-1.5 flex-1 rounded-full ${k < 3 ? 'bg-brand' : 'bg-brand/25'}`} />
              ))}
            </div>
          </div>
          <div className="absolute -right-3 -top-5 hidden rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-lift backdrop-blur-xl xl:flex xl:items-center xl:gap-3">
            <MapPin aria-hidden className="size-5 text-brand-text" />
            <div>
              <p className="text-[0.9375rem] font-semibold leading-tight">{BRAND.address.city}</p>
              <p className="text-[0.875rem] text-ink-3">{BRAND.address.area}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

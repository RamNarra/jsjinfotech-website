import { LinkButton } from '@/components/ui/Button';
import { AutonomousCore } from './AutonomousCore';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[42rem] bg-[radial-gradient(60%_60%_at_82%_10%,rgb(0_112_242/0.12),transparent_70%),radial-gradient(40%_50%_at_8%_0%,rgb(0_112_242/0.06),transparent_70%)]"
      />
      <div className="container-x relative grid items-center gap-12 pb-24 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-32 lg:pt-24">
        <div className="lg:col-span-6">
          <p className="t-eyebrow inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-50 px-4 py-1.5">
            <span aria-hidden className="size-1.5 rounded-full bg-brand" />
            JSJ INFOTECH · Hyderabad
          </p>
          <h1 className="t-display mt-7 max-w-[13ch]">Technology, carried all the way to delivery.</h1>
          <p className="t-lead mt-8 max-w-[36rem]">
            An IT consulting and project execution company bringing SAP, AI, software, drone technology
            and project management together for enterprises, government organisations and institutions.
          </p>
          <div className="rise mt-11 flex flex-col gap-3 sm:flex-row" style={{ ['--i' as string]: 3 }}>
            <LinkButton href="/solutions" arrow>
              Explore solutions
            </LinkButton>
            <LinkButton href="/contact" variant="secondary">
              Talk to JSJ
            </LinkButton>
          </div>
          <p className="t-small mt-10 max-w-md !text-ink-3">Autonomous by Design.</p>
        </div>
        <div className="lg:col-span-6">
          <div className="art-panel rounded-[28px] border border-line p-6 shadow-card sm:p-10">
            <AutonomousCore />
          </div>
        </div>
      </div>
    </section>
  );
}

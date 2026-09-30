import { LinkButton } from '@/components/ui/Button';
import { AutonomousCore } from './AutonomousCore';

export function Hero() {
  return (
    <section className="container-x grid items-center gap-14 pb-20 pt-14 lg:grid-cols-12 lg:gap-8 lg:pb-28 lg:pt-24">
      <div className="lg:col-span-6">
        <p className="t-eyebrow">
          JSJ INFOTECH · Hyderabad
        </p>
        <h1 className="t-display mt-5 max-w-[14ch]">
          Technology, carried all the way to delivery.
        </h1>
        <p className="t-lead mt-7 max-w-[34rem]">
          An IT consulting and project execution company bringing SAP, AI, software, drone technology
          and project management together for enterprises, government organisations and institutions.
        </p>
        <div className="rise mt-10 flex flex-col gap-3 sm:flex-row" style={{ ['--i' as string]: 3 }}>
          <LinkButton href="/solutions" arrow>
            Explore solutions
          </LinkButton>
          <LinkButton href="/contact" variant="secondary">
            Talk to JSJ
          </LinkButton>
        </div>
      </div>
      <div className="lg:col-span-6">
        <AutonomousCore />
      </div>
    </section>
  );
}

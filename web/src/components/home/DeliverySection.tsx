import { Reveal } from '@/components/ui/Reveal';
import { Lifecycle } from './Lifecycle';

export function DeliverySection() {
  return (
    <section className="section-y bg-soft">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="t-eyebrow">How we execute</p>
          <h2 className="t-h2 mt-3">Six stages, with clear accountability at each.</h2>
          <p className="t-lead mt-5">
            A structured project lifecycle designed to reduce execution risk — from the first
            conversation about requirements to ongoing enhancement and support.
          </p>
        </Reveal>
        <Reveal className="mt-16" delay={0.05}>
          <Lifecycle />
        </Reveal>
      </div>
    </section>
  );
}

import { sgnMetrics } from '@/content/sap';
import { CountUp } from '@/components/motion/CountUp';

export function CapabilityRibbon() {
  return (
    <section aria-labelledby="ribbon-h" className="border-b border-line bg-paper relative">
      <h2 id="ribbon-h" className="sr-only">Capabilities and SGN Software track record</h2>
      <div className="container-x">
        
        <div className="py-16">
          <p className="text-[15px] font-semibold text-text">SGN Software track record, JSJ’s joint venture partner for SAP</p>
          <dl className="mt-6 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {sgnMetrics.map((m) => (
              <div key={m.label}>
                <dt className="order-2 mt-1 text-sm text-muted">{m.label}<span className="sr-only"> (SGN Software)</span></dt>
                <dd className="text-gradient font-display text-5xl font-semibold tracking-[-0.03em] md:text-6xl">
                  <CountUp value={m.value} suffix={m.suffix} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

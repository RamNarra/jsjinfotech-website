import { sgnMetrics } from '@/content/sap';
import { verticals } from '@/content/verticals';
import { CountUp } from '@/components/motion/CountUp';

export function CapabilityRibbon() {
  return (
    <section aria-labelledby="ribbon-h" className="border-b border-line bg-paper">
      <h2 id="ribbon-h" className="sr-only">Capabilities and SGN Software track record</h2>
      <div className="container-x">
        <ul className="grid grid-cols-2 border-x border-line sm:grid-cols-4 lg:grid-cols-7">
          {verticals.map((v) => (
            <li key={v.slug} className="border-r border-b border-line p-4 last:border-r-0 lg:border-b-0">
              <span className="font-mono text-xs text-violet">{v.number}</span>
              <p className="mt-2 text-sm leading-5 font-medium">{v.name}</p>
            </li>
          ))}
        </ul>
        <div className="py-12">
          <p className="label-caps text-muted">SGN Software track record — JSJ’s joint venture partner for SAP</p>
          <dl className="mt-6 grid grid-cols-2 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
            {sgnMetrics.map((m) => (
              <div key={m.label}>
                <dt className="order-2 mt-1 text-sm text-muted">{m.label}<span className="sr-only"> (SGN Software)</span></dt>
                <dd className="font-display text-4xl font-semibold tracking-tight text-violet-deep md:text-5xl">
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

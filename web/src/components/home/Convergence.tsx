import { Cpu, Building2, BrainCircuit } from 'lucide-react';
import { CORE_LAYERS } from '@/shared';

const LAYER_ICONS = [Cpu, Building2, BrainCircuit];
import { Reveal } from '@/components/ui/Reveal';

export function Convergence() {
  return (
    <section className="section-y bg-soft">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="t-eyebrow">The JSJ model</p>
          <h2 className="t-h2 mt-3">One organisation across the full stack.</h2>
          <p className="t-lead mt-5">
            Most technology vendors specialise in one layer — IT, or SAP, or AI, or facility
            maintenance. JSJ is built to span physical infrastructure, enterprise systems and the
            intelligence that connects them.
          </p>
        </Reveal>

        <div className="mt-16">
          <ol className="grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line md:grid-cols-3">
            {CORE_LAYERS.map((layer, i) => (
              <li key={layer.id} className="bg-white p-7 sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="grid size-12 place-items-center rounded-2xl bg-brand-50 text-brand-text">
                    {(() => {
                      const Icon = LAYER_ICONS[i];
                      return <Icon aria-hidden className="size-6" />;
                    })()}
                  </span>
                  <span className="t-num">0{i + 1}</span>
                </div>
                <h3 className="t-h3 mt-6">{layer.name}</h3>
                <p className="t-small mt-2">{layer.detail}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {layer.nodes.map((n) => (
                    <li
                      key={n}
                      className="rounded-full border border-line bg-soft px-3.5 py-1.5 text-[1rem] text-ink"
                    >
                      {n}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <div aria-hidden className="mx-auto h-10 w-px bg-brand/50" />
          <div className="rounded-[var(--radius-lg)] border border-brand/30 bg-white px-7 py-8 text-center shadow-card sm:px-10">
            <p className="t-eyebrow">JSJ Autonomous Core</p>
            <p className="t-h3 mx-auto mt-2 max-w-xl !font-medium">
              Every layer feeding one integrated, self-improving intelligence model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

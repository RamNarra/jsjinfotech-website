import { PARTNER_CLUSTERS, COLLABORATION_MODELS } from '@/shared';
import { Reveal } from '@/components/ui/Reveal';

export function Ecosystem({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? '' : 'section-y border-t border-line-soft'}>
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <p className="t-eyebrow">Strategic partnerships</p>
          <h2 className="t-h2 mt-3">An ecosystem built to execute.</h2>
          <p className="t-lead mt-5">
            Technology projects increasingly need several specialist organisations working as one.
            JSJ assembles the right combination of technology providers, specialists and
            implementation teams for each project.
          </p>
        </Reveal>

        <Reveal className="mt-16" delay={0.05}>
          <div className="flex justify-center">
            <p className="rounded-full border border-brand bg-brand-50 px-6 py-2.5 text-[1.0625rem] font-semibold text-brand-deep">
              JSJ INFOTECH · technology and project execution
            </p>
          </div>
          <div aria-hidden className="mx-auto h-8 w-px bg-line" />
          <div aria-hidden className="mx-auto hidden h-px w-[66%] bg-line md:block" />
          <div className="grid gap-x-10 gap-y-10 md:grid-cols-3">
            {PARTNER_CLUSTERS.map((c) => (
              <div key={c.name} className="relative md:pt-8">
                <span aria-hidden className="absolute left-1/2 top-0 hidden h-8 w-px bg-line md:block" />
                <p className="text-center text-[1.0625rem] font-semibold md:text-left">{c.name}</p>
                <ul className="mt-4 grid gap-0">
                  {c.items.map((it) => (
                    <li key={it} className="t-small border-t border-line py-3">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 rounded-[var(--radius-lg)] border border-line p-8 sm:p-10" delay={0.05}>
          <p className="text-[1.0625rem] font-semibold">Ways we can collaborate</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {COLLABORATION_MODELS.map((c) => (
              <li key={c} className="rounded-full bg-surface px-3.5 py-1.5 text-[1rem] text-ink-2">
                {c}
              </li>
            ))}
          </ul>
          <p className="t-small mt-6 !text-ink-3">
            JSJ seeks these collaborations. Partner names and logos will appear here once
            agreements are confirmed.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

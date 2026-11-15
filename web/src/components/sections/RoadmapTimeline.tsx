import { phases, roadmapDisclaimer } from '@/content/roadmap';
import { Reveal } from '@/components/motion/Reveal';

// JSJ INFOTECH 2030: four-phase journey from the corporate profile graphic (Today -> 2030).
export function RoadmapTimeline() {
  return (
    <div>
      <div className="relative">
        <div aria-hidden className="absolute top-[30px] right-0 left-0 hidden h-[3px] rounded-full bg-gradient-to-r from-teal via-violet to-magenta opacity-80 lg:block" />
        <ol className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((p, i) => (
            <li key={p.name}>
              <Reveal delay={i * 0.1} className="h-full">
                <div className="flex items-center gap-3">
                  <span className="relative z-10 inline-flex size-[60px] items-center justify-center rounded-full bg-white ring-4 ring-white" style={{ boxShadow: `0 0 0 2px ${p.color}33, 0 12px 30px -12px ${p.color}` }}>
                    <span className="inline-flex size-11 items-center justify-center rounded-full font-display text-lg font-semibold text-white" style={{ background: p.color }}>{i + 1}</span>
                  </span>
                  {p.today && <span className="label-caps text-muted">Today</span>}
                  {i === phases.length - 1 && <span className="label-caps" style={{ color: p.color }}>2030</span>}
                </div>
                <div className="card mt-6 h-[calc(100%-84px)] overflow-hidden rounded-3xl">
                  <div className="h-1.5" style={{ background: p.color }} />
                  <div className="p-6">
                    <p className="label-caps" style={{ color: p.color }}>{p.n}</p>
                    <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
                    <p className="mt-1 text-muted">{p.tag}</p>
                    <ul className="mt-5 space-y-2 text-[15px]">
                      {p.items.map((it) => (
                        <li key={it} className="flex items-center gap-2.5"><span aria-hidden className="size-1.5 rounded-full" style={{ background: p.color }} />{it}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
      <p className="mt-10 rounded-2xl border border-line bg-mist px-5 py-4 text-sm text-muted">{roadmapDisclaimer}</p>
    </div>
  );
}

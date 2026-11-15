import { phases, roadmapDisclaimer } from '@/content/roadmap';
import { Reveal } from '@/components/motion/Reveal';

export function RoadmapTimeline() {
  return (
    <div>
      <ol className="relative grid gap-6 md:grid-cols-3">
        <div aria-hidden className="absolute top-3 right-0 left-0 hidden h-px bg-gradient-to-r from-violet via-violet/60 to-green/70 md:block" />
        {phases.map((p, i) => (
          <li key={p.name} className="relative">
            <Reveal delay={i * 0.1}>
              <span aria-hidden className="relative z-10 block size-6 rounded-full border-4 border-paper bg-violet" />
              <p className="mt-5 label-caps text-violet">{p.n}</p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-3 leading-7 text-muted">{p.body}</p>
            </Reveal>
          </li>
        ))}
      </ol>
      <p className="mt-10 rounded-xl border border-line bg-mist px-5 py-4 text-sm text-muted">{roadmapDisclaimer}</p>
    </div>
  );
}

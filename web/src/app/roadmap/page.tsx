import { PageHero, H2, Eyebrow } from '@/components/ui';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { milestones, roadmapDisclaimer } from '@/content/roadmap';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Roadmap', 'JSJ INFOTECH 2030: from foundation to integration to autonomy across seven verticals. A strategic development ambition.', '/roadmap/');

const stage = [
  { key: 'p1', label: 'Today: foundation', color: '#0b7f91' },
  { key: 'p2', label: 'Next: integration', color: '#4379bd' },
  { key: 'p3', label: '2030: autonomy', color: '#a353a0' },
] as const;

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Innovation roadmap" title="JSJ INFOTECH 2030" lead={roadmapDisclaimer} />
      <section className="section-y">
        <div className="container-x">
          <RoadmapTimeline />
        </div>
      </section>
      <section className="section-y bg-mist">
        <div className="container-x">
          <Eyebrow>Vertical by vertical</Eyebrow>
          <H2 className="mb-10">Where each vertical is heading.</H2>
          <div className="hidden grid-cols-[180px_1fr_1fr_1fr] gap-4 pb-3 lg:grid">
            <span />
            {stage.map((s) => (
              <span key={s.key} className="flex items-center gap-2 text-sm font-semibold" style={{ color: s.color }}>
                <span className="size-2.5 rounded-full" style={{ background: s.color }} />{s.label}
              </span>
            ))}
          </div>
          <ul className="space-y-3">
            {milestones.map((m) => (
              <li key={m.vertical} className="grid gap-3 rounded-2xl bg-white p-4 ring-1 ring-line lg:grid-cols-[180px_1fr_1fr_1fr] lg:items-center lg:gap-4">
                <p className="font-display text-lg font-semibold">{m.vertical}</p>
                {stage.map((s) => (
                  <p key={s.key} className="rounded-xl px-4 py-3 text-[15px] leading-6" style={{ background: `${s.color}12`, boxShadow: `inset 3px 0 0 ${s.color}` }}>
                    <span className="block text-xs font-semibold lg:hidden" style={{ color: s.color }}>{s.label}</span>
                    {m[s.key]}
                  </p>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

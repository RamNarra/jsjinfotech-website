import { PageHero, H2 } from '@/components/ui';
import { RoadmapTimeline } from '@/components/sections/RoadmapTimeline';
import { milestones } from '@/content/roadmap';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Roadmap', 'JSJ INFOTECH 2030: Foundation, Integration and Autonomy. A strategic development ambition across seven verticals.', '/roadmap/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="JSJ INFOTECH 2030" title="From foundational systems to cross-vertical intelligence." lead="Every vertical moves from today’s proven capability toward AI-integrated operations." />
      <section className="section-y"><div className="container-x"><RoadmapTimeline /></div></section>
      <section className="section-y bg-mist">
        <div className="container-x">
          <H2 className="mb-10">Milestones by vertical</H2>
          <div className="overflow-x-auto rounded-2xl card">
            <table className="w-full min-w-[760px] text-left text-[15px]">
              <caption className="sr-only">Roadmap milestones per vertical and phase</caption>
              <thead><tr className="border-b border-line bg-mist"><th scope="col" className="p-4">Vertical</th><th scope="col" className="p-4">Phase I — Foundation</th><th scope="col" className="p-4">Phase II — Integration</th><th scope="col" className="p-4">Phase III — Autonomy</th></tr></thead>
              <tbody>
                {milestones.map((m) => (
                  <tr key={m.vertical} className="border-b border-line last:border-0">
                    <th scope="row" className="p-4 font-medium">{m.vertical}</th><td className="p-4 text-muted">{m.p1}</td><td className="p-4 text-muted">{m.p2}</td><td className="p-4 text-muted">{m.p3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

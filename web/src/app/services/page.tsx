import { PageHero } from '@/components/ui';
import { VerticalCards } from '@/components/sections/VerticalCards';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Services', 'Seven integrated verticals: IT consulting, SAP with SGN, AI, drones, software, HVAC government projects and new technology R&D.', '/services/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Services" title="One technology partner. Seven integrated verticals." lead="Each service line is a layer of one converged ecosystem, not a standalone offering." />
      <section className="section-y"><div className="container-x"><VerticalCards /></div></section>
      <ClosingCta />
    </>
  );
}

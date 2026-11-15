import { PageHero, Button } from '@/components/ui';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Insights', 'Notes from JSJ INFOTECH on SAP, AI, drones and smart infrastructure. Coming soon.', '/insights/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Insights" title="Insights are coming soon." lead="We will publish notes on SAP, AI and smart infrastructure here once approved for release." />
      <section className="section-y"><div className="container-x"><Button href="/contact">Ask us a question</Button></div></section>
    </>
  );
}

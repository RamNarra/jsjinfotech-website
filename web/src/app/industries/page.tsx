import { PageHero } from '@/components/ui';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Industries', 'Fourteen industries served by JSJ INFOTECH and SGN Software, from chemicals, steel and power to retail and banking.', '/industries/');


export default function Page() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Fourteen industries, one delivery model." lead="The same team and method, tuned to how each industry runs." />
      <section className="section-y">
        <div className="container-x">
          <IndustryGrid detailed />
          <p className="mt-6 text-sm text-muted">Use cases describe what we deliver in each industry. Specific references are available on request.</p>
        </div>
      </section>
      <ClosingCta />
    </>
  );
}

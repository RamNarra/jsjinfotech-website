import { PageHero } from '@/components/ui';
import { industries } from '@/content/industries';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Industries', 'Fourteen sectors served by JSJ INFOTECH and SGN Software, from government and utilities to chemicals, steel and retail.', '/industries/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Fourteen sectors. One delivery model." lead="Use cases below restate service capabilities. Specific references are available on request." />
      <section className="section-y">
        <ul className="container-x grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((x, i) => (
            <li key={x.name} className="rounded-2xl border border-line p-6">
              <span className="font-mono text-sm text-violet">{String(i + 1).padStart(2, '0')}</span>
              <h2 className="mt-4 font-display text-xl font-semibold">{x.name}</h2>
              <p className="mt-2 text-[15px] leading-6 text-muted">{x.use}</p>
            </li>
          ))}
        </ul>
      </section>
      <ClosingCta />
    </>
  );
}

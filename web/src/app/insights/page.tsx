import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { getInsights } from '@/lib/content/adapter';
import { BRAND } from '@/shared';
import { PageHero } from '@/components/ui/PageHero';
import { LinkButton } from '@/components/ui/Button';

export const metadata: Metadata = pageMetadata({
  title: 'Insights',
  description: 'Practical perspectives on technology, transformation and project execution from JSJ INFOTECH.',
  path: '/insights',
});

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <>
      <PageHero
        trail={[{ name: 'Insights' }]}
        eyebrow="Insights"
        title="Insights from JSJ INFOTECH"
        lead="Practical perspectives on technology, transformation and project execution."
      />
      <section className="container-x pb-28">
        {insights.length === 0 ? (
          <div className="max-w-3xl border-t border-line pt-10">
            <p className="t-h3 !font-medium">New articles will appear here.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LinkButton href={BRAND.linkedinUrl} variant="secondary">
                Follow JSJ on LinkedIn
              </LinkButton>
              <LinkButton href="/contact" variant="text" arrow>
                Talk to the team
              </LinkButton>
            </div>
          </div>
        ) : (
          <ul className="max-w-3xl border-b border-line">
            {insights.map((i) => (
              <li key={i.slug} className="border-t border-line py-7">
                <time dateTime={i.publishedAt} className="t-num">
                  {i.publishedAt}
                </time>
                <h2 className="t-h3 mt-2">{i.title}</h2>
                <p className="t-small mt-2">{i.excerpt}</p>
                {i.author ? <p className="t-small mt-2 !text-ink-3">{i.author}</p> : null}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}

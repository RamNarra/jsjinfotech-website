import { PageHero } from '@/components/ui';

export type LegalSection = { h: string; p: string[] };

// VERIFY: all legal text is a draft pending owner's lawyer review (OD-08).
export function LegalPage({ title, lead, sections, updated = '15 November 2026' }: { title: string; lead: string; sections: LegalSection[]; updated?: string }) {
  return (
    <>
      <PageHero eyebrow="Legal" title={title} lead={lead} />
      <section className="section-y">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-muted">Last updated: {updated}. Draft pending legal review.</p>
          {sections.map((s) => (
            <div key={s.h} className="mt-10">
              <h2 className="font-display text-2xl font-semibold">{s.h}</h2>
              {s.p.map((t) => <p key={t} className="mt-3 leading-7 text-muted">{t}</p>)}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { ROADMAP_PHASES, VISION_2030_CLOSING, VISION_2030_STATEMENT } from '@/shared';
import { PageHero } from '@/components/ui/PageHero';
import { ClosingCta } from '@/components/ui/ClosingCta';
import { Reveal } from '@/components/ui/Reveal';

export const metadata: Metadata = pageMetadata({
  title: 'Vision 2030',
  description: 'JSJ INFOTECH’s four-phase roadmap to 2030: Foundation, Integration, Intelligence and Autonomy.',
  path: '/vision-2030',
});

export default function VisionPage() {
  return (
    <>
      <PageHero
        trail={[{ name: 'Vision 2030' }]}
        eyebrow="Vision 2030"
        title="From vendor to intelligence partner."
      />

      <section className="container-x pb-24">
        <Reveal className="max-w-3xl">
          <p className="t-h2 !font-medium">{VISION_2030_STATEMENT}</p>
          <p className="t-lead mt-8">{VISION_2030_CLOSING}</p>
        </Reveal>
      </section>

      <section className="section-y bg-soft">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <p className="t-eyebrow">Roadmap</p>
            <h2 className="t-h2 mt-3">Four phases, every vertical.</h2>
            <p className="t-lead mt-5">
              The path moves each vertical from proven capability today toward AI-integrated,
              increasingly autonomous operations. This is JSJ&apos;s stated direction, not a description
              of deployed capability.
            </p>
          </Reveal>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-lg)] border border-line bg-line lg:grid-cols-4">
            {ROADMAP_PHASES.map((p) => (
              <li key={p.phaseNumber} className="bg-white p-7">
                <p className="t-num">Phase {p.phaseNumber}</p>
                <h3 className="t-h3 mt-2">{p.name}</h3>
                <p className="t-small mt-2">{p.summary}</p>
                <ul className="mt-6">
                  {p.items.map((it) => (
                    <li key={it.vertical} className="border-t border-line py-3">
                      <span className="t-num block">{it.vertical}</span>
                      <span className="mt-0.5 block text-[0.9375rem] leading-snug">{it.milestone}</span>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ClosingCta title="Plan the next phase with JSJ." />
    </>
  );
}

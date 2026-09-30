import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/ui/PageHero';
import { SolutionsIndex } from '@/components/home/SolutionsIndex';
import { ClosingCta } from '@/components/ui/ClosingCta';

export const metadata: Metadata = pageMetadata({
  title: 'Solutions',
  description: 'Digital & IT consulting, SAP, AI, cybersecurity, software, digital content, drone technology, project management and government technology from JSJ INFOTECH.',
  path: '/solutions',
});

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        trail={[{ name: 'Solutions' }]}
        eyebrow="Solutions"
        title="Nine capabilities, one delivery model."
        lead="Enterprise platforms, intelligent systems, software, and field technology — assessed, planned, implemented and supported through one structured lifecycle."
      />
      <SolutionsIndex heading={false} />
      <ClosingCta />
    </>
  );
}

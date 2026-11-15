/* eslint-disable @next/next/no-img-element */
import { PageHero } from '@/components/ui';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Industries', 'Fourteen industries served by JSJ INFOTECH and SGN Software, from chemicals, steel and power to retail and banking.', '/industries/');

const photos: { src: string; alt: string; label: string }[] = [
  { src: '/images/gen/drone-sm.webp', alt: 'Survey drone over a factory and solar field', label: 'Manufacturing and energy' },
  { src: '/images/gen/sap-finance-sm.webp', alt: 'Finance team reviewing ERP dashboards', label: 'Enterprise operations' },
  { src: '/images/gen/hvac-govt-sm.webp', alt: 'Technician inspecting rooftop HVAC chillers', label: 'Public infrastructure' },
  { src: '/images/gen/it-noc-sm.webp', alt: 'Network operations centre', label: 'High tech and banking' },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Industries" title="Fourteen industries, one delivery model." lead="The same team and method, tuned to how each industry runs." />
      <section className="pt-16">
        <ul className="container-x grid grid-cols-2 gap-4 lg:grid-cols-4">
          {photos.map((p) => (
            <li key={p.src} className="relative overflow-hidden rounded-[24px]">
              <img src={p.src} alt={p.alt} loading="lazy" className="h-48 w-full object-cover md:h-64" />
              <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold backdrop-blur">{p.label}</span>
            </li>
          ))}
        </ul>
      </section>
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

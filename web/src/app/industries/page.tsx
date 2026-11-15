/* eslint-disable @next/next/no-img-element */
import { PageHero } from '@/components/ui';
import { IndustryGrid } from '@/components/sections/IndustryGrid';
import { ClosingCta } from '@/components/sections/ClosingCta';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Industries', 'Fourteen industries served by JSJ INFOTECH and SGN Software, from chemicals, steel and power to retail and banking.', '/industries/');

const photos: { src: string; alt: string; label: string; credit?: string }[] = [
  { src: '/images/factory-800.webp', alt: 'Robots on an automated production line', label: 'Manufacturing' },
  { src: '/images/solar-800.webp', alt: 'Solar farm seen from above', label: 'Renewable energy' },
  { src: '/images/hvac-800.webp', alt: 'Air handling unit in a plant room', label: 'Public infrastructure' },
  { src: '/images/datacenter-800.webp', alt: 'Rows of server racks in a data centre', label: 'High tech', credit: 'Photo: Carl Lender, CC BY 2.0' },
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
              {p.credit && <span className="absolute top-2 right-3 text-[10px] text-white/90 drop-shadow">{p.credit}</span>}
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

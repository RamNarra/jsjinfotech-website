import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RoadmapTimeline } from '@/components/roadmap/RoadmapTimeline';
import { BRAND } from '@/shared';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Vision 2030: The Journey to Autonomy | JSJ INFOTECH',
  description:
    'The 2030 strategic roadmap of JSJ INFOTECH: moving from operational vendor to converged intelligence partner across government and enterprise infrastructure.',
  alternates: { canonical: '/vision-2030' },
};

export default function Vision2030Page() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-white text-[#12171C] bg-enterprise-grid border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] text-xs font-mono uppercase tracking-wider font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              JSJ INFOTECH · 2030 Horizon
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12171C] leading-tight">
              From Operational Vendor to Intelligence Partner.
            </h1>
            <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
              Our declared forward path across infrastructure, enterprise systems, and artificial intelligence through the year 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Official 2030 Vision Statement Verbatim from Corporate Profile Page 8 */}
      <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#F7F9FC] text-[#12171C] border border-[#DDE3EA] shadow-sm relative overflow-hidden">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-4">
              Official Charter · Corporate Profile Page 8
            </span>

            <blockquote className="text-lg sm:text-2xl font-medium text-[#12171C] leading-relaxed italic mb-8 border-l-4 border-[#0070F2] pl-4">
              &ldquo;{BRAND.vision2030}&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-[#DDE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-[#5B738B]">
              <div>
                <span className="text-[#12171C] font-bold">{BRAND.name}</span> · Executive Strategy
              </div>
              <div className="text-[#0070F2] font-semibold">
                Target Horizon: 2030 · Full Cross-Vertical Autonomy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 4-Phase Roadmap */}
      <RoadmapTimeline />

      {/* Engagement CTA */}
      <section className="py-16 bg-[#F7F9FC] text-[#12171C] border-t border-[#DDE3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
            Partner with JSJ on the 2030 Journey
          </h2>
          <p className="text-[#475E75] text-sm max-w-lg mx-auto">
            Explore collaborative pilots, joint innovation sandboxes, and long-term infrastructure AMC engagements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] transition-all shadow-sm"
            >
              Contact Technology Practice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

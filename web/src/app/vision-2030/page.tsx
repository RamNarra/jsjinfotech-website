import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { RoadmapTimeline } from '@/components/roadmap/RoadmapTimeline';
import { BRAND } from '@/shared';
import { Milestone, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

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
      <section className="py-20 bg-[#07112D] text-white bg-dark-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              JSJ INFOTECH · 2030 Horizon
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              From Operational Vendor to Intelligence Partner.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Our declared forward path across infrastructure, enterprise systems, and artificial intelligence through the year 2030.
            </p>
          </div>
        </div>
      </section>

      {/* Official 2030 Vision Statement Verbatim from Corporate Profile Page 8 */}
      <section className="py-20 bg-white text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#07112D] text-white border border-cyan-500/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-4">
              Official Charter · Corporate Profile Page 8
            </span>

            <blockquote className="text-lg sm:text-2xl font-medium text-slate-100 leading-relaxed italic mb-8">
              &ldquo;{BRAND.vision2030}&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
              <div>
                <span className="text-white font-bold">{BRAND.name}</span> · Executive Strategy
              </div>
              <div className="text-cyan-300">
                Target Horizon: 2030 · Full Cross-Vertical Autonomy
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 4-Phase Roadmap */}
      <RoadmapTimeline />

      {/* Engagement CTA */}
      <section className="py-16 bg-[#0B1E42] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Partner with JSJ on the 2030 Journey
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Explore collaborative pilots, joint innovation sandboxes, and long-term infrastructure AMC engagements.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25"
            >
              Contact Technology Practice
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

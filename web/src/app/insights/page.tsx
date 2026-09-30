import { LinkedinIcon } from '@/components/ui/icons';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getInsights } from '@/lib/content/adapter';
import { BRAND } from '@/shared';
import { BookOpen, Clock, ArrowUpRight, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Insights & Technical Research | JSJ INFOTECH',
  description:
    'Engineering papers, technical analyses, and deployment strategies covering enterprise SAP S/4HANA, autonomous drone AI, and facility convergence.',
  alternates: { canonical: '/insights' },
};

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#07112D] text-white bg-dark-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-400/30 text-cyan-300 text-xs font-mono uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              JSJ Research & Analysis
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Engineering Insights & Strategic Architecture.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Perspectives on bridging physical machinery, enterprise ERP systems, and machine learning at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles List */}
      <section className="py-20 bg-[#F5F7FB] text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-1">
                Featured Technical Publications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
                Recent Whitepapers & Case Frameworks.
              </h2>
            </div>
            <a
              href={BRAND.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-900 bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm"
            >
              <LinkedinIcon className="w-4 h-4" />
              Follow on LinkedIn for Real-Time Updates
            </a>
          </div>

          <div className="space-y-6 max-w-4xl">
            {insights.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="p-8 rounded-3xl bg-white border border-[#DDE4EF] hover:border-cyan-400 hover:shadow-xl transition-all duration-200 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                  <span className="font-mono text-cyan-700 font-bold uppercase">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-slate-400 font-mono text-[11px]">
                    <span>Published {item.publishedAt}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readingTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#07112D] leading-snug">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 font-medium">
                    Authored by {item.author}
                  </span>
                  <Link
                    href={`/contact?interest=artificial-intelligence`}
                    className="text-xs font-semibold text-cyan-700 hover:text-cyan-900 flex items-center gap-1"
                  >
                    Discuss this research with our practice →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

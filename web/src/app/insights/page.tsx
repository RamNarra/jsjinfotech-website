import { LinkedinIcon } from '@/components/ui/icons';
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getInsights } from '@/lib/content/adapter';
import { BRAND } from '@/shared';
import { BookOpen, Clock } from 'lucide-react';

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
      <section className="py-16 lg:py-20 bg-white text-[#12171C] bg-enterprise-grid border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] text-xs font-mono uppercase tracking-wider font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              JSJ Research & Analysis
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12171C] leading-tight">
              Engineering Insights & Strategic Architecture.
            </h1>
            <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
              Perspectives on bridging physical machinery, enterprise ERP systems, and machine learning at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Main Articles List */}
      <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-1">
                Featured Technical Publications
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
                Recent Whitepapers & Case Frameworks.
              </h2>
            </div>
            <a
              href={BRAND.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#0070F2] hover:text-[#0057D2] bg-white px-4 py-2.5 rounded-lg border border-[#DDE3EA] shadow-sm transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              Follow on LinkedIn
            </a>
          </div>

          <div className="space-y-6 max-w-4xl">
            {insights.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="p-8 rounded-xl bg-white border border-[#DDE3EA] hover:border-[#0070F2]/60 hover:shadow-sm transition-all duration-200 space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between text-xs gap-2">
                  <span className="font-mono text-[#0070F2] font-bold uppercase">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-2 text-[#5B738B] font-mono text-[11px]">
                    <span>Published {item.publishedAt}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readingTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#12171C] leading-snug">
                  {item.title}
                </h3>

                <p className="text-[#475E75] text-sm leading-relaxed">
                  {item.excerpt}
                </p>

                <div className="pt-4 border-t border-[#DDE3EA] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#5B738B] font-medium">
                    Authored by {item.author}
                  </span>
                  <Link
                    href={`/contact?interest=artificial-intelligence`}
                    className="text-xs font-semibold text-[#0070F2] hover:text-[#0057D2] flex items-center gap-1"
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

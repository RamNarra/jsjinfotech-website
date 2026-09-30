import { LinkedinIcon } from '@/components/ui/icons';
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Clock } from 'lucide-react';
import { getInsights } from '@/lib/content/adapter';
import { BRAND } from '@/shared';

export async function InsightsPreview() {
  const insights = await getInsights();

  return (
    <section className="py-24 bg-[#F5F7FB] text-[#101A33]" id="insights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
              Engineering Thought Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#07112D]">
              Insights from the Autonomous Frontier.
            </h2>
            <p className="mt-4 text-[#5E6B85] text-base sm:text-lg">
              Research, technical analyses, and deployment strategies bridging physical infrastructure, enterprise ERP, and machine learning.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <a
              href={BRAND.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-blue-700 hover:text-blue-900 transition-colors"
              aria-label="Follow JSJ INFOTECH on LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
              Follow on LinkedIn
            </a>
            <Link
              href="/insights"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#07112D] hover:text-cyan-700 transition-colors"
            >
              All Articles <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Articles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insights.map((item) => (
            <article
              key={item.slug}
              className="p-7 rounded-2xl bg-white border border-[#DDE4EF] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-mono text-cyan-700 font-bold uppercase text-[11px]">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1 text-slate-400 text-[11px] font-mono">
                    <Clock className="w-3 h-3" />
                    {item.readingTime}
                  </div>
                </div>

                <h3 className="text-base font-bold text-[#07112D] group-hover:text-cyan-800 transition-colors line-clamp-2 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs text-[#5E6B85] leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {item.author}
                </span>
                <Link
                  href={`/insights#${item.slug}`}
                  className="text-xs font-semibold text-cyan-700 hover:text-cyan-900 flex items-center gap-1"
                >
                  Read Analysis <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

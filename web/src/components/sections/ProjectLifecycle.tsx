import React from 'react';
import { PROJECT_DELIVERY_STAGES } from '@/shared';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ProjectLifecycle() {
  return (
    <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]" id="delivery-approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
            Structured Execution Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12171C]">
            Our 6-Stage Project Delivery Approach.
          </h2>
          <p className="mt-3 text-[#475E75] text-base sm:text-lg">
            A disciplined project lifecycle designed to reduce execution risks, provide clear accountability, and ensure technology investments yield measurable outcomes.
          </p>
        </div>

        {/* 6 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_DELIVERY_STAGES.map((stage) => (
            <div
              key={stage.stepNumber}
              className="p-6 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA] hover:border-[#0070F2]/60 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-lg bg-[#EBF8FF] text-[#0070F2] border border-[#D1EFFF] font-mono font-bold text-sm flex items-center justify-center">
                    {stage.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono uppercase text-[#5B738B] font-semibold">
                    {stage.subtitle}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#12171C] group-hover:text-[#0070F2] transition-colors">
                  {stage.title}
                </h3>

                <p className="mt-2 text-xs text-[#475E75] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDE3EA] flex items-center justify-between text-[11px] font-mono text-[#0070F2]">
                <span>Stage 0{stage.stepNumber} of 06</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#0070F2]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/solutions/project-management"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0070F2] hover:text-[#0057D2]"
          >
            Explore Project Management & Governance Capabilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

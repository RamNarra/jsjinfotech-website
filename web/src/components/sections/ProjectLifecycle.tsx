import React from 'react';
import { PROJECT_DELIVERY_STAGES } from '@/shared';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function ProjectLifecycle() {
  return (
    <section className="py-24 bg-white text-[#101A33] border-b border-[#DDE4EF]" id="delivery-approach">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
            Structured Execution Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#07112D]">
            Our 6-Stage Project Delivery Approach.
          </h2>
          <p className="mt-4 text-[#5E6B85] text-base sm:text-lg">
            A disciplined project lifecycle designed to reduce execution risks, provide clear accountability, and ensure technology investments yield measurable outcomes.
          </p>
        </div>

        {/* 6 Stages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECT_DELIVERY_STAGES.map((stage) => (
            <div
              key={stage.stepNumber}
              className="p-7 rounded-2xl bg-[#F8FAFD] border border-[#DDE4EF] hover:border-cyan-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#07112D] text-cyan-400 font-mono font-bold text-sm flex items-center justify-center shadow-md">
                    {stage.stepNumber}
                  </span>
                  <span className="text-[11px] font-mono uppercase text-slate-500 font-semibold">
                    {stage.subtitle}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#07112D] group-hover:text-cyan-800 transition-colors">
                  {stage.title}
                </h3>

                <p className="mt-2.5 text-xs text-[#5E6B85] leading-relaxed">
                  {stage.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-mono text-cyan-800">
                <span>Stage 0{stage.stepNumber} of 06</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/solutions/project-management"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-700 hover:text-cyan-900"
          >
            Explore Project Management & Governance Capabilities <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, SOLUTIONS_LIST } from '@/shared';
import { ShieldCheck, Cpu, Building2, Phone, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About JSJ INFOTECH | Autonomous by Design',
  description:
    'JSJ INFOTECH is a future-focused technology and engineering company building the intelligent systems that run tomorrow’s enterprises, cities, and government infrastructure.',
  alternates: { canonical: '/company' },
};

export default function CompanyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#07112D] text-white bg-dark-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              Corporate Profile · JSJ INFOTECH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Building the Intelligent Systems of Tomorrow — Today.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Operating at the intersection of enterprise IT, SAP systems, artificial intelligence, autonomous drones, custom software, and smart infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative (Profile Page 3 Citation) */}
      <section className="py-20 bg-white text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block">
                Foundational Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
                A Single, Future-Ready Technology Partner.
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                JSJ INFOTECH is a future-focused technology and engineering company building the intelligent systems that will run tomorrow&apos;s enterprises, cities, and government infrastructure — today.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                A diversified technology and engineering organisation, JSJ INFOTECH operates at the intersection of enterprise IT, SAP systems, artificial intelligence, autonomous drones, custom software, and government infrastructure (HVAC) maintenance. The company is built to be a single, future-ready technology partner — one that doesn&apos;t just maintain today&apos;s systems, but continuously upgrades them with AI, automation, and connected intelligence.
              </p>

              {/* Core Operating Principles */}
              <div className="pt-4 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#07112D]">Converged Full-Stack Capability</h3>
                    <p className="text-xs text-slate-500">Unifying physical electromechanical assets, enterprise software ledgers, and cognitive AI.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#07112D]">Sovereign Indian Engineering Integrity</h3>
                    <p className="text-xs text-slate-500">Strict adherence to national data protection regulations (DPDP 2025) and sovereign cloud security.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-[#07112D]">Predictive Maintenance Over Reactive Repairs</h3>
                    <p className="text-xs text-slate-500">Deploying real-time sensor telemetry and machine learning to resolve anomalies before system outage occurs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts Card */}
            <div className="lg:col-span-5 bg-[#07112D] text-white rounded-3xl p-8 border border-cyan-500/30 shadow-2xl">
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold block mb-4">
                Corporate Baseline
              </span>

              <div className="space-y-4 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Brand Identity:</span>
                  <span className="text-white font-bold">{BRAND.name}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Core Slogan:</span>
                  <span className="text-cyan-300 font-bold">&ldquo;{BRAND.tagline}&rdquo;</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Headquarters:</span>
                  <span className="text-white font-bold">{BRAND.location}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Key Sectors:</span>
                  <span className="text-white font-bold">Government & Enterprise</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Direct Phone:</span>
                  <a href={`tel:${BRAND.phone}`} className="text-cyan-400 hover:underline">
                    {BRAND.displayPhone}
                  </a>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Support Desk:</span>
                  <a href={`mailto:${BRAND.supportEmail}`} className="text-cyan-400 hover:underline">
                    {BRAND.supportEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9 Converged Verticals Summary */}
      <section className="py-20 bg-[#F5F7FB] text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
              Technology Scope
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
              Our 9 Core Capability Verticals.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {SOLUTIONS_LIST.map((sol) => (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="p-6 rounded-2xl bg-white border border-[#DDE4EF] hover:border-cyan-400 transition-colors group block"
              >
                <span className="text-[10px] font-mono uppercase text-cyan-700 font-bold block mb-1">
                  {sol.layer} Layer
                </span>
                <h3 className="text-sm font-bold text-[#07112D] group-hover:text-cyan-800 transition-colors">
                  {sol.title}
                </h3>
                <p className="mt-2 text-xs text-slate-500 line-clamp-2">
                  {sol.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#07112D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to partner with JSJ INFOTECH?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Contact our business development and technical advisory desks.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25"
            >
              Start Technology Engagement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND, SOLUTIONS_LIST, PROJECT_DELIVERY_STAGES } from '@/shared';
import { StrategicPartnerships } from '@/components/sections/StrategicPartnerships';
import { ProjectLifecycle } from '@/components/sections/ProjectLifecycle';
import { ShieldCheck, Cpu, Building2, Phone, Mail, CheckCircle2, ArrowRight, Target, MapPin } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About JSJ INFOTECH | Hyderabad IT Consulting & Project Execution',
  description:
    'JSJ INFOTECH is a technology-driven IT consulting and project execution company based in Hyderabad, delivering scalable, secure, and practical solutions across enterprises, government, and institutions.',
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
              Technology-Driven IT Consulting & Project Execution.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Based in Hyderabad, we build practical, scalable, and secure technology platforms—guiding initiatives from concept and planning through implementation, integration, deployment, and ongoing optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Corporate Overview */}
      <section className="py-20 bg-white text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block">
                Foundational Positioning
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
                A Strong, Project-Oriented Technology Platform.
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                JSJ INFOTECH is a technology-driven IT consulting and project execution company based in Hyderabad. The company aims to build a strong project-oriented technology platform capable of handling initiatives across the complete lifecycle:
              </p>
              
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-cyan-900 leading-relaxed font-semibold">
                Concept → Planning → Implementation → Integration → Deployment → Optimisation → Ongoing Management.
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Rather than limiting our role to technology advisory, we focus on practical implementation and measurable project outcomes. With Hyderabad established as one of India&apos;s premier technology and innovation centres, JSJ INFOTECH is positioned to collaborate with technology providers, system integrators, software companies, AI specialists, drone technology companies, and strategic partners to execute projects across India and international markets.
              </p>
            </div>

            {/* Quick Facts Card with Hyderabad Address */}
            <div className="lg:col-span-5 bg-[#07112D] text-white rounded-3xl p-8 border border-cyan-500/30 shadow-2xl">
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold block mb-4">
                Corporate Identification
              </span>

              <div className="space-y-3.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Company Name:</span>
                  <span className="text-white font-bold">{BRAND.name}</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Positioning Slogan:</span>
                  <span className="text-cyan-300 font-bold">&ldquo;{BRAND.tagline}&rdquo;</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-start">
                  <span className="text-slate-400 shrink-0">Registered Office:</span>
                  <span className="text-white font-medium text-right text-[11px] leading-tight ml-4">
                    {BRAND.address.formatted}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Client Sectors:</span>
                  <span className="text-white font-bold">Government, Enterprise & Institutions</span>
                </div>
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center">
                  <span className="text-slate-400">Direct Telephone:</span>
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

      {/* Mission Section with 8 Specific Operational Objectives */}
      <section className="py-20 bg-[#F5F7FB] text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-100 text-cyan-800 text-xs font-mono uppercase tracking-wider mb-3">
              <Target className="w-3.5 h-3.5" />
              Strategic Mission & Objectives
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#07112D]">
              Our Mission.
            </h2>
            <blockquote className="mt-3 text-base sm:text-lg text-slate-700 italic border-l-4 border-cyan-500 pl-4 py-1">
              &ldquo;{BRAND.mission}&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BRAND.missionObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-[#DDE4EF] flex items-start gap-3.5 hover:border-cyan-400 transition-colors"
              >
                <div className="w-6 h-6 rounded-lg bg-cyan-50 text-cyan-700 font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {obj}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6-Stage Delivery Approach */}
      <ProjectLifecycle />

      {/* Strategic Partnerships Section */}
      <StrategicPartnerships />

      {/* Conversion CTA */}
      <section className="py-16 bg-[#07112D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to partner with JSJ INFOTECH?
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Contact our Jubilee Hills engagement office or connect with our executive team.
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

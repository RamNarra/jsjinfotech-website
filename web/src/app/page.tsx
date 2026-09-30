import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, CheckCircle2, ChevronRight, MapPin } from 'lucide-react';
import { AutonomousCore } from '@/components/hero/AutonomousCore';
import { ConvergenceModel } from '@/components/convergence/ConvergenceModel';
import { CapabilityGrid } from '@/components/services/CapabilityGrid';
import { GovernmentEnterpriseSplit } from '@/components/sections/GovernmentEnterpriseSplit';
import { IntelligenceStack } from '@/components/sections/IntelligenceStack';
import { ProjectLifecycle } from '@/components/sections/ProjectLifecycle';
import { StrategicPartnerships } from '@/components/sections/StrategicPartnerships';
import { RoadmapTimeline } from '@/components/roadmap/RoadmapTimeline';
import { InsightsPreview } from '@/components/sections/InsightsPreview';
import { ContactForm } from '@/components/forms/ContactForm';
import { BRAND } from '@/shared';

export default function HomePage() {
  return (
    <>
      {/* SECTION 01: HERO */}
      <section className="relative min-h-[92vh] flex items-center bg-[#07112D] text-white overflow-hidden py-16 lg:py-24 bg-dark-grid">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-cyan-500/15 via-violet-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-xs font-mono tracking-wider uppercase">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                {BRAND.name} · Hyderabad, India
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white">
                Technology that moves toward{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400">
                  autonomy.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                A technology-driven IT consulting and project execution company based in Hyderabad. Operating across enterprise IT, SAP, AI, custom software, autonomous drones, project management, and government system modernisations.
              </p>

              {/* Two Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="#solutions"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/25 transition-all text-center flex items-center justify-center gap-2 group"
                >
                  Explore 9 Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-cyan-400/40 transition-all text-center"
                >
                  Talk to JSJ
                </Link>
              </div>

              {/* Metrics Bar */}
              <div className="pt-8 border-t border-white/10 grid grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-mono">09</div>
                  <div className="text-[11px] text-slate-400 font-mono uppercase mt-0.5">Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-white font-mono">06</div>
                  <div className="text-[11px] text-slate-400 font-mono uppercase mt-0.5">Stages</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-violet-400 font-mono">01</div>
                  <div className="text-[11px] text-slate-400 font-mono uppercase mt-0.5">Converged AI</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-cyan-400 font-mono">2030</div>
                  <div className="text-[11px] text-slate-400 font-mono uppercase mt-0.5">Horizon</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Autonomous Core Visual */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <AutonomousCore />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE JSJ DIFFERENCE (3-LAYER CONVERGENCE MODEL) */}
      <ConvergenceModel />

      {/* SECTION 03: CAPABILITY GRID (9 SOLUTIONS) */}
      <CapabilityGrid />

      {/* SECTION 04: GOVERNMENT + ENTERPRISE DUAL POSITIONING */}
      <GovernmentEnterpriseSplit />

      {/* SECTION 05: TECHNOLOGY STACK ARCHITECTURE */}
      <IntelligenceStack />

      {/* SECTION 06: 6-STAGE PROJECT DELIVERY APPROACH */}
      <ProjectLifecycle />

      {/* SECTION 07: STRATEGIC PARTNERSHIPS ECOSYSTEM */}
      <StrategicPartnerships />

      {/* SECTION 08: 2030 ROADMAP (TIMELINE PROGRESSION) */}
      <RoadmapTimeline />

      {/* SECTION 09: INSIGHTS & THOUGHT LEADERSHIP */}
      <InsightsPreview />

      {/* SECTION 10: FINAL CTA & DIRECT ENGAGEMENT */}
      <section className="py-24 bg-[#07112D] text-white relative overflow-hidden" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                Direct Commercial Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
                Let&apos;s Build What&apos;s Next.
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                We welcome engagement from government departments, municipal bodies, enterprises, and strategic partners seeking a reliable technology execution partner.
              </p>

              <div className="p-5 rounded-2xl bg-[#0B1E42] border border-cyan-500/20 space-y-3 text-xs">
                <div className="flex items-start gap-2 text-white font-mono">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{BRAND.address.formatted}</span>
                </div>
                <div className="flex items-center gap-2 text-white font-mono">
                  <span className="text-cyan-400">Direct Phone:</span> {BRAND.displayPhone}
                </div>
                <div className="flex items-center gap-2 text-white font-mono">
                  <span className="text-cyan-400">Support Desk:</span> {BRAND.supportEmail}
                </div>
                <div className="flex items-center gap-2 text-white font-mono">
                  <span className="text-cyan-400">Executive Desk:</span> {BRAND.executiveEmail}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Encrypted transmission. Compliant with DPDP Rules 2025.</span>
              </div>
            </div>

            {/* Right Contact Form Card */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

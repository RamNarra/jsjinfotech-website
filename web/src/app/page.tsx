import React from 'react';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
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
      <section className="relative min-h-[90vh] flex items-center bg-white text-[#12171C] overflow-hidden py-16 lg:py-20 bg-enterprise-grid border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] text-xs font-mono tracking-wider uppercase font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#0070F2]" />
                {BRAND.name} · Hyderabad, India
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-[#12171C]">
                Technology that moves toward{' '}
                <span className="text-[#0070F2]">
                  autonomy.
                </span>
              </h1>

              <p className="text-[#475E75] text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal">
                A technology-driven IT consulting and project execution company based in Hyderabad. Operating across enterprise IT, SAP, AI, custom software, autonomous drones, project management, and government system modernisations.
              </p>

              {/* Two Primary CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="#solutions"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] shadow-sm transition-all text-center flex items-center justify-center gap-2 group"
                >
                  Explore 9 Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#12171C] bg-white hover:bg-[#F7F9FC] border border-[#DDE3EA] transition-all text-center shadow-sm"
                >
                  Talk to JSJ
                </Link>
              </div>

              {/* Metrics Bar */}
              <div className="pt-8 border-t border-[#DDE3EA] grid grid-cols-4 gap-4 max-w-lg mx-auto lg:mx-0 text-center lg:text-left">
                <div>
                  <div className="text-2xl font-black text-[#0070F2] font-mono">09</div>
                  <div className="text-[11px] text-[#475E75] font-mono uppercase mt-0.5">Solutions</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#12171C] font-mono">06</div>
                  <div className="text-[11px] text-[#475E75] font-mono uppercase mt-0.5">Stages</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#0070F2] font-mono">01</div>
                  <div className="text-[11px] text-[#475E75] font-mono uppercase mt-0.5">Converged AI</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-[#12171C] font-mono">2030</div>
                  <div className="text-[11px] text-[#475E75] font-mono uppercase mt-0.5">Horizon</div>
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
      <section className="py-24 bg-[#F7F9FC] text-[#12171C] border-t border-[#DDE3EA] relative overflow-hidden" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Context */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-bold block">
                Direct Commercial Engagement
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12171C]">
                Let&apos;s Build What&apos;s Next.
              </h2>
              <p className="text-[#475E75] text-base leading-relaxed">
                We welcome engagement from government departments, municipal bodies, enterprises, and strategic partners seeking a reliable technology execution partner.
              </p>

              <div className="p-6 rounded-2xl bg-white border border-[#DDE3EA] shadow-sm space-y-3 text-xs">
                <div className="flex items-start gap-2 text-[#12171C] font-mono">
                  <MapPin className="w-4 h-4 text-[#0070F2] shrink-0 mt-0.5" />
                  <span>{BRAND.address.formatted}</span>
                </div>
                <div className="flex items-center gap-2 text-[#12171C] font-mono">
                  <span className="text-[#0070F2] font-semibold">Direct Phone:</span> {BRAND.displayPhone}
                </div>
                <div className="flex items-center gap-2 text-[#12171C] font-mono">
                  <span className="text-[#0070F2] font-semibold">Support Desk:</span> {BRAND.supportEmail}
                </div>
                <div className="flex items-center gap-2 text-[#12171C] font-mono">
                  <span className="text-[#0070F2] font-semibold">Executive Desk:</span> {BRAND.executiveEmail}
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#5B738B]">
                <ShieldCheck className="w-4 h-4 text-[#0070F2]" />
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

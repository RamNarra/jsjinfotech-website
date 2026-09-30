import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { BRAND } from '@/shared';
import { StrategicPartnerships } from '@/components/sections/StrategicPartnerships';
import { ProjectLifecycle } from '@/components/sections/ProjectLifecycle';
import { Target } from 'lucide-react';

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
      <section className="py-16 lg:py-20 bg-white text-[#12171C] bg-enterprise-grid border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block">
              Corporate Profile · JSJ INFOTECH
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12171C] leading-tight">
              Technology-Driven IT Consulting & Project Execution.
            </h1>
            <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
              Based in Hyderabad, we build practical, scalable, and secure technology platforms—guiding initiatives from concept and planning through implementation, integration, deployment, and ongoing optimization.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Corporate Overview */}
      <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block">
                Foundational Positioning
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
                A Strong, Project-Oriented Technology Platform.
              </h2>
              <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
                JSJ INFOTECH is a technology-driven IT consulting and project execution company based in Hyderabad. The company aims to build a strong project-oriented technology platform capable of handling initiatives across the complete lifecycle:
              </p>
              
              <div className="p-4 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] text-xs font-mono text-[#0070F2] leading-relaxed font-semibold">
                Concept → Planning → Implementation → Integration → Deployment → Optimisation → Ongoing Management.
              </div>

              <p className="text-[#475E75] text-sm sm:text-base leading-relaxed">
                Rather than limiting our role to technology advisory, we focus on practical implementation and measurable project outcomes. With Hyderabad established as one of India&apos;s premier technology and innovation centres, JSJ INFOTECH is positioned to collaborate with technology providers, system integrators, software companies, AI specialists, drone technology companies, and strategic partners to execute projects across India and international markets.
              </p>
            </div>

            {/* Quick Facts Card with Hyderabad Address */}
            <div className="lg:col-span-5 bg-[#F7F9FC] text-[#12171C] rounded-2xl p-8 border border-[#DDE3EA] shadow-sm">
              <span className="text-xs font-mono uppercase text-[#0070F2] tracking-wider font-semibold block mb-4">
                Corporate Identification
              </span>

              <div className="space-y-3 text-xs font-mono">
                <div className="p-3 rounded-lg bg-white border border-[#DDE3EA] flex justify-between items-center">
                  <span className="text-[#5B738B]">Company Name:</span>
                  <span className="text-[#12171C] font-bold">{BRAND.name}</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#DDE3EA] flex justify-between items-center">
                  <span className="text-[#5B738B]">Positioning Slogan:</span>
                  <span className="text-[#0070F2] font-bold">&ldquo;{BRAND.tagline}&rdquo;</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#DDE3EA] flex justify-between items-start">
                  <span className="text-[#5B738B] shrink-0">Registered Office:</span>
                  <span className="text-[#12171C] font-medium text-right text-[11px] leading-tight ml-4">
                    {BRAND.address.formatted}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#DDE3EA] flex justify-between items-center">
                  <span className="text-[#5B738B]">Client Sectors:</span>
                  <span className="text-[#12171C] font-bold">Government, Enterprise & Institutions</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#DDE3EA] flex justify-between items-center">
                  <span className="text-[#5B738B]">Direct Telephone:</span>
                  <a href={`tel:${BRAND.phone}`} className="text-[#0070F2] hover:underline font-semibold">
                    {BRAND.displayPhone}
                  </a>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#DDE3EA] flex justify-between items-center">
                  <span className="text-[#5B738B]">Support Desk:</span>
                  <a href={`mailto:${BRAND.supportEmail}`} className="text-[#0070F2] hover:underline font-semibold">
                    {BRAND.supportEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section with 8 Specific Operational Objectives */}
      <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FF] text-[#0070F2] border border-[#D1EFFF] text-xs font-mono uppercase tracking-wider mb-3 font-semibold">
              <Target className="w-3.5 h-3.5" />
              Strategic Mission & Objectives
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#12171C]">
              Our Mission.
            </h2>
            <blockquote className="mt-3 text-base sm:text-lg text-[#475E75] italic border-l-4 border-[#0070F2] pl-4 py-1">
              &ldquo;{BRAND.mission}&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BRAND.missionObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-[#DDE3EA] flex items-start gap-3.5 hover:border-[#0070F2]/60 hover:shadow-sm transition-all"
              >
                <div className="w-6 h-6 rounded-md bg-[#EBF8FF] text-[#0070F2] font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <p className="text-xs sm:text-sm text-[#475E75] font-medium leading-relaxed">
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
      <section className="py-16 bg-[#F7F9FC] text-[#12171C] border-t border-[#DDE3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
            Ready to partner with JSJ INFOTECH?
          </h2>
          <p className="text-[#475E75] text-sm max-w-lg mx-auto">
            Contact our Jubilee Hills engagement office or connect with our executive team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] transition-all shadow-sm"
            >
              Start Technology Engagement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

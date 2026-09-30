'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Milestone } from 'lucide-react';
import { ROADMAP_PHASES } from '@/shared';

interface VerticalJourney {
  vertical: string;
  p1: string;
  p2: string;
  p3: string;
  p4: string;
}

const VERTICAL_PROGRESSION: VerticalJourney[] = [
  {
    vertical: 'SAP & Enterprise ERP',
    p1: 'Core ECC to S/4HANA baseline implementation & clean core setup',
    p2: 'Bi-directional IoT connectors & real-time automated field work orders',
    p3: 'Machine learning anomaly-driven procurement & auto-inventory balancing',
    p4: 'Autonomous enterprise workflows self-adjusting to operational shifts',
  },
  {
    vertical: 'Autonomous Drones',
    p1: 'Manual pilot-directed aerial surveys & 2D photogrammetry mapping',
    p2: 'Scheduled autonomous flight corridors & automated LiDAR point clouds',
    p3: 'Edge AI computer vision classifying thermal leaks & structural rust in flight',
    p4: 'Autonomous drone swarms executing continuous perimeter audits',
  },
  {
    vertical: 'Smart Infrastructure / HVAC',
    p1: 'Baseline preventive AMC maintenance & manual technician logs',
    p2: 'Non-invasive IoT telemetry streaming vibration, power, and temps',
    p3: 'Predictive time-series models alerting to compressor failure weeks ahead',
    p4: 'Zero-touch self-optimising facilities adjusting dynamic loads autonomously',
  },
  {
    vertical: 'Software Engineering',
    p1: 'Custom bespoke web & mobile applications for operational logging',
    p2: 'API-first microservices & unified integration middleware gateways',
    p3: 'AI-embedded copilot interfaces & automated incident triage scripts',
    p4: 'Self-improving, self-healing platforms adapting to user load patterns',
  },
];

export function RoadmapTimeline() {
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(0);
  const currentPhase = ROADMAP_PHASES[activePhaseIndex];

  return (
    <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA] relative overflow-hidden" id="roadmap">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Milestone className="w-3.5 h-3.5" />
            Strategic Evolution Horizon
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12171C]">
            The 2030 Roadmap: Journey to Autonomy.
          </h2>
          <p className="mt-3 text-[#475E75] text-base sm:text-lg">
            Translating the corporate profile’s four-phase journey into measurable technological milestones across physical infrastructure, enterprise software, and artificial intelligence.
          </p>
        </div>

        {/* Phase Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {ROADMAP_PHASES.map((phase, idx) => {
            const isSelected = activePhaseIndex === idx;
            return (
              <button
                key={phase.phaseNumber}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0070F2] ${
                  isSelected
                    ? 'bg-white border-[#0070F2] shadow-sm scale-[1.01]'
                    : 'bg-[#F7F9FC] border-[#DDE3EA] hover:bg-white hover:border-[#0070F2]/40'
                }`}
                aria-pressed={isSelected}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#0070F2]">
                    PHASE {phase.phaseNumber}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#0070F2]' : 'bg-[#DDE3EA]'}`} />
                </div>
                <h3 className="text-sm font-bold text-[#12171C] tracking-tight">{phase.name}</h3>
                <span className="text-[11px] text-[#475E75] line-clamp-1 mt-0.5">{phase.tagline}</span>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details + Vertical Cross-Comparison */}
        <div className="bg-[#F7F9FC] border border-[#DDE3EA] rounded-2xl p-6 sm:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#DDE3EA] pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono uppercase text-[#0070F2] tracking-widest font-bold">
                Phase {currentPhase.phaseNumber} Execution Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#12171C] mt-1">
                {currentPhase.name}: {currentPhase.tagline}
              </h3>
            </div>
            <div className="text-xs font-mono text-[#475E75] bg-white px-4 py-2 rounded-lg border border-[#DDE3EA]">
              Horizon Target: {activePhaseIndex === 3 ? '2030 (Full Autonomy)' : `Phase 0${activePhaseIndex + 1}`}
            </div>
          </div>

          <p className="text-[#475E75] text-sm sm:text-base leading-relaxed max-w-4xl mb-8">
            {currentPhase.description}
          </p>

          {/* Phase Key Milestones */}
          <div className="mb-10">
            <h4 className="text-xs font-mono uppercase text-[#5B738B] tracking-wider mb-4 font-semibold">
              Primary System Deliverables in this Phase
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentPhase.milestones.map((milestone) => (
                <div key={milestone} className="p-3.5 rounded-xl bg-white border border-[#DDE3EA] flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#0070F2] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#12171C] font-medium">{milestone}</span>
                </div>
              ))}
            </div>
          </div>

          {/* How Each Vertical Evolves in this Phase */}
          <div>
            <h4 className="text-xs font-mono uppercase text-[#5B738B] tracking-wider mb-4 font-semibold">
              Vertical Capability Matrix During Phase {currentPhase.phaseNumber}
            </h4>
            <div className="space-y-2.5">
              {VERTICAL_PROGRESSION.map((v) => {
                const phaseKey = `p${activePhaseIndex + 1}` as keyof VerticalJourney;
                const status = v[phaseKey];
                return (
                  <div
                    key={v.vertical}
                    className="p-3.5 rounded-xl bg-white border border-[#DDE3EA] flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                  >
                    <span className="text-xs font-bold text-[#0070F2] sm:w-1/3 shrink-0">
                      {v.vertical}
                    </span>
                    <span className="text-xs text-[#475E75] font-normal sm:w-2/3">
                      {status}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-[#DDE3EA] flex flex-wrap items-center justify-between gap-4">
            <span className="text-xs text-[#5B738B] font-mono">
              Aligned with JSJ INFOTECH Corporate Charter
            </span>
            <Link
              href="/vision-2030"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0070F2] hover:text-[#0057D2] transition-colors"
            >
              Read Complete 2030 Vision Statement <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

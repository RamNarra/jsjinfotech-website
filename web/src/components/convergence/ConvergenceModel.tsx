'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Layers, ArrowRight, Activity, Server, Cpu, CheckCircle2 } from 'lucide-react';

interface LayerInfo {
  id: string;
  name: string;
  category: string;
  icon: React.ReactNode;
  verticals: string[];
  description: string;
  telemetryStream: string;
  impactMetric: string;
}

const LAYERS: LayerInfo[] = [
  {
    id: 'physical',
    name: '01. Physical Layer',
    category: 'Edge & Infrastructure',
    icon: <Activity className="w-5 h-5 text-[#0070F2]" />,
    verticals: ['HVAC Facility AMC', 'Autonomous Drones', 'IoT Sensor Telemetry', 'BMS Edge Nodes'],
    description:
      'Where real-world operations happen. We maintain central chiller plants and civic facilities while deploying precision drone inspections, capturing high-frequency physical telemetry at the edge.',
    telemetryStream: 'Acoustic vibration, thermal gradients, compressor current, aerial LiDAR, GIS orthomosaics',
    impactMetric: 'Eliminates unexpected equipment failure and maps physical degradation in real time.',
  },
  {
    id: 'enterprise',
    name: '02. Enterprise Layer',
    category: 'Systems & Workflows',
    icon: <Server className="w-5 h-5 text-[#0070F2]" />,
    verticals: ['SAP S/4HANA', 'Enterprise ERP', 'Custom Software Platforms', 'Hybrid Cloud IT'],
    description:
      'The operational engine. Physical telemetry is transformed directly into enterprise workflows—automatically generating SAP Plant Maintenance work orders, updating asset registries, and managing inventory.',
    telemetryStream: 'Transactional ledgers, work order dispatch, SLA countdowns, zero-trust network authentication',
    impactMetric: 'Connects board-level financial accounting to real-time shop-floor and facility telemetry.',
  },
  {
    id: 'intelligence',
    name: '03. Intelligence Layer',
    category: 'Cognitive & Predictive',
    icon: <Cpu className="w-5 h-5 text-[#0070F2]" />,
    verticals: ['Computer Vision Defect AI', 'Time-Series Predictive Twins', 'AIOps Self-Healing', 'Applied R&D'],
    description:
      'The reasoning brain. Custom machine learning models analyze streaming multi-modal data to detect anomalies, forecast failures weeks in advance, and orchestrate self-healing responses.',
    telemetryStream: 'Trained neural defect classifiers, predictive failure probability scores, automated remediation scripts',
    impactMetric: 'Enables true autonomy: systems that report on themselves, predict needs, and self-direct.',
  },
];

export function ConvergenceModel() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('physical');
  const selectedLayer = LAYERS.find((l) => l.id === selectedLayerId) || LAYERS[0];

  return (
    <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA] relative overflow-hidden" id="convergence">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Layers className="w-3.5 h-3.5" />
            The JSJ Convergence Model
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12171C]">
            From Disconnected Systems to{' '}
            <span className="text-[#0070F2]">
              Connected Intelligence.
            </span>
          </h2>
          <p className="mt-4 text-[#475E75] text-base sm:text-lg leading-relaxed">
            Most technology vendors deliver only one slice—IT, or SAP, or facility maintenance. JSJ converges all three
            layers into one unified autonomous loop.
          </p>
        </div>

        {/* 3 Interactive Layer Cards + Active Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 3 Layer Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {LAYERS.map((layer) => {
              const isCurrent = layer.id === selectedLayerId;
              return (
                <button
                  key={layer.id}
                  onClick={() => setSelectedLayerId(layer.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 relative focus:outline-none focus:ring-2 focus:ring-[#0070F2] ${
                    isCurrent
                      ? 'bg-white border-[#0070F2] shadow-md scale-[1.01]'
                      : 'bg-white/80 border-[#DDE3EA] hover:border-[#0070F2]/50 hover:bg-white'
                  }`}
                  aria-pressed={isCurrent}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF]">
                        {layer.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#12171C] text-base tracking-tight">{layer.name}</h3>
                        <span className="text-xs text-[#5B738B] font-mono">{layer.category}</span>
                      </div>
                    </div>
                    <ArrowRight
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isCurrent ? 'translate-x-1 text-[#0070F2]' : 'text-[#5B738B]'
                      }`}
                    />
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {layer.verticals.map((v) => (
                      <span
                        key={v}
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-[#F5F6F7] border border-[#DDE3EA] text-[#475E75] font-medium"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}

            {/* Convergence Arrow down to Core */}
            <div className="p-4 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] text-center">
              <span className="text-xs font-mono uppercase tracking-wider text-[#0070F2] font-semibold">
                ↓↓ All Layers Converge Into ↓↓
              </span>
              <div className="text-sm font-bold text-[#12171C] mt-0.5">JSJ AUTONOMOUS CORE</div>
            </div>
          </div>

          {/* Right Column: Deep Inspection Panel */}
          <div className="lg:col-span-7 bg-white border border-[#DDE3EA] rounded-3xl p-6 sm:p-8 shadow-sm relative">
            <div className="flex items-center justify-between border-b border-[#DDE3EA] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF]">
                  {selectedLayer.icon}
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-[#0070F2] tracking-wider font-semibold">Active Convergence Focus</span>
                  <h3 className="text-xl font-bold text-[#12171C]">{selectedLayer.name}</h3>
                </div>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#EBF8FF] text-[#0070F2] border border-[#D1EFFF] font-mono font-medium">
                {selectedLayer.category}
              </span>
            </div>

            <p className="text-[#475E75] text-base leading-relaxed mb-6">
              {selectedLayer.description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA]">
                <span className="text-xs font-mono uppercase text-[#5B738B] font-semibold block mb-1">
                  Telemetry Ingestion & Data Flow
                </span>
                <p className="text-xs text-[#12171C] font-mono leading-relaxed">
                  {selectedLayer.telemetryStream}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA] flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#0070F2] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono uppercase text-[#5B738B] font-semibold block mb-0.5">
                    Autonomous Outcome
                  </span>
                  <p className="text-xs text-[#475E75] leading-relaxed">
                    {selectedLayer.impactMetric}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DDE3EA] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-[#5B738B] font-mono">
                Part of the 4-Phase 2030 Roadmap
              </span>
              <Link
                href="/vision-2030"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#0070F2] hover:text-[#0057D2] transition-colors"
              >
                Explore 2030 Roadmap <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

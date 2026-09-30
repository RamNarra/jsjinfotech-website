import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { IntelligenceStack } from '@/components/sections/IntelligenceStack';
import { AutonomousCore } from '@/components/hero/AutonomousCore';
import { ConvergenceModel } from '@/components/convergence/ConvergenceModel';
import { BRAND } from '@/shared';
import { Cpu, ShieldCheck, ArrowRight, Network } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Technology Architecture & Autonomous Core | JSJ INFOTECH',
  description:
    'Full-stack technology architecture converging physical IoT sensors, drone computer vision, enterprise SAP S/4HANA, and predictive machine learning models.',
  alternates: { canonical: '/technology' },
};

export default function TechnologyPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-[#07112D] text-white bg-dark-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              System Engineering Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              The Technology Fabric of Autonomy.
            </h1>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              How JSJ engineers bridge real-world physical telemetry from chillers and drones directly into SAP business logic and neural models.
            </p>
          </div>
        </div>
      </section>

      {/* Autonomous Core Architecture Interactive */}
      <section className="py-20 bg-[#0B1E42] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase text-cyan-400 tracking-wider font-bold block">
                The Central Engine
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                The JSJ Autonomous Core.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Rather than managing disjointed vendor contracts for IT, facility AMC, drone inspections, and software builds, JSJ converges all data streams into a unified self-optimizing system.
              </p>
              <div className="p-4 rounded-2xl bg-[#07112D] border border-cyan-500/20 text-xs text-slate-300 space-y-2">
                <div className="flex items-center gap-2 text-cyan-300 font-semibold font-mono">
                  <Cpu className="w-4 h-4" /> Real-Time Telemetric Bus
                </div>
                <p>
                  High-throughput event streaming utilizing MQTT, Kafka, and secure WebSocket channels with hardware-rooted mutual TLS (mTLS).
                </p>
              </div>
            </div>
            <div className="lg:col-span-6 flex items-center justify-center">
              <AutonomousCore />
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Stack */}
      <IntelligenceStack />

      {/* Convergence Model */}
      <ConvergenceModel />
    </>
  );
}

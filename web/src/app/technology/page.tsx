import React from 'react';
import type { Metadata } from 'next';
import { IntelligenceStack } from '@/components/sections/IntelligenceStack';
import { AutonomousCore } from '@/components/hero/AutonomousCore';
import { ConvergenceModel } from '@/components/convergence/ConvergenceModel';
import { Cpu } from 'lucide-react';

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
      <section className="py-16 lg:py-20 bg-white text-[#12171C] bg-enterprise-grid border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block">
              System Engineering Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12171C]">
              The Technology Fabric of Autonomy.
            </h1>
            <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
              How JSJ engineers bridge real-world physical telemetry from chillers and drones directly into SAP business logic and neural models.
            </p>
          </div>
        </div>
      </section>

      {/* Autonomous Core Architecture Interactive */}
      <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono uppercase text-[#0070F2] tracking-wider font-semibold block">
                The Central Engine
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#12171C]">
                The JSJ Autonomous Core.
              </h2>
              <p className="text-[#475E75] text-sm sm:text-base leading-relaxed">
                Rather than managing disjointed vendor contracts for IT, facility AMC, drone inspections, and software builds, JSJ converges all data streams into a unified self-optimizing system.
              </p>
              <div className="p-5 rounded-2xl bg-white border border-[#DDE3EA] shadow-sm text-xs text-[#475E75] space-y-2">
                <div className="flex items-center gap-2 text-[#0070F2] font-semibold font-mono">
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

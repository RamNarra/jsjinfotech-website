import React from 'react';
import { STRATEGIC_PARTNERSHIP_ECOSYSTEM } from '@/shared';
import { Handshake, ArrowRight, Network } from 'lucide-react';
import Link from 'next/link';

export function StrategicPartnerships() {
  return (
    <section className="py-24 bg-[#0B1E42] text-white relative overflow-hidden" id="partnerships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-wider mb-4">
            <Handshake className="w-3.5 h-3.5" />
            Strategic Technology Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            An Ecosystem Built to Execute.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Complex technology projects require collaboration between specialist organisations. JSJ brings together internal capabilities and accredited global technology partners into a flexible delivery fabric.
          </p>
        </div>

        {/* 8 Partnership Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRATEGIC_PARTNERSHIP_ECOSYSTEM.map((partner) => (
            <div
              key={partner.category}
              className="p-6 rounded-2xl bg-[#07112D]/80 border border-white/10 hover:border-cyan-400/50 hover:bg-[#07112D] transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="w-2 h-2 rounded-full bg-cyan-400 block mb-3 group-hover:scale-125 transition-transform" />
                <h3 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {partner.category}
                </h3>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 text-[10px] font-mono text-cyan-400/80 uppercase">
                Collaboration Track
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Box */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-[#07112D] to-violet-950/40 border border-cyan-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-white">Our Integrated Value Proposition</h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl font-mono">
              Technology + Project Management + AI + SAP + Software + Emerging Technologies + Strategic Partnerships.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-cyan-400 hover:bg-cyan-300 transition-colors shrink-0 shadow-lg shadow-cyan-500/20"
          >
            Explore Partnership Opportunities →
          </Link>
        </div>
      </div>
    </section>
  );
}

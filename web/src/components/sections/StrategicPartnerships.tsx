import React from 'react';
import { STRATEGIC_PARTNERSHIP_ECOSYSTEM } from '@/shared';
import { Handshake } from 'lucide-react';
import Link from 'next/link';

export function StrategicPartnerships() {
  return (
    <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA] relative overflow-hidden" id="partnerships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2] text-xs font-mono uppercase tracking-wider mb-4 font-semibold">
            <Handshake className="w-3.5 h-3.5" />
            Strategic Technology Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12171C]">
            An Ecosystem Built to Execute.
          </h2>
          <p className="mt-3 text-[#475E75] text-base sm:text-lg">
            Complex technology projects require collaboration between specialist organisations. JSJ brings together internal capabilities and accredited global technology partners into a flexible delivery fabric.
          </p>
        </div>

        {/* 8 Partnership Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STRATEGIC_PARTNERSHIP_ECOSYSTEM.map((partner) => (
            <div
              key={partner.category}
              className="p-6 rounded-xl bg-white border border-[#DDE3EA] hover:border-[#0070F2]/60 hover:shadow-sm transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <span className="w-2 h-2 rounded-full bg-[#0070F2] block mb-3 group-hover:scale-125 transition-transform" />
                <h3 className="text-sm font-bold text-[#12171C] group-hover:text-[#0070F2] transition-colors">
                  {partner.category}
                </h3>
                <p className="mt-2 text-xs text-[#475E75] leading-relaxed">
                  {partner.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#DDE3EA] text-[10px] font-mono text-[#0070F2] font-semibold uppercase">
                Collaboration Track
              </div>
            </div>
          ))}
        </div>

        {/* Value Proposition Box */}
        <div className="mt-12 p-8 rounded-2xl bg-white border border-[#DDE3EA] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-bold text-[#12171C]">Our Integrated Value Proposition</h3>
            <p className="text-xs sm:text-sm text-[#475E75] max-w-2xl font-mono">
              Technology + Project Management + AI + SAP + Software + Emerging Technologies + Strategic Partnerships.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] transition-all shrink-0 shadow-sm"
          >
            Explore Partnership Opportunities →
          </Link>
        </div>
      </div>
    </section>
  );
}

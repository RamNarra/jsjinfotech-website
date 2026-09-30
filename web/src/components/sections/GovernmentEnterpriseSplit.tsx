import React from 'react';
import Link from 'next/link';
import { Landmark, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export function GovernmentEnterpriseSplit() {
  const govtPillars = [
    { title: 'Civic Infrastructure AMC', desc: 'HVAC central cooling & mechanical maintenance across state secretariats & civic hubs.' },
    { title: 'Autonomous Drone Auditing', desc: 'DGCA-compliant UAV land survey, asset inventory, and encroachment monitoring.' },
    { title: 'Sovereign E-Governance IT', desc: 'Secure document digitization, public portal development, and resilient hybrid cloud.' },
    { title: 'Zero-Trust Public Defense', desc: 'DPDP 2025 compliance, OT network isolation, and state data sovereignty protection.' },
  ];

  const enterprisePillars = [
    { title: 'SAP S/4HANA Modernisation', desc: 'Clean-core migration, BTP extension development, and continuous BASIS administration.' },
    { title: 'Predictive Industrial AI', desc: 'Time-series machine learning anomaly detection cutting unscheduled factory downtime.' },
    { title: 'Custom Cloud Platforms', desc: 'High-throughput microservices, API middleware, and automated logistics portals.' },
    { title: 'Critical Facility Cooling', desc: 'Precision HVAC maintenance and BMS telemetry for data centers & corporate campuses.' },
  ];

  return (
    <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA] relative overflow-hidden" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
            Dual Strategic Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12171C]">
            Engineered for Sovereign Scale and Global Enterprise.
          </h2>
          <p className="mt-3 text-[#475E75] text-base sm:text-lg">
            Whether ensuring 100% uptime for civic administrative complexes or modernizing global SAP supply chains, JSJ delivers unified engineering accountability.
          </p>
        </div>

        {/* Split Screen Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Government Column */}
          <div className="bg-white border border-[#DDE3EA] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#0070F2]/60 hover:shadow-md transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-[#0070F2]" />
                </div>
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#EBF8FF] text-[#0070F2] border border-[#D1EFFF] font-semibold">
                  Public Sector & Sovereign
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#12171C] group-hover:text-[#0070F2] transition-colors">
                Government & Public Infrastructure
              </h3>
              <p className="mt-3 text-sm text-[#475E75] leading-relaxed">
                Empowering public departments and institutions with turnkey digital foundations, compliant physical facility maintenance, and automated aerial inspection programs.
              </p>

              <div className="mt-8 space-y-3.5">
                {govtPillars.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0070F2] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#12171C]">{item.title}</h4>
                      <p className="text-[11px] text-[#475E75] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDE3EA] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5B738B]">Sovereign Compliance & AMC</span>
              <Link
                href="/industries/government"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0070F2] hover:text-[#0057D2] transition-colors"
              >
                Government Practice <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Enterprise Column */}
          <div className="bg-white border border-[#DDE3EA] rounded-2xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#0070F2]/60 hover:shadow-md transition-all duration-200 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-[#0070F2]" />
                </div>
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-[#EBF8FF] text-[#0070F2] border border-[#D1EFFF] font-semibold">
                  Corporate & Industrial
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#12171C] group-hover:text-[#0070F2] transition-colors">
                Enterprise & Industrial Platforms
              </h3>
              <p className="mt-3 text-sm text-[#475E75] leading-relaxed">
                Transforming legacy ERP into intelligent systems, scaling predictive machine learning, and breaking down boundaries between physical plants and executive software.
              </p>

              <div className="mt-8 space-y-3.5">
                {enterprisePillars.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA] flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0070F2] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-[#12171C]">{item.title}</h4>
                      <p className="text-[11px] text-[#475E75] mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#DDE3EA] flex items-center justify-between">
              <span className="text-xs font-mono text-[#5B738B]">S/4HANA & Operational Scale</span>
              <Link
                href="/industries/enterprise"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0070F2] hover:text-[#0057D2] transition-colors"
              >
                Enterprise Practice <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import Link from 'next/link';
import { Landmark, Briefcase, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
    <section className="py-24 bg-[#07112D] text-white relative overflow-hidden" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
            Dual Strategic Engagement
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Engineered for Sovereign Scale and Global Enterprise.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Whether ensuring 100% uptime for civic administrative complexes or modernizing global SAP supply chains, JSJ delivers unified engineering accountability.
          </p>
        </div>

        {/* Split Screen Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Government Column */}
          <div className="bg-[#0B1E42]/80 border border-cyan-500/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-cyan-400/60 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-950/80 border border-cyan-400/40 flex items-center justify-center">
                  <Landmark className="w-6 h-6 text-cyan-400" />
                </div>
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  Public Sector & Sovereign
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                Government & Public Infrastructure
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Empowering public departments and institutions with turnkey digital foundations, compliant physical facility maintenance, and automated aerial inspection programs.
              </p>

              <div className="mt-8 space-y-4">
                {govtPillars.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-[#07112D]/80 border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-300/80">Sovereign Compliance & AMC</span>
              <Link
                href="/industries/government"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:text-white transition-colors"
              >
                Government Practice <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Enterprise Column */}
          <div className="bg-[#0B1E42]/80 border border-violet-500/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-violet-400/60 transition-all duration-300 group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-violet-950/80 border border-violet-400/40 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-violet-400" />
                </div>
                <span className="text-xs font-mono uppercase px-3 py-1 rounded-full bg-violet-950 text-violet-300 border border-violet-500/30">
                  Corporate & Industrial
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                Enterprise & Industrial Platforms
              </h3>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Transforming legacy ERP into intelligent systems, scaling predictive machine learning, and breaking down boundaries between physical plants and executive software.
              </p>

              <div className="mt-8 space-y-4">
                {enterprisePillars.map((item) => (
                  <div key={item.title} className="p-3.5 rounded-xl bg-[#07112D]/80 border border-white/5 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-violet-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-violet-300/80">S/4HANA & Operational Scale</span>
              <Link
                href="/industries/enterprise"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-400 hover:text-white transition-colors"
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

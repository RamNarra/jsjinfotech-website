import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Database, ShieldCheck, Code2, Compass, Server, Building2, Sparkles, FileText, Milestone, Landmark } from 'lucide-react';
import { getAllSolutions } from '@/lib/content/adapter';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-5 h-5 text-[#0070F2]" />,
  Cpu: <Cpu className="w-5 h-5 text-[#0070F2]" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-[#0070F2]" />,
  Code2: <Code2 className="w-5 h-5 text-[#0070F2]" />,
  Server: <Server className="w-5 h-5 text-[#0070F2]" />,
  Compass: <Compass className="w-5 h-5 text-[#0070F2]" />,
  Building2: <Building2 className="w-5 h-5 text-[#0070F2]" />,
  FileSpreadsheet: <FileText className="w-5 h-5 text-[#0070F2]" />,
  Sparkles: <Sparkles className="w-5 h-5 text-[#0070F2]" />,
  Milestone: <Milestone className="w-5 h-5 text-[#0070F2]" />,
  Landmark: <Landmark className="w-5 h-5 text-[#0070F2]" />,
};

// Curated capability tags per vertical
const tagsMap: Record<string, string[]> = {
  'digital-it': ['IT Strategy', 'System Integration', 'Process Automation', 'Modernisation'],
  'sap-erp': ['S/4HANA', 'BTP Extensions', 'Data Migration', 'Application Management'],
  'artificial-intelligence': ['Intelligent Docs', 'Predictive Analytics', 'Knowledge RAG', 'Business AI'],
  cybersecurity: ['Zero Trust', 'Continuous Hardening', 'OT Security', 'DPDP 2025'],
  'software-development': ['Custom Web/Mobile', 'Workflow Automation', 'API Middleware', 'Modern Frontends'],
  'digital-content': ['Technical SOPs', 'Interactive Media', 'Training Portals', 'WCAG 2.2'],
  'drone-technology': ['Land Surveys', 'Progress Monitoring', 'Asset Inspection', 'GIS Integration'],
  'project-management': ['Scope Management', 'Lifecycle Governance', 'Vendor Coordination', 'Commissioning'],
  'government-technology': ['Application Modernisation', 'Citizen Portals', 'Infrastructure Telemetry', 'GIS Works'],
};

export async function CapabilityGrid() {
  const solutions = await getAllSolutions();

  return (
    <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#12171C]">
              Converged Solutions for Mission-Critical Operations.
            </h2>
            <p className="mt-3 text-[#475E75] text-base sm:text-lg">
              Each vertical operates as a high-performance capability in its own right, engineered to feed structured data directly into the central autonomous core.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/solutions/sap-erp"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#0070F2] hover:text-[#0057D2] group transition-colors"
            >
              Browse All Verticals <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bento / Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => {
            return (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className="group block p-6 rounded-xl bg-white border border-[#DDE3EA] hover:border-[#0070F2]/60 hover:shadow-md transition-all duration-200 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon + Layer Badge + Arrow */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#EBF8FF] border border-[#D1EFFF] flex items-center justify-center">
                      {iconMap[sol.icon] || <Cpu className="w-5 h-5 text-[#0070F2]" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#F5F6F7] text-[#475E75] font-semibold border border-[#DDE3EA]">
                        {sol.layer} Layer
                      </span>
                      <div className="w-7 h-7 rounded-full bg-[#F7F9FC] group-hover:bg-[#0070F2] group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Short Statement */}
                  <span className="text-xs font-mono uppercase text-[#0070F2] font-semibold block mb-1">
                    {sol.eyebrow}
                  </span>
                  <h3 className="text-lg font-bold text-[#12171C] group-hover:text-[#0070F2] transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#475E75] leading-relaxed line-clamp-2">
                    {sol.shortDesc}
                  </p>
                </div>

                {/* Capability Tags */}
                <div className="mt-5 pt-3.5 border-t border-[#DDE3EA] flex flex-wrap gap-1.5">
                  {(tagsMap[sol.slug] || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-[#F7F9FC] text-[#475E75] border border-[#DDE3EA]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

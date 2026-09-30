import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Cpu, Database, ShieldCheck, Code2, Compass, Server, Building2, Sparkles, FileText, Milestone, Landmark } from 'lucide-react';
import { getAllSolutions } from '@/lib/content/adapter';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  Server: <Server className="w-5 h-5 text-cyan-400" />,
  Compass: <Compass className="w-5 h-5 text-cyan-400" />,
  Building2: <Building2 className="w-5 h-5 text-cyan-400" />,
  FileSpreadsheet: <FileText className="w-5 h-5 text-cyan-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-cyan-400" />,
  Milestone: <Milestone className="w-5 h-5 text-cyan-400" />,
  Landmark: <Landmark className="w-5 h-5 text-cyan-400" />,
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
    <section className="py-24 bg-[#F5F7FB] text-[#101A33]" id="solutions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
              Capabilities Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#07112D]">
              Converged Solutions for Mission-Critical Operations.
            </h2>
            <p className="mt-4 text-[#5E6B85] text-base sm:text-lg">
              Each vertical operates as a high-performance capability in its own right, engineered to feed real-time data directly into the central autonomous core.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/solutions/sap-erp"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#07112D] hover:text-cyan-700 group transition-colors"
            >
              Browse All Verticals <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Bento / Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol, index) => {
            // First two cards are featured spans on large screens
            const isFeatured = index === 0 || index === 1;

            return (
              <Link
                key={sol.slug}
                href={`/solutions/${sol.slug}`}
                className={`group block p-7 rounded-2xl bg-white border border-[#DDE4EF] hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/5 transition-all duration-300 relative flex flex-col justify-between ${
                  isFeatured ? 'lg:col-span-1 bg-gradient-to-b from-white to-[#F8FAFD]' : ''
                }`}
              >
                <div>
                  {/* Top Bar: Icon + Layer Badge + Arrow */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#07112D] flex items-center justify-center shadow-md">
                      {iconMap[sol.icon] || <Cpu className="w-5 h-5 text-cyan-400" />}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 font-semibold border border-slate-200">
                        {sol.layer} Layer
                      </span>
                      <div className="w-7 h-7 rounded-full bg-slate-100 group-hover:bg-[#07112D] group-hover:text-cyan-300 flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>

                  {/* Title & Short Statement */}
                  <span className="text-xs font-mono uppercase text-cyan-700 font-bold block mb-1">
                    {sol.eyebrow}
                  </span>
                  <h3 className="text-lg font-bold text-[#07112D] group-hover:text-cyan-800 transition-colors">
                    {sol.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-[#5E6B85] leading-relaxed line-clamp-2">
                    {sol.shortDesc}
                  </p>
                </div>

                {/* Capability Tags */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {(tagsMap[sol.slug] || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-50 text-slate-600 border border-slate-200/80 group-hover:border-cyan-300/40 transition-colors"
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

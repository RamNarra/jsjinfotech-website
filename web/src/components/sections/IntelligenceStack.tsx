import React from 'react';
import { Layers, ShieldCheck, Eye, Cpu, Network, Radio } from 'lucide-react';

interface StackTier {
  tierNumber: string;
  name: string;
  subtitle: string;
  technologies: string[];
  role: string;
  icon: React.ReactNode;
}

const STACK_TIERS: StackTier[] = [
  {
    tierNumber: '05',
    name: 'Experience Layer',
    subtitle: 'Web · Mobile · Command Centers',
    technologies: ['React 19', 'Next.js App Router', 'Tailwind CSS', 'Accessible PWA Portals', 'GIS Web Maps'],
    role: 'Operator command centers, field technician tablets, and executive analytics dashboards.',
    icon: <Eye className="w-5 h-5 text-cyan-400" />,
  },
  {
    tierNumber: '04',
    name: 'Enterprise Systems Layer',
    subtitle: 'SAP · ERP · Business Logic · APIs',
    technologies: ['SAP S/4HANA', 'SAP BTP', 'REST / OData APIs', 'Microservices', 'Clean Core ABAP'],
    role: 'Translating real-time telemetric events into automated work orders, inventory balancing, and billing.',
    icon: <Layers className="w-5 h-5 text-blue-400" />,
  },
  {
    tierNumber: '03',
    name: 'Intelligence & Cognitive Layer',
    subtitle: 'Neural Models · Computer Vision · Digital Twins',
    technologies: ['PyTorch', 'TensorRT Edge', 'YOLO Aerial Defect Vision', 'Time-Series Forecasts', 'Digital Twins'],
    role: 'Proactively identifying thermal anomalies, structural fractures, and equipment vibration weeks before failure.',
    icon: <Cpu className="w-5 h-5 text-violet-400" />,
  },
  {
    tierNumber: '02',
    name: 'Infrastructure & Sovereign Network Layer',
    subtitle: 'Zero-Trust Networks · Hybrid Clouds · AIOps',
    technologies: ['Zero-Trust Architecture', 'WireGuard', 'Kubernetes', 'AIOps Self-Healing', 'DPDP Compliant Sovereign Cloud'],
    role: 'Resilient, high-bandwidth compute fabric ensuring sovereign data security and sub-second failovers.',
    icon: <Network className="w-5 h-5 text-emerald-400" />,
  },
  {
    tierNumber: '01',
    name: 'Physical & Edge Sensory Layer',
    subtitle: 'Autonomous Drones · HVAC Chillers · IoT Transducers',
    technologies: ['Autonomous UAVs', 'Central Chiller Plants', 'BACnet / Modbus RTU', 'FLIR Thermal', 'Clamp-on Transducers'],
    role: 'Physical telemetry collection and continuous electromechanical operation across civic and enterprise facilities.',
    icon: <Radio className="w-5 h-5 text-amber-400" />,
  },
];

export function IntelligenceStack() {
  return (
    <section className="py-24 bg-[#0B1E42] text-white relative overflow-hidden" id="technology-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
            Architectural Topology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Intelligence Built Across the Entire Stack.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Rather than isolated technologies, JSJ orchestrates an interconnected stack spanning physical sensors, enterprise ERP, neural vision, and command interfaces.
          </p>
        </div>

        {/* Stack Tier Vertical Progression */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {STACK_TIERS.map((tier) => (
            <div
              key={tier.tierNumber}
              className="p-6 sm:p-7 rounded-2xl bg-[#07112D]/80 border border-white/10 hover:border-cyan-400/50 transition-all duration-200 flex flex-col md:flex-row md:items-center justify-between gap-6 group"
            >
              <div className="flex items-start sm:items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#0B1E42] border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  {tier.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      TIER {tier.tierNumber}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">· {tier.subtitle}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">{tier.name}</h3>
                  <p className="text-xs text-slate-300 mt-1 max-w-xl">{tier.role}</p>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="flex flex-wrap gap-1.5 md:max-w-sm justify-start md:justify-end">
                {tier.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] font-mono font-medium px-2 py-1 rounded bg-white/5 border border-white/10 text-cyan-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

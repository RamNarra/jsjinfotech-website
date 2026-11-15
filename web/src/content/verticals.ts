// Seven verticals. Source: corporate profile §04 (pages 6–7).
export type Vertical = {
  slug: string;
  number: string;
  name: string;
  title: string;
  promise: string;
  /** Card line, exact from master prompt §6 "Seven integrated verticals". */
  card: string;
  capabilities: string[];
  sectors: string[];
  research?: boolean;
  sgn?: boolean;
};

export const verticals: Vertical[] = [
  {
    slug: 'it-consulting',
    number: '01',
    name: 'IT Projects & Consulting',
    title: 'Future-ready infrastructure',
    promise:
      'Digital foundations that adapt as technology evolves, rather than infrastructure that needs replacing every few years.',
    card: 'Enterprise IT project delivery, cloud and hybrid infrastructure, cybersecurity architecture, government digitisation consulting and AIOps.',
    capabilities: [
      'End-to-end IT project delivery with a built-in upgrade path for emerging technology',
      'Cloud-native and hybrid infrastructure designed for AI workloads',
      'Zero-trust cybersecurity architecture and continuous infrastructure hardening',
      'Government digitisation consulting toward connected, data-driven operations',
      'Automated IT operations (AIOps) for self-healing infrastructure',
    ],
    sectors: ['Banking', 'Manufacturing', 'High Tech', 'Professional Services'],
  },
  {
    slug: 'sap',
    number: '02',
    name: 'SAP Solutions with SGN',
    title: 'SAP delivery with SGN Software, SAP Gold Partner',
    promise:
      'Enterprise SAP delivery through JSJ INFOTECH’s joint venture with SGN Software, from licensing and implementation to migration, support and SAP Business AI.',
    card: 'SAP licensing and advisory, GROW with SAP, RISE with SAP, SAP S/4HANA, migration, SAP BTP, Business Data Cloud, Signavio, Ariba, SuccessFactors, integration and support.',
    capabilities: [
      'SAP licence resale, including SAP PartnerEdge Cloud Choice',
      'SAP Business Suite implementation: GROW with SAP (public cloud) and RISE with SAP (private cloud)',
      'Migration from SAP ECC or S/4HANA on-premise to RISE with SAP',
      'SAP BTP, Business Data Cloud, Signavio, Ariba and SuccessFactors',
      'Post-implementation support, roll-outs and cross-platform integration',
      'SAP Business AI enablement and AI extensions over SAP S/4HANA',
    ],
    sectors: ['Chemicals', 'Steel & Cement', 'Consumer Products', 'Power & Utilities'],
    sgn: true,
  },
  {
    slug: 'ai',
    number: '03',
    name: 'AI Innovations',
    title: 'The intelligence layer',
    promise:
      'AI connects every JSJ vertical, turning data from drones, HVAC sensors and enterprise systems into predictive decisions.',
    card: 'Generative AI applications, predictive maintenance, computer vision, AI copilots, digital twins, MLOps and AI extensions over SAP.',
    capabilities: [
      'Generative AI applications for enterprise and government workflows',
      'Predictive maintenance models spanning HVAC, infrastructure and equipment',
      'Computer vision for drone data analysis',
      'AI copilots and assistants for government citizen services',
      'Digital twin development for simulation and monitoring',
      'MLOps pipelines for continuous model deployment',
      'AI over SAP S/4HANA with SGN, invoice and document processing, AI-assisted ABAP QA',
    ],
    sectors: ['Manufacturing', 'Power & Utilities', 'Retail', 'Pharmaceuticals'],
  },
  {
    slug: 'drones',
    number: '04',
    name: 'Drone Technology',
    title: 'Aerial data capture',
    promise: 'From one-off drone surveys toward AI-analysed aerial intelligence as a continuous service.',
    card: 'Aerial survey and mapping, 3D modelling, infrastructure inspection, AI image/video analytics, agricultural monitoring and asset-monitoring programmes.',
    capabilities: [
      'High-precision aerial survey, mapping and 3D modelling',
      'Drone inspection of infrastructure, buildings and HVAC installations',
      'AI image and video analytics, object detection, change detection, anomaly flagging',
      'Agricultural monitoring and precision spraying',
      'Government asset-monitoring drone programmes',
      'Research track: autonomous fleets and swarm data collection',
    ],
    sectors: ['Renewable Energy', 'Steel & Cement', 'EC&O', 'Power & Utilities'],
  },
  {
    slug: 'software',
    number: '05',
    name: 'Software Development',
    title: 'Built for what’s next',
    promise: 'Modular software architecture designed to absorb new AI capabilities without rebuilds.',
    card: 'Custom web, mobile and enterprise applications, API-first architecture, SAP integration, legacy modernization, DevOps and embedded AI.',
    capabilities: [
      'Custom web, mobile and enterprise application development',
      'API-first architecture and system integration, including SAP integration with SGN',
      'Legacy modernisation into cloud-native, AI-ready platforms',
      'Continuous delivery (CI/CD) and DevOps engineering',
      'Embedded AI features, recommendations, automation, intelligent search',
    ],
    sectors: ['Banking', 'Retail', 'Professional Services', 'High Tech'],
  },
  {
    slug: 'hvac-government',
    number: '06',
    name: 'HVAC Government Projects',
    title: 'Smart maintenance and upgradation',
    promise: 'HVAC maintenance moved from reactive, manual work to connected, predictive operation.',
    card: 'AMC-based HVAC maintenance, IoT sensor retrofits, predictive maintenance, energy-efficiency upgrades, remote diagnostics and facility dashboards.',
    capabilities: [
      'AMC-based maintenance of HVAC systems in government facilities',
      'IoT-sensor retrofits for real-time HVAC performance monitoring',
      'AI-driven predictive maintenance that flags failures early',
      'Energy-efficiency upgrades aligned with smart-building standards',
      'Remote diagnostics and automated fault detection',
      'HVAC data integration into central facility dashboards',
    ],
    sectors: ['Power & Utilities', 'Pharmaceuticals', 'EC&O'],
  },
  {
    slug: 'rnd',
    number: '07',
    name: 'New Technology R&D',
    title: 'Research frontier',
    promise: 'A dedicated research track exploring JSJ’s next generation of services. Research, not current service.',
    card: 'Cross-vertical AI platforms, smart building / smart city pilots, IoT + AI convergence, proof-of-concept development, robotics and edge-AI exploration.',
    capabilities: [
      'Cross-vertical AI platforms combining drone, SAP and HVAC/IoT data',
      'Smart building and smart city pilot programmes',
      'IoT and AI convergence for connected infrastructure',
      'Proof-of-concept development for government innovation initiatives',
      'Exploration of robotics and edge-AI for field operations',
    ],
    sectors: ['High Tech', 'EC&O'],
    research: true,
  },
];

export const getVertical = (slug: string): Vertical | undefined => verticals.find((v) => v.slug === slug);

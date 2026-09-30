export const BRAND = {
  name: 'JSJ INFOTECH',
  legalName: 'JSJ INFOTECH Private Limited',
  tagline: 'Autonomous by Design',
  subTagline: 'Technology · Consulting · SAP · AI · Software · Project Management · Drone Technology · Government Projects',
  description:
    'A technology-driven IT consulting and project execution company based in Hyderabad. Operating across enterprise IT, SAP, AI, software development, autonomous drones, project management, and government system modernisations.',
  vision2030:
    "By 2030, JSJ INFOTECH will operate as India's leading converged technology partner — where every government facility we maintain, every enterprise system we run, and every drone we fly feeds a single, self-improving AI layer. Infrastructure will not wait to fail before it is fixed; it will report on itself, predict its own needs, and increasingly manage itself. JSJ's role will shift from vendor to intelligence partner.",
  mission:
    "To deliver technology solutions that are practical, scalable, secure and aligned with the strategic objectives of our clients.",
  missionObjectives: [
    'Deliver end-to-end IT and technology projects from concept to ongoing management.',
    'Enable organisations to modernise legacy systems through structured engineering.',
    'Implement, enhance, and manage enterprise technology platforms including SAP.',
    'Integrate Artificial Intelligence into business, operational, and civic processes.',
    'Develop customised, secure software platforms and high-performance digital tools.',
    'Introduce drone technology into suitable commercial and public sector applications.',
    'Support government technology projects, digital infrastructure, and system upgrades.',
    'Build long-term technology partnerships with leading national and international companies.',
  ],
  phone: '+91 89430 32965',
  displayPhone: '+91 89430-32965',
  supportEmail: 'support@jsjinfotech.co.in',
  executiveEmail: 'subhash@jsjinfotech.co.in',
  canonicalUrl: 'https://www.jsjinfotech.co.in',
  address: {
    street: 'Plot No. 144, Road No. 72',
    area: 'Jubilee Hills',
    city: 'Hyderabad',
    state: 'Telangana',
    country: 'India',
    formatted: 'Plot No. 144, Road No. 72, Jubilee Hills, Hyderabad, Telangana, India',
  },
  location: 'Hyderabad, Telangana, India',
  linkedinUrl: 'https://www.linkedin.com/company/jsj-infotech',
  stats: {
    verticalsCount: '09',
    deliveryStages: '06',
    convergedAiLayers: '01',
    autonomyHorizon: '2030',
  },
  colors: {
    primaryBlue: '#0070F2',
    darkBlue: '#0057D2',
    deepBlue: '#0040B0',
    veryLightBlue: '#EBF8FF',
    lightBlue: '#D1EFFF',
    blueSurface: 'rgba(0,112,242,0.06)',
    blueSurfaceStrong: 'rgba(0,112,242,0.10)',
    background: '#FFFFFF',
    softBackground: '#F7F9FC',
    mutedSurface: '#F5F6F7',
    border: '#DDE3EA',
    primaryText: '#12171C',
    secondaryText: '#475E75',
    mutedText: '#5B738B',
  },
} as const;

export const SOLUTIONS_LIST = [
  {
    slug: 'digital-it',
    title: 'Digital & IT Consulting',
    eyebrow: 'Strategy & Modernisation',
    shortDesc: 'IT strategy, technology assessment, system integration, process automation, cloud modernisation, and turnkey project implementation.',
    layer: 'Enterprise' as const,
    icon: 'Server',
  },
  {
    slug: 'sap-erp',
    title: 'SAP Implementation & Management',
    eyebrow: 'Enterprise Technology',
    shortDesc: 'End-to-end implementation support, upgrade and enhancement projects, application management, data migration, and third-party integration.',
    layer: 'Enterprise' as const,
    icon: 'Database',
  },
  {
    slug: 'artificial-intelligence',
    title: 'AI & Intelligent Solutions',
    eyebrow: 'Intelligence Layer',
    shortDesc: 'AI-powered business applications, intelligent document processing, predictive analytics, enterprise knowledge assistants, and process optimisation.',
    layer: 'Intelligence' as const,
    icon: 'Cpu',
  },
  {
    slug: 'cybersecurity',
    title: 'Cybersecurity & Sovereign Defense',
    eyebrow: 'Resilience & Compliance',
    shortDesc: 'Zero-trust architecture, continuous infrastructure hardening, OT network isolation, threat monitoring, and DPDP 2025 compliance.',
    layer: 'Enterprise' as const,
    icon: 'ShieldCheck',
  },
  {
    slug: 'software-development',
    title: 'Software & Application Development',
    eyebrow: 'Custom Digital Platforms',
    shortDesc: 'Customised web and mobile applications, business process tools, API integration, workflow automation, and application modernisation.',
    layer: 'Enterprise' as const,
    icon: 'Code2',
  },
  {
    slug: 'digital-content',
    title: 'Digital Content Development',
    eyebrow: 'Technical Media & Publishing',
    shortDesc: 'Technical documentation portals, interactive operational SOPs, digital training media, and structured communications for technology rollouts.',
    layer: 'Cross-Layer' as const,
    icon: 'FileSpreadsheet',
  },
  {
    slug: 'drone-technology',
    title: 'Drone Technology Projects',
    eyebrow: 'Aerial Telemetry & Inspection',
    shortDesc: 'Land and infrastructure surveys, construction monitoring, asset inspection, mapping & GIS integration, and aerial analytics with full regulatory compliance.',
    layer: 'Physical' as const,
    icon: 'Compass',
  },
  {
    slug: 'project-management',
    title: 'Project Management & Execution',
    eyebrow: 'Governance & Accountability',
    shortDesc: 'Structured 6-stage lifecycle: planning, scope, resource coordination, vendor management, budget monitoring, quality assurance, and handover.',
    layer: 'Governance' as const,
    icon: 'Milestone',
  },
  {
    slug: 'government-technology',
    title: 'Government Technology Projects',
    eyebrow: 'Public Sector Modernisation',
    shortDesc: 'Government application modernisation, IT system upgrades, digital service platforms, data analytics, infrastructure monitoring, and GIS initiatives.',
    layer: 'Cross-Layer' as const,
    icon: 'Landmark',
  },
] as const;

export const PROJECT_DELIVERY_STAGES = [
  {
    stepNumber: '01',
    title: 'Requirement & Opportunity Assessment',
    subtitle: 'Discovery & Feasibility',
    description: "Understanding the client's strategic objectives, existing technology environment, operational bottlenecks, and desired project outcomes.",
  },
  {
    stepNumber: '02',
    title: 'Solution Development',
    subtitle: 'Architecture & Strategy',
    description: 'Identifying the optimal technology stack, system architecture, specialist partner ecosystem, and phased implementation methodology.',
  },
  {
    stepNumber: '03',
    title: 'Project Planning',
    subtitle: 'Scope & Governance',
    description: 'Defining clear project scope, schedules, resource allocations, responsibilities, commercial budgets, and milestone deliverables.',
  },
  {
    stepNumber: '04',
    title: 'Implementation',
    subtitle: 'Execution & Integration',
    description: 'Coordinating internal engineering teams, specialist technology partners, equipment vendors, and client stakeholders for disciplined execution.',
  },
  {
    stepNumber: '05',
    title: 'Testing & Deployment',
    subtitle: 'Quality & User Acceptance',
    description: 'Conducting comprehensive functional testing, security validation, user acceptance testing (UAT), and staged, controlled production rollout.',
  },
  {
    stepNumber: '06',
    title: 'Enhancement & Support',
    subtitle: 'Lifecycle Optimization',
    description: 'Providing post-implementation maintenance, system optimization, ongoing upgrades, AI capability injection, and continuous operational support.',
  },
] as const;

export const STRATEGIC_PARTNERSHIP_ECOSYSTEM = [
  {
    category: 'Global Technology Companies',
    description: 'Bringing tier-one enterprise computing and cloud infrastructure to Indian enterprises and institutions.',
  },
  {
    category: 'SAP Specialists & System Integrators',
    description: 'Collaborating on deep functional and technical implementation, migration, and clean-core development.',
  },
  {
    category: 'Specialist AI Companies',
    description: 'Deploying advanced neural models, computer vision, and predictive analytics into business processes.',
  },
  {
    category: 'Software Development Firms',
    description: 'Co-engineering bespoke applications, enterprise APIs, and high-throughput transaction engines.',
  },
  {
    category: 'Drone Technology Providers',
    description: 'Deploying DGCA-compliant UAV hardware, aerial imaging, mapping, and sensor payloads.',
  },
  {
    category: 'Cloud & Cybersecurity Firms',
    description: 'Enforcing zero-trust architecture, sovereign cloud hosting, and continuous penetration hardening.',
  },
  {
    category: 'Engineering & Infrastructure Firms',
    description: 'Integrating electromechanical facilities, smart HVAC AMC, and physical IoT telemetry at the edge.',
  },
  {
    category: 'Government Technology Solution Providers',
    description: 'Delivering compliant e-governance platforms, citizen service portals, and public infrastructure upgrades.',
  },
] as const;

export const INDUSTRIES_LIST = [
  {
    slug: 'government',
    title: 'Government & Public Sector',
    eyebrow: 'Sovereign Scale & Critical Infrastructure',
    tagline: 'Digitising public services, securing vital infrastructure, and deploying autonomous monitoring for public assets.',
    mandates: ['Digital India Compliance', 'Continuous Facility AMC', 'Critical Asset Drone Surveys', 'Zero-Trust Data Protection'],
  },
  {
    slug: 'enterprise',
    title: 'Enterprise & Industrial',
    eyebrow: 'Connected Operations & Global Workflows',
    tagline: 'Modernising legacy ERP into intelligent systems, scaling predictive AI, and unifying physical and digital facilities.',
    mandates: ['SAP S/4HANA Transformation', 'Supply Chain Visibility', 'Predictive Asset Maintenance', 'Enterprise Cloud Migration'],
  },
] as const;

export const ROADMAP_PHASES = [
  {
    phaseNumber: '01',
    name: 'FOUNDATION',
    tagline: 'Core Infrastructure & Operational Stability',
    description: 'Stabilising mission-critical IT, SAP core systems, baseline government facility AMC contracts, and dedicated custom software platforms.',
    milestones: [
      'SAP ECC to S/4HANA roadmap baseline',
      'Zero-trust network configuration across IT estates',
      'High-uptime facility maintenance operations',
      'Targeted manual drone aerial survey workflows',
    ],
  },
  {
    phaseNumber: '02',
    name: 'INTEGRATION',
    tagline: 'Cross-System Connectivity & Telemetry',
    description: 'Connecting physical IoT telemetry from sensors and drones directly into enterprise SAP and data warehouse backends.',
    milestones: [
      'IoT edge gateway telemetry across government sites',
      'Drone flight data ingestion pipelines into central analytics',
      'AIOps integration for self-healing server infrastructure',
      'Unified enterprise dashboards combining operational and financial metrics',
    ],
  },
  {
    phaseNumber: '03',
    name: 'INTELLIGENCE',
    tagline: 'Predictive Models & Automated Action Triggers',
    description: 'Deploying custom computer vision, machine learning anomaly detection, and predictive maintenance algorithms.',
    milestones: [
      'Thermal and optical aerial defect detection via AI',
      'Predictive component failure alerts in mechanical cooling plants',
      'SAP ERP workflow automation powered by machine intelligence',
      'Continuous security posture scoring & automated patch pipelines',
    ],
  },
  {
    phaseNumber: '04',
    name: 'AUTONOMY',
    tagline: 'Self-Directing, Closed-Loop Ecosystems (2030 Horizon)',
    description: 'Full convergence into the JSJ Autonomous Core: infrastructure that monitors itself, predicts failure, and triggers repair without human friction.',
    milestones: [
      'Self-improving enterprise systems dynamically adjusting to operational shifts',
      'Autonomous drone swarms performing scheduled asset audits',
      'Zero-touch facilities adjusting energy, cooling, and safety autonomously',
      'End-to-end intelligent partnership model for national infrastructure',
    ],
  },
] as const;

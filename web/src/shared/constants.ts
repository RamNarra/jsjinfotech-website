import type { ProjectStage, RoadmapPhase } from './types';

export const BRAND = {
  name: 'JSJ INFOTECH',
  legalName: 'JSJ INFOTECH',
  tagline: 'Autonomous by Design',
  description:
    'JSJ INFOTECH is a technology-driven IT consulting and project execution company in Hyderabad, bringing together SAP, AI, software development, project management, drone technology and government technology projects.',
  phone: '+91 89430 32965',
  phoneHref: '+918943032965',
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
  linkedinUrl: 'https://www.linkedin.com/company/jsj-infotech',
} as const;

export const NAV_ITEMS = [
  { title: 'Solutions', href: '/solutions' },
  { title: 'Industries', href: '/industries' },
  { title: 'Technology', href: '/technology' },
  { title: 'Company', href: '/company' },
  { title: 'Insights', href: '/insights' },
] as const;

/** The convergence model from the corporate profile. */
export const CORE_LAYERS = [
  {
    id: 'physical',
    name: 'Physical layer',
    nodes: ['HVAC', 'Drones', 'IoT'],
    detail: 'The facilities, equipment and field assets where operations actually happen.',
  },
  {
    id: 'enterprise',
    name: 'Enterprise layer',
    nodes: ['SAP', 'ERP', 'IT', 'Software'],
    detail: 'The platforms that run finance, operations, records and workflows.',
  },
  {
    id: 'intelligence',
    name: 'Intelligence layer',
    nodes: ['AI', 'Analytics', 'Computer vision', 'Digital twins'],
    detail: 'The models and analytics that turn data from both layers into decisions.',
  },
] as const;

export const PROJECT_DELIVERY_STAGES: readonly ProjectStage[] = [
  {
    stepNumber: '01',
    title: 'Requirement & Opportunity Assessment',
    description:
      "Understanding the client's objectives, existing systems, challenges and desired outcomes.",
  },
  {
    stepNumber: '02',
    title: 'Solution Development',
    description:
      'Identifying the appropriate technology, architecture, partners and implementation strategy.',
  },
  {
    stepNumber: '03',
    title: 'Project Planning',
    description:
      'Defining scope, timelines, resources, responsibilities, budgets and implementation milestones.',
  },
  {
    stepNumber: '04',
    title: 'Implementation',
    description:
      'Coordinating technology teams, partners, vendors and stakeholders for execution.',
  },
  {
    stepNumber: '05',
    title: 'Testing & Deployment',
    description:
      'Conducting testing, validation, user acceptance and controlled deployment.',
  },
  {
    stepNumber: '06',
    title: 'Enhancement & Support',
    description:
      'Providing system optimisation, upgrades, AI integration and ongoing management as required.',
  },
];

export const PARTNER_CLUSTERS = [
  {
    name: 'Technology',
    items: [
      'Global technology companies',
      'Software development companies',
      'AI companies',
      'Cloud and cybersecurity companies',
    ],
  },
  {
    name: 'Implementation',
    items: [
      'SAP specialists and system integrators',
      'Drone technology providers',
      'Engineering and infrastructure technology firms',
    ],
  },
  {
    name: 'Public sector & research',
    items: [
      'Government technology solution providers',
      'Research and innovation organisations',
    ],
  },
] as const;

export const COLLABORATION_MODELS = [
  'Technology partnerships',
  'Strategic alliances',
  'Joint implementation',
  'System integration partnerships',
  'Technology licensing',
  'AI solution partnerships',
  'International solution representation',
  'Joint ventures for specific projects',
] as const;

export const MISSION_POINTS = [
  'Deliver end-to-end IT and technology projects.',
  'Enable organisations to modernise legacy systems.',
  'Implement and manage enterprise technology platforms.',
  'Integrate AI into business and operational processes.',
  'Develop customised software and digital applications.',
  'Introduce drone technology into suitable commercial and government applications.',
  'Support government technology projects and system upgrades.',
  'Build long-term technology partnerships with leading national and international companies.',
] as const;

export const PROJECT_VERTICALS = [
  {
    title: 'Enterprise technology',
    text: 'Implementation, integration, enhancement and management of enterprise technology platforms.',
  },
  {
    title: 'Digital transformation',
    text: 'Modernisation of business processes through digital platforms, automation, analytics and AI.',
  },
  {
    title: 'AI & intelligent solutions',
    text: 'Development and integration of AI-enabled applications for business, government and institutional requirements.',
  },
  {
    title: 'Drone technology',
    text: 'Technology-led drone projects involving data collection, inspection, mapping, surveillance and other approved applications.',
  },
  {
    title: 'Software & application development',
    text: 'Customised software, web applications, mobile applications, enterprise tools and technology platforms.',
  },
  {
    title: 'Government technology projects',
    text: 'Participation in government IT projects, system upgrades, digital infrastructure initiatives and technology modernisation programmes.',
  },
] as const;

export const VISION_2030_STATEMENT =
  "By 2030, JSJ INFOTECH will operate as India's leading converged technology partner — where every government facility we maintain, every enterprise system we run, and every drone we fly feeds a single, self-improving AI layer.";

export const VISION_2030_CLOSING =
  "Infrastructure will not wait to fail before it is fixed; it will report on itself, predict its own needs, and increasingly manage itself. JSJ's role will shift from vendor to intelligence partner.";

/** Four-phase roadmap. Milestones are the per-vertical entries of the corporate profile table. */
export const ROADMAP_PHASES: readonly RoadmapPhase[] = [
  {
    phaseNumber: '01',
    name: 'Foundation',
    summary: 'Proven capability in each vertical, on infrastructure built to be upgraded.',
    items: [
      { vertical: 'IT', milestone: 'Cloud-native infrastructure' },
      { vertical: 'SAP', milestone: 'Core implementation' },
      { vertical: 'AI', milestone: 'Use-case pilots' },
      { vertical: 'Drones', milestone: 'Manual survey missions' },
      { vertical: 'Software', milestone: 'Custom builds' },
      { vertical: 'HVAC (Govt)', milestone: 'AMC maintenance' },
      { vertical: 'New tech', milestone: 'R&D pilots' },
    ],
  },
  {
    phaseNumber: '02',
    name: 'Integration',
    summary: 'Verticals begin to share data and platforms instead of running side by side.',
    items: [
      { vertical: 'AI', milestone: 'Cross-system integration' },
      { vertical: 'Software', milestone: 'API-first modular platforms' },
      { vertical: 'HVAC (Govt)', milestone: 'IoT-enabled monitoring' },
      { vertical: 'New tech', milestone: 'Cross-vertical integration' },
    ],
  },
  {
    phaseNumber: '03',
    name: 'Intelligence',
    summary: 'Analytics and AI move from pilots into the operating layer.',
    items: [
      { vertical: 'IT', milestone: 'AIOps self-healing systems' },
      { vertical: 'SAP', milestone: 'AI-augmented analytics' },
      { vertical: 'Drones', milestone: 'AI-analysed inspection' },
    ],
  },
  {
    phaseNumber: '04',
    name: 'Autonomy',
    summary: 'Operations that increasingly monitor and manage themselves.',
    items: [
      { vertical: 'IT', milestone: 'Fully autonomous IT operations' },
      { vertical: 'SAP', milestone: 'Autonomous enterprise workflows with AI copilots' },
      { vertical: 'AI', milestone: 'Enterprise-wide autonomous decision layer' },
      { vertical: 'Drones', milestone: 'Autonomous fleets & swarm data collection' },
      { vertical: 'Software', milestone: 'AI-embedded, self-improving applications' },
      { vertical: 'HVAC (Govt)', milestone: 'Predictive, near-autonomous facility management' },
      { vertical: 'New tech', milestone: 'Smart city / smart infrastructure at scale' },
    ],
  },
];

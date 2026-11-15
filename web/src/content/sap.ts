// SGN Software facts. Sources: "SGN Gold Partnership.pdf" (SAP certificate, issued Nov 02, 2026)
// and corporate profile pages 3–5, 8. Every figure is SGN Software's, never JSJ's.
export const sgn = {
  legalName: 'SGN Software Private Limited',
  shortName: 'SGN Software',
  city: 'Kolkata, India',
  partnerId: '0001635021',
  level: 'SAP Gold Partner',
  certificateIssued: 'Nov 02, 2026',
  engagementModel: 'SAP PartnerEdge Sell — Solution Sales: SAP product and technology advisory and support services',
} as const;

export type Metric = { value: number; suffix: string; label: string };

export const sgnMetrics: Metric[] = [
  { value: 15, suffix: '+', label: 'Years of delivery' },
  { value: 250, suffix: '+', label: 'SAP experts' },
  { value: 100, suffix: '+', label: 'Customer engagements' },
  { value: 75, suffix: '+', label: 'Go-lives' },
  { value: 25, suffix: '+', label: 'SAP Ariba implementations' },
  { value: 16, suffix: '+', label: 'Industries served' },
];

export const competencies = [
  {
    name: 'SAP Business AI Platform',
    tier: 'Expert',
    specializations: [
      'Application Development and Automation',
      'Artificial Intelligence Foundation',
      'Database and Data Management',
      'Integration',
    ],
  },
  { name: 'SAP Business Data Cloud', tier: 'Advanced', specializations: ['SAP Business Data Cloud'] },
  { name: 'SAP Cloud ERP', tier: 'Advanced', specializations: ['Cloud ERP Finance', 'Cloud ERP SCM'] },
  { name: 'Human Capital Management', tier: 'Essential', specializations: ['Core HR'] },
  { name: 'SAP Cloud ERP Private', tier: 'Essential', specializations: ['SAP Cloud ERP Private'] },
  { name: 'Spend Management', tier: 'Essential', specializations: ['Strategic Sourcing'] },
] as const;

// Product authorizations (authorized to sell), exact list from certificate page 2.
export const authorizations = [
  { name: 'SAP Cloud ERP', note: 'GROW with SAP — public cloud' },
  { name: 'SAP Cloud ERP Private', note: 'RISE with SAP — private cloud' },
  { name: 'Spend Management', note: 'SAP Ariba sourcing, contracts, procure-to-pay' },
  { name: 'Human Capital Management', note: 'SAP SuccessFactors' },
  { name: 'Customer Relationship Management', note: 'SAP CX' },
  { name: 'Open Cloud', note: 'Cloud deployments' },
  { name: 'Open on-premise', note: 'SAP S/4HANA on-premise' },
];

export const serviceLines = [
  'Licence resale & PartnerEdge Cloud Choice',
  'Implementation — GROW and RISE with SAP',
  'Migration — ECC or S/4HANA to RISE',
  'Post-implementation support',
];

export const designations = [
  'SAP PartnerEdge Cloud Choice — customers buy SAP cloud licences with SGN supporting them throughout the contract.',
  'Partner-Led Territories — qualified to support customers in dedicated market segments.',
  'SAP-Qualified Partner-Packaged Solution — CastingSoft by SGN, for metals and mining in India/APJ.',
  'Growth Champion Partner of the Year 2024 — awarded to SGN Software at SAP Partner Kick-Off Meeting 2025.',
];

export type PartnershipRow = { area: string; jsj: string; sgn: string; combined: string };

export const whoBringsWhat: PartnershipRow[] = [
  {
    area: 'Technology',
    jsj: 'AI and computer vision, drones, IoT and HVAC, custom software, cloud and cybersecurity',
    sgn: 'SAP S/4HANA, RISE and GROW with SAP, SAP BTP, Business Data Cloud, Ariba, SuccessFactors, Signavio, SAP Business AI',
    combined: 'The SAP core extended with AI, IoT and automation in one architecture',
  },
  {
    area: 'Delivery',
    jsj: 'Programme management, government and enterprise engagement, field engineering',
    sgn: '250+ SAP experts, 75+ go-lives, proven implementation and roll-out methodology',
    combined: 'One accountable team from scoping to hypercare',
  },
  {
    area: 'Commercial',
    jsj: 'Client relationship and end-to-end solution ownership',
    sgn: 'SAP licence resale authorisations and SAP PartnerEdge Cloud Choice',
    combined: 'Licences, implementation and support from one partnership',
  },
  {
    area: 'Run & Support',
    jsj: 'AIOps, AMC programmes, managed infrastructure services',
    sgn: 'Post-implementation support, roll-outs, integration and resource staffing',
    combined: 'Systems that keep improving after go-live',
  },
];

export const engagementSteps = [
  { n: '01', name: 'Engage', body: 'JSJ INFOTECH leads client engagement, discovery and requirement mapping.' },
  { n: '02', name: 'Design', body: 'Joint solution architecture: the SAP core by SGN, the AI and automation layer by JSJ.' },
  { n: '03', name: 'Deliver', body: 'SGN’s certified SAP consultants and JSJ engineers deliver as one team under shared governance.' },
  { n: '04', name: 'Run & Evolve', body: 'Post go-live support, roll-outs and AI-driven enhancements that keep systems improving.' },
];

// SAP clients served by SGN Software. Source: corporate profile page 5. Owner approved display (OD-04).
export const clientGroups = [
  {
    name: 'SAP Public Cloud',
    clients: ['The Man Company', 'IndianOil LNG', 'Utkarsh', 'Webel Solar', 'Genus', 'Kiri Industries', 'Virgo Group', 'IPL Biologicals', 'Museum of the Future'],
  },
  {
    name: 'RISE with SAP',
    clients: ['DCM Shriram', 'Mamaearth', 'IOL Chemicals & Pharma', 'Sportking India', 'Safex', 'Sunsure', 'Briar Chemicals', 'GLS', 'Tulip Compression'],
  },
  {
    name: 'SAP S/4HANA',
    clients: ['Shakambhari Group', 'Tarsons', 'Edible Group', 'LINC', 'Black Tiger Cement', 'Aludecor', 'Dollar', 'Ripley Stevedoring', 'Bathwal Corporation'],
  },
  {
    name: 'Finance & Spend (Ariba)',
    clients: ['Relaxo', 'Exide', 'ReNew Power', 'Crompton Greaves', 'Valvoline', 'CenturyPly', 'Nuvoco', 'Luminous', 'Shyam Steel'],
  },
];

// SGN Software facts. Sources: "SGN Gold Partnership.pdf" (SAP certificate, issued Nov 02, 2026)
// and corporate profile pages 3–5, 8. Every figure is SGN Software's, never JSJ's.
export const sgn = {
  legalName: 'SGN Software Private Limited',
  shortName: 'SGN Software',
  city: 'Kolkata, India',
  partnerId: '0001635021',
  level: 'SAP Gold Partner',
  certificateIssued: 'Nov 02, 2026',
  engagementModel: 'SAP PartnerEdge Sell (Solution Sales): SAP product and technology advisory and support services',
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
  { name: 'SAP Cloud ERP', note: 'GROW with SAP, public cloud' },
  { name: 'SAP Cloud ERP Private', note: 'RISE with SAP, private cloud' },
  { name: 'Spend Management', note: 'SAP Ariba sourcing, contracts, procure-to-pay' },
  { name: 'Human Capital Management', note: 'SAP SuccessFactors' },
  { name: 'Customer Relationship Management', note: 'SAP CX' },
  { name: 'Open Cloud', note: 'Cloud deployments' },
  { name: 'Open on-premise', note: 'SAP S/4HANA on-premise' },
];

export const serviceLines = [
  'Licence resale & PartnerEdge Cloud Choice',
  'Implementation, GROW and RISE with SAP',
  'Migration, ECC or S/4HANA to RISE',
  'Post-implementation support',
];

export const designations = [
  'SAP PartnerEdge Cloud Choice, customers buy SAP cloud licences with SGN supporting them throughout the contract.',
  'Partner-Led Territories, qualified to support customers in dedicated market segments.',
  'SAP-Qualified Partner-Packaged Solution, CastingSoft by SGN, for metals and mining in India/APJ.',
  'Growth Champion Partner of the Year 2024, awarded to SGN Software at SAP Partner Kick-Off Meeting 2025.',
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

// Exact wording from master prompt §6 "How we engage".
export const engagementSteps = [
  { n: '01', name: 'Engage', body: 'JSJ leads client engagement, discovery and requirements mapping.', who: 'Led by JSJ INFOTECH' },
  { n: '02', name: 'Design', body: 'Joint solution architecture: SAP core by SGN; AI / automation layer by JSJ as applicable.', who: 'JSJ + SGN' },
  { n: '03', name: 'Deliver', body: 'SGN SAP consultants and JSJ engineers deliver under agreed shared governance.', who: 'One team, shared governance' },
  { n: '04', name: 'Run & Evolve', body: 'Post-go-live support, roll-outs, integration and AI-enabled enhancements, subject to scope.', who: 'Continuous improvement' },
];

// SAP clients served by SGN Software. Source: corporate profile page 5. Owner approved display (OD-04).
// Logos taken from each company's own website header (or Wikimedia for Valvoline / IndianOil), 2026-11-15.
// VERIFY: confirm logo use permission and that each logo matches the SGN client entity before launch.
export type Client = { name: string; logo?: string };

const L = (name: string, file?: string): Client => (file ? { name, logo: `/clients/${file}` } : { name });

export const clientGroups: { name: string; clients: Client[] }[] = [
  {
    name: 'SAP Public Cloud',
    clients: [L('The Man Company', 'the-man-company.png'), L('IndianOil LNG', 'indianoil-lng.svg'), L('Utkarsh', 'utkarsh.webp'), L('Webel Solar'), L('Genus', 'genus.png'), L('Kiri Industries', 'kiri-industries.svg'), L('Virgo Group'), L('IPL Biologicals', 'ipl-biologicals.png'), L('Museum of the Future')],
  },
  {
    name: 'RISE with SAP',
    clients: [L('DCM Shriram', 'dcm-shriram.png'), L('Mamaearth', 'mamaearth.png'), L('IOL Chemicals & Pharma', 'iol-chemicals.webp'), L('Sportking India'), L('Safex', 'safex.png'), L('Sunsure', 'sunsure.png'), L('Briar Chemicals', 'briar-chemicals.svg'), L('GLS', 'gls.png'), L('Tulip Compression')],
  },
  {
    name: 'SAP S/4HANA',
    clients: [L('Shakambhari Group', 'shakambhari.svg'), L('Tarsons', 'tarsons.png'), L('Edible Group', 'edible-group.png'), L('LINC', 'linc.webp'), L('Black Tiger Cement', 'black-tiger-cement.png'), L('Aludecor', 'aludecor.png'), L('Dollar'), L('Ripley Stevedoring'), L('Bathwal Corporation')],
  },
  {
    name: 'Finance & Spend (SAP Ariba)',
    clients: [L('Relaxo'), L('Exide', 'exide.png'), L('ReNew Power', 'renew.svg'), L('Crompton Greaves', 'crompton.webp'), L('Valvoline', 'valvoline.svg'), L('CenturyPly', 'centuryply.png'), L('Nuvoco', 'nuvoco.png'), L('Luminous'), L('Shyam Steel', 'shyam-steel.jpg')],
  },
];

// SAP products in plain words (text references; SAP product names are SAP trademarks).
export const sapProducts = [
  { key: 'cloud', name: 'GROW with SAP', what: 'Cloud ERP for growing companies, ready in weeks.' },
  { key: 'server', name: 'RISE with SAP', what: 'Move your existing SAP to a managed private cloud.' },
  { key: 'boxes', name: 'SAP S/4HANA', what: 'The ERP core for finance, supply chain and manufacturing.' },
  { key: 'cart', name: 'SAP Ariba', what: 'Buying, supplier management and spend control.' },
  { key: 'users', name: 'SAP SuccessFactors', what: 'HR, payroll, hiring and talent in one place.' },
  { key: 'flow', name: 'SAP BTP', what: 'Connect SAP to your other systems and add AI.' },
] as const;

// Starting points we meet clients at, and what the partnership does for each.
export const sapScenarios = [
  { from: 'No ERP yet, or outgrowing spreadsheets', to: 'Implement GROW with SAP (public cloud) with standard best practices.' },
  { from: 'Running SAP ECC or S/4HANA on-premise', to: 'Plan and migrate to RISE with SAP (private cloud) with minimal disruption.' },
  { from: 'Already live on SAP', to: 'Post go-live support, roll-outs to new plants or companies, integration and AI add-ons.' },
  { from: 'Need SAP cloud licences', to: 'Buy through SAP PartnerEdge Cloud Choice with SGN supporting you for the whole contract.' },
];

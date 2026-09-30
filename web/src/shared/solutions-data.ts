import type { SolutionPageContent, SolutionSlug } from './types';

/**
 * Every statement here traces to JSJ.docx (company profile) or the JSJ INFOTECH corporate profile PDF.
 * Where the sources use "can", "seek", "intend" or "potential", so does this copy.
 */
export const SOLUTIONS_DATA: Record<SolutionSlug, SolutionPageContent> = {
  'digital-it': {
    slug: 'digital-it',
    number: '01',
    title: 'Digital & IT Consulting',
    shortTitle: 'Digital & IT',
    eyebrow: 'Digital & IT Consulting',
    headline: 'Technology strategy that ends in a running system.',
    lead: "JSJ assesses the client's existing technology environment, business processes, operational requirements and future objectives before recommending a solution — and where a project needs capabilities beyond its own team, it assembles specialist partners to deliver them.",
    summary: 'Assessment, architecture and roadmaps, followed through to implementation.',
    capabilitiesIntro:
      'Consulting can cover technology architecture, enterprise applications, process digitisation, system integration, data management, automation and technology enhancement.',
    capabilities: [
      'IT strategy and digital transformation',
      'Technology assessment and roadmap development',
      'Enterprise application consulting',
      'System integration',
      'Process automation',
      'Technology modernisation',
      'Data and analytics solutions',
      'AI-led business transformation',
      'Technology project implementation',
      'IT system enhancement and optimisation',
    ],
    layer: 'Enterprise',
    coreRole:
      'The foundation the other layers depend on: infrastructure and integration designed to be upgraded as technology evolves, rather than replaced.',
    related: ['sap-erp', 'software-development', 'cybersecurity'],
    seo: {
      title: 'Digital & IT Consulting',
      description:
        'IT strategy, technology assessment, system integration, process automation and modernisation from JSJ INFOTECH, Hyderabad.',
    },
  },

  'sap-erp': {
    slug: 'sap-erp',
    number: '02',
    title: 'SAP Implementation & Management',
    shortTitle: 'SAP & ERP',
    eyebrow: 'SAP & ERP',
    headline: 'Enterprise systems built for continuous transformation.',
    lead: 'SAP environments need continuous enhancement as organisations grow and processes change. JSJ supports implementation, enhancement and management through a structured project approach, working with specialised SAP professionals and implementation partners depending on scope.',
    summary: 'Implementation, migration, integration and application management.',
    capabilitiesIntro:
      'Depending on scope, SAP services can cover implementation support, configuration coordination, integration, migration, testing, deployment, user support and post-implementation management.',
    capabilities: [
      'SAP implementation support',
      'SAP S/4HANA implementation, migration and modernisation',
      'SAP upgrade and enhancement projects',
      'SAP application management',
      'Business process integration',
      'Data migration and validation',
      'Testing and deployment support',
      'User and operational support',
      'System optimisation',
      'Integration with third-party applications',
      'AI-enabled SAP process enhancement',
    ],
    layer: 'Enterprise',
    coreRole:
      'The enterprise backbone. JSJ intends SAP to integrate with IoT and drone-generated data and AI-enabled analytics as the model matures.',
    related: ['artificial-intelligence', 'project-management', 'digital-it'],
    seo: {
      title: 'SAP Implementation & Management',
      description:
        'SAP implementation support, upgrades, data migration, integration and application management from JSJ INFOTECH, Hyderabad.',
    },
  },

  'artificial-intelligence': {
    slug: 'artificial-intelligence',
    number: '03',
    title: 'AI & Intelligent Solutions',
    shortTitle: 'Artificial intelligence',
    eyebrow: 'Artificial Intelligence',
    headline: 'AI that works inside the systems you already run.',
    lead: 'JSJ looks for practical applications of AI that improve productivity, decision-making, customer service, operational efficiency and data analysis — integrating AI into existing enterprise systems rather than treating it as a standalone technology, so that existing investments gain intelligence gradually.',
    summary: 'Document processing, prediction, assistants and decision support.',
    capabilitiesIntro:
      'Potential areas include the following. JSJ intends to collaborate with specialist AI technology providers and global technology companies to bring advanced capabilities to Indian enterprises and institutions.',
    capabilities: [
      'AI-powered business applications',
      'Intelligent document processing',
      'Predictive analytics',
      'AI-enabled automation',
      'Intelligent customer support',
      'Enterprise knowledge assistants',
      'Data analysis and decision-support systems',
      'Process optimisation',
      'AI integration with enterprise applications',
      'Generative AI solutions for approved business use cases',
    ],
    layer: 'Intelligence',
    coreRole:
      'The connective layer: turning data from facilities, drones and enterprise systems into prediction and decision support.',
    related: ['sap-erp', 'drone-technology', 'software-development'],
    seo: {
      title: 'AI & Intelligent Solutions',
      description:
        'Practical AI for enterprise and government: document processing, predictive analytics, knowledge assistants and decision support.',
    },
  },

  cybersecurity: {
    slug: 'cybersecurity',
    number: '04',
    title: 'Cybersecurity',
    shortTitle: 'Cybersecurity',
    eyebrow: 'Cybersecurity',
    headline: 'Security designed into the architecture, not added afterwards.',
    lead: 'Security runs through JSJ’s IT, infrastructure and software work: zero-trust architecture and continuous hardening for enterprise and government environments. Where a project needs specific certifications or specialist depth, JSJ works with qualified cloud and cybersecurity partners.',
    summary: 'Zero-trust architecture and continuous infrastructure hardening.',
    capabilitiesIntro:
      'JSJ’s corporate profile places security within IT project delivery, alongside collaboration with cloud and cybersecurity partners for specialist requirements.',
    capabilities: [
      'Zero-trust cybersecurity architecture',
      'Continuous infrastructure hardening',
      'Security as a design requirement in custom software',
      'Government digitisation consulting toward connected, data-driven operations',
      'Collaboration with cloud and cybersecurity companies for specialist work',
    ],
    layer: 'Enterprise',
    coreRole:
      'The trust boundary around every layer, so that connecting physical, enterprise and intelligent systems does not widen the attack surface.',
    related: ['digital-it', 'government-technology', 'software-development'],
    seo: {
      title: 'Cybersecurity',
      description:
        'Zero-trust architecture and continuous infrastructure hardening for enterprise and government IT, from JSJ INFOTECH, Hyderabad.',
    },
  },

  'software-development': {
    slug: 'software-development',
    number: '05',
    title: 'Software & Application Development',
    shortTitle: 'Software development',
    eyebrow: 'Software Development',
    headline: 'Software shaped around how your organisation actually operates.',
    lead: 'From internal enterprise applications to customer-facing platforms and specialised systems, JSJ builds customised digital solutions for specific operational requirements, with an emphasis on scalability, security, usability, integration and maintainability.',
    summary: 'Web, mobile and enterprise applications, APIs and modernisation.',
    capabilitiesIntro:
      'Where required, projects can be executed through a combination of internal teams and specialised technology development partners.',
    capabilities: [
      'Web application development',
      'Mobile application development',
      'Enterprise applications',
      'Business process applications',
      'API development and integration',
      'Database-driven applications',
      'Workflow automation',
      'Dashboard and analytics platforms',
      'Cloud-enabled applications',
      'AI-integrated applications',
      'Application modernisation',
    ],
    layer: 'Enterprise',
    coreRole:
      'The layer that absorbs new capability: modular, API-first software designed to take on AI features without rebuilds.',
    related: ['digital-it', 'artificial-intelligence', 'cybersecurity'],
    seo: {
      title: 'Software & Application Development',
      description:
        'Custom web, mobile and enterprise applications, APIs and modernisation from JSJ INFOTECH, Hyderabad.',
    },
  },

  'digital-content': {
    slug: 'digital-content',
    number: '06',
    title: 'Digital Content Development',
    shortTitle: 'Digital content',
    eyebrow: 'Digital Content Development',
    headline: 'Digital content, shaped around the engagement.',
    lead: "Digital Content Development is available as part of tailored engagements; scope, formats and delivery requirements are defined based on the client's needs.",
    summary: 'Available within tailored engagements, scoped to the client’s needs.',
    capabilitiesIntro: '',
    capabilities: [],
    layer: 'Delivery',
    coreRole:
      'Delivered alongside JSJ’s other solutions, using the same structured lifecycle from requirement assessment through to support.',
    related: ['project-management', 'software-development', 'government-technology'],
    seo: {
      title: 'Digital Content Development',
      description:
        'Digital Content Development from JSJ INFOTECH is available as part of tailored engagements, with scope and formats defined by client needs.',
    },
  },

  'drone-technology': {
    slug: 'drone-technology',
    number: '07',
    title: 'Drone Technology Projects',
    shortTitle: 'Drone technology',
    eyebrow: 'Drone Technology',
    headline: 'Aerial data, turned into decisions.',
    lead: 'Drones are opening new options across infrastructure, construction, agriculture, surveying, inspection, public-sector operations and asset management. JSJ intends to take part in projects where aerial data, imaging, mapping, inspection and monitoring improve efficiency and decision-making — coordinating technology integration, software platforms, data management and specialised drone partners.',
    summary: 'Surveys, inspection and mapping, with data management and analytics.',
    capabilitiesIntro: 'Potential applications include:',
    capabilities: [
      'Land and infrastructure surveys',
      'Construction progress monitoring',
      'Asset inspection',
      'Mapping and GIS integration',
      'Infrastructure monitoring',
      'Agricultural surveys',
      'Disaster assessment',
      'Utility and network inspection',
      'Site documentation',
      'Aerial data collection and analytics',
    ],
    layer: 'Physical',
    coreRole:
      'The field sensor: autonomous data capture that feeds the enterprise and intelligence layers.',
    notice:
      'All drone-related projects will be undertaken in accordance with applicable regulatory requirements and permissions.',
    related: ['artificial-intelligence', 'government-technology', 'project-management'],
    seo: {
      title: 'Drone Technology Projects',
      description:
        'Drone-enabled surveys, inspection, mapping and aerial analytics, delivered with specialist partners by JSJ INFOTECH.',
    },
  },

  'project-management': {
    slug: 'project-management',
    number: '08',
    title: 'Project Management & Execution',
    shortTitle: 'Project management',
    eyebrow: 'Project Management',
    headline: 'Governance that carries a project from requirement to handover.',
    lead: 'Successful technology projects need planning, coordination, governance and execution. JSJ brings technology teams, vendors, consultants, implementation partners and client stakeholders together under one structured framework — across requirement definition, planning, procurement, implementation, testing, commissioning and handover.',
    summary: 'Planning, governance, vendor coordination, testing and handover.',
    capabilitiesIntro:
      'The objective is delivery within agreed scope, schedule, quality and commercial parameters. The approach focuses on:',
    capabilities: [
      'Project planning and scheduling',
      'Scope management',
      'Resource coordination',
      'Vendor and partner management',
      'Budget and cost monitoring',
      'Risk identification and mitigation',
      'Quality management',
      'Testing and commissioning',
      'Stakeholder coordination',
      'Documentation and handover',
      'Post-implementation support',
    ],
    layer: 'Delivery',
    coreRole:
      'The discipline that lets many specialists, vendors and systems behave as one programme.',
    related: ['sap-erp', 'government-technology', 'digital-it'],
    seo: {
      title: 'Project Management & Execution',
      description:
        'Structured technology project management from requirement to handover: planning, governance, vendor coordination, testing and commissioning.',
    },
  },

  'government-technology': {
    slug: 'government-technology',
    number: '09',
    title: 'Government Technology Projects',
    shortTitle: 'Government technology',
    eyebrow: 'Government Technology',
    headline: 'Modernising public systems, with clear accountability.',
    lead: 'Government organisations are adopting digital platforms to improve service delivery, transparency, data management and administrative efficiency. JSJ seeks to take part in technology projects across implementation, application development, integration, upgrades and modernisation — assessing existing systems, developing upgrade strategies and supporting deployment through to post-implementation.',
    summary: 'Application modernisation, system upgrades and digital service platforms.',
    capabilitiesIntro: 'Potential areas include:',
    capabilities: [
      'Government application modernisation',
      'IT system upgrades',
      'Digital service platforms',
      'Enterprise application implementation',
      'Data and analytics systems',
      'AI-enabled government applications',
      'Infrastructure monitoring',
      'GIS and drone-enabled projects',
      'Software development',
      'System integration',
      'Digital transformation initiatives',
    ],
    layer: 'Physical',
    coreRole:
      'Where the layers meet in the public sector, including smart facility maintenance and monitoring outlined in JSJ’s corporate profile.',
    notice:
      'JSJ works with qualified technology partners and specialist agencies wherever specific technical certifications, domain expertise or statutory requirements are necessary.',
    related: ['project-management', 'drone-technology', 'artificial-intelligence'],
    seo: {
      title: 'Government Technology Projects',
      description:
        'Government application modernisation, IT system upgrades, digital service platforms and infrastructure monitoring from JSJ INFOTECH.',
    },
  },
};

export const SOLUTION_ORDER: readonly SolutionSlug[] = [
  'digital-it',
  'sap-erp',
  'artificial-intelligence',
  'cybersecurity',
  'software-development',
  'digital-content',
  'drone-technology',
  'project-management',
  'government-technology',
];

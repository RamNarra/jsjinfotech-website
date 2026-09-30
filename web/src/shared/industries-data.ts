import type { IndustryPageContent, IndustrySlug } from './types';

export const INDUSTRIES_DATA: Record<IndustrySlug, IndustryPageContent> = {
  government: {
    slug: 'government',
    title: 'Government',
    eyebrow: 'Industries · Government',
    headline: 'Technology modernisation for public organisations.',
    lead: 'Public bodies are adopting digital platforms to improve service delivery, operational transparency, data management and administrative efficiency. JSJ seeks to support that work across implementation, integration, upgrade and post-implementation support.',
    summary:
      'Modernisation, system upgrades, application development, infrastructure monitoring and GIS or drone-enabled projects.',
    focusAreas: [
      {
        title: 'Application modernisation and system upgrades',
        detail:
          'Assessing existing systems, developing upgrade strategies and coordinating implementation and integration with new platforms.',
        solution: 'government-technology',
      },
      {
        title: 'Digital service platforms',
        detail: 'Application development and digital transformation initiatives for public service delivery.',
        solution: 'software-development',
      },
      {
        title: 'AI-enabled government applications',
        detail: 'Data and analytics systems and AI integrated into existing government applications.',
        solution: 'artificial-intelligence',
      },
      {
        title: 'GIS and drone-enabled projects',
        detail: 'Surveys, mapping, inspection and infrastructure monitoring, in line with applicable regulations and permissions.',
        solution: 'drone-technology',
      },
      {
        title: 'Programme governance',
        detail: 'Planning, vendor and partner coordination, testing, commissioning and handover.',
        solution: 'project-management',
      },
    ],
    approach: [
      'Assess the existing systems before recommending an upgrade path.',
      'Bring in qualified partners and specialist agencies wherever certifications, domain expertise or statutory requirements call for them.',
      'Test, validate and deploy in a controlled way, then support the system after go-live.',
    ],
    closing:
      'JSJ welcomes engagement from government departments seeking a technology partner across IT, SAP, AI, drone, software and smart infrastructure.',
    seo: {
      title: 'Government Technology Partner',
      description:
        'Technology modernisation, system upgrades, application development, infrastructure monitoring and GIS or drone-enabled projects for government organisations.',
    },
  },

  enterprise: {
    slug: 'enterprise',
    title: 'Enterprise',
    eyebrow: 'Industries · Enterprise',
    headline: 'Get more from the technology you already own.',
    lead: 'Many organisations have established IT systems that need continuous modernisation rather than replacement. JSJ looks for the places where SAP, AI, automation, analytics and modern software can enhance what is already running — and then carries the work through delivery.',
    summary: 'SAP, ERP, AI, software, automation, cybersecurity and digital transformation.',
    focusAreas: [
      {
        title: 'SAP and ERP',
        detail: 'Implementation, upgrades, integration and application management for SAP-based environments.',
        solution: 'sap-erp',
      },
      {
        title: 'AI and automation',
        detail: 'Document processing, predictive analytics and knowledge assistants integrated into existing systems.',
        solution: 'artificial-intelligence',
      },
      {
        title: 'Custom software',
        detail: 'Enterprise applications, APIs, workflow automation and modernisation of existing applications.',
        solution: 'software-development',
      },
      {
        title: 'Cybersecurity',
        detail: 'Zero-trust architecture and continuous hardening, with specialist partners where required.',
        solution: 'cybersecurity',
      },
      {
        title: 'Digital transformation',
        detail: 'Technology assessment, roadmaps and enhancement of existing IT systems.',
        solution: 'digital-it',
      },
    ],
    approach: [
      'Start from the business requirement, then choose the technology.',
      'Enhance existing investments through AI, automation, analytics and integration before considering replacement.',
      'Assemble the right specialists and partners for each project, under one delivery framework.',
    ],
    closing:
      'JSJ welcomes engagement from enterprises seeking a technology and project execution partner.',
    seo: {
      title: 'Enterprise Technology Partner',
      description:
        'SAP, ERP, AI, software, automation, cybersecurity and digital transformation for enterprises, delivered by JSJ INFOTECH.',
    },
  },
};

export const INDUSTRY_ORDER: readonly IndustrySlug[] = ['government', 'enterprise'];

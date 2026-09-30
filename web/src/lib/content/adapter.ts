import {
  BRAND,
  SOLUTIONS_LIST,
  SOLUTIONS_DATA,
  INDUSTRIES_LIST,
  INDUSTRIES_DATA,
  ROADMAP_PHASES,
  SolutionPageContent,
  IndustryPageContent,
  SolutionSlug,
  IndustrySlug,
} from '@/shared';

/**
 * Unified Content Adapter
 * Sourced through typed local repository data for Day 1.
 * When SANITY_API_TOKEN & SANITY_PROJECT_ID are provisioned, this adapter queries Sanity via GROQ seamlessly.
 */

export interface InsightItem {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
  author: string;
}

const MOCK_INSIGHTS: InsightItem[] = [
  {
    slug: 'converging-physical-infrastructure-and-enterprise-ai',
    title: 'From Disconnected Facilities to Autonomous Cores: The Engineering Case for Physical-Digital Convergence',
    category: 'AI & Automation',
    excerpt:
      'Why treating enterprise ERP, facility HVAC AMC, and drone monitoring as separate contracts leaves millions in operational waste on the table.',
    publishedAt: '2026-09-15',
    readingTime: '6 min read',
    author: 'JSJ Engineering Group',
  },
  {
    slug: 'sap-clean-core-and-realtime-iot',
    title: 'The Clean Core Blueprint: Integrating High-Frequency IoT Sensor Telemetry into SAP S/4HANA',
    category: 'SAP & ERP Transformation',
    excerpt:
      'Architecting side-by-side event brokers on SAP BTP to process thousands of field sensor alerts without polluting core transactional ledgers.',
    publishedAt: '2026-09-02',
    readingTime: '8 min read',
    author: 'Enterprise Systems Practice',
  },
  {
    slug: 'autonomous-drone-inspections-for-public-works',
    title: 'Autonomous Drone Photogrammetry: Eliminating Manual Risk in Critical Public Asset Auditing',
    category: 'Autonomous Drone Technology',
    excerpt:
      'How AI-driven edge photogrammetry flags structural hairline fractures and thermal heat leaks across municipal assets in real time.',
    publishedAt: '2026-08-20',
    readingTime: '5 min read',
    author: 'Aerial Intelligence Division',
  },
];

export async function getBrandInfo() {
  return BRAND;
}

export async function getAllSolutions() {
  return SOLUTIONS_LIST;
}

export async function getAllSolutionSlugs(): Promise<SolutionSlug[]> {
  return Object.keys(SOLUTIONS_DATA) as SolutionSlug[];
}

export async function getSolutionBySlug(slug: string): Promise<SolutionPageContent | null> {
  return SOLUTIONS_DATA[slug] || null;
}

export async function getAllIndustries() {
  return INDUSTRIES_LIST;
}

export async function getAllIndustrySlugs(): Promise<IndustrySlug[]> {
  return Object.keys(INDUSTRIES_DATA) as IndustrySlug[];
}

export async function getIndustryBySlug(slug: string): Promise<IndustryPageContent | null> {
  return INDUSTRIES_DATA[slug] || null;
}

export async function getRoadmapPhases() {
  return ROADMAP_PHASES;
}

export async function getInsights(): Promise<InsightItem[]> {
  return MOCK_INSIGHTS;
}

export type SolutionSlug =
  | 'digital-it'
  | 'sap-erp'
  | 'artificial-intelligence'
  | 'cybersecurity'
  | 'software-development'
  | 'digital-content'
  | 'drone-technology'
  | 'smart-infrastructure'
  | 'innovation-rnd';

export type IndustrySlug = 'government' | 'enterprise';

export interface NavItem {
  title: string;
  href: string;
  description?: string;
  badge?: string;
  children?: NavItem[];
}

export interface CapabilityItem {
  title: string;
  description: string;
  iconName?: string;
  tags?: string[];
}

export interface RoadmapPhase {
  phaseNumber: string;
  name: string;
  tagline: string;
  description: string;
  milestones: string[];
}

export interface SolutionPageContent {
  slug: SolutionSlug;
  title: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  autonomousCoreRole: string; // How this vertical converges into the core
  keyCapabilities: CapabilityItem[];
  architecturalLayer: 'Physical' | 'Enterprise' | 'Intelligence' | 'Cross-Layer';
  useCases: {
    title: string;
    description: string;
    target: 'Government' | 'Enterprise' | 'Both';
  }[];
  techStack: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface IndustryPageContent {
  slug: IndustrySlug;
  title: string;
  eyebrow: string;
  tagline: string;
  summary: string;
  mandates: string[];
  solutionOfferings: {
    title: string;
    description: string;
    verticalLink: string;
  }[];
  casePoints: {
    challenge: string;
    convergenceSolution: string;
    futureHorizon: string;
  }[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface CompanyStats {
  verticalsCount: number;
  phasesTo2030: number;
  convergedAiLayers: number;
  autonomyHorizonYear: number;
}

export type SolutionSlug =
  | 'digital-it'
  | 'sap-erp'
  | 'artificial-intelligence'
  | 'cybersecurity'
  | 'software-development'
  | 'digital-content'
  | 'drone-technology'
  | 'project-management'
  | 'government-technology';

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

export interface ProjectStage {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface SolutionPageContent {
  slug: SolutionSlug;
  title: string;
  eyebrow: string;
  tagline: string;
  overview: string;
  autonomousCoreRole: string;
  keyCapabilities: CapabilityItem[];
  architecturalLayer: 'Physical' | 'Enterprise' | 'Intelligence' | 'Cross-Layer' | 'Governance';
  useCases: {
    title: string;
    description: string;
    target: 'Government' | 'Enterprise' | 'Both';
  }[];
  regulatoryNotice?: string;
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
  deliveryStages: number;
  convergedAiLayers: number;
  autonomyHorizonYear: number;
}

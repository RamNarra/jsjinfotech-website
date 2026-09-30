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

export type CoreLayer = 'Physical' | 'Enterprise' | 'Intelligence' | 'Delivery';

export interface SolutionPageContent {
  slug: SolutionSlug;
  number: string;
  title: string;
  /** Short name used in dense lists and breadcrumbs. */
  shortTitle: string;
  eyebrow: string;
  headline: string;
  lead: string;
  /** One sentence used on index surfaces. */
  summary: string;
  capabilitiesIntro: string;
  capabilities: string[];
  /** Where this capability sits in the JSJ convergence model. */
  layer: CoreLayer;
  coreRole: string;
  /** Regulatory / scope caveat shown verbatim on the page. */
  notice?: string;
  related: SolutionSlug[];
  seo: { title: string; description: string };
}

export interface IndustryPageContent {
  slug: IndustrySlug;
  title: string;
  eyebrow: string;
  headline: string;
  lead: string;
  summary: string;
  focusAreas: { title: string; detail: string; solution: SolutionSlug }[];
  approach: string[];
  closing: string;
  seo: { title: string; description: string };
}

export interface ProjectStage {
  stepNumber: string;
  title: string;
  description: string;
}

export interface RoadmapPhase {
  phaseNumber: string;
  name: string;
  summary: string;
  /** Per-vertical milestones drawn from the corporate profile roadmap table. */
  items: { vertical: string; milestone: string }[];
}

/** Published article. No articles exist yet; the list is empty until content is provided. */
export interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  /** ISO date. */
  publishedAt: string;
  /** Only set when a real, named author is supplied. */
  author?: string;
}

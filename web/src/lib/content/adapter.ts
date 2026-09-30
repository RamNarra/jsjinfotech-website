import {
  SOLUTIONS_DATA,
  SOLUTION_ORDER,
  INDUSTRIES_DATA,
  INDUSTRY_ORDER,
  type SolutionPageContent,
  type IndustryPageContent,
  type InsightItem,
} from '@/shared';

/**
 * Content adapter. Local typed data today; swap the bodies for Sanity GROQ queries when the CMS is
 * provisioned. Page components depend only on these signatures, so the site runs without Sanity credentials.
 */

export async function getAllSolutions(): Promise<SolutionPageContent[]> {
  return SOLUTION_ORDER.map((slug) => SOLUTIONS_DATA[slug]);
}

export async function getSolutionBySlug(slug: string): Promise<SolutionPageContent | null> {
  return (SOLUTIONS_DATA as Record<string, SolutionPageContent>)[slug] ?? null;
}

export async function getAllIndustries(): Promise<IndustryPageContent[]> {
  return INDUSTRY_ORDER.map((slug) => INDUSTRIES_DATA[slug]);
}

export async function getIndustryBySlug(slug: string): Promise<IndustryPageContent | null> {
  return (INDUSTRIES_DATA as Record<string, IndustryPageContent>)[slug] ?? null;
}

/** No articles have been published yet. Only real, supplied articles belong here. */
const INSIGHTS: readonly InsightItem[] = [];

export async function getInsights(): Promise<InsightItem[]> {
  return [...INSIGHTS].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

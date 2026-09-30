import { describe, expect, it } from 'vitest';
import { INDUSTRY_ORDER, PROJECT_DELIVERY_STAGES, ROADMAP_PHASES, SOLUTION_ORDER, SOLUTIONS_DATA } from '@/shared';
import { getAllIndustries, getAllSolutions, getIndustryBySlug, getInsights, getSolutionBySlug } from '@/lib/content/adapter';
import { pageMetadata } from '@/lib/metadata';

const EXPECTED = [
  'digital-it', 'sap-erp', 'artificial-intelligence', 'cybersecurity', 'software-development',
  'digital-content', 'drone-technology', 'project-management', 'government-technology',
];

describe('content routing', () => {
  it('serves exactly the nine solution routes and two industries', async () => {
    expect((await getAllSolutions()).map((s) => s.slug)).toEqual(EXPECTED);
    expect((await getAllIndustries()).map((i) => i.slug)).toEqual(['government', 'enterprise']);
    expect(SOLUTION_ORDER).toEqual(EXPECTED);
    expect(INDUSTRY_ORDER).toHaveLength(2);
  });

  it('looks up known slugs and returns null for unknown ones', async () => {
    expect((await getSolutionBySlug('sap-erp'))?.title).toMatch(/SAP/);
    expect(await getSolutionBySlug('hvac')).toBeNull();
    expect(await getIndustryBySlug('retail')).toBeNull();
  });

  it('keeps the six-stage lifecycle and four roadmap phases', () => {
    expect(PROJECT_DELIVERY_STAGES).toHaveLength(6);
    expect(ROADMAP_PHASES.map((p) => p.name)).toEqual(['Foundation', 'Integration', 'Intelligence', 'Autonomy']);
  });

  it('publishes no fabricated articles', async () => {
    expect(await getInsights()).toEqual([]);
  });

  it('every solution references only real related slugs and has unique SEO titles', () => {
    const titles = new Set<string>();
    for (const s of Object.values(SOLUTIONS_DATA)) {
      s.related.forEach((r) => expect(EXPECTED).toContain(r));
      expect(titles.has(s.seo.title)).toBe(false);
      titles.add(s.seo.title);
    }
  });

  it('keeps claim-sensitive wording honest', () => {
    const all = JSON.stringify(SOLUTIONS_DATA);
    for (const banned of [/DGCA/i, /ISO ?\d/i, /certified/i, /official SAP partner/i, /sovereign/i, /Kubernetes|Terraform/i]) {
      expect(all).not.toMatch(banned);
    }
    expect(SOLUTIONS_DATA['drone-technology'].notice).toBe(
      'All drone-related projects will be undertaken in accordance with applicable regulatory requirements and permissions.',
    );
    expect(SOLUTIONS_DATA['digital-content'].capabilities).toEqual([]);
  });
});

describe('metadata', () => {
  it('produces canonical, OpenGraph and Twitter data from one call', () => {
    const m = pageMetadata({ title: 'Company', description: 'd', path: '/company' });
    expect(m.alternates?.canonical).toBe('/company');
    expect(m.openGraph?.title).toBe('Company | JSJ INFOTECH');
    expect(m.twitter?.title).toBe('Company | JSJ INFOTECH');
    expect(m.robots).toBeUndefined();
  });
});

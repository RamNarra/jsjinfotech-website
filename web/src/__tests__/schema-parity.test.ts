import { describe, expect, it } from 'vitest';
import { BRAND, INDUSTRIES_DATA, ROADMAP_PHASES, SOLUTIONS_DATA, SOLUTION_ORDER } from '@/shared';
import solution, { SOLUTION_SLUGS } from '../../../sanity/schemas/solution';
import industry, { INDUSTRY_SLUGS } from '../../../sanity/schemas/industry';
import insight from '../../../sanity/schemas/insight';
import roadmapPhase from '../../../sanity/schemas/roadmapPhase';
import siteSettings from '../../../sanity/schemas/siteSettings';

const fields = (s: { fields: { name: string }[] }) => s.fields.map((f) => f.name).sort();
const keys = (o: object) => Object.keys(o).sort();

// The frontend contract (web/src/shared) is authoritative; Sanity must describe exactly the same shape.
describe('Sanity schemas match the frontend content contracts', () => {
  it('solution', () => {
    const optional = ['notice'];
    const sample = { ...SOLUTIONS_DATA['sap-erp'], notice: '' };
    expect(fields(solution)).toEqual(keys(sample));
    expect(optional.every((k) => fields(solution).includes(k))).toBe(true);
    expect([...SOLUTION_SLUGS]).toEqual([...SOLUTION_ORDER]);
  });
  it('industry', () => {
    expect(fields(industry)).toEqual(keys(INDUSTRIES_DATA.government));
    expect([...INDUSTRY_SLUGS]).toEqual(['government', 'enterprise']);
  });
  it('roadmap phase', () => {
    expect(fields(roadmapPhase)).toEqual(keys(ROADMAP_PHASES[0]));
  });
  it('insight (body is CMS-only)', () => {
    expect(fields(insight)).toEqual(['author', 'body', 'excerpt', 'publishedAt', 'slug', 'title']);
  });
  it('site settings', () => {
    const b = BRAND as Record<string, unknown>;
    for (const f of fields(siteSettings)) expect(b).toHaveProperty(f);
  });
});

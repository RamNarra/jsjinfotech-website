/**
 * Mirrors SolutionPageContent in web/src/shared/types.ts. Keep field names identical; the parity test in
 * web/src/__tests__/schema-parity.test.ts fails if they drift. `slug` is a Sanity slug (read as slug.current).
 */
export const SOLUTION_SLUGS = ['digital-it','sap-erp','artificial-intelligence','cybersecurity','software-development','digital-content','drone-technology','project-management','government-technology'] as const;

const list = (values: readonly string[]) => values.map((v) => ({ title: v, value: v }));

export default {
  name: 'solution',
  title: 'Solution',
  type: 'document',
  fields: [
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'number', title: 'Number (e.g. 01)', type: 'string' },
    { name: 'title', title: 'Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'shortTitle', title: 'Short title', type: 'string' },
    { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
    { name: 'headline', title: 'Headline (H1)', type: 'string' },
    { name: 'lead', title: 'Lead paragraph', type: 'text', rows: 4 },
    { name: 'summary', title: 'One-sentence summary', type: 'string' },
    { name: 'capabilitiesIntro', title: 'Capabilities introduction', type: 'text', rows: 3 },
    { name: 'capabilities', title: 'Capabilities', type: 'array', of: [{ type: 'string' }] },
    {
      name: 'layer',
      title: 'Convergence layer',
      type: 'string',
      options: { list: list(['Physical', 'Enterprise', 'Intelligence', 'Delivery']) },
    },
    { name: 'coreRole', title: 'Role in the JSJ model', type: 'text', rows: 3 },
    { name: 'notice', title: 'Regulatory / scope notice (shown verbatim)', type: 'text', rows: 2 },
    {
      name: 'related',
      title: 'Related solutions',
      type: 'array',
      of: [{ type: 'string' }],
      options: { list: list(SOLUTION_SLUGS) },
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'title', title: 'Title', type: 'string' },
        { name: 'description', title: 'Description', type: 'text', rows: 2 },
      ],
    },
  ],
};

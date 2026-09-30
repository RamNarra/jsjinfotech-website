/** Mirrors IndustryPageContent in web/src/shared/types.ts. */
export const INDUSTRY_SLUGS = ['government', 'enterprise'] as const;

export default {
  name: 'industry',
  title: 'Industry',
  type: 'document',
  fields: [
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'title', title: 'Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'eyebrow', title: 'Eyebrow', type: 'string' },
    { name: 'headline', title: 'Headline (H1)', type: 'string' },
    { name: 'lead', title: 'Lead paragraph', type: 'text', rows: 4 },
    { name: 'summary', title: 'Summary', type: 'text', rows: 2 },
    {
      name: 'focusAreas',
      title: 'Focus areas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'detail', title: 'Detail', type: 'text', rows: 2 },
            { name: 'solution', title: 'Solution slug', type: 'string' },
          ],
        },
      ],
    },
    { name: 'approach', title: 'How we work', type: 'array', of: [{ type: 'string' }] },
    { name: 'closing', title: 'Closing statement', type: 'text', rows: 2 },
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

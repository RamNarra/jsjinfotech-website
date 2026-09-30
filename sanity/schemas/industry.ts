export default {
  name: 'industry',
  title: 'Industry Sector',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    },
    {
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'Executive Summary',
      type: 'text',
      rows: 4,
    },
    {
      name: 'mandates',
      title: 'Strategic Mandates & Requirements',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'solutionOfferings',
      title: 'Tailored Solution Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Offering Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'verticalLink', title: 'Internal Solution Link', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'casePoints',
      title: 'Operational Challenges & Solutions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'challenge', title: 'Challenge', type: 'text', rows: 2 },
            { name: 'convergenceSolution', title: 'JSJ Convergence Solution', type: 'text', rows: 2 },
            { name: 'futureHorizon', title: 'Autonomous Horizon', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'seo',
      title: 'SEO Metadata',
      type: 'object',
      fields: [
        { name: 'metaTitle', title: 'Meta Title', type: 'string' },
        { name: 'metaDescription', title: 'Meta Description', type: 'text', rows: 2 },
        { name: 'keywords', title: 'Keywords', type: 'array', of: [{ type: 'string' }] },
      ],
    },
  ],
};

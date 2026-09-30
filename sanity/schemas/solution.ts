export default {
  name: 'solution',
  title: 'Solution & Vertical',
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
      name: 'architecturalLayer',
      title: 'Convergence Layer',
      type: 'string',
      options: {
        list: [
          { title: 'Physical Layer (Drones / HVAC / IoT)', value: 'Physical' },
          { title: 'Enterprise Layer (SAP / IT / Software)', value: 'Enterprise' },
          { title: 'Intelligence Layer (AI / Predictive / Digital Twins)', value: 'Intelligence' },
          { title: 'Cross-Layer Convergence', value: 'Cross-Layer' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
      rows: 4,
    },
    {
      name: 'autonomousCoreRole',
      title: 'Role in Autonomous Core',
      type: 'text',
      rows: 3,
      description: 'How this capability feeds and connects into the central JSJ Autonomous Core.',
    },
    {
      name: 'keyCapabilities',
      title: 'Key Capabilities',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Capability Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] },
          ],
        },
      ],
    },
    {
      name: 'useCases',
      title: 'Target Use Cases',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Use Case Title', type: 'string' },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            {
              name: 'target',
              title: 'Target Audience',
              type: 'string',
              options: { list: ['Government', 'Enterprise', 'Both'] },
            },
          ],
        },
      ],
    },
    {
      name: 'techStack',
      title: 'Technology Stack / Protocols',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'question', title: 'Question', type: 'string' },
            { name: 'answer', title: 'Answer', type: 'text', rows: 3 },
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

export default {
  name: 'insight',
  title: 'Insight & Technical Article',
  type: 'document',
  fields: [
    { name: 'title', title: 'Article Title', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96 } },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          'AI & Automation',
          'SAP & ERP Transformation',
          'Cybersecurity & Sovereign Defense',
          'Autonomous Drone Technology',
          'Smart Infrastructure & HVAC',
          'GovTech Innovation',
        ],
      },
    },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'readingTime', title: 'Reading Time (e.g. 5 min)', type: 'string' },
    {
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};

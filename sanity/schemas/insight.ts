/**
 * Mirrors InsightItem in web/src/shared/types.ts. Publish only real articles; `author` is optional and
 * must be a real, named person.
 */
export default {
  name: 'insight',
  title: 'Insight',
  type: 'document',
  fields: [
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' }, validation: (R: any) => R.required() },
    { name: 'title', title: 'Title', type: 'string', validation: (R: any) => R.required() },
    { name: 'excerpt', title: 'Excerpt', type: 'text', rows: 3 },
    { name: 'publishedAt', title: 'Published at', type: 'datetime', validation: (R: any) => R.required() },
    { name: 'author', title: 'Author (optional, real person only)', type: 'string' },
    { name: 'body', title: 'Body', type: 'array', of: [{ type: 'block' }] },
  ],
};

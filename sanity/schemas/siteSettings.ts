export default {
  name: 'siteSettings',
  title: 'Site Settings & Brand',
  type: 'document',
  fields: [
    { name: 'brandName', title: 'Brand Name', type: 'string' },
    { name: 'tagline', title: 'Primary Tagline', type: 'string' },
    { name: 'subTagline', title: 'Sub Tagline', type: 'string' },
    { name: 'vision2030', title: 'Vision 2030 Statement', type: 'text', rows: 4 },
    { name: 'phone', title: 'Contact Phone', type: 'string' },
    { name: 'supportEmail', title: 'Support Email', type: 'string' },
    { name: 'executiveEmail', title: 'Executive Email', type: 'string' },
    { name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' },
    {
      name: 'seoDefaults',
      title: 'Global SEO Defaults',
      type: 'object',
      fields: [
        { name: 'defaultTitle', title: 'Default Title', type: 'string' },
        { name: 'defaultDescription', title: 'Default Description', type: 'text', rows: 2 },
        { name: 'ogImage', title: 'OpenGraph Image', type: 'image' },
      ],
    },
  ],
};

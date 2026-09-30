/** Mirrors BRAND in web/src/shared/constants.ts. */
export default {
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  fields: [
    { name: 'name', title: 'Company name', type: 'string' },
    { name: 'tagline', title: 'Tagline', type: 'string' },
    { name: 'description', title: 'Description', type: 'text', rows: 3 },
    { name: 'phone', title: 'Phone', type: 'string' },
    { name: 'supportEmail', title: 'Support email', type: 'string' },
    { name: 'executiveEmail', title: 'Executive email', type: 'string' },
    { name: 'canonicalUrl', title: 'Canonical URL', type: 'url' },
    { name: 'linkedinUrl', title: 'LinkedIn URL', type: 'url' },
    {
      name: 'address',
      title: 'Address',
      type: 'object',
      fields: [
        { name: 'street', title: 'Street', type: 'string' },
        { name: 'area', title: 'Area', type: 'string' },
        { name: 'city', title: 'City', type: 'string' },
        { name: 'state', title: 'State', type: 'string' },
        { name: 'country', title: 'Country', type: 'string' },
      ],
    },
  ],
};

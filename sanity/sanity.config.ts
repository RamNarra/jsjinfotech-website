// Standalone Sanity Studio Configuration
// Once live Sanity project credentials are provisioned, set SANITY_STUDIO_PROJECT_ID and SANITY_STUDIO_DATASET

import { schemaTypes } from './schemas';

export const config = {
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || 'jsj-infotech-preview',
  dataset: process.env.SANITY_STUDIO_DATASET || 'production',
  title: 'JSJ INFOTECH Content Studio',
  basePath: '/studio',
  schema: {
    types: schemaTypes,
  },
};

export default config;

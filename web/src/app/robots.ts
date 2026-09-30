import { MetadataRoute } from 'next';
import { BRAND } from '@/shared';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${BRAND.canonicalUrl}/sitemap.xml`,
  };
}

import type { MetadataRoute } from 'next';
import { site } from '@/content/site';
import { verticals } from '@/content/verticals';

export const dynamic = 'force-static';

const routes = ['', '/about', '/partnership', '/services', '/industries', '/insights', '/careers', '/contact', '/privacy', '/terms', '/cookies', '/accessibility'];

export default function sitemap(): MetadataRoute.Sitemap {
  const all = [...routes, ...verticals.map((v) => `/services/${v.slug}`)];
  return all.map((r) => ({ url: `${site.url}${r}/`.replace(/\/\/$/, '/'), changeFrequency: 'monthly', priority: r === '' ? 1 : 0.7 }));
}

import { MetadataRoute } from 'next';
import { getAllSolutions, getAllIndustries } from '@/lib/content/adapter';
import { BRAND } from '@/shared';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BRAND.canonicalUrl;
  const lastModified = new Date();

  const solutionSlugs = (await getAllSolutions()).map((s) => s.slug);
  const industrySlugs = (await getAllIndustries()).map((i) => i.slug);

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    { url: `${baseUrl}/solutions`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${baseUrl}/technology`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/vision-2030`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/company`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const solutionRoutes: MetadataRoute.Sitemap = solutionSlugs.map((slug) => ({
    url: `${baseUrl}/solutions/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const industryRoutes: MetadataRoute.Sitemap = industrySlugs.map((slug) => ({
    url: `${baseUrl}/industries/${slug}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...solutionRoutes, ...industryRoutes];
}

import type { Metadata } from 'next';
import { site } from '@/content/site';

export function pageMeta(title: string, description: string, path: string): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | JSJ INFOTECH`, description, url, siteName: site.name, type: 'website' },
    twitter: { card: 'summary_large_image', title: `${title} | JSJ INFOTECH`, description },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${site.url}${it.path}` })),
  };
}

export const organizationLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/jsj-logo.svg`,
  slogan: site.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country,
  },
  contactPoint: [{ '@type': 'ContactPoint', telephone: site.phone.tel, email: site.email.enquiry, contactType: 'sales', areaServed: 'IN' }],
  partner: { '@type': 'Organization', name: 'SGN Software Private Limited', address: { '@type': 'PostalAddress', addressLocality: 'Kolkata', addressCountry: 'IN' } },
};

import type { Metadata } from 'next';
import { BRAND } from '@/shared';

/** One place that guarantees every route has a unique title, description, canonical, OpenGraph and Twitter card. */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const full = `${title} | ${BRAND.name}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', locale: 'en_IN', siteName: BRAND.name, url: path, title: full, description },
    twitter: { card: 'summary_large_image', title: full, description },
  };
}

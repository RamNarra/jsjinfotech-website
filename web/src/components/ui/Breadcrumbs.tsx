import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { BRAND } from '@/shared';
import { JsonLd } from './JsonLd';

export interface Crumb {
  name: string;
  href?: string;
}

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const all: Crumb[] = [{ name: 'Home', href: '/' }, ...trail];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: all.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${BRAND.canonicalUrl}${c.href === '/' ? '' : c.href}` } : {}),
    })),
  };
  return (
    <nav aria-label="Breadcrumb" className="t-small">
      <JsonLd data={ld} />
      <ol className="flex flex-wrap items-center gap-1.5">
        {all.map((c, i) => (
          <li key={c.name} className="flex items-center gap-1.5">
            {c.href && i < all.length - 1 ? (
              <Link href={c.href} className="text-ink-3 hover:text-brand-text">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {c.name}
              </span>
            )}
            {i < all.length - 1 ? <ChevronRight aria-hidden className="size-3.5 text-ink-3" /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}

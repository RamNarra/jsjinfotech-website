import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { verticals, getVertical } from '@/content/verticals';
import { ServiceTemplate } from '@/components/services/ServiceTemplate';
import { pageMeta } from '@/lib/seo';

export const dynamicParams = false;
export const generateStaticParams = () => verticals.map((v) => ({ slug: v.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const v = getVertical((await params).slug);
  if (!v) return {};
  return pageMeta(v.name, v.promise.slice(0, 158), `/services/${v.slug}/`);
}

export default async function Page({ params }: Props) {
  const v = getVertical((await params).slug);
  if (!v) notFound();
  return <ServiceTemplate v={v} />;
}

import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getSolutionBySlug, getAllSolutions } from '@/lib/content/adapter';
import { BRAND } from '@/shared';
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Cpu,
  Layers,
  HelpCircle,
  FileCheck,
} from 'lucide-react';

interface SolutionPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const solutions = await getAllSolutions();
  return solutions.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: 'Solution Not Found | JSJ INFOTECH',
    };
  }

  const title = `${solution.title} | JSJ INFOTECH`;
  const description = solution.tagline;

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND.canonicalUrl}/solutions/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BRAND.canonicalUrl}/solutions/${slug}`,
      siteName: BRAND.name,
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const allSolutions = await getAllSolutions();
  const relatedSolutions = allSolutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  const layerAccents = {
    Physical: {
      badgeBg: 'bg-[#EBF8FF] text-[#0070F2] border-[#D1EFFF]',
      textAccent: 'text-[#0070F2]',
    },
    Enterprise: {
      badgeBg: 'bg-[#EBF8FF] text-[#0070F2] border-[#D1EFFF]',
      textAccent: 'text-[#0070F2]',
    },
    Intelligence: {
      badgeBg: 'bg-[#EBF8FF] text-[#0070F2] border-[#D1EFFF]',
      textAccent: 'text-[#0070F2]',
    },
    'Cross-Layer': {
      badgeBg: 'bg-[#EBF8FF] text-[#0070F2] border-[#D1EFFF]',
      textAccent: 'text-[#0070F2]',
    },
    Governance: {
      badgeBg: 'bg-[#EBF8FF] text-[#0070F2] border-[#D1EFFF]',
      textAccent: 'text-[#0070F2]',
    },
  }[solution.architecturalLayer];

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.canonicalUrl },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${BRAND.canonicalUrl}/#solutions` },
      { '@type': 'ListItem', position: 3, name: solution.title, item: `${BRAND.canonicalUrl}/solutions/${solution.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-white text-[#12171C] bg-enterprise-grid border-b border-[#DDE3EA] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-[#5B738B] font-mono mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0070F2] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#5B738B]" />
            <Link href="/#solutions" className="hover:text-[#0070F2] transition-colors">Solutions</Link>
            <ChevronRight className="w-3 h-3 text-[#5B738B]" />
            <span className="text-[#0070F2] font-semibold">{solution.title}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono uppercase px-3 py-1 rounded-full border font-semibold ${layerAccents.badgeBg}`}>
                {solution.architecturalLayer} Layer
              </span>
              <span className="text-xs font-mono uppercase text-[#475E75] tracking-wider font-semibold">
                {solution.eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12171C] leading-tight">
              {solution.title}
            </h1>

            <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
              {solution.tagline}
            </p>

            {solution.regulatoryNotice && (
              <div className="p-4 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] text-xs text-[#0070F2] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#0070F2] shrink-0 mt-0.5" />
                <span><strong>Regulatory Governance:</strong> {solution.regulatoryNotice}</span>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] transition-all shadow-sm"
              >
                Inquire for {solution.title.split(' ')[0]}
              </Link>
              <Link
                href="#capabilities"
                className="px-5 py-3 rounded-lg text-xs font-semibold text-[#12171C] bg-white hover:bg-[#F7F9FC] border border-[#DDE3EA] transition-colors shadow-sm"
              >
                View Key Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Role in Autonomous Core */}
      <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block">
                Executive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
                Engineering Depth & Implementation Methodology.
              </h2>
              <p className="text-[#475E75] text-base leading-relaxed">
                {solution.overview}
              </p>

              {/* Tech Stack Tags */}
              <div className="pt-4">
                <span className="text-xs font-mono uppercase text-[#5B738B] font-semibold block mb-3">
                  Frameworks, Protocols & Platforms
                </span>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded bg-[#F7F9FC] border border-[#DDE3EA] text-[#475E75] font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Autonomous Core Role Card */}
            <div className="lg:col-span-5 bg-[#F7F9FC] text-[#12171C] rounded-2xl p-8 border border-[#DDE3EA] shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF]">
                  <Cpu className="w-5 h-5 text-[#0070F2]" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#0070F2] tracking-wider font-semibold">Autonomous Convergence</span>
                  <h3 className="text-base font-bold text-[#12171C]">Role in Autonomous Core</h3>
                </div>
              </div>
              <p className="text-[#475E75] text-xs sm:text-sm leading-relaxed">
                {solution.autonomousCoreRole}
              </p>
              <div className="mt-6 pt-4 border-t border-[#DDE3EA] flex items-center justify-between text-xs font-mono text-[#0070F2]">
                <span>Convergence: {solution.architecturalLayer} → Core</span>
                <Link href="/technology" className="hover:underline flex items-center gap-1 font-semibold">
                  Stack Blueprint →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA]" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
              Specific Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
              Key Engineering Capabilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.keyCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-6 rounded-xl bg-white border border-[#DDE3EA] hover:border-[#0070F2]/60 hover:shadow-sm transition-all duration-200"
              >
                <h3 className="text-base font-bold text-[#12171C]">{cap.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#475E75] leading-relaxed">
                  {cap.description}
                </p>
                {cap.tags && (
                  <div className="mt-4 pt-3 border-t border-[#DDE3EA] flex flex-wrap gap-1.5">
                    {cap.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F7F9FC] border border-[#DDE3EA] text-[#475E75]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Use Cases */}
      <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
              Operational Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
              Target Sector Deployments.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-6 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded bg-[#EBF8FF] font-semibold text-[#0070F2] border border-[#D1EFFF]">
                      Target: {uc.target}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#12171C]">{uc.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#475E75] leading-relaxed">
                    {uc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {solution.faqs && solution.faqs.length > 0 && (
        <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
                Technical & Commercial FAQ.
              </h2>
            </div>

            <div className="space-y-4">
              {solution.faqs.map((faq) => (
                <div key={faq.question} className="p-6 rounded-xl bg-white border border-[#DDE3EA] shadow-sm">
                  <h3 className="text-sm sm:text-base font-bold text-[#12171C] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#0070F2] shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#475E75] leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Solutions Cross-Linking */}
      <section className="py-16 bg-white text-[#12171C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-[#12171C]">Related Converged Solutions</h3>
            <Link href="/#solutions" className="text-xs font-semibold text-[#0070F2] hover:text-[#0057D2]">
              View All 9 Solutions →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSolutions.map((rel) => (
              <Link
                key={rel.slug}
                href={`/solutions/${rel.slug}`}
                className="p-5 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA] hover:border-[#0070F2]/60 hover:shadow-sm transition-all group block"
              >
                <span className="text-[10px] font-mono uppercase text-[#0070F2] font-semibold block mb-1">
                  {rel.layer} Layer
                </span>
                <h4 className="text-sm font-bold text-[#12171C] group-hover:text-[#0070F2] transition-colors flex items-center justify-between">
                  <span>{rel.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#5B738B] group-hover:text-[#0070F2]" />
                </h4>
                <p className="mt-1 text-xs text-[#475E75] line-clamp-2">{rel.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-16 bg-[#F7F9FC] text-[#12171C] border-t border-[#DDE3EA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
            Ready to integrate {solution.title}?
          </h2>
          <p className="text-[#475E75] text-sm max-w-xl mx-auto">
            Discuss implementation feasibility, technical architecture, and deployment schedules with our senior engineering team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] transition-all shadow-sm"
            >
              Start Technology Engagement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

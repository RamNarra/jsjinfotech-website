import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getAllSolutionSlugs,
  getSolutionBySlug,
  getAllSolutions,
} from '@/lib/content/adapter';
import { BRAND } from '@/shared';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Layers,
  HelpCircle,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSolutionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: 'Solution Not Found',
    };
  }

  return {
    title: solution.seo.metaTitle,
    description: solution.seo.metaDescription,
    keywords: solution.seo.keywords,
    alternates: {
      canonical: `/solutions/${solution.slug}`,
    },
    openGraph: {
      title: solution.seo.metaTitle,
      description: solution.seo.metaDescription,
      url: `${BRAND.canonicalUrl}/solutions/${solution.slug}`,
      type: 'article',
    },
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = await getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const allSolutions = await getAllSolutions();
  const relatedSolutions = allSolutions.filter((s) => s.slug !== solution.slug).slice(0, 3);

  // Distinct theme treatment per layer
  const layerAccents = {
    Physical: {
      gradient: 'from-cyan-900/30 to-blue-900/20',
      badgeBg: 'bg-cyan-950/80 text-cyan-300 border-cyan-500/30',
      textAccent: 'text-cyan-400',
    },
    Enterprise: {
      gradient: 'from-blue-900/30 to-violet-900/20',
      badgeBg: 'bg-blue-950/80 text-blue-300 border-blue-500/30',
      textAccent: 'text-blue-400',
    },
    Intelligence: {
      gradient: 'from-violet-900/30 to-cyan-900/20',
      badgeBg: 'bg-violet-950/80 text-violet-300 border-violet-500/30',
      textAccent: 'text-violet-400',
    },
    'Cross-Layer': {
      gradient: 'from-slate-900/40 to-cyan-900/20',
      badgeBg: 'bg-slate-900/80 text-cyan-300 border-slate-700',
      textAccent: 'text-cyan-300',
    },
    Governance: {
      gradient: 'from-amber-900/30 to-blue-900/20',
      badgeBg: 'bg-amber-950/80 text-amber-300 border-amber-500/30',
      textAccent: 'text-amber-400',
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
      <section className={`relative py-20 bg-[#07112D] text-white bg-dark-grid border-b border-white/10 overflow-hidden`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/#solutions" className="hover:text-white transition-colors">Solutions</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-semibold">{solution.title}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <span className={`text-xs font-mono uppercase px-3 py-1 rounded-full border ${layerAccents.badgeBg}`}>
                {solution.architecturalLayer} Layer
              </span>
              <span className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                {solution.eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {solution.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {solution.tagline}
            </p>

            {solution.regulatoryNotice && (
              <div className="p-4 rounded-xl bg-cyan-950/70 border border-cyan-400/40 text-xs text-cyan-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span><strong>Regulatory Governance:</strong> {solution.regulatoryNotice}</span>
              </div>
            )}

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20"
              >
                Inquire for {solution.title.split(' ')[0]}
              </Link>
              <Link
                href="#capabilities"
                className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                View Key Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Role in Autonomous Core */}
      <section className="py-20 bg-white text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block">
                Executive Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
                Engineering Depth & Implementation Methodology.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {solution.overview}
              </p>

              {/* Tech Stack Tags */}
              <div className="pt-4">
                <span className="text-xs font-mono uppercase text-slate-400 font-bold block mb-3">
                  Frameworks, Protocols & Platforms
                </span>
                <div className="flex flex-wrap gap-2">
                  {solution.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Autonomous Core Role Card */}
            <div className="lg:col-span-5 bg-[#07112D] text-white rounded-3xl p-8 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-cyan-950 border border-cyan-500/40">
                  <Cpu className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider">Autonomous Convergence</span>
                  <h3 className="text-base font-bold text-white">Role in Autonomous Core</h3>
                </div>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {solution.autonomousCoreRole}
              </p>
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-cyan-300">
                <span>Convergence: {solution.architecturalLayer} → Core</span>
                <Link href="/technology" className="hover:underline flex items-center gap-1">
                  Stack Blueprint →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="py-20 bg-[#F5F7FB] text-[#101A33] border-b border-[#DDE4EF]" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
              Specific Deliverables
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
              Key Engineering Capabilities.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.keyCapabilities.map((cap) => (
              <div
                key={cap.title}
                className="p-7 rounded-2xl bg-white border border-[#DDE4EF] hover:border-cyan-400 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-base font-bold text-[#07112D]">{cap.title}</h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5E6B85] leading-relaxed">
                  {cap.description}
                </p>
                {cap.tags && (
                  <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                    {cap.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-slate-600"
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
      <section className="py-20 bg-white text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
              Operational Impact
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
              Target Sector Deployments.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solution.useCases.map((uc) => (
              <div
                key={uc.title}
                className="p-7 rounded-2xl bg-[#F8FAFD] border border-[#DDE4EF] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-slate-200 font-bold text-slate-800">
                      Target: {uc.target}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#07112D]">{uc.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
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
        <section className="py-20 bg-[#F5F7FB] text-[#101A33] border-b border-[#DDE4EF]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
                Technical & Commercial FAQ.
              </h2>
            </div>

            <div className="space-y-4">
              {solution.faqs.map((faq) => (
                <div key={faq.question} className="p-6 rounded-2xl bg-white border border-[#DDE4EF]">
                  <h3 className="text-sm sm:text-base font-bold text-[#07112D] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-cyan-600 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Solutions Cross-Linking */}
      <section className="py-16 bg-white text-[#101A33]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-[#07112D]">Related Converged Solutions</h3>
            <Link href="/#solutions" className="text-xs font-semibold text-cyan-700 hover:text-cyan-900">
              View All 9 Solutions →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedSolutions.map((rel) => (
              <Link
                key={rel.slug}
                href={`/solutions/${rel.slug}`}
                className="p-5 rounded-2xl bg-[#F8FAFD] border border-[#DDE4EF] hover:border-cyan-400 transition-colors group block"
              >
                <span className="text-[10px] font-mono uppercase text-cyan-700 font-bold block mb-1">
                  {rel.layer} Layer
                </span>
                <h4 className="text-sm font-bold text-[#07112D] group-hover:text-cyan-800 transition-colors flex items-center justify-between">
                  <span>{rel.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-700" />
                </h4>
                <p className="mt-1 text-xs text-slate-500 line-clamp-2">{rel.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Conversion CTA */}
      <section className="py-16 bg-[#07112D] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Ready to integrate {solution.title}?
          </h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Discuss implementation feasibility, technical architecture, and deployment schedules with our senior engineering team.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25"
            >
              Start Technology Engagement
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

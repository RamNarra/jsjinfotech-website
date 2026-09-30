import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  getAllIndustrySlugs,
  getIndustryBySlug,
  getAllIndustries,
} from '@/lib/content/adapter';
import { BRAND } from '@/shared';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Landmark,
  Briefcase,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllIndustrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return { title: 'Sector Not Found' };
  }

  return {
    title: industry.seo.metaTitle,
    description: industry.seo.metaDescription,
    keywords: industry.seo.keywords,
    alternates: {
      canonical: `/industries/${industry.slug}`,
    },
    openGraph: {
      title: industry.seo.metaTitle,
      description: industry.seo.metaDescription,
      url: `${BRAND.canonicalUrl}/industries/${industry.slug}`,
      type: 'article',
    },
  };
}

export default async function IndustryDetailPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  const isGovernment = industry.slug === 'government';

  // Breadcrumb Schema
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: BRAND.canonicalUrl },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${BRAND.canonicalUrl}/#industries` },
      { '@type': 'ListItem', position: 3, name: industry.title, item: `${BRAND.canonicalUrl}/industries/${industry.slug}` },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Hero Section */}
      <section className="py-20 bg-[#07112D] text-white bg-dark-grid border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-slate-400 font-mono mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <Link href="/#industries" className="hover:text-white transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 text-slate-600" />
            <span className="text-cyan-400 font-semibold">{industry.title}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400">
                {isGovernment ? <Landmark className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
              </div>
              <span className="text-xs font-mono uppercase text-cyan-300 tracking-wider">
                {industry.eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {industry.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {industry.tagline}
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/20 inline-block"
              >
                Engage {isGovernment ? 'Public Sector Practice' : 'Enterprise Practice'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary & Mandates */}
      <section className="py-20 bg-white text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block">
                Operational Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
                Integrated Engineering for Sovereign and Commercial Resilience.
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                {industry.summary}
              </p>
            </div>

            {/* Strategic Mandates Box */}
            <div className="lg:col-span-5 bg-[#F5F7FB] rounded-3xl p-8 border border-[#DDE4EF]">
              <h3 className="text-sm font-bold font-mono uppercase text-[#07112D] tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                Strategic Compliance Mandates
              </h3>
              <div className="space-y-3">
                {industry.mandates.map((m) => (
                  <div key={m} className="p-3.5 rounded-xl bg-white border border-[#DDE4EF] flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-800">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Offerings */}
      <section className="py-20 bg-[#F5F7FB] text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
              Practice Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
              Tailored Engineering Offerings for this Sector.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.solutionOfferings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-2xl bg-white border border-[#DDE4EF] flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-base font-bold text-[#07112D]">{offering.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#5E6B85] leading-relaxed">
                    {offering.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={offering.verticalLink}
                    className="text-xs font-semibold text-cyan-700 hover:text-cyan-900 inline-flex items-center gap-1"
                  >
                    Explore vertical architecture <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Case Points */}
      <section className="py-20 bg-white text-[#101A33] border-b border-[#DDE4EF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-700 font-bold block mb-2">
              Demonstrated Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#07112D]">
              Field Challenge & Convergence Resolution.
            </h2>
          </div>

          <div className="space-y-6">
            {industry.casePoints.map((cp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#F8FAFD] border border-[#DDE4EF] grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-red-600 font-bold block mb-1">
                    Operational Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                    {cp.challenge}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-cyan-700 font-bold block mb-1">
                    JSJ Convergence Resolution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cp.convergenceSolution}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-purple-700 font-bold block mb-1">
                    2030 Autonomous Horizon
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-mono">
                    {cp.futureHorizon}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-16 bg-[#07112D] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Schedule a Confidential Consultation for {industry.title}
          </h2>
          <p className="text-slate-300 text-sm max-w-lg mx-auto">
            Directly connect with our enterprise engagement directors and technical architects.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-lg shadow-cyan-500/25"
            >
              Contact JSJ Practice Lead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

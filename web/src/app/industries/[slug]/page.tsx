import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { getIndustryBySlug, getAllIndustries } from '@/lib/content/adapter';
import { BRAND } from '@/shared';
import { ChevronRight, Landmark, Briefcase, CheckCircle2, ArrowRight, ArrowUpRight, ShieldCheck } from 'lucide-react';

interface IndustryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const industries = await getAllIndustries();
  return industries.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = await getIndustryBySlug(slug);

  if (!industry) {
    return {
      title: 'Sector Not Found | JSJ INFOTECH',
    };
  }

  const title = `${industry.title} | JSJ INFOTECH`;
  const description = industry.tagline;

  return {
    title,
    description,
    alternates: {
      canonical: `${BRAND.canonicalUrl}/industries/${slug}`,
    },
    openGraph: {
      title,
      description,
      url: `${BRAND.canonicalUrl}/industries/${slug}`,
      siteName: BRAND.name,
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
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
      <section className="py-16 lg:py-20 bg-white text-[#12171C] bg-enterprise-grid border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#5B738B] font-mono mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#0070F2] transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3 text-[#5B738B]" />
            <Link href="/#industries" className="hover:text-[#0070F2] transition-colors">Industries</Link>
            <ChevronRight className="w-3 h-3 text-[#5B738B]" />
            <span className="text-[#0070F2] font-semibold">{industry.title}</span>
          </nav>

          <div className="max-w-3xl space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-[#EBF8FF] border border-[#D1EFFF] text-[#0070F2]">
                {isGovernment ? <Landmark className="w-5 h-5" /> : <Briefcase className="w-5 h-5" />}
              </div>
              <span className="text-xs font-mono uppercase text-[#0070F2] tracking-wider font-semibold">
                {industry.eyebrow}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#12171C] leading-tight">
              {industry.title}
            </h1>

            <p className="text-[#475E75] text-base sm:text-lg leading-relaxed">
              {industry.tagline}
            </p>

            <div className="pt-2">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] transition-all shadow-sm inline-block"
              >
                Engage {isGovernment ? 'Public Sector Practice' : 'Enterprise Practice'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Summary & Mandates */}
      <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block">
                Operational Framework
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
                Integrated Engineering for Sovereign and Commercial Resilience.
              </h2>
              <p className="text-[#475E75] text-base leading-relaxed">
                {industry.summary}
              </p>
            </div>

            {/* Strategic Mandates Box */}
            <div className="lg:col-span-5 bg-[#F7F9FC] rounded-2xl p-8 border border-[#DDE3EA]">
              <h3 className="text-sm font-bold font-mono uppercase text-[#12171C] tracking-wider mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#0070F2]" />
                Strategic Compliance Mandates
              </h3>
              <div className="space-y-3">
                {industry.mandates.map((m) => (
                  <div key={m} className="p-3.5 rounded-xl bg-white border border-[#DDE3EA] flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#0070F2] shrink-0" />
                    <span className="text-xs font-semibold text-[#12171C]">{m}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Offerings */}
      <section className="py-20 bg-[#F7F9FC] text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
              Practice Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
              Tailored Engineering Offerings for this Sector.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.solutionOfferings.map((offering) => (
              <div
                key={offering.title}
                className="p-8 rounded-xl bg-white border border-[#DDE3EA] flex flex-col justify-between hover:border-[#0070F2]/60 hover:shadow-sm transition-all"
              >
                <div>
                  <h3 className="text-base font-bold text-[#12171C]">{offering.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#475E75] leading-relaxed">
                    {offering.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#DDE3EA]">
                  <Link
                    href={offering.verticalLink}
                    className="text-xs font-semibold text-[#0070F2] hover:text-[#0057D2] inline-flex items-center gap-1"
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
      <section className="py-20 bg-white text-[#12171C] border-b border-[#DDE3EA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
              Demonstrated Deployments
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
              Field Challenge & Convergence Resolution.
            </h2>
          </div>

          <div className="space-y-6">
            {industry.casePoints.map((cp, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#F7F9FC] border border-[#DDE3EA] grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#0070F2] font-bold block mb-1">
                    Operational Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-[#12171C] leading-relaxed font-medium">
                    {cp.challenge}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#0070F2] font-bold block mb-1">
                    JSJ Convergence Resolution
                  </span>
                  <p className="text-xs sm:text-sm text-[#475E75] leading-relaxed">
                    {cp.convergenceSolution}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase text-[#0057D2] font-bold block mb-1">
                    2030 Autonomous Horizon
                  </span>
                  <p className="text-xs sm:text-sm text-[#475E75] leading-relaxed font-mono">
                    {cp.futureHorizon}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion CTA */}
      <section className="py-16 bg-[#F7F9FC] text-[#12171C] border-t border-[#DDE3EA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C]">
            Schedule a Confidential Consultation for {industry.title}
          </h2>
          <p className="text-[#475E75] text-sm max-w-lg mx-auto">
            Directly connect with our enterprise engagement directors and technical architects.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex px-7 py-3.5 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] transition-all shadow-sm"
            >
              Contact JSJ Practice Lead
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

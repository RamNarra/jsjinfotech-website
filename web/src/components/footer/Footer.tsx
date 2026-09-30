import { LinkedinIcon } from '@/components/ui/icons';
import React from 'react';
import Link from 'next/link';
import { BRAND, SOLUTIONS_LIST, INDUSTRIES_LIST } from '@/shared';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#F7F9FC] text-[#475E75] border-t border-[#DDE3EA] relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="border-b border-[#DDE3EA] bg-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-[#0070F2] font-semibold block mb-2">
              Enterprise Technology & Project Execution
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#12171C] tracking-tight">
              Ready to Discuss Your Next Technology Project?
            </h2>
            <p className="mt-2 text-sm text-[#475E75]">
              Consult with JSJ on enterprise SAP systems, custom software platforms, AI applications, autonomous drones, or government infrastructure modernisations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] shadow-sm transition-all text-center"
            >
              Start a Conversation →
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="px-5 py-3 rounded-lg text-xs font-semibold text-[#12171C] bg-[#F7F9FC] hover:bg-[#EBF8FF] border border-[#DDE3EA] transition-colors text-center"
            >
              Direct: {BRAND.displayPhone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Links Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0070F2] flex items-center justify-center">
                <span className="font-extrabold text-white text-xs tracking-wider">
                  JSJ
                </span>
              </div>
              <span className="font-bold text-[#12171C] text-lg tracking-tight">{BRAND.name}</span>
            </Link>
            <p className="text-xs text-[#475E75] leading-relaxed max-w-sm">
              {BRAND.subTagline}. Technology-driven IT consulting and project execution company based in Hyderabad.
            </p>

            <div className="pt-2 space-y-2 text-xs text-[#475E75]">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#0070F2] shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-[#0070F2] transition-colors">
                  {BRAND.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0070F2] shrink-0" />
                <a href={`mailto:${BRAND.supportEmail}`} className="hover:text-[#0070F2] transition-colors">
                  {BRAND.supportEmail}
                </a>
                <span className="text-[#DDE3EA]">·</span>
                <a href={`mailto:${BRAND.executiveEmail}`} className="hover:text-[#0070F2] transition-colors">
                  {BRAND.executiveEmail}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0070F2] shrink-0 mt-0.5" />
                <span>{BRAND.address.formatted}</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BRAND.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#0070F2] hover:text-[#0057D2] font-medium transition-colors"
                aria-label="JSJ INFOTECH LinkedIn Official Company Page"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn Company Page</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-[#12171C] tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs">
              {SOLUTIONS_LIST.slice(0, 5).map((sol) => (
                <li key={sol.slug}>
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-[#0070F2] transition-colors">
                    {sol.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Verticals */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-[#12171C] tracking-wider mb-4">
              Physical & Systems
            </h3>
            <ul className="space-y-2 text-xs">
              {SOLUTIONS_LIST.slice(5).map((sol) => (
                <li key={sol.slug}>
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-[#0070F2] transition-colors">
                    {sol.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/technology" className="text-[#0070F2] hover:underline font-medium">
                  Architecture Stack →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sectors & Company */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-[#12171C] tracking-wider mb-4">
              Sectors & Vision
            </h3>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES_LIST.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-[#0070F2] transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/vision-2030" className="hover:text-[#0070F2] transition-colors">
                  Vision 2030 Roadmap
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-[#0070F2] transition-colors">
                  About JSJ INFOTECH
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-[#0070F2] transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#0070F2] transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, DPDP notice */}
        <div className="mt-14 pt-6 border-t border-[#DDE3EA] flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#5B738B] gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved. &ldquo;{BRAND.tagline}&rdquo;.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-[#475E75]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0070F2]" />
              DPDP Rules 2025 Compliant Notice
            </span>
            <Link href="/contact" className="hover:text-[#0070F2]">
              Security & Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

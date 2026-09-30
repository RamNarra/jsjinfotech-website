import { LinkedinIcon } from '@/components/ui/icons';
import React from 'react';
import Link from 'next/link';
import { BRAND, SOLUTIONS_LIST, INDUSTRIES_LIST } from '@/shared';
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#07112D] text-slate-300 border-t border-white/10 relative overflow-hidden">
      {/* Top CTA Banner */}
      <div className="border-b border-white/10 bg-[#0B1E42]/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              Next-Generation Technology Partnership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let&apos;s Build What&apos;s Next.
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Whether you are modernising enterprise SAP, securing public infrastructure, deploying AI, or commissioning autonomous aerial monitoring.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#07112D] bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-lg shadow-cyan-500/20 transition-all text-center"
            >
              Start a Conversation →
            </Link>
            <a
              href={`tel:${BRAND.phone}`}
              className="px-5 py-3 rounded-xl text-xs font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-center"
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
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 p-[1.5px] flex items-center justify-center">
                <div className="w-full h-full bg-[#07112D] rounded-[6px] flex items-center justify-center font-bold text-xs text-cyan-400">
                  JSJ
                </div>
              </div>
              <span className="font-bold text-white text-lg tracking-tight">{BRAND.name}</span>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {BRAND.subTagline}. Converging physical infrastructure, enterprise ERP, and neural AI into one autonomous core for government and enterprise.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-cyan-300 transition-colors">
                  {BRAND.displayPhone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${BRAND.supportEmail}`} className="hover:text-cyan-300 transition-colors">
                  {BRAND.supportEmail}
                </a>
                <span className="text-slate-600">·</span>
                <a href={`mailto:${BRAND.executiveEmail}`} className="hover:text-cyan-300 transition-colors">
                  {BRAND.executiveEmail}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Pan-India Operations · Government & Enterprise</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BRAND.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-cyan-400 hover:text-white transition-colors"
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
            <h3 className="text-xs font-mono font-bold uppercase text-white tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-2 text-xs">
              {SOLUTIONS_LIST.slice(0, 5).map((sol) => (
                <li key={sol.slug}>
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-cyan-300 transition-colors">
                    {sol.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: More Verticals */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-white tracking-wider mb-4">
              Physical & Innovation
            </h3>
            <ul className="space-y-2 text-xs">
              {SOLUTIONS_LIST.slice(5).map((sol) => (
                <li key={sol.slug}>
                  <Link href={`/solutions/${sol.slug}`} className="hover:text-cyan-300 transition-colors">
                    {sol.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/technology" className="text-cyan-400 hover:underline">
                  Full Stack Architecture →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Sectors & Company */}
          <div>
            <h3 className="text-xs font-mono font-bold uppercase text-white tracking-wider mb-4">
              Sectors & Vision
            </h3>
            <ul className="space-y-2 text-xs">
              {INDUSTRIES_LIST.map((ind) => (
                <li key={ind.slug}>
                  <Link href={`/industries/${ind.slug}`} className="hover:text-cyan-300 transition-colors">
                    {ind.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link href="/vision-2030" className="hover:text-cyan-300 transition-colors">
                  Vision 2030 Roadmap
                </Link>
              </li>
              <li>
                <Link href="/company" className="hover:text-cyan-300 transition-colors">
                  About JSJ INFOTECH
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-cyan-300 transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cyan-300 transition-colors">
                  Contact & Inquiries
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, DPDP notice, and schema indicator */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved. Slogan: &ldquo;{BRAND.tagline}&rdquo;.
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              DPDP Rules 2025 Compliant Notice
            </span>
            <Link href="/contact" className="hover:text-slate-300">
              Security & Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

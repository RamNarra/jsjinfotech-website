'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, ArrowUpRight, ShieldCheck, Cpu, Database, Server, Compass, Building2, Code2, Sparkles, FileText } from 'lucide-react';
import { BRAND, SOLUTIONS_LIST, INDUSTRIES_LIST } from '@/shared';

const iconMap: Record<string, React.ReactNode> = {
  Database: <Database className="w-4 h-4 text-cyan-400" />,
  Cpu: <Cpu className="w-4 h-4 text-cyan-400" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-cyan-400" />,
  Code2: <Code2 className="w-4 h-4 text-cyan-400" />,
  Server: <Server className="w-4 h-4 text-cyan-400" />,
  Compass: <Compass className="w-4 h-4 text-cyan-400" />,
  Building2: <Building2 className="w-4 h-4 text-cyan-400" />,
  FileSpreadsheet: <FileText className="w-4 h-4 text-cyan-400" />,
  Sparkles: <Sparkles className="w-4 h-4 text-cyan-400" />,
};

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07112D]/90 backdrop-blur-md border-b border-[#16C7E8]/20 shadow-lg py-3'
          : 'bg-[#07112D]/60 backdrop-blur-sm border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
          aria-label="JSJ INFOTECH - Home"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#16C7E8] to-[#7657F6] p-[1.5px] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-[#07112D] rounded-[7px] flex items-center justify-center">
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400 text-sm tracking-wider">
                JSJ
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg tracking-tight group-hover:text-cyan-300 transition-colors">
              {BRAND.name}
            </span>
            <span className="text-[10px] text-cyan-400/90 font-mono tracking-wider uppercase -mt-1 hidden sm:block">
              {BRAND.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onFocus={() => setSolutionsOpen(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-cyan-300 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md px-2"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[540px] bg-[#0B1E42]/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl shadow-navy-950/80 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                {SOLUTIONS_LIST.map((sol) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center shrink-0 mt-0.5 group-hover:border-cyan-400 group-hover:bg-cyan-900/40 transition-colors">
                      {iconMap[sol.icon] || <Cpu className="w-4 h-4 text-cyan-400" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1">
                        {sol.title}
                      </div>
                      <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5 font-normal">
                        {sol.shortDesc}
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 pt-2 mt-1 border-t border-white/10 flex justify-between items-center text-xs text-slate-400 px-2">
                  <span className="text-[11px] font-mono text-cyan-400/90">9 Core Converged Verticals</span>
                  <Link href="/technology" className="text-cyan-300 hover:text-white flex items-center gap-1 font-medium">
                    View Architecture Stack <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Industries Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              onClick={() => setIndustriesOpen(!industriesOpen)}
              onFocus={() => setIndustriesOpen(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-200 hover:text-cyan-300 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md px-2"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180 text-cyan-400' : ''}`} />
            </button>

            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] bg-[#0B1E42]/95 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-4 shadow-2xl shadow-navy-950/80 flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                {INDUSTRIES_LIST.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="p-3 rounded-xl hover:bg-white/5 transition-colors group focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-transparent hover:border-cyan-500/20"
                  >
                    <div className="text-xs font-semibold text-white group-hover:text-cyan-300 flex items-center justify-between">
                      <span>{ind.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-300 transition-colors" />
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                      {ind.tagline}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/technology"
            className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md px-2 py-1"
          >
            Technology
          </Link>

          <Link
            href="/vision-2030"
            className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md px-2 py-1 flex items-center gap-1.5"
          >
            Vision 2030
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          </Link>

          <Link
            href="/company"
            className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md px-2 py-1"
          >
            Company
          </Link>

          <Link
            href="/insights"
            className="text-sm font-medium text-slate-200 hover:text-cyan-300 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-md px-2 py-1"
          >
            Insights
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider text-[#07112D] bg-gradient-to-r from-cyan-400 to-cyan-300 hover:from-cyan-300 hover:to-white shadow-md shadow-cyan-500/20 hover:shadow-cyan-400/40 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
          >
            Talk to JSJ
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-cyan-400" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-[#07112D]/95 backdrop-blur-xl border-t border-cyan-500/20 p-6 overflow-y-auto z-40 flex flex-col justify-between">
          <div className="space-y-6">
            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-3">Solutions</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SOLUTIONS_LIST.map((sol) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200 flex items-center justify-between"
                  >
                    <span>{sol.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-cyan-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest mb-3">Industries</div>
              <div className="space-y-2">
                {INDUSTRIES_LIST.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="block p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-200"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-white/10">
              <Link href="/technology" className="block py-2 text-sm text-slate-200 hover:text-cyan-300">
                Technology Architecture
              </Link>
              <Link href="/vision-2030" className="block py-2 text-sm text-slate-200 hover:text-cyan-300">
                Vision 2030 Roadmap
              </Link>
              <Link href="/company" className="block py-2 text-sm text-slate-200 hover:text-cyan-300">
                About JSJ INFOTECH
              </Link>
              <Link href="/insights" className="block py-2 text-sm text-slate-200 hover:text-cyan-300">
                Insights & Research
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <Link
              href="/contact"
              className="w-full py-3 rounded-xl text-center text-xs font-semibold uppercase tracking-wider text-[#07112D] bg-cyan-400 block"
            >
              Talk to JSJ
            </Link>
            <div className="text-center text-[11px] text-slate-400 font-mono">
              Ph: {BRAND.displayPhone} · {BRAND.supportEmail}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Server,
  Database,
  Cpu,
  Layers,
  Shield,
  Code2,
  Share2,
  Workflow,
  Building2,
} from 'lucide-react';
import { BRAND, SOLUTIONS_LIST, INDUSTRIES_LIST } from '@/shared/constants';

const iconMap: Record<string, React.ReactNode> = {
  Server: <Server className="w-4 h-4 text-[#0070F2]" />,
  Database: <Database className="w-4 h-4 text-[#0070F2]" />,
  Cpu: <Cpu className="w-4 h-4 text-[#0070F2]" />,
  Shield: <Shield className="w-4 h-4 text-[#0070F2]" />,
  Code2: <Code2 className="w-4 h-4 text-[#0070F2]" />,
  Share2: <Share2 className="w-4 h-4 text-[#0070F2]" />,
  Layers: <Layers className="w-4 h-4 text-[#0070F2]" />,
  Workflow: <Workflow className="w-4 h-4 text-[#0070F2]" />,
  Building2: <Building2 className="w-4 h-4 text-[#0070F2]" />,
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setIndustriesOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        isScrolled
          ? 'border-[#DDE3EA] shadow-sm py-2.5'
          : 'border-[#DDE3EA]/80 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#0070F2] rounded-lg p-1"
          aria-label="JSJ INFOTECH - Home"
        >
          <div className="w-8 h-8 rounded-lg bg-[#0070F2] flex items-center justify-center shadow-sm group-hover:bg-[#0057D2] transition-colors">
            <span className="font-extrabold text-white text-xs tracking-wider">
              JSJ
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[#12171C] font-bold text-base tracking-tight group-hover:text-[#0070F2] transition-colors">
              {BRAND.name}
            </span>
            <span className="text-[10px] text-[#475E75] font-mono tracking-wider uppercase -mt-0.5 hidden sm:block">
              {BRAND.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">
          {/* Solutions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              onFocus={() => setSolutionsOpen(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-[#12171C] hover:text-[#0070F2] py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0070F2] rounded-md px-2"
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
            >
              Solutions
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? 'rotate-180 text-[#0070F2]' : 'text-[#475E75]'}`} />
            </button>

            {solutionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[560px] bg-white border border-[#DDE3EA] rounded-2xl p-4 shadow-xl grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                {SOLUTIONS_LIST.map((sol) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#F7F9FC] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#0070F2]"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#EBF8FF] border border-[#D1EFFF] flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#D1EFFF] transition-colors">
                      {iconMap[sol.icon] || <Cpu className="w-4 h-4 text-[#0070F2]" />}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-[#12171C] group-hover:text-[#0070F2] transition-colors flex items-center gap-1">
                        {sol.title}
                      </div>
                      <div className="text-[11px] text-[#475E75] line-clamp-1 mt-0.5 font-normal">
                        {sol.shortDesc}
                      </div>
                    </div>
                  </Link>
                ))}
                <div className="col-span-2 pt-2.5 mt-1 border-t border-[#DDE3EA] flex justify-between items-center text-xs text-[#475E75] px-2">
                  <span className="text-[11px] font-mono text-[#0070F2] font-semibold">9 Core Project Verticals</span>
                  <Link href="/technology" className="text-[#0070F2] hover:text-[#0057D2] flex items-center gap-1 font-medium">
                    Architecture Stack <ArrowUpRight className="w-3 h-3" />
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
              className="flex items-center gap-1.5 text-sm font-medium text-[#12171C] hover:text-[#0070F2] py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0070F2] rounded-md px-2"
              aria-expanded={industriesOpen}
              aria-haspopup="true"
            >
              Industries
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${industriesOpen ? 'rotate-180 text-[#0070F2]' : 'text-[#475E75]'}`} />
            </button>

            {industriesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[380px] bg-white border border-[#DDE3EA] rounded-2xl p-4 shadow-xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-150">
                {INDUSTRIES_LIST.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="p-3 rounded-xl hover:bg-[#F7F9FC] transition-colors group focus:outline-none focus:ring-2 focus:ring-[#0070F2] border border-transparent hover:border-[#DDE3EA]"
                  >
                    <div className="text-xs font-semibold text-[#12171C] group-hover:text-[#0070F2] flex items-center justify-between">
                      <span>{ind.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#5B738B] group-hover:text-[#0070F2] transition-colors" />
                    </div>
                    <div className="text-[11px] text-[#475E75] mt-1 line-clamp-2">
                      {ind.tagline}
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/technology"
            className="text-sm font-medium text-[#12171C] hover:text-[#0070F2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0070F2] rounded-md px-2 py-1"
          >
            Technology
          </Link>

          <Link
            href="/vision-2030"
            className="text-sm font-medium text-[#12171C] hover:text-[#0070F2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0070F2] rounded-md px-2 py-1 flex items-center gap-1.5"
          >
            Vision 2030
            <span className="w-1.5 h-1.5 rounded-full bg-[#0070F2]" />
          </Link>

          <Link
            href="/company"
            className="text-sm font-medium text-[#12171C] hover:text-[#0070F2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0070F2] rounded-md px-2 py-1"
          >
            Company
          </Link>

          <Link
            href="/insights"
            className="text-sm font-medium text-[#12171C] hover:text-[#0070F2] transition-colors focus:outline-none focus:ring-2 focus:ring-[#0070F2] rounded-md px-2 py-1"
          >
            Insights
          </Link>
        </nav>

        {/* Action CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0070F2]"
          >
            Talk to JSJ
          </Link>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#12171C] hover:text-[#0070F2] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0070F2]"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#0070F2]" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[61px] bottom-0 bg-white border-t border-[#DDE3EA] p-6 overflow-y-auto z-40 flex flex-col justify-between shadow-xl">
          <div className="space-y-6">
            <div>
              <div className="text-[11px] font-mono text-[#0070F2] uppercase tracking-widest font-semibold mb-3">Solutions</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SOLUTIONS_LIST.map((sol) => (
                  <Link
                    key={sol.slug}
                    href={`/solutions/${sol.slug}`}
                    className="p-2.5 rounded-lg bg-[#F7F9FC] hover:bg-[#EBF8FF] text-xs font-medium text-[#12171C] flex items-center justify-between border border-[#DDE3EA]"
                  >
                    <span>{sol.title}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#0070F2]" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="text-[11px] font-mono text-[#0070F2] uppercase tracking-widest font-semibold mb-3">Industries</div>
              <div className="space-y-2">
                {INDUSTRIES_LIST.map((ind) => (
                  <Link
                    key={ind.slug}
                    href={`/industries/${ind.slug}`}
                    className="block p-2.5 rounded-lg bg-[#F7F9FC] hover:bg-[#EBF8FF] text-xs font-medium text-[#12171C] border border-[#DDE3EA]"
                  >
                    {ind.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#DDE3EA]">
              <Link href="/technology" className="block py-2 text-sm text-[#12171C] hover:text-[#0070F2] font-medium">
                Technology Architecture
              </Link>
              <Link href="/vision-2030" className="block py-2 text-sm text-[#12171C] hover:text-[#0070F2] font-medium">
                Vision 2030 Roadmap
              </Link>
              <Link href="/company" className="block py-2 text-sm text-[#12171C] hover:text-[#0070F2] font-medium">
                About JSJ INFOTECH
              </Link>
              <Link href="/insights" className="block py-2 text-sm text-[#12171C] hover:text-[#0070F2] font-medium">
                Insights & Research
              </Link>
            </div>
          </div>

          <div className="pt-6 border-t border-[#DDE3EA] space-y-3">
            <Link
              href="/contact"
              className="w-full py-3 rounded-lg text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#0070F2] hover:bg-[#0057D2] block shadow-sm"
            >
              Talk to JSJ
            </Link>
            <div className="text-center text-[11px] text-[#475E75] font-mono">
              Ph: {BRAND.displayPhone} · {BRAND.supportEmail}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

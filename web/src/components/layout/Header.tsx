'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { primaryNav, site } from '@/content/site';
import { cn } from '@/lib/cn';
import { Logo } from '@/components/brand/Logo';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        'sticky top-0 z-40 -mb-20 pt-3 text-text lg:-mb-[88px] lg:pt-4',
      )}
    >
      <div
        className={cn(
          'mx-auto flex h-[72px] w-[calc(100%-24px)] max-w-[1240px] items-center justify-between rounded-full pr-2 pl-5 transition-all duration-300 lg:h-[80px] lg:pl-7',
          solid ? 'glass' : 'border border-transparent',
        )}
      >
        <Logo height={64} />

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((n) => {
              const active = pathname === n.href || pathname === `${n.href}/`;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn('inline-flex min-h-11 items-center rounded-full px-3 text-[14px] transition-colors hover:bg-ink/[0.05] hover:text-text', active ? 'bg-ink/[0.06] text-text' : 'text-muted')}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden min-h-11 items-center whitespace-nowrap rounded-full btn-glow px-5 text-[14px] font-medium text-white transition-all sm:inline-flex">
            Discuss a Project
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-ink/5 xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden className="size-5" /> : <Menu aria-hidden className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-x-0 top-0 bottom-0 -z-10 overflow-y-auto bg-white/95 pt-24 backdrop-blur-xl xl:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="divide-y divide-line">
              {[...primaryNav, { label: 'Contact', href: '/contact' }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center font-display text-2xl">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-8 flex min-h-12 items-center justify-center rounded-full btn-glow font-medium text-white">
              Discuss a Project
            </Link>
            <p className="mt-6 text-muted">
              <a className="block min-h-11 py-2" href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
              <a className="block min-h-11 py-2" href={`mailto:${site.email.enquiry}`}>{site.email.enquiry}</a>
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}

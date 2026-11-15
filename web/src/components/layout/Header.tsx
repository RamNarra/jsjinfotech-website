'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { primaryNav, site } from '@/content/site';
import { cn } from '@/lib/cn';

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
        'on-ink sticky top-0 z-40 -mb-16 text-white transition-colors duration-200 lg:-mb-[72px]',
        solid ? 'bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/80 border-b border-white/10' : 'bg-transparent',
      )}
    >
      <div className="container-x flex h-16 items-center justify-between lg:h-[72px]">
        <Link href="/" aria-label="JSJ INFOTECH home" className="inline-flex min-h-11 items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/brand/jsj-logo.svg" alt="" width={44} height={32} className="h-8 w-auto lg:h-10" />
          <span className="font-display text-[15px] font-semibold tracking-tight whitespace-nowrap">JSJ INFOTECH</span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {primaryNav.map((n) => {
              const active = pathname === n.href || pathname === `${n.href}/`;
              return (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn('inline-flex min-h-11 items-center rounded-full px-3 text-[14px] transition-colors hover:text-white', active ? 'text-white' : 'text-on-ink-muted')}
                  >
                    {n.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden min-h-11 items-center whitespace-nowrap rounded-full bg-white px-5 text-[14px] font-medium text-ink transition-colors hover:bg-mist sm:inline-flex">
            Discuss a Project
          </Link>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full hover:bg-white/10 xl:hidden"
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
        <div id="mobile-menu" className="fixed inset-x-0 top-16 bottom-0 overflow-y-auto bg-ink xl:hidden">
          <nav aria-label="Mobile" className="container-x py-6">
            <ul className="divide-y divide-white/10">
              {[...primaryNav, { label: 'Contact', href: '/contact' }].map((n) => (
                <li key={n.href}>
                  <Link href={n.href} onClick={() => setOpen(false)} className="flex min-h-14 items-center font-display text-2xl">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" onClick={() => setOpen(false)} className="mt-8 flex min-h-12 items-center justify-center rounded-full bg-white font-medium text-ink">
              Discuss a Project
            </Link>
            <p className="mt-6 text-on-ink-muted">
              <a className="block min-h-11 py-2" href={`tel:${site.phone.tel}`}>{site.phone.display}</a>
              <a className="block min-h-11 py-2" href={`mailto:${site.email.enquiry}`}>{site.email.enquiry}</a>
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}

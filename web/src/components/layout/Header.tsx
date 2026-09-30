'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { BRAND, NAV_ITEMS } from '@/shared';
import { LinkButton } from '@/components/ui/Button';

function Wordmark() {
  return (
    <Link href="/" className="text-[1.1875rem] font-semibold tracking-[-0.02em] text-ink">
      {BRAND.name}
    </Link>
  );
}

export function Header() {
  const pathname = usePathname();
  // Menu is "open for" a path, so it closes itself on any navigation without an effect.
  const [openFor, setOpenFor] = useState<string | null>(null);
  const open = openFor === pathname;
  const setOpen = (v: boolean) => setOpenFor(v ? pathname : null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpenFor(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line-soft bg-white/85 backdrop-blur-xl">
      <div className="container-x flex h-[var(--header-h)] items-center justify-between">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? 'page' : undefined}
              className={clsx(
                'relative rounded-md px-3.5 py-2 text-[1.0625rem] transition-colors duration-[var(--duration-fast)]',
                isActive(item.href) ? 'text-brand-text' : 'text-ink-2 hover:text-ink',
              )}
            >
              {item.title}
              {isActive(item.href) ? (
                <span aria-hidden className="absolute inset-x-3.5 -bottom-[19px] h-[2px] bg-brand" />
              ) : null}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LinkButton href="/contact" className="!h-11 !px-5">
            Contact
          </LinkButton>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

    </header>

      {open ? (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-[var(--header-h)] z-40 overflow-y-auto bg-white lg:hidden"
        >
          <nav aria-label="Mobile" className="container-x flex flex-col py-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? 'page' : undefined}
                onClick={() => setOpen(false)}
                className={clsx(
                  'border-b border-line-soft py-4 text-[1.5rem] font-semibold tracking-[-0.02em]',
                  isActive(item.href) ? 'text-brand-text' : 'text-ink',
                )}
              >
                {item.title}
              </Link>
            ))}
            <LinkButton href="/contact" arrow className="mt-8 w-full">
              Contact JSJ
            </LinkButton>
            <p className="t-small mt-8">
              {BRAND.address.formatted}
              <br />
              <a className="text-ink hover:text-brand-text" href={`tel:${BRAND.phoneHref}`}>
                {BRAND.phone}
              </a>
            </p>
          </nav>
        </div>
      ) : null}
    </>
  );
}

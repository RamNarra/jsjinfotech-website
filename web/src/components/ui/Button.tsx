import Link from 'next/link';
import { clsx } from 'clsx';
import { ArrowRight } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'text';

const base =
  'group inline-flex items-center justify-center gap-2 font-medium tracking-[-0.005em] transition-[background-color,border-color,color,transform] duration-[var(--duration-fast)] ease-[var(--ease-out)] active:scale-[0.98] disabled:opacity-60 disabled:pointer-events-none';

const variants: Record<Variant, string> = {
  primary:
    'h-[3.4rem] rounded-[var(--radius-sm)] px-7 text-[1.0625rem] bg-brand text-white shadow-[0_1px_0_rgb(255_255_255/0.25)_inset,0_8px_20px_-8px_rgb(0_112_242/0.55)] hover:bg-brand-hover',
  secondary:
    'h-[3.4rem] rounded-[var(--radius-sm)] px-7 text-[1.0625rem] bg-white text-brand-text border border-brand hover:bg-brand-50',
  text: 'text-[1.0625rem] text-brand-text hover:text-brand-hover',
};

interface CommonProps {
  variant?: Variant;
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

const arrowIcon = (
  <ArrowRight
    aria-hidden
    className="size-4 transition-transform duration-[var(--duration-fast)] ease-[var(--ease-out)] group-hover:translate-x-0.5"
  />
);

export function LinkButton({
  href,
  variant = 'primary',
  arrow,
  className,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link href={href} className={clsx(base, variants[variant], className)}>
      {children}
      {arrow ? arrowIcon : null}
    </Link>
  );
}

export function Button({
  variant = 'primary',
  arrow,
  className,
  children,
  ...rest
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={clsx(base, variants[variant], className)} {...rest}>
      {children}
      {arrow ? arrowIcon : null}
    </button>
  );
}

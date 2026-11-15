import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Aurora } from '@/components/motion/Aurora';

type BtnProps = { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost-dark' | 'light' | 'outline'; className?: string };

export function Button({ href, children, variant = 'primary', className }: BtnProps) {
  const styles = {
    primary: 'btn-glow text-white',
    secondary: 'glass text-text hover:border-violet/40',
    'ghost-dark': 'glass text-white hover:border-white/30',
    outline: 'border border-ink/15 bg-white/60 text-text backdrop-blur hover:border-violet hover:text-violet',
    light: 'bg-white text-ink hover:bg-mist',
  }[variant];
  const isExternal = href.startsWith('tel:') || href.startsWith('mailto:');
  const cls = cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-all duration-200 ease-standard',
    styles,
    className,
  );
  if (isExternal) return <a href={href} className={cls}>{children}</a>;
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function ArrowLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  return (
    <Link href={href} className={cn('group inline-flex min-h-11 items-center gap-1.5 font-medium text-violet hover:text-violet-deep', className)}>
      {children}
      <ArrowRight aria-hidden className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" strokeWidth={1.75} />
    </Link>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={cn('label-caps mb-5 inline-flex items-center gap-2', dark ? 'text-violet-hi' : 'text-violet')}>
      <span aria-hidden className="h-px w-6 bg-gradient-to-r from-teal to-magenta" />
      {children}
    </p>
  );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('font-display text-[32px] leading-[38px] font-semibold tracking-[-0.02em] text-balance md:text-[48px] md:leading-[54px]', className)}>{children}</h2>;
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: React.ReactNode; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-mist pt-40 pb-20 md:pt-48 md:pb-28">
      <Aurora intensity={0.55} />
      <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-5xl font-display text-[40px] leading-[44px] font-semibold tracking-[-0.03em] text-balance text-text md:text-[68px] md:leading-[72px]">{title}</h1>
        {lead && <p className="mt-6 max-w-[68ch] text-lg leading-8 text-muted md:text-xl md:leading-[30px]">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return <span className="text-gradient">{children}</span>;
}

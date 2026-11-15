import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type BtnProps = { href: string; children: React.ReactNode; variant?: 'primary' | 'secondary' | 'ghost-dark' | 'light'; className?: string };

export function Button({ href, children, variant = 'primary', className }: BtnProps) {
  const styles = {
    primary: 'bg-violet text-white hover:bg-violet-deep',
    secondary: 'border border-line bg-paper text-text hover:border-violet hover:text-violet-deep',
    'ghost-dark': 'border border-white/25 text-white hover:border-white/60 hover:bg-white/5',
    light: 'bg-white text-ink hover:bg-mist',
  }[variant];
  const isExternal = href.startsWith('tel:') || href.startsWith('mailto:');
  const cls = cn(
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors duration-200 ease-standard',
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
  return <p className={cn('label-caps mb-4', dark ? 'text-violet-hi' : 'text-violet')}>{children}</p>;
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('font-display text-[30px] leading-[36px] font-semibold tracking-tight text-balance md:text-[40px] md:leading-[46px]', className)}>{children}</h2>;
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="on-ink relative overflow-hidden bg-ink pt-36 pb-20 text-on-ink md:pt-44 md:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_0%,rgba(96,75,159,0.35),transparent_70%)]" />
      <div className="container-x relative">
        <Eyebrow dark>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-[36px] leading-[42px] font-semibold tracking-tight text-balance text-white md:text-[56px] md:leading-[62px]">{title}</h1>
        {lead && <p className="mt-6 max-w-[68ch] text-lg leading-8 text-on-ink-muted md:text-xl md:leading-[30px]">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

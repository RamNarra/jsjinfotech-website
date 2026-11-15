import Link from 'next/link';
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
    <Link href={href} className={cn('inline-flex min-h-11 items-center font-semibold text-violet underline decoration-violet/30 underline-offset-4 transition-colors hover:decoration-violet', className)}>
      {children}
    </Link>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={cn('mb-4 text-[15px] font-semibold', dark ? 'text-violet-hi' : 'text-violet')}>{children}</p>
  );
}

export function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn('t-h2 font-display font-semibold text-balance', className)}>{children}</h2>;
}

export function PageHero({ eyebrow, title, lead, children }: { eyebrow: string; title: React.ReactNode; lead?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-mist pt-32 pb-14 md:pt-48 md:pb-28">
      <Aurora intensity={0.55} />
      <div aria-hidden className="bg-lines pointer-events-none absolute inset-0" />
      <div className="container-x relative">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="t-h1 max-w-5xl font-display font-semibold text-balance text-text">{title}</h1>
        {lead && <p className="t-lead mt-5 max-w-[68ch] text-muted">{lead}</p>}
        {children}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

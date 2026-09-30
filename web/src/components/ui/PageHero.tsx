import type { ReactNode } from 'react';
import { Breadcrumbs, type Crumb } from './Breadcrumbs';

export function PageHero({
  trail,
  eyebrow,
  title,
  lead,
  children,
}: {
  trail: Crumb[];
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-x pb-16 pt-8 lg:pb-24">
      <Breadcrumbs trail={trail} />
      <div className="mt-14 max-w-4xl">
        <p className="t-eyebrow rise">{eyebrow}</p>
        <h1 className="t-h1 mt-4">
          {title}
        </h1>
        {lead ? (
          <p className="t-lead mt-7 max-w-2xl">
            {lead}
          </p>
        ) : null}
        {children ? (
          <div className="rise mt-9" style={{ ['--i' as string]: 3 }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}

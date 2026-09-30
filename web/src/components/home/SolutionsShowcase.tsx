import Link from 'next/link';
import { Reveal } from '@/components/ui/Reveal';
import { SolutionExplorer } from './SolutionExplorer';

export function SolutionsShowcase() {
  return (
    <section id="solutions" className="section-y border-t border-line-soft">
      <div className="container-x">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="t-eyebrow">Solutions</p>
            <h2 className="t-h2 mt-3">Nine capabilities, one delivery model.</h2>
            <p className="t-lead mt-5">
              From enterprise platforms to drone-enabled data capture, each delivered through the same
              structured lifecycle.
            </p>
          </div>
          <Link href="/solutions" className="font-medium text-brand-text hover:text-brand-hover">
            View all solutions →
          </Link>
        </Reveal>
        <div className="mt-14 lg:mt-16">
          <SolutionExplorer />
        </div>
      </div>
    </section>
  );
}

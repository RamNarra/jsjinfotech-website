import Link from 'next/link';
import { BRAND, SOLUTION_ORDER, SOLUTIONS_DATA } from '@/shared';

const company = [
  { title: 'Company', href: '/company' },
  { title: 'Technology', href: '/technology' },
  { title: 'Vision 2030', href: '/vision-2030' },
  { title: 'Insights', href: '/insights' },
  { title: 'Contact', href: '/contact' },
];

const industries = [
  { title: 'Government', href: '/industries/government' },
  { title: 'Enterprise', href: '/industries/enterprise' },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-soft">
      <div className="container-x grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="text-[1.1875rem] font-semibold tracking-[-0.01em]">JSJ INFOTECH</p>
          <p className="t-small mt-2 max-w-xs">{BRAND.tagline}</p>
          <address className="t-small mt-6 not-italic">
            {BRAND.address.street}
            <br />
            {BRAND.address.area}
            <br />
            {BRAND.address.city}, {BRAND.address.state}, {BRAND.address.country}
          </address>
          <p className="t-small mt-3">
            <a className="block py-1 hover:text-brand-text" href={`tel:${BRAND.phoneHref}`}>
              {BRAND.phone}
            </a>
            <a className="block py-1 hover:text-brand-text" href={`mailto:${BRAND.supportEmail}`}>
              {BRAND.supportEmail}
            </a>
          </p>
        </div>

        <nav aria-label="Solutions" className="md:col-span-4">
          <p className="text-[1.0625rem] font-semibold">Solutions</p>
          <ul className="mt-4 grid gap-2.5">
            {SOLUTION_ORDER.map((slug) => (
              <li key={slug}>
                <Link href={`/solutions/${slug}`} className="t-small hover:text-brand-text">
                  {SOLUTIONS_DATA[slug].title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Industries" className="md:col-span-2">
          <p className="text-[1.0625rem] font-semibold">Industries</p>
          <ul className="mt-4 grid gap-2.5">
            {industries.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="t-small hover:text-brand-text">
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="md:col-span-2">
          <p className="text-[1.0625rem] font-semibold">Company</p>
          <ul className="mt-4 grid gap-2.5">
            {company.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="t-small hover:text-brand-text">
                  {i.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-6 text-[0.9375rem] text-ink-3 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} JSJ INFOTECH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

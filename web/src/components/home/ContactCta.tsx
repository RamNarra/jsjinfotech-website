import { MapPin, Phone, Mail } from 'lucide-react';
import { BRAND } from '@/shared';
import { ContactForm } from '@/components/forms/ContactForm';
import { Reveal } from '@/components/ui/Reveal';

export function ContactDetails() {
  return (
    <ul className="grid gap-5">
      <li className="flex gap-3">
        <MapPin aria-hidden className="mt-1 size-4 shrink-0 text-brand-text" />
        <address className="t-small not-italic !text-ink">{BRAND.address.formatted}</address>
      </li>
      <li className="flex gap-3">
        <Phone aria-hidden className="mt-1 size-4 shrink-0 text-brand-text" />
        <a className="t-small block py-1 !text-ink hover:!text-brand-text" href={`tel:${BRAND.phoneHref}`}>
          {BRAND.phone}
        </a>
      </li>
      <li className="flex gap-3">
        <Mail aria-hidden className="mt-1 size-4 shrink-0 text-brand-text" />
        <span className="t-small !text-ink">
          <a className="block py-1 hover:!text-brand-text" href={`mailto:${BRAND.supportEmail}`}>
            {BRAND.supportEmail}
          </a>
          <a className="block py-1 hover:!text-brand-text" href={`mailto:${BRAND.executiveEmail}`}>
            {BRAND.executiveEmail}
          </a>
        </span>
      </li>
    </ul>
  );
}

export function ContactCta() {
  return (
    <section id="contact" className="section-y border-t border-line-soft">
      <div className="container-x grid gap-14 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="t-eyebrow">Contact</p>
          <h2 className="t-h2 mt-3">Talk to JSJ about your requirement.</h2>
          <p className="t-lead mt-5">
            JSJ welcomes engagement from government departments, enterprises and strategic
            technology partners.
          </p>
          <div className="mt-10">
            <ContactDetails />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-7" delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}

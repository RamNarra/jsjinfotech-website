import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/metadata';
import { SOLUTION_ORDER } from '@/shared';
import { PageHero } from '@/components/ui/PageHero';
import { ContactForm } from '@/components/forms/ContactForm';
import { ContactDetails } from '@/components/home/ContactCta';

export const metadata: Metadata = pageMetadata({
  title: 'Contact',
  description: 'Contact JSJ INFOTECH, Jubilee Hills, Hyderabad, about technology, SAP, AI, software, drone or government projects.',
  path: '/contact',
});

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ interest?: string }>;
}) {
  const { interest } = await searchParams;
  const valid = interest && (SOLUTION_ORDER as readonly string[]).includes(interest) ? interest : '';

  return (
    <>
      <PageHero
        trail={[{ name: 'Contact' }]}
        eyebrow="Contact"
        title="Talk to JSJ about your requirement."
        lead="JSJ welcomes engagement from government departments, enterprises, institutions and strategic technology partners."
      />
      <section className="container-x grid gap-14 pb-28 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <ContactDetails />
        </div>
        <div className="lg:col-span-8">
          <ContactForm defaultInterest={valid} />
        </div>
      </section>
    </>
  );
}

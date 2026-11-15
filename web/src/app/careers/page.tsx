import { PageHero, Button } from '@/components/ui';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Careers', 'Work with JSJ INFOTECH across enterprise IT, SAP, AI, drones, software and smart infrastructure in Hyderabad.', '/careers/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build the systems that run what’s next." lead="There are no open vacancies listed right now. We welcome general applications from engineers, consultants and project managers." />
      <section className="section-y">
        <div className="container-x">
          <p className="max-w-[60ch] leading-8 text-muted">Send your CV and a short note on the vertical that interests you.</p>
          <Button href={`mailto:${site.email.enquiry}?subject=Career%20enquiry`} className="mt-6">Email {site.email.enquiry}</Button>
        </div>
      </section>
    </>
  );
}

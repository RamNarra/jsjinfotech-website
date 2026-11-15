import { Mail, MapPin } from 'lucide-react';
import { PageHero } from '@/components/ui';
import { EnquiryForm } from '@/components/forms/EnquiryForm';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Contact', 'Discuss a project with JSJ INFOTECH. Jubilee Hills, Hyderabad. support@jsjinfotech.co.in', '/contact/');

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Discuss a project." lead="Tell us what you need. We respond to government and enterprise enquiries by email." />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="relative"><EnquiryForm /></div>
          <aside className="space-y-6 rounded-2xl border border-line bg-mist p-6 lg:self-start">
            <h2 className="font-display text-xl font-semibold">JSJ INFOTECH</h2>
            <p className="flex gap-3"><MapPin aria-hidden className="mt-1 size-5 shrink-0 text-violet" strokeWidth={1.5} /><span>{site.address.full}<br /><a className="text-violet underline" href={site.mapUrl} rel="noopener" target="_blank">Open map</a></span></p>
            <p className="flex gap-3"><Mail aria-hidden className="mt-0.5 size-5 shrink-0 text-violet" strokeWidth={1.5} /><a className="block hover:text-violet" href={`mailto:${site.email.support}`}>{site.email.support}</a></p>
          </aside>
        </div>
      </section>
    </>
  );
}

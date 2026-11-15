/* eslint-disable @next/next/no-img-element */
import { Mail, MessageCircle } from 'lucide-react';
import { PageHero, Eyebrow, H2 } from '@/components/ui';
import { verticals } from '@/content/verticals';
import { site } from '@/content/site';
import { pageMeta } from '@/lib/seo';

export const metadata = pageMeta('Careers', 'Work with JSJ INFOTECH in Hyderabad across enterprise IT, SAP, AI, drones, software and smart infrastructure.', '/careers/');

const why = [
  { t: 'Work across disciplines', d: 'Software, SAP, AI, drones and field engineering sit in one team, so you see the whole system.' },
  { t: 'Real infrastructure', d: 'Projects run in government facilities, plants and enterprises, not only on screens.' },
  { t: 'Learn with an SAP Gold Partner', d: 'SAP work is delivered with SGN Software, our joint venture partner for SAP projects.' },
];

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Careers" title="Build the systems that run what’s next." lead="We hire engineers, consultants and project managers in Hyderabad." />
      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:items-center">
          <img src="/images/v/sap.webp" alt="JSJ consultants running a project workshop with a client team" loading="lazy" className="h-80 w-full rounded-[28px] object-cover lg:h-[420px]" />
          <div>
            <Eyebrow>Why JSJ</Eyebrow>
            <H2>Engineering that leaves the screen.</H2>
            <ul className="mt-8 space-y-6">
              {why.map((w) => (
                <li key={w.t}>
                  <p className="font-display text-xl font-semibold">{w.t}</p>
                  <p className="mt-1 leading-7 text-muted">{w.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="section-y bg-mist">
        <div className="container-x">
          <Eyebrow>Teams</Eyebrow>
          <H2 className="mb-8">Where you could work.</H2>
          <ul className="flex flex-wrap gap-3">
            {verticals.map((v) => <li key={v.slug} className="rounded-full bg-white px-5 py-3 font-medium ring-1 ring-line">{v.name}</li>)}
          </ul>
          <div className="mt-12 rounded-[28px] bg-white p-8 ring-1 ring-line md:p-10">
            <h2 className="font-display text-2xl font-semibold">No open roles listed right now</h2>
            <p className="mt-2 max-w-[60ch] leading-7 text-muted">Tell us about yourself and the team you would like to join. We reply when a matching role opens.</p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href={`mailto:${site.email.enquiry}?subject=Career%20enquiry`} className="btn-glow inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-medium text-white"><Mail aria-hidden className="size-4" /> Email {site.email.enquiry}</a>
              <a href={`https://wa.me/${site.phone.tel.replace('+', '')}?text=${encodeURIComponent('Hi JSJ INFOTECH, I would like to know about career opportunities.')}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-6 font-medium hover:border-violet"><MessageCircle aria-hidden className="size-4" /> Message on WhatsApp</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

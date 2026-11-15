import { site } from '@/content/site';
import { Button } from '@/components/ui';

export function ClosingCta() {
  return (
    <section className="on-ink section-y relative overflow-hidden bg-ink text-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_100%,rgba(96,75,159,0.45),transparent_70%)]" />
      <div className="container-x relative text-center">
        <h2 className="font-display text-[36px] leading-[42px] font-semibold tracking-tight md:text-[56px] md:leading-[62px]">Let’s Build What’s Next.</h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-8 text-on-ink-muted">
          JSJ INFOTECH and SGN Software welcome engagement from government departments and enterprise clients seeking a future-ready technology partner — across IT, SAP, AI, drone, software and smart-infrastructure service lines.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="light">Start a Project Discussion</Button>
          <Button href={`tel:${site.phone.tel}`} variant="ghost-dark">Call {site.phone.display}</Button>
          <Button href={`mailto:${site.email.enquiry}`} variant="ghost-dark">Email us</Button>
        </div>
      </div>
    </section>
  );
}

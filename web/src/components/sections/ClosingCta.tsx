import { site } from '@/content/site';
import { Button } from '@/components/ui';
import { Aurora } from '@/components/motion/Aurora';

export function ClosingCta() {
  return (
    <section className="on-ink section-y relative overflow-hidden bg-ink text-white">
      <Aurora intensity={0.7} />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="container-x relative text-center">
        <h2 className="font-display text-[44px] leading-[46px] font-semibold tracking-[-0.035em] md:text-[88px] md:leading-[88px]">Let’s Build <span className="text-gradient">What’s Next.</span></h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-8 text-on-ink-muted">
          JSJ INFOTECH and SGN Software welcome engagement from government departments and enterprise clients seeking a future-ready technology partner — across IT, SAP, AI, drone, software and smart-infrastructure service lines.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">Start a Project Discussion</Button>
          <Button href={`tel:${site.phone.tel}`} variant="ghost-dark">Call {site.phone.display}</Button>
          <Button href={`mailto:${site.email.enquiry}`} variant="ghost-dark">Email us</Button>
        </div>
      </div>
    </section>
  );
}

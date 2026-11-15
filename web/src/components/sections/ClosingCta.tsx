import { site } from '@/content/site';
import { Button } from '@/components/ui';
import { Aurora } from '@/components/motion/Aurora';

export function ClosingCta() {
  return (
    <section className="on-ink section-y relative overflow-hidden bg-ink text-white">
      <Aurora intensity={0.7} dark />
      <div aria-hidden className="bg-grid pointer-events-none absolute inset-0" />
      <div className="container-x relative text-center">
        <h2 className="font-display text-[44px] leading-[46px] font-semibold tracking-[-0.035em] md:text-[88px] md:leading-[88px]">Let’s Build <span className="text-gradient">What’s Next.</span></h2>
        <p className="mx-auto mt-6 max-w-[60ch] text-lg leading-8 text-on-ink-muted">
          Whether you are planning an SAP transformation, exploring enterprise AI, modernizing software or improving infrastructure operations, start a conversation with JSJ INFOTECH and its delivery partners.</p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary">Start a Project Discussion</Button>
          <Button href={`tel:${site.phone.tel}`} variant="ghost-dark">Call {site.phone.display}</Button>
          <Button href={`mailto:${site.email.enquiry}`} variant="ghost-dark">Email us</Button>
        </div>
      </div>
    </section>
  );
}

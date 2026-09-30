import { LinkButton } from './Button';
import { Reveal } from './Reveal';

export function ClosingCta({
  title = 'Talk to JSJ about your requirement.',
  href = '/contact',
  label = 'Contact JSJ',
}: {
  title?: string;
  href?: string;
  label?: string;
}) {
  return (
    <section className="bg-deep relative overflow-hidden">
      <div aria-hidden className="bg-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_90%_at_90%_0%,#000,transparent)]" />
      <div className="container-x section-y relative">
        <Reveal className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <h2 className="t-h2 max-w-2xl">{title}</h2>
          <LinkButton href={href} variant="secondary" arrow className="!border-white !text-brand-deep">
            {label}
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}

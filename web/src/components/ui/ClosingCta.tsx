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
    <section className="border-t border-line-soft bg-soft">
      <div className="container-x section-y">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="t-h2 max-w-xl">{title}</h2>
          <LinkButton href={href} arrow>
            {label}
          </LinkButton>
        </Reveal>
      </div>
    </section>
  );
}

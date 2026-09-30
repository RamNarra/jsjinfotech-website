import { Reveal } from '@/components/ui/Reveal';
import { ScrollText } from './ScrollText';

const facts = [
  { k: 'Who we serve', v: 'Enterprises, government organisations, institutions and strategic partners.' },
  {
    k: 'What we combine',
    v: 'Technology, project management, AI, SAP, software and emerging technologies.',
  },
  { k: 'Where we work', v: 'From Hyderabad across India and, where appropriate, international markets.' },
];

export function Statement() {
  return (
    <section className="section-y border-t border-line-soft">
      <div className="container-x">
        <ScrollText
          className="t-h2 max-w-[26ch] sm:max-w-[32ch] lg:max-w-[40ch] !text-[clamp(2.1rem,4.4vw,4rem)]"
          text="JSJ starts with the requirement, then develops the solution, plans it, implements it, integrates it, deploys it and supports it."
        />
        <dl className="mt-16 grid gap-10 border-t border-line pt-8 md:grid-cols-3">
          {facts.map((f, i) => (
            <Reveal key={f.k} delay={i * 0.08}>
              <dt className="text-[1.0625rem] font-semibold">{f.k}</dt>
              <dd className="t-small mt-2 max-w-xs">{f.v}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

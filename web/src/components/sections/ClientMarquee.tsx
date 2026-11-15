import { clientGroups } from '@/content/sap';

// Infinite client ticker. Second copy is aria-hidden and hidden under reduced motion.
export function ClientMarquee() {
  const all = clientGroups.flatMap((g) => g.clients);
  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <ul aria-hidden={hidden || undefined} className={hidden ? 'flex motion-reduce:hidden' : 'flex flex-wrap motion-safe:flex-nowrap'}>
      {all.map((c) => (
        <li key={c} className="flex items-center gap-6 px-6 py-2 font-display text-xl font-medium whitespace-nowrap text-muted/90 md:text-2xl">
          {c}
          <span aria-hidden className="size-1.5 rounded-full bg-electric/70" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee overflow-hidden">
      <div className="marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}

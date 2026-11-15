import { ShoppingBag, FlaskConical, Pickaxe, Zap, Briefcase, Sun, Landmark, Factory, Cpu, Pill, Package, Building, HardHat, Shirt, type LucideIcon } from 'lucide-react';
import { industries } from '@/content/industries';
import { cn } from '@/lib/cn';

const icon: Record<string, LucideIcon> = {
  Retail: ShoppingBag,
  Chemicals: FlaskConical,
  'Mill Products & Mining': Pickaxe,
  'Power & Utilities': Zap,
  'Professional Services': Briefcase,
  'Renewable Energy': Sun,
  Banking: Landmark,
  Manufacturing: Factory,
  'High Tech': Cpu,
  Pharmaceuticals: Pill,
  'Consumer Products': Package,
  'Steel & Cement': Building,
  'EC&O': HardHat,
  Textiles: Shirt,
};

export function IndustryGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul className={cn('grid gap-3', detailed ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-7')}>
      {industries.map((x) => {
        const I = icon[x.name] ?? Factory;
        return (
          <li key={x.name} className={cn('rounded-2xl border border-line bg-white', detailed ? 'flex gap-4 p-5' : 'p-4')}>
            <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-mist text-violet">
              <I aria-hidden className="size-5" strokeWidth={1.6} />
            </span>
            <div className={detailed ? '' : 'mt-3'}>
              <p className="font-display text-[16px] leading-6 font-semibold">{x.name === 'EC&O' ? 'Engineering & Construction (EC&O)' : x.name}</p>
              {detailed && <p className="mt-1 text-[15px] leading-6 text-muted">{x.use}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

import {
  ShoppingBag,
  FlaskConical,
  Pickaxe,
  Zap,
  Briefcase,
  Sun,
  Landmark,
  Factory,
  Cpu,
  Pill,
  Package,
  Building,
  HardHat,
  Shirt,
  type LucideIcon,
} from "lucide-react";
import { industries } from "@/content/industries";
import { cn } from "@/lib/cn";

const file: Record<string, string> = {
  Retail: "retail",
  Chemicals: "chemicals",
  "Mill Products & Mining": "mining",
  "Power & Utilities": "power",
  "Professional Services": "services",
  "Renewable Energy": "renewables",
  Banking: "banking",
  Manufacturing: "manufacturing",
  "High Tech": "hightech",
  Pharmaceuticals: "pharma",
  "Consumer Products": "consumer",
  "Steel & Cement": "steel-cement",
  "EC&O": "eco",
  Textiles: "textiles",
};

const icon: Record<string, LucideIcon> = {
  Retail: ShoppingBag,
  Chemicals: FlaskConical,
  "Mill Products & Mining": Pickaxe,
  "Power & Utilities": Zap,
  "Professional Services": Briefcase,
  "Renewable Energy": Sun,
  Banking: Landmark,
  Manufacturing: Factory,
  "High Tech": Cpu,
  Pharmaceuticals: Pill,
  "Consumer Products": Package,
  "Steel & Cement": Building,
  "EC&O": HardHat,
  Textiles: Shirt,
};

/* eslint-disable @next/next/no-img-element */
// Industries with a generated photo (in /public/images/industries) show it; others show the icon tile.
const hasPhoto = new Set<string>([]);

// Photo tiles: one generated image per industry with the name (and use case on the detailed page).
export function IndustryGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <ul
      className={cn(
        "grid gap-5",
        detailed
          ? "sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-2 md:grid-cols-4 lg:grid-cols-7",
      )}
    >
      {industries.map((x) => {
        const I = icon[x.name] ?? Factory;
        return (
          <li
            key={x.name}
            className="group overflow-hidden rounded-3xl bg-white shadow-[0_12px_32px_-20px_rgba(11,21,48,0.45)] ring-1 ring-line"
          >
            {hasPhoto.has(x.name) ? (
              <div className="relative overflow-hidden">
                <img
                  src={`/images/industries/${file[x.name]}.webp`}
                  alt={`${x.name} operations`}
                  loading="lazy"
                  className={cn(
                    "w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
                    detailed ? "h-52" : "h-40",
                  )}
                />
                <span className="absolute top-3 left-3 inline-flex size-9 items-center justify-center rounded-xl bg-white/95 text-violet shadow">
                  <I aria-hidden className="size-[18px]" strokeWidth={1.7} />
                </span>
              </div>
            ) : (
              <div className="px-4 pt-4">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-mist text-violet">
                  <I aria-hidden className="size-5" strokeWidth={1.7} />
                </span>
              </div>
            )}
            <div className="p-4">
              <p className="font-display text-[17px] leading-6 font-semibold">
                {x.name === "EC&O" ? "Engineering & Construction" : x.name}
              </p>
              {detailed && (
                <p className="mt-1 text-[15px] leading-6 text-muted">{x.use}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}

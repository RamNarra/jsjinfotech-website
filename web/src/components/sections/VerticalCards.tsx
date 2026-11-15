/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {
  Server,
  Boxes,
  BrainCircuit,
  Plane,
  Code2,
  Fan,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import { verticals, type Vertical } from "@/content/verticals";
import { cn } from "@/lib/cn";
import {
  CodeScreen,
  CopilotScreen,
  DroneMapScreen,
} from "@/components/visuals/Screens";

const icons: Record<string, LucideIcon> = {
  "it-consulting": Server,
  sap: Boxes,
  ai: BrainCircuit,
  drones: Plane,
  software: Code2,
  "hvac-government": Fan,
  rnd: FlaskConical,
};

// Photos generated for JSJ from the detailed brief in docs/image-brief.md (one per vertical).
const photo: Record<string, string> = {
  "it-consulting":
    "Engineer with a laptop showing a network map in a server room aisle",
  sap: "Consultants and a client finance team in an ERP workshop with a process-flow dashboard",
  ai: "Analyst pointing at a factory camera feed with machines outlined by AI detection boxes",
  drones:
    "Drone pilot in a safety vest flying an inspection drone at a construction site",
  software:
    "Developer working on a web dashboard, code and the matching mobile app",
  "hvac-government":
    "Technician with a tablet beside rooftop chillers fitted with an IoT sensor",
  rnd: "Engineer adjusting a robot arm in a lab with a drone and sensor boards",
};

// Verticals whose generated photo is in /public/images/v; others show their product screen until generated.
const hasPhoto = new Set(["it-consulting", "sap", "hvac-government"]);

export function VerticalMedia({
  v,
  tall = false,
}: {
  v: Vertical;
  tall?: boolean;
}) {
  if (!hasPhoto.has(v.slug)) {
    if (v.slug === "ai") return <CopilotScreen className="w-full" />;
    if (v.slug === "drones") return <DroneMapScreen className="w-full" />;
    if (v.slug === "software") return <CodeScreen className="w-full" />;
    return (
      <img
        src="/images/gen/rnd-lab-sm.webp"
        alt={photo.rnd}
        loading="lazy"
        className="h-60 w-full rounded-2xl object-cover"
      />
    );
  }
  return (
    <img
      src={`/images/v/${v.slug}.webp`}
      alt={photo[v.slug] ?? v.name}
      loading="lazy"
      className={cn(
        "w-full rounded-2xl object-cover",
        tall || v.slug === "sap" ? "h-80" : "h-60",
      )}
    />
  );
}

const span: Record<string, string> = {
  sap: "lg:col-span-4",
  ai: "lg:col-span-2",
  "it-consulting": "lg:col-span-2",
  drones: "lg:col-span-2",
  software: "lg:col-span-2",
  "hvac-government": "lg:col-span-3",
  rnd: "lg:col-span-3",
};
const order = [
  "sap",
  "ai",
  "it-consulting",
  "drones",
  "software",
  "hvac-government",
  "rnd",
];

export function VerticalCards() {
  const list = order
    .map((s) => verticals.find((v) => v.slug === s))
    .filter((v): v is Vertical => Boolean(v));
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
      {list.map((v) => {
        const Icon = icons[v.slug] ?? Server;
        const big = v.slug === "sap";
        return (
          <li key={v.slug} className={cn("min-w-0", span[v.slug])}>
            <Link
              href={`/services/${v.slug}`}
              className="group flex h-full min-w-0 flex-col rounded-[28px] border border-line bg-mist p-4 transition-colors duration-200 hover:border-violet/40 hover:bg-white"
            >
              <div className="rounded-2xl">
                <VerticalMedia v={v} />
              </div>
              <div className="flex flex-1 flex-col px-2 pt-6 pb-2">
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-xl bg-white text-violet ring-1 ring-line">
                    <Icon aria-hidden className="size-5" strokeWidth={1.6} />
                  </span>
                  <h3
                    className={cn(
                      "font-display font-semibold tracking-tight",
                      big ? "text-2xl md:text-3xl" : "text-xl",
                    )}
                  >
                    {v.name}
                  </h3>
                </div>
                <p
                  className={cn(
                    "mt-3 leading-7 text-muted",
                    big ? "max-w-2xl text-[17px]" : "text-[15px] leading-6",
                  )}
                >
                  {v.card}
                </p>
                <span className="mt-auto pt-5 text-sm font-semibold text-violet underline decoration-violet/30 underline-offset-4 group-hover:decoration-violet">
                  Learn about {v.name}
                </span>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

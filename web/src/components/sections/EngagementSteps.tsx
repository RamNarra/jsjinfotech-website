import { engagementSteps } from '@/content/sap';

const colors = ['#0b7f91', '#4379bd', '#7761aa', '#a353a0'];

// Four steps in one row. Short and scannable; the sequence numbers are real (it is a process).
export function EngagementSteps() {
  return (
    <ol className="relative grid gap-4 md:grid-cols-4">
      <span aria-hidden className="absolute top-5 right-[12%] left-[12%] hidden h-0.5 bg-gradient-to-r from-teal via-violet to-magenta opacity-40 md:block" />
      {engagementSteps.map((s, i) => (
        <li key={s.n} className="relative">
          <span className="relative z-10 inline-flex size-10 items-center justify-center rounded-full font-display font-semibold text-white" style={{ background: colors[i] }}>{i + 1}</span>
          <h3 className="mt-4 font-display text-xl font-semibold">{s.name}</h3>
          <p className="mt-2 text-[15px] leading-6 text-muted">{s.body}</p>
        </li>
      ))}
    </ol>
  );
}

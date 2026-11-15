import { cn } from '@/lib/cn';

// Logo-spectrum mesh: soft blurred fields in JSJ logo colours. Pure CSS, static under reduced motion.
export function Aurora({ className, intensity = 1, dark = false }: { className?: string; intensity?: number; dark?: boolean }) {
  const o = dark ? 0.55 : 0.62;
  return (
    <div aria-hidden className={cn('aurora', className)} style={{ opacity: intensity }}>
      <span style={{ width: '46vw', height: '34vw', left: '-8vw', top: '-14vw', background: '#4379bd', opacity: o }} />
      <span style={{ width: '40vw', height: '30vw', left: '28vw', top: '-18vw', background: '#7761aa', opacity: o, animationDelay: '-6s' }} />
      <span style={{ width: '34vw', height: '28vw', right: '-6vw', top: '-8vw', background: '#a353a0', opacity: o * 0.9, animationDelay: '-11s' }} />
      <span style={{ width: '22vw', height: '18vw', right: '14vw', top: '10vw', background: '#f3903f', opacity: o * 0.45, animationDelay: '-3s' }} />
      <span style={{ width: '20vw', height: '16vw', left: '12vw', top: '12vw', background: '#73c276', opacity: o * 0.5, animationDelay: '-15s' }} />
      <span style={{ width: '14vw', height: '12vw', right: '34vw', top: '16vw', background: '#fdc70c', opacity: o * 0.35, animationDelay: '-9s' }} />
    </div>
  );
}

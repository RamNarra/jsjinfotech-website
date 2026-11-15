import { cn } from '@/lib/cn';

// Soft blurred colour fields behind hero/CTA. Pure CSS, GPU-cheap, static under reduced motion.
export function Aurora({ className, intensity = 1 }: { className?: string; intensity?: number }) {
  return (
    <div aria-hidden className={cn('aurora', className)} style={{ opacity: intensity }}>
      <span style={{ width: '48vw', height: '48vw', left: '-10vw', top: '-18vw', background: '#5b3cff' }} />
      <span style={{ width: '38vw', height: '38vw', right: '-8vw', top: '-6vw', background: '#b14fd6', animationDelay: '-7s' }} />
      <span style={{ width: '30vw', height: '30vw', left: '35vw', bottom: '-16vw', background: '#3b2aa8', animationDelay: '-13s' }} />
      <span style={{ width: '16vw', height: '16vw', right: '18vw', bottom: '-4vw', background: '#5fbf3a', opacity: 0.22, animationDelay: '-4s' }} />
    </div>
  );
}

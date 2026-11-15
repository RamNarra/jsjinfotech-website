import Link from 'next/link';
import { cn } from '@/lib/cn';

// AR-01: supplied SVG used unmodified via <img>. Aspect 242.14 × 177.48.
export function Logo({ className, height = 40, link = true }: { className?: string; height?: number; link?: boolean }) {
  const width = Math.round((height * 242.14) / 177.48);
  // eslint-disable-next-line @next/next/no-img-element
  const img = <img src="/brand/jsj-logo.svg" alt="JSJ INFOTECH" width={width} height={height} className={cn('block', className)} />;
  if (!link) return img;
  return (
    <Link href="/" aria-label="JSJ INFOTECH home" className="inline-flex items-center gap-3 min-h-11">
      {img}
      <span className="font-display text-[15px] font-semibold tracking-tight">JSJ INFOTECH</span>
    </Link>
  );
}

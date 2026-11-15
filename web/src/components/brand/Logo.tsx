/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { cn } from '@/lib/cn';

// Revamped lock-up (owner request, 2026-11-15): original JSJ mark geometry from "JSJ LOGO.svg" kept unmodified
// (jsj-mark.svg = same file with the small "INFOTECH" glyphs removed), and a stronger "INFOTECH" wordmark
// set in Space Grotesk, justified to the mark's full width via SVG textLength. Ratio wordmark:mark ~ 1:3.6
// (was ~1:8.5 in the original, which made INFOTECH unreadable at header sizes).
export function LogoLockup({ height = 48, dark = false, className }: { height?: number; dark?: boolean; className?: string }) {
  const markH = height * 0.74;
  const width = Math.round((markH * 242.14) / 148);
  return (
    <span
      className={cn('inline-flex w-[calc(var(--w)*0.75)] flex-col items-start sm:w-[var(--w)]', className)}
      style={{ '--w': `${width}px` } as React.CSSProperties}
      role="img"
      aria-label="JSJ INFOTECH"
    >
      <img src="/brand/jsj-mark.svg" alt="" width={width} height={Math.round(markH)} className="h-auto w-full" />
      <svg viewBox="0 0 242 40" aria-hidden className="mt-[3%] block h-auto w-full overflow-visible">
        <text
          x="1"
          y="31"
          textLength="240"
          lengthAdjust="spacing"
          fill={dark ? '#ffffff' : '#0b1530'}
          style={{ fontFamily: 'var(--font-grotesk), var(--font-inter), sans-serif', fontWeight: 600, fontSize: 34 }}
        >
          INFOTECH
        </text>
      </svg>
    </span>
  );
}

export function Logo({ height = 48, dark = false }: { height?: number; dark?: boolean }) {
  return (
    <Link href="/" aria-label="JSJ INFOTECH home" className="inline-flex min-h-11 items-center">
      <LogoLockup height={height} dark={dark} />
    </Link>
  );
}

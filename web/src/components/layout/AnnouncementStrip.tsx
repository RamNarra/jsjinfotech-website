'use client';

import { useSyncExternalStore, useState } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';

const KEY = 'jsj-strip-dismissed';
const read = () => {
  try {
    return sessionStorage.getItem(KEY) === '1';
  } catch {
    return false;
  }
};

// Session-scoped dismissal only; no cookie (FR-04, §6.1).
export function AnnouncementStrip() {
  const stored = useSyncExternalStore(() => () => {}, read, () => false);
  const [closed, setClosed] = useState(false);
  const pathname = usePathname();
  if (pathname !== '/' || stored || closed) return null;
  return (
    <div className="on-ink relative z-50 bg-violet-deep text-white">
      <div className="container-x flex min-h-10 items-center justify-center gap-3 py-2 pr-12 text-center text-[13px] leading-5">
        <p>
          <strong className="font-semibold">JSJ INFOTECH × SGN Software</strong>
          <span className="mx-2 opacity-60">|</span>Joint Venture Partner for SAP Projects
          <span className="mx-2 hidden opacity-60 sm:inline">|</span>
          <span className="hidden sm:inline">SGN Software — SAP Gold Partner</span>
        </p>
        <button
          type="button"
          aria-label="Dismiss announcement"
          className="absolute right-2 inline-flex size-11 items-center justify-center rounded-full hover:bg-white/10"
          onClick={() => {
            try {
              sessionStorage.setItem(KEY, '1');
            } catch {
              /* storage blocked: dismiss for this render only */
            }
            setClosed(true);
          }}
        >
          <X aria-hidden className="size-4" />
        </button>
      </div>
    </div>
  );
}

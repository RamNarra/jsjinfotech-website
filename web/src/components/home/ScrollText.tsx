'use client';

import { useRef } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';

// Both ends pass WCAG AA on white: unlit #50677E (5.6:1), lit #12171C.
const UNLIT = '#50677e';
const LIT = '#12171c';

function Word({ word, i, n, progress }: { word: string; i: number; n: number; progress: MotionValue<number> }) {
  const start = (i / n) * 0.85;
  const color = useTransform(progress, [start, start + 0.12], [UNLIT, LIT]);
  return (
    <m.span style={{ color }} className="inline-block whitespace-pre">
      {word}{' '}
    </m.span>
  );
}

/** Words darken in sequence as the sentence scrolls through the viewport. Plain text under reduced motion. */
export function ScrollText({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.55'] });
  const words = text.split(' ');
  if (reduce) return <p className={className}>{text}</p>;
  return (
    <LazyMotion features={domAnimation} strict>
      <p ref={ref} className={className}>
        <span className="sr-only">{text}</span>
        <span aria-hidden>
          {words.map((w, i) => (
            <Word key={i} word={w} i={i} n={words.length} progress={scrollYProgress} />
          ))}
        </span>
      </p>
    </LazyMotion>
  );
}

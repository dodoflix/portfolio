'use client';

import { useState, useEffect, HTMLAttributes, forwardRef } from 'react';
import { cn } from '../../lib/utils';

export interface TypeWriterProps extends HTMLAttributes<HTMLSpanElement> {
  /** Words to cycle through */
  words: string[];
  /** Typing speed in ms */
  typeSpeed?: number;
  /** Delete speed in ms */
  deleteSpeed?: number;
  /** Delay before deleting in ms */
  delayBeforeDelete?: number;
  /** Show cursor */
  showCursor?: boolean;
  /** Loop animation */
  loop?: boolean;
}

/**
 * Animated typewriter text effect
 */
export const TypeWriter = forwardRef<HTMLSpanElement, TypeWriterProps>(
  (
    {
      className,
      words,
      typeSpeed = 100,
      deleteSpeed = 50,
      delayBeforeDelete = 2000,
      showCursor = true,
      loop = true,
      ...props
    },
    ref
  ) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    useEffect(() => {
      if (words.length === 0) return;

      if (subIndex === words[index].length + 1 && !reverse) {
        if (!loop && index === words.length - 1) return;
        const timeout = setTimeout(() => setReverse(true), delayBeforeDelete);
        return () => clearTimeout(timeout);
      }

      if (subIndex === 0 && reverse) {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
        return;
      }

      const timeout = setTimeout(
        () => {
          setSubIndex((prev) => prev + (reverse ? -1 : 1));
        },
        reverse ? deleteSpeed : typeSpeed
      );

      return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, delayBeforeDelete, loop]);

    if (words.length === 0) return null;

    return (
      <span ref={ref} className={cn('font-medium', className)} {...props}>
        {words[index].substring(0, subIndex)}
        {showCursor && <span className="animate-pulse">|</span>}
      </span>
    );
  }
);

TypeWriter.displayName = 'TypeWriter';


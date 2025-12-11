'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { StackGap, StackAlign, StackJustify } from './stack';

export interface ClusterProps extends HTMLAttributes<HTMLDivElement> {
  /** Gap between items */
  gap?: StackGap;
  /** Align items */
  align?: StackAlign;
  /** Justify content */
  justify?: StackJustify;
}

const alignClasses: Record<StackAlign, string> = {
  start: 'items-start',
  center: 'items-center',
  end: 'items-end',
  stretch: 'items-stretch',
  baseline: 'items-baseline',
};

const justifyClasses: Record<StackJustify, string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end',
  between: 'justify-between',
  around: 'justify-around',
  evenly: 'justify-evenly',
};

const gapClasses: Record<StackGap, string> = {
  0: 'gap-0',
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
  5: 'gap-5',
  6: 'gap-6',
  8: 'gap-8',
  10: 'gap-10',
  12: 'gap-12',
  16: 'gap-16',
  20: 'gap-20',
  24: 'gap-24',
};

/**
 * Wrapping cluster of items - perfect for tags, badges, buttons
 */
export const Cluster = forwardRef<HTMLDivElement, ClusterProps>(
  ({ className, gap = 4, align = 'center', justify = 'start', children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex flex-wrap',
          alignClasses[align],
          justifyClasses[justify],
          gapClasses[gap],
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Cluster.displayName = 'Cluster';


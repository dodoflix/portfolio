'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type StackDirection = 'horizontal' | 'vertical';
export type StackAlign = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
export type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
export type StackGap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 16 | 20 | 24;

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  /** Stack direction */
  direction?: StackDirection;
  /** Align items */
  align?: StackAlign;
  /** Justify content */
  justify?: StackJustify;
  /** Gap between items (tailwind scale) */
  gap?: StackGap;
  /** Allow wrapping */
  wrap?: boolean;
  /** Reverse order */
  reverse?: boolean;
  /** HTML element to render */
  as?: 'div' | 'section' | 'article' | 'nav' | 'aside' | 'main' | 'header' | 'footer';
}

const directionClasses: Record<StackDirection, string> = {
  horizontal: 'flex-row',
  vertical: 'flex-col',
};

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
 * Flexible stack layout component - the foundation for composing layouts
 */
export const Stack = forwardRef<HTMLDivElement, StackProps>(
  (
    {
      className,
      direction = 'vertical',
      align = 'stretch',
      justify = 'start',
      gap = 4,
      wrap = false,
      reverse = false,
      as: Component = 'div',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'flex',
          directionClasses[direction],
          reverse && (direction === 'horizontal' ? 'flex-row-reverse' : 'flex-col-reverse'),
          alignClasses[align],
          justifyClasses[justify],
          gapClasses[gap],
          wrap && 'flex-wrap',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Stack.displayName = 'Stack';

/**
 * Horizontal stack shorthand
 */
export const HStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="horizontal" {...props} />
);
HStack.displayName = 'HStack';

/**
 * Vertical stack shorthand
 */
export const VStack = forwardRef<HTMLDivElement, Omit<StackProps, 'direction'>>(
  (props, ref) => <Stack ref={ref} direction="vertical" {...props} />
);
VStack.displayName = 'VStack';


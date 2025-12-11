'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type LineDirection = 'horizontal' | 'vertical';
export type LineLength = 'xs' | 'sm' | 'md' | 'lg' | 'full';

export interface AnimatedLineProps extends HTMLAttributes<HTMLDivElement> {
  /** Line direction */
  direction?: LineDirection;
  /** Line length */
  length?: LineLength;
  /** Animate on hover of parent */
  hoverExpand?: boolean;
  /** Initial vs expanded length for hover animation */
  expandFrom?: LineLength;
  /** Line thickness */
  thickness?: 'thin' | 'normal' | 'thick';
}

const horizontalLengthClasses: Record<LineLength, string> = {
  xs: 'w-2',
  sm: 'w-4',
  md: 'w-8',
  lg: 'w-16',
  full: 'w-full',
};

const verticalLengthClasses: Record<LineLength, string> = {
  xs: 'h-2',
  sm: 'h-4',
  md: 'h-8',
  lg: 'h-16',
  full: 'h-full',
};

const thicknessClasses: Record<string, Record<LineDirection, string>> = {
  thin: { horizontal: 'h-px', vertical: 'w-px' },
  normal: { horizontal: 'h-0.5', vertical: 'w-0.5' },
  thick: { horizontal: 'h-1', vertical: 'w-1' },
};

/**
 * Animated decorative line element
 */
export const AnimatedLine = forwardRef<HTMLDivElement, AnimatedLineProps>(
  (
    {
      className,
      direction = 'horizontal',
      length = 'md',
      hoverExpand = false,
      expandFrom = 'sm',
      thickness = 'normal',
      ...props
    },
    ref
  ) => {
    const lengthClasses = direction === 'horizontal' ? horizontalLengthClasses : verticalLengthClasses;
    const baseLengthClass = hoverExpand ? lengthClasses[expandFrom] : lengthClasses[length];
    const hoverLengthClass = hoverExpand 
      ? `group-hover:${direction === 'horizontal' ? 'w' : 'h'}-${length === 'lg' ? '16' : length === 'md' ? '8' : '4'}` 
      : '';

    return (
      <div
        ref={ref}
        className={cn(
          'bg-current transition-all duration-300',
          thicknessClasses[thickness][direction],
          baseLengthClass,
          hoverExpand && 'group-hover:w-8',
          className
        )}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

AnimatedLine.displayName = 'AnimatedLine';


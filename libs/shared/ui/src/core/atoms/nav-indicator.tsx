'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type IndicatorVariant = 'line' | 'dot' | 'bar';
export type IndicatorPosition = 'left' | 'right' | 'top' | 'bottom';

export interface NavIndicatorProps extends HTMLAttributes<HTMLSpanElement> {
  /** Whether this indicator is active */
  active?: boolean;
  /** Visual variant */
  variant?: IndicatorVariant;
  /** Position relative to content */
  position?: IndicatorPosition;
  /** Inactive size (for line variant) */
  inactiveSize?: number;
  /** Active size (for line variant) */
  activeSize?: number;
}

const variantStyles: Record<IndicatorVariant, { base: string; active: string; inactive: string }> = {
  line: {
    base: 'bg-current transition-all duration-300',
    active: '',
    inactive: '',
  },
  dot: {
    base: 'rounded-full bg-current transition-all duration-300',
    active: 'h-2.5 w-2.5 opacity-100',
    inactive: 'h-2 w-2 opacity-50',
  },
  bar: {
    base: 'rounded-full bg-current transition-all duration-300',
    active: 'opacity-100',
    inactive: 'opacity-30',
  },
};

/**
 * Navigation indicator element (line, dot, or bar)
 */
export const NavIndicator = forwardRef<HTMLSpanElement, NavIndicatorProps>(
  (
    {
      className,
      active = false,
      variant = 'line',
      position = 'left',
      inactiveSize = 16,
      activeSize = 32,
      style,
      ...props
    },
    ref
  ) => {
    const isHorizontal = position === 'left' || position === 'right';
    const size = active ? activeSize : inactiveSize;

    const dynamicStyles = variant === 'line' ? {
      [isHorizontal ? 'width' : 'height']: size,
      [isHorizontal ? 'height' : 'width']: 1,
    } : variant === 'bar' ? {
      [isHorizontal ? 'width' : 'height']: size,
      [isHorizontal ? 'height' : 'width']: 4,
    } : {};

    return (
      <span
        ref={ref}
        className={cn(
          variantStyles[variant].base,
          active ? variantStyles[variant].active : variantStyles[variant].inactive,
          className
        )}
        style={{ ...dynamicStyles, ...style }}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

NavIndicator.displayName = 'NavIndicator';


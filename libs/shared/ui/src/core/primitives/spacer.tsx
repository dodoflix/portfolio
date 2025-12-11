'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type SpacerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export interface SpacerProps extends HTMLAttributes<HTMLDivElement> {
  /** Size of the space */
  size?: SpacerSize;
  /** Direction of space (for flex containers) */
  axis?: 'horizontal' | 'vertical' | 'both';
}

const sizeClasses: Record<SpacerSize, { vertical: string; horizontal: string; both: string }> = {
  xs: { vertical: 'h-2', horizontal: 'w-2', both: 'h-2 w-2' },
  sm: { vertical: 'h-4', horizontal: 'w-4', both: 'h-4 w-4' },
  md: { vertical: 'h-8', horizontal: 'w-8', both: 'h-8 w-8' },
  lg: { vertical: 'h-12', horizontal: 'w-12', both: 'h-12 w-12' },
  xl: { vertical: 'h-16', horizontal: 'w-16', both: 'h-16 w-16' },
  '2xl': { vertical: 'h-24', horizontal: 'w-24', both: 'h-24 w-24' },
  '3xl': { vertical: 'h-32', horizontal: 'w-32', both: 'h-32 w-32' },
};

/**
 * Explicit spacing component
 */
export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = 'md', axis = 'vertical', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(sizeClasses[size][axis], className)}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

Spacer.displayName = 'Spacer';

/**
 * Flexible spacer that grows to fill available space
 */
export const FlexSpacer = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex-1', className)} aria-hidden="true" {...props} />
  )
);

FlexSpacer.displayName = 'FlexSpacer';


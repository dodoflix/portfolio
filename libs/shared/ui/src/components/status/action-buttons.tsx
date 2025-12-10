'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface ActionButtonsProps extends HTMLAttributes<HTMLDivElement> {
  /** Button elements */
  children: ReactNode;
}

/**
 * Action buttons container for status pages
 */
export const ActionButtons = forwardRef<HTMLDivElement, ActionButtonsProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex gap-4', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

ActionButtons.displayName = 'ActionButtons';


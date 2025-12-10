import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface TechBadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** Interactive hover effect */
  interactive?: boolean;
}

/**
 * Tech stack badge component
 */
export const TechBadge = forwardRef<HTMLDivElement, TechBadgeProps>(
  ({ className, interactive = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border bg-card px-4 py-2 text-sm font-medium',
          interactive && 'transition-colors hover:bg-primary hover:text-primary-foreground',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TechBadge.displayName = 'TechBadge';


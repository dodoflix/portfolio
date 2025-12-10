import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface PageLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Add min-height screen */
  fullHeight?: boolean;
}

/**
 * Page layout wrapper component
 */
export const PageLayout = forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ className, fullHeight = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('bg-background', fullHeight && 'min-h-screen', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

PageLayout.displayName = 'PageLayout';


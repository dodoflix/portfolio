import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface CenteredLayoutProps extends HTMLAttributes<HTMLDivElement> {
  /** Content in top-right corner */
  topRight?: ReactNode;
  /** Content in bottom center */
  footer?: ReactNode;
}

/**
 * Centered layout for status pages (404, error, offline, etc.)
 */
export const CenteredLayout = forwardRef<HTMLDivElement, CenteredLayoutProps>(
  ({ className, topRight, footer, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'relative flex min-h-screen flex-col items-center justify-center bg-background',
          className
        )}
        {...props}
      >
        {topRight && (
          <div className="absolute right-6 top-6 flex items-center gap-2">
            {topRight}
          </div>
        )}

        <div className="flex flex-col items-center gap-8 px-4 text-center">
          {children}
        </div>

        {footer && (
          <div className="absolute bottom-6 text-sm text-muted-foreground">
            {footer}
          </div>
        )}
      </div>
    );
  }
);

CenteredLayout.displayName = 'CenteredLayout';


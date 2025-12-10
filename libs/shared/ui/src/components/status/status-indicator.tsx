import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface StatusIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Status variant */
  variant?: 'online' | 'offline' | 'busy' | 'away';
  /** Label text */
  label?: string;
  /** Show animation */
  animate?: boolean;
}

const dotColorClasses = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  busy: 'bg-red-500',
  away: 'bg-amber-500',
};

const pingColorClasses = {
  online: 'bg-green-400',
  offline: 'bg-gray-400',
  busy: 'bg-red-400',
  away: 'bg-amber-400',
};

/**
 * Status indicator with animated dot
 */
export const StatusIndicator = forwardRef<HTMLDivElement, StatusIndicatorProps>(
  ({ className, variant = 'online', label, animate = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center gap-2 rounded-full bg-muted px-4 py-2',
          className
        )}
        {...props}
      >
        <span className="relative flex h-3 w-3">
          {animate && (
            <span
              className={cn(
                'absolute inline-flex h-full w-full animate-ping rounded-full opacity-75',
                pingColorClasses[variant]
              )}
            />
          )}
          <span
            className={cn(
              'relative inline-flex h-3 w-3 rounded-full',
              dotColorClasses[variant]
            )}
          />
        </span>
        {label && (
          <span className="text-sm font-medium text-muted-foreground">
            {label}
          </span>
        )}
      </div>
    );
  }
);

StatusIndicator.displayName = 'StatusIndicator';


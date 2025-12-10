import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface StatusIconProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon variant for styling */
  variant?: 'default' | 'error' | 'warning' | 'success' | 'info';
  /** Size of the icon container */
  size?: 'sm' | 'md' | 'lg';
  /** Show animated pulse effect */
  pulse?: boolean;
  /** Icon content */
  children: ReactNode;
}

const variantClasses = {
  default: 'bg-muted text-muted-foreground',
  error: 'bg-destructive/10 text-destructive',
  warning: 'bg-amber-500/10 text-amber-500',
  success: 'bg-green-500/10 text-green-500',
  info: 'bg-primary/10 text-primary',
};

const sizeClasses = {
  sm: 'h-16 w-16',
  md: 'h-24 w-24',
  lg: 'h-32 w-32',
};

const iconSizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-12 w-12',
  lg: 'h-16 w-16',
};

const pulseColorClasses = {
  default: 'bg-muted/20',
  error: 'bg-destructive/20',
  warning: 'bg-amber-500/20',
  success: 'bg-green-500/20',
  info: 'bg-primary/20',
};

/**
 * Status icon component for status pages
 */
export const StatusIcon = forwardRef<HTMLDivElement, StatusIconProps>(
  ({ className, variant = 'default', size = 'md', pulse = false, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative', className)} {...props}>
        <div
          className={cn(
            'flex items-center justify-center rounded-full',
            sizeClasses[size],
            variantClasses[variant]
          )}
        >
          <div className={iconSizeClasses[size]}>{children}</div>
        </div>
        {pulse && (
          <div
            className={cn(
              'absolute inset-0 animate-ping rounded-full',
              pulseColorClasses[variant]
            )}
          />
        )}
      </div>
    );
  }
);

StatusIcon.displayName = 'StatusIcon';


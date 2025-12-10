import { forwardRef, AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Is this the active link */
  active?: boolean;
  /** Size variant */
  size?: 'sm' | 'base' | 'lg';
}

const sizeClasses = {
  sm: 'text-xs',
  base: 'text-sm',
  lg: 'text-base',
};

/**
 * Navigation link component
 */
export const NavLink = forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ className, active = false, size = 'base', children, ...props }, ref) => {
    return (
      <a
        ref={ref}
        className={cn(
          sizeClasses[size],
          'transition-colors hover:text-foreground',
          active ? 'text-foreground font-medium' : 'text-muted-foreground',
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

NavLink.displayName = 'NavLink';


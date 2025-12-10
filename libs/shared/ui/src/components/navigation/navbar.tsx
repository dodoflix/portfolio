'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Logo/Brand element */
  logo?: ReactNode;
  /** Right side actions */
  actions?: ReactNode;
  /** Make navbar fixed */
  fixed?: boolean;
  /** Add blur effect to background */
  blur?: boolean;
  /** Show bottom border */
  bordered?: boolean;
}

/**
 * Navbar component for site navigation
 */
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo,
      actions,
      fixed = true,
      blur = true,
      bordered = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'top-0 z-50 w-full bg-background/80',
          fixed && 'fixed',
          blur && 'backdrop-blur-md',
          bordered && 'border-b',
          className
        )}
        {...props}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {logo}
          <div className="flex items-center gap-6">
            <div className="hidden items-center gap-6 sm:flex">{children}</div>
            {actions}
          </div>
        </div>
      </nav>
    );
  }
);

Navbar.displayName = 'Navbar';


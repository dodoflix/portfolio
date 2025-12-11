'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface SideNavLink {
  /** Link href */
  href: string;
  /** Link label */
  label: string;
  /** Is this link active */
  active?: boolean;
}

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  /** Navigation links */
  links: SideNavLink[];
  /** Position on screen */
  position?: 'left' | 'right';
}

/**
 * Vertical side navigation component - displays links in a vertical breadcrumb style
 */
export const SideNav = forwardRef<HTMLElement, SideNavProps>(
  ({ className, links, position = 'left', ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          'fixed top-1/2 z-40 hidden -translate-y-1/2 lg:block',
          position === 'left' ? 'left-6' : 'right-6',
          className
        )}
        {...props}
      >
        <div
          className={cn(
            'flex flex-col gap-4',
            position === 'left' ? 'items-start' : 'items-end'
          )}
        >
          <div className="h-12 w-px bg-border" />
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'group flex items-center gap-3 text-sm transition-colors hover:text-foreground',
                link.active
                  ? 'text-foreground font-medium'
                  : 'text-muted-foreground',
                position === 'right' && 'flex-row-reverse'
              )}
            >
              <span className="h-px w-4 bg-current transition-all group-hover:w-8" />
              <span
                className="rotate-180"
                style={{ writingMode: 'vertical-rl' }}
              >
                {link.label}
              </span>
            </a>
          ))}
          <div className="h-12 w-px bg-border" />
        </div>
      </nav>
    );
  }
);

SideNav.displayName = 'SideNav';


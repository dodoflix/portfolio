'use client';

import { forwardRef, HTMLAttributes, useState, useEffect } from 'react';
import { cn } from '../../lib/utils';

export interface SideNavLink {
  /** Link href */
  href: string;
  /** Link label */
  label: string;
}

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  /** Navigation links */
  links: SideNavLink[];
  /** Position on screen */
  position?: 'left' | 'right';
}

/**
 * Vertical side navigation component - displays links in a vertical breadcrumb style
 * Automatically highlights the active section based on scroll position
 */
export const SideNav = forwardRef<HTMLElement, SideNavProps>(
  ({ className, links, position = 'left', ...props }, ref) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
      const handleScroll = () => {
        const sectionIds = links
          .map((link) => link.href.replace('#', ''))
          .filter(Boolean);

        // Find the section that is currently in view
        // We check which section's top is closest to (but above) 40% of viewport height
        const viewportHeight = window.innerHeight;
        const triggerPoint = viewportHeight * 0.4;

        let currentActiveId = '';
        let closestDistance = Infinity;

        for (const id of sectionIds) {
          const element = document.getElementById(id);
          if (element) {
            const rect = element.getBoundingClientRect();
            // Section is considered "active" if its top has scrolled past the trigger point
            // We pick the one closest to the trigger point (most recently scrolled into view)
            if (rect.top <= triggerPoint) {
              const distance = triggerPoint - rect.top;
              if (distance < closestDistance) {
                closestDistance = distance;
                currentActiveId = id;
              }
            }
          }
        }

        // If no section found (at very top), activate the first one if it's visible
        if (!currentActiveId && sectionIds.length > 0) {
          const firstElement = document.getElementById(sectionIds[0]);
          if (firstElement) {
            const rect = firstElement.getBoundingClientRect();
            if (rect.top < viewportHeight) {
              currentActiveId = sectionIds[0];
            }
          }
        }

        setActiveId(currentActiveId);
      };

      // Initial check
      handleScroll();

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }, [links]);

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
          {links.map((link) => {
            const isActive = activeId === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  'group flex items-center gap-3 text-sm transition-colors hover:text-foreground',
                  isActive
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground',
                  position === 'right' && 'flex-row-reverse'
                )}
              >
                <span
                  className={cn(
                    'h-px bg-current transition-all group-hover:w-8',
                    isActive ? 'w-8' : 'w-4'
                  )}
                />
                <span
                  className="rotate-180"
                  style={{ writingMode: 'vertical-rl' }}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
          <div className="h-12 w-px bg-border" />
        </div>
      </nav>
    );
  }
);

SideNav.displayName = 'SideNav';


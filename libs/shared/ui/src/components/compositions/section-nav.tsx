'use client';

/**
 * COMPOSITION EXAMPLE: Section Navigation
 * 
 * Shows how to build a scroll-aware side navigation using atomic components.
 * 
 * @example Basic usage
 * ```tsx
 * const sections = [
 *   { id: 'about', label: 'About' },
 *   { id: 'work', label: 'Work' },
 *   { id: 'contact', label: 'Contact' },
 * ];
 * 
 * function Page() {
 *   const { activeId, scrollTo } = useScrollSpy({ 
 *     sectionIds: sections.map(s => s.id) 
 *   });
 *   
 *   return (
 *     <>
 *       <SectionNav 
 *         sections={sections} 
 *         activeId={activeId} 
 *         onSelect={scrollTo} 
 *       />
 *       <main>
 *         <section id="about">...</section>
 *         <section id="work">...</section>
 *         <section id="contact">...</section>
 *       </main>
 *     </>
 *   );
 * }
 * ```
 */

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { VStack } from '../../core/primitives/stack';
import { VerticalText } from '../../core/atoms/vertical-text';
import { NavIndicator } from '../../core/atoms/nav-indicator';
import { AnimatedLine } from '../../core/decorative/animated-line';

export interface SectionNavItem {
  id: string;
  label: string;
}

export interface SectionNavProps extends HTMLAttributes<HTMLElement> {
  /** Navigation sections */
  sections: SectionNavItem[];
  /** Currently active section ID */
  activeId?: string;
  /** Position on screen */
  position?: 'left' | 'right';
  /** Callback when section is selected */
  onSelect?: (id: string) => void;
}

/**
 * Pre-composed Section Navigation using micro components
 */
export const SectionNav = forwardRef<HTMLElement, SectionNavProps>(
  (
    {
      className,
      sections,
      activeId,
      position = 'left',
      onSelect,
      ...props
    },
    ref
  ) => {
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
        <VStack 
          gap={4} 
          align={position === 'left' ? 'start' : 'end'}
        >
          {/* Top decorative line */}
          <AnimatedLine direction="vertical" length="lg" />
          
          {/* Navigation items */}
          {sections.map((section) => {
            const isActive = activeId === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => onSelect?.(section.id)}
                className={cn(
                  'group flex items-center gap-3 text-sm transition-colors hover:text-foreground',
                  isActive ? 'text-foreground font-medium' : 'text-muted-foreground',
                  position === 'right' && 'flex-row-reverse'
                )}
              >
                <NavIndicator 
                  active={isActive} 
                  variant="line" 
                  position={position}
                />
                <VerticalText text={section.label} direction="up" />
              </button>
            );
          })}
          
          {/* Bottom decorative line */}
          <AnimatedLine direction="vertical" length="lg" />
        </VStack>
      </nav>
    );
  }
);

SectionNav.displayName = 'SectionNav';


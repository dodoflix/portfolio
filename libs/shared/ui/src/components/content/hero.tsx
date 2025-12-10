'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface HeroProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  /** Badge element */
  badge?: ReactNode;
  /** Main title */
  title: ReactNode;
  /** Subtitle or dynamic text */
  subtitle?: ReactNode;
  /** Description text */
  description?: string;
  /** CTA buttons */
  actions?: ReactNode;
  /** Show scroll indicator */
  showScrollIndicator?: boolean;
  /** Show background gradient */
  showBackground?: boolean;
}

/**
 * Hero section component
 */
export const Hero = forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      badge,
      title,
      subtitle,
      description,
      actions,
      showScrollIndicator = true,
      showBackground = true,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(
          'relative flex min-h-screen items-center justify-center overflow-hidden pt-16',
          className
        )}
        {...props}
      >
        {/* Background gradient */}
        {showBackground && (
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
          </div>
        )}

        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
          <div className="space-y-6">
            {badge}

            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              {title}
            </h1>

            {subtitle && (
              <div className="h-12 text-xl text-muted-foreground sm:text-2xl">
                {subtitle}
              </div>
            )}

            {description && (
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                {description}
              </p>
            )}

            {actions && (
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                {actions}
              </div>
            )}

            {children}
          </div>

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
              <svg
                className="h-6 w-6 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          )}
        </div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';


import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  /** Heading level (h1-h6) */
  as?: HeadingLevel;
  /** Visual size variant (can differ from semantic level) */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  /** Apply gradient effect */
  gradient?: boolean;
}

const sizeClasses = {
  xs: 'text-lg font-semibold tracking-tight',
  sm: 'text-xl font-semibold tracking-tight',
  md: 'text-2xl font-bold tracking-tight',
  lg: 'text-3xl font-bold tracking-tight sm:text-4xl',
  xl: 'text-4xl font-bold tracking-tight sm:text-5xl',
  '2xl': 'text-5xl font-bold tracking-tight sm:text-6xl',
  '3xl': 'text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl',
  '4xl': 'text-6xl font-bold tracking-tight sm:text-8xl lg:text-9xl',
};

const defaultSizeForLevel: Record<HeadingLevel, keyof typeof sizeClasses> = {
  h1: '3xl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm',
  h6: 'xs',
};

/**
 * Heading component for consistent typography
 */
export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, as = 'h2', size, gradient = false, children, ...props }, ref) => {
    const Component = as;
    const sizeClass = size ? sizeClasses[size] : sizeClasses[defaultSizeForLevel[as]];

    return (
      <Component
        ref={ref}
        className={cn(
          sizeClass,
          gradient &&
            'bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Heading.displayName = 'Heading';


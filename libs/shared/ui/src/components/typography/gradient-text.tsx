import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface GradientTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Gradient direction */
  direction?: 'left' | 'right' | 'top' | 'bottom';
  /** Gradient color scheme */
  variant?: 'primary' | 'secondary' | 'accent' | 'rainbow';
}

const directionClasses = {
  left: 'bg-gradient-to-l',
  right: 'bg-gradient-to-r',
  top: 'bg-gradient-to-t',
  bottom: 'bg-gradient-to-b',
};

const variantClasses = {
  primary: 'from-primary via-primary/80 to-primary/60',
  secondary: 'from-secondary-foreground via-muted-foreground to-muted-foreground/60',
  accent: 'from-accent-foreground via-primary to-primary/60',
  rainbow: 'from-red-500 via-yellow-500 to-blue-500',
};

/**
 * Gradient text component for stylized text
 */
export const GradientText = forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, direction = 'right', variant = 'primary', children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'bg-clip-text text-transparent',
          directionClasses[direction],
          variantClasses[variant],
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

GradientText.displayName = 'GradientText';


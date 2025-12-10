import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  /** Size variant */
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  /** Color variant */
  variant?: 'default' | 'muted' | 'primary' | 'destructive';
  /** Font weight */
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  /** Render as span instead of p */
  as?: 'p' | 'span' | 'div';
  /** Apply leading (line height) */
  leading?: 'none' | 'tight' | 'normal' | 'relaxed';
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const variantClasses = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  primary: 'text-primary',
  destructive: 'text-destructive',
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const leadingClasses = {
  none: 'leading-none',
  tight: 'leading-tight',
  normal: 'leading-normal',
  relaxed: 'leading-relaxed',
};

/**
 * Text component for consistent typography
 */
export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  (
    {
      className,
      size = 'base',
      variant = 'default',
      weight = 'normal',
      as = 'p',
      leading = 'normal',
      children,
      ...props
    },
    ref
  ) => {
    const Component = as;

    return (
      <Component
        ref={ref as React.Ref<HTMLParagraphElement>}
        className={cn(
          sizeClasses[size],
          variantClasses[variant],
          weightClasses[weight],
          leadingClasses[leading],
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';


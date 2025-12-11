'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type IconBoxSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconBoxVariant = 'default' | 'outline' | 'ghost' | 'gradient';
export type IconBoxShape = 'square' | 'rounded' | 'circle';

export interface IconBoxProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon or emoji content */
  icon: ReactNode;
  /** Size variant */
  size?: IconBoxSize;
  /** Visual variant */
  variant?: IconBoxVariant;
  /** Shape variant */
  shape?: IconBoxShape;
  /** Hover scale effect */
  hoverScale?: boolean;
}

const sizeClasses: Record<IconBoxSize, string> = {
  xs: 'h-8 w-8 text-base',
  sm: 'h-10 w-10 text-lg',
  md: 'h-12 w-12 text-xl',
  lg: 'h-16 w-16 text-3xl',
  xl: 'h-20 w-20 text-4xl',
};

const variantClasses: Record<IconBoxVariant, string> = {
  default: 'bg-primary/10 text-primary',
  outline: 'border-2 border-primary/20 text-primary',
  ghost: 'bg-transparent text-foreground',
  gradient: 'bg-gradient-to-br from-primary/20 to-primary/5 text-primary',
};

const shapeClasses: Record<IconBoxShape, string> = {
  square: 'rounded-lg',
  rounded: 'rounded-xl',
  circle: 'rounded-full',
};

/**
 * Container box for icons or emojis
 */
export const IconBox = forwardRef<HTMLDivElement, IconBoxProps>(
  (
    {
      className,
      icon,
      size = 'md',
      variant = 'default',
      shape = 'rounded',
      hoverScale = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex items-center justify-center transition-transform',
          sizeClasses[size],
          variantClasses[variant],
          shapeClasses[shape],
          hoverScale && 'hover:scale-110 group-hover:scale-110',
          className
        )}
        {...props}
      >
        {icon}
      </div>
    );
  }
);

IconBox.displayName = 'IconBox';


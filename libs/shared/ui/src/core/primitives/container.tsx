'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type ContainerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum width variant */
  size?: ContainerSize;
  /** Add horizontal padding */
  padded?: boolean;
  /** Center the container */
  centered?: boolean;
}

const sizeClasses: Record<ContainerSize, string> = {
  xs: 'max-w-xl',
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  '2xl': 'max-w-screen-2xl',
  full: 'max-w-full',
};

/**
 * Container component for constraining content width
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', padded = true, centered = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'w-full',
          sizeClasses[size],
          centered && 'mx-auto',
          padded && 'px-4 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = 'Container';


import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /** Maximum width variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  /** Add horizontal padding */
  padded?: boolean;
}

const sizeClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

/**
 * Container component for constraining content width
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ className, size = 'lg', padded = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full',
          sizeClasses[size],
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


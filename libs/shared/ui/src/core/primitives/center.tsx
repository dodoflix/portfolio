'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface CenterProps extends HTMLAttributes<HTMLDivElement> {
  /** Center inline (horizontally) */
  inline?: boolean;
  /** HTML element to render */
  as?: 'div' | 'section' | 'main';
}

/**
 * Simple centering component
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(
  ({ className, inline = false, as: Component = 'div', children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'flex items-center',
          inline ? 'justify-start' : 'justify-center',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Center.displayName = 'Center';

/**
 * Full-screen centered container
 */
export const FullCenter = forwardRef<HTMLDivElement, CenterProps>(
  ({ className, ...props }, ref) => (
    <Center
      ref={ref}
      className={cn('min-h-screen', className)}
      {...props}
    />
  )
);

FullCenter.displayName = 'FullCenter';


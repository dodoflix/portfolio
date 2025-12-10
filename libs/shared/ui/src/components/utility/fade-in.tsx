'use client';

import { forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

export interface FadeInProps extends HTMLAttributes<HTMLDivElement> {
  /** Animation delay in ms */
  delay?: number;
  /** Animation duration in ms */
  duration?: number;
  /** Animation direction */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
}

const directionClasses = {
  up: 'translate-y-10',
  down: '-translate-y-10',
  left: 'translate-x-10',
  right: '-translate-x-10',
  none: '',
};

/**
 * Fade-in animation wrapper
 */
export const FadeIn = forwardRef<HTMLDivElement, FadeInProps>(
  ({ className, delay = 0, duration = 1000, direction = 'up', children, ...props }, ref) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => setVisible(true), delay);
      return () => clearTimeout(timer);
    }, [delay]);

    return (
      <div
        ref={ref}
        className={cn(
          'transition-all',
          !visible && `opacity-0 ${directionClasses[direction]}`,
          visible && 'translate-y-0 translate-x-0 opacity-100',
          className
        )}
        style={{ transitionDuration: `${duration}ms` }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

FadeIn.displayName = 'FadeIn';


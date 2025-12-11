'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type VerticalTextDirection = 'up' | 'down';

export interface VerticalTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** Text content */
  text: string;
  /** Reading direction */
  direction?: VerticalTextDirection;
}

/**
 * Vertically oriented text
 */
export const VerticalText = forwardRef<HTMLSpanElement, VerticalTextProps>(
  ({ className, text, direction = 'up', style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn('inline-block', className)}
        style={{
          writingMode: 'vertical-rl',
          transform: direction === 'up' ? 'rotate(180deg)' : undefined,
          ...style,
        }}
        {...props}
      >
        {text}
      </span>
    );
  }
);

VerticalText.displayName = 'VerticalText';


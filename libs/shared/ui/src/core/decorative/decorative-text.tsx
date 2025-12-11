'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type DecorativeTextSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl';

export interface DecorativeTextProps extends HTMLAttributes<HTMLSpanElement> {
  /** The text to display */
  text: string;
  /** Size variant */
  size?: DecorativeTextSize;
  /** Stroke only (outline) effect */
  stroke?: boolean;
  /** Custom opacity (1-100) */
  opacity?: number;
}

const sizeClasses: Record<DecorativeTextSize, string> = {
  sm: 'text-[6rem] sm:text-[8rem]',
  md: 'text-[8rem] sm:text-[10rem]',
  lg: 'text-[10rem] sm:text-[14rem]',
  xl: 'text-[12rem] sm:text-[16rem]',
  '2xl': 'text-[16rem] sm:text-[20rem]',
};

/**
 * Large decorative background text (like 404, coming soon, etc.)
 */
export const DecorativeText = forwardRef<HTMLSpanElement, DecorativeTextProps>(
  ({ className, text, size = 'lg', stroke = false, opacity = 10, style, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          'select-none font-bold leading-none tracking-tighter',
          sizeClasses[size],
          stroke 
            ? 'text-transparent [-webkit-text-stroke:2px_currentColor] text-muted-foreground' 
            : 'text-muted-foreground',
          className
        )}
        style={{ opacity: opacity / 100, ...style }}
        aria-hidden="true"
        {...props}
      >
        {text}
      </span>
    );
  }
);

DecorativeText.displayName = 'DecorativeText';


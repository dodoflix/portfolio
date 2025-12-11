'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type BlobPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'top-center' | 'bottom-center';
export type BlobSize = 'sm' | 'md' | 'lg' | 'xl';
export type BlobColor = 'primary' | 'secondary' | 'accent' | 'muted';

export interface GradientBlobProps extends HTMLAttributes<HTMLDivElement> {
  /** Position of the blob */
  position?: BlobPosition;
  /** Size of the blob */
  size?: BlobSize;
  /** Color variant */
  color?: BlobColor;
  /** Opacity level (1-20) */
  opacity?: number;
  /** Blur intensity */
  blur?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** Enable pulse animation */
  animate?: boolean;
}

const positionClasses: Record<BlobPosition, string> = {
  'top-left': 'left-0 top-0 -translate-x-1/4 -translate-y-1/4',
  'top-right': 'right-0 top-0 translate-x-1/4 -translate-y-1/4',
  'bottom-left': 'left-0 bottom-0 -translate-x-1/4 translate-y-1/4',
  'bottom-right': 'right-0 bottom-0 translate-x-1/4 translate-y-1/4',
  center: 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-center': 'left-1/2 top-0 -translate-x-1/2 -translate-y-1/4',
  'bottom-center': 'left-1/2 bottom-0 -translate-x-1/2 translate-y-1/4',
};

const sizeClasses: Record<BlobSize, string> = {
  sm: 'h-48 w-48',
  md: 'h-72 w-72',
  lg: 'h-96 w-96',
  xl: 'h-[32rem] w-[32rem]',
};

const colorClasses: Record<BlobColor, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  accent: 'bg-accent',
  muted: 'bg-muted',
};

const blurClasses: Record<string, string> = {
  sm: 'blur-xl',
  md: 'blur-2xl',
  lg: 'blur-3xl',
  xl: 'blur-[64px]',
  '2xl': 'blur-[96px]',
  '3xl': 'blur-[128px]',
};

/**
 * Decorative gradient blob for backgrounds
 */
export const GradientBlob = forwardRef<HTMLDivElement, GradientBlobProps>(
  (
    {
      className,
      position = 'center',
      size = 'lg',
      color = 'primary',
      opacity = 10,
      blur = 'lg',
      animate = false,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'pointer-events-none absolute rounded-full',
          positionClasses[position],
          sizeClasses[size],
          colorClasses[color],
          blurClasses[blur],
          animate && 'animate-pulse',
          className
        )}
        style={{ opacity: opacity / 100, ...style }}
        aria-hidden="true"
        {...props}
      />
    );
  }
);

GradientBlob.displayName = 'GradientBlob';


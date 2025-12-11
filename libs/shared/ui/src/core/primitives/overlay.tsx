'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type OverlayPosition = 'fill' | 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export interface OverlayProps extends HTMLAttributes<HTMLDivElement> {
  /** Position of the overlay content */
  position?: OverlayPosition;
  /** Z-index layer */
  zIndex?: number;
}

const positionClasses: Record<OverlayPosition, string> = {
  fill: 'inset-0',
  center: 'inset-0 flex items-center justify-center',
  top: 'inset-x-0 top-0',
  bottom: 'inset-x-0 bottom-0',
  left: 'inset-y-0 left-0',
  right: 'inset-y-0 right-0',
  'top-left': 'top-0 left-0',
  'top-right': 'top-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'bottom-right': 'bottom-0 right-0',
};

/**
 * Overlay positioning component - places content absolutely over parent
 */
export const Overlay = forwardRef<HTMLDivElement, OverlayProps>(
  ({ className, position = 'fill', zIndex, style, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('absolute', positionClasses[position], className)}
        style={{ zIndex, ...style }}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Overlay.displayName = 'Overlay';

/**
 * Container that establishes positioning context
 */
export const RelativeBox = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div ref={ref} className={cn('relative', className)} {...props}>
      {children}
    </div>
  )
);

RelativeBox.displayName = 'RelativeBox';


'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export type ScrollIndicatorVariant = 'arrow' | 'chevron' | 'mouse' | 'dot';
export type ScrollIndicatorPosition = 'bottom' | 'bottom-left' | 'bottom-right';

export interface ScrollIndicatorProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual variant */
  variant?: ScrollIndicatorVariant;
  /** Position on screen */
  position?: ScrollIndicatorPosition;
  /** Target section to scroll to */
  targetId?: string;
  /** Show label text */
  label?: string;
  /** Animation type */
  animation?: 'bounce' | 'pulse' | 'none';
}

const positionClasses: Record<ScrollIndicatorPosition, string> = {
  bottom: 'left-1/2 -translate-x-1/2',
  'bottom-left': 'left-8',
  'bottom-right': 'right-8',
};

const ArrowIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
  </svg>
);

const ChevronIcon = () => (
  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MouseIcon = () => (
  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <rect x="7" y="4" width="10" height="16" rx="5" strokeWidth={1.5} />
    <line x1="12" y1="8" x2="12" y2="12" strokeWidth={1.5} strokeLinecap="round" />
  </svg>
);

const DotIcon = () => (
  <div className="flex flex-col gap-1">
    <div className="h-2 w-2 rounded-full bg-current" />
    <div className="h-1.5 w-1.5 rounded-full bg-current opacity-60 mx-auto" />
    <div className="h-1 w-1 rounded-full bg-current opacity-30 mx-auto" />
  </div>
);

const icons: Record<ScrollIndicatorVariant, React.FC> = {
  arrow: ArrowIcon,
  chevron: ChevronIcon,
  mouse: MouseIcon,
  dot: DotIcon,
};

const animationClasses: Record<string, string> = {
  bounce: 'animate-bounce',
  pulse: 'animate-pulse',
  none: '',
};

/**
 * Scroll indicator component - signals users can scroll down
 */
export const ScrollIndicator = forwardRef<HTMLDivElement, ScrollIndicatorProps>(
  (
    {
      className,
      variant = 'arrow',
      position = 'bottom',
      targetId,
      label,
      animation = 'bounce',
      onClick,
      ...props
    },
    ref
  ) => {
    const Icon = icons[variant];
    
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (targetId) {
        const element = document.getElementById(targetId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
      onClick?.(e);
    };

    return (
      <div
        ref={ref}
        className={cn(
          'absolute bottom-8 text-muted-foreground cursor-pointer hover:text-foreground transition-colors',
          positionClasses[position],
          animationClasses[animation],
          className
        )}
        onClick={handleClick}
        role={targetId ? 'button' : undefined}
        tabIndex={targetId ? 0 : undefined}
        {...props}
      >
        <div className="flex flex-col items-center gap-2">
          {label && <span className="text-xs uppercase tracking-wider">{label}</span>}
          <Icon />
        </div>
      </div>
    );
  }
);

ScrollIndicator.displayName = 'ScrollIndicator';


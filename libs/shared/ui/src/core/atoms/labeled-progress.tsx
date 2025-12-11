'use client';

import { forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

export type ProgressSize = 'xs' | 'sm' | 'md' | 'lg';
export type ProgressVariant = 'default' | 'success' | 'warning' | 'error';

export interface LabeledProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Current value (0-100) */
  value: number;
  /** Maximum value */
  max?: number;
  /** Show the label text */
  label?: string;
  /** Show percentage */
  showValue?: boolean;
  /** Value format (percent, fraction, custom) */
  valueFormat?: 'percent' | 'fraction' | ((value: number, max: number) => string);
  /** Size variant */
  size?: ProgressSize;
  /** Color variant */
  variant?: ProgressVariant;
  /** Animate value on mount */
  animate?: boolean;
  /** Animation duration in ms */
  animationDuration?: number;
}

const sizeClasses: Record<ProgressSize, { bar: string; text: string }> = {
  xs: { bar: 'h-1', text: 'text-xs' },
  sm: { bar: 'h-1.5', text: 'text-xs' },
  md: { bar: 'h-2', text: 'text-sm' },
  lg: { bar: 'h-3', text: 'text-sm' },
};

const variantClasses: Record<ProgressVariant, string> = {
  default: 'bg-primary',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  error: 'bg-red-500',
};

/**
 * Progress bar with optional label and value display
 */
export const LabeledProgress = forwardRef<HTMLDivElement, LabeledProgressProps>(
  (
    {
      className,
      value,
      max = 100,
      label,
      showValue = true,
      valueFormat = 'percent',
      size = 'md',
      variant = 'default',
      animate = true,
      animationDuration = 1000,
      ...props
    },
    ref
  ) => {
    const [displayValue, setDisplayValue] = useState(animate ? 0 : value);
    const percentage = Math.min(100, Math.max(0, (value / max) * 100));

    useEffect(() => {
      if (animate) {
        const timer = setTimeout(() => setDisplayValue(percentage), 50);
        return () => clearTimeout(timer);
      } else {
        setDisplayValue(percentage);
      }
    }, [animate, percentage]);

    const formatValue = () => {
      if (typeof valueFormat === 'function') {
        return valueFormat(value, max);
      }
      if (valueFormat === 'fraction') {
        return `${value}/${max}`;
      }
      return `${Math.round(percentage)}%`;
    };

    return (
      <div ref={ref} className={cn('space-y-1.5', className)} {...props}>
        {(label || showValue) && (
          <div className={cn('flex justify-between', sizeClasses[size].text)}>
            {label && <span className="font-medium text-foreground">{label}</span>}
            {showValue && (
              <span className="text-muted-foreground tabular-nums">{formatValue()}</span>
            )}
          </div>
        )}
        <div className={cn('overflow-hidden rounded-full bg-muted', sizeClasses[size].bar)}>
          <div
            className={cn(
              'h-full rounded-full transition-all',
              variantClasses[variant]
            )}
            style={{ 
              width: `${displayValue}%`,
              transitionDuration: animate ? `${animationDuration}ms` : '0ms',
            }}
          />
        </div>
      </div>
    );
  }
);

LabeledProgress.displayName = 'LabeledProgress';


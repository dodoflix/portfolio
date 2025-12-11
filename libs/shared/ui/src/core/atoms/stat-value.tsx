'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export type StatValueSize = 'sm' | 'md' | 'lg' | 'xl';
export type StatValueAlign = 'left' | 'center' | 'right';

export interface StatValueProps extends HTMLAttributes<HTMLDivElement> {
  /** The main value to display */
  value: ReactNode;
  /** Label/description for the value */
  label?: string;
  /** Prefix (like $ or #) */
  prefix?: string;
  /** Suffix (like %, +, K) */
  suffix?: string;
  /** Size variant */
  size?: StatValueSize;
  /** Text alignment */
  align?: StatValueAlign;
  /** Show trend indicator */
  trend?: 'up' | 'down' | 'neutral';
}

const sizeClasses: Record<StatValueSize, { value: string; label: string }> = {
  sm: { value: 'text-lg font-semibold', label: 'text-xs' },
  md: { value: 'text-2xl font-bold', label: 'text-sm' },
  lg: { value: 'text-4xl font-bold', label: 'text-base' },
  xl: { value: 'text-6xl font-bold', label: 'text-lg' },
};

const alignClasses: Record<StatValueAlign, string> = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

const trendColors: Record<string, string> = {
  up: 'text-green-500',
  down: 'text-red-500',
  neutral: 'text-muted-foreground',
};

const TrendIcon = ({ trend }: { trend: 'up' | 'down' | 'neutral' }) => {
  if (trend === 'neutral') return null;
  return (
    <span className={cn('inline-flex', trendColors[trend])}>
      {trend === 'up' ? '↑' : '↓'}
    </span>
  );
};

/**
 * Single statistic value with optional label
 */
export const StatValue = forwardRef<HTMLDivElement, StatValueProps>(
  (
    {
      className,
      value,
      label,
      prefix,
      suffix,
      size = 'md',
      align = 'center',
      trend,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(alignClasses[align], className)}
        {...props}
      >
        <p className={cn(sizeClasses[size].value, 'text-foreground')}>
          {prefix && <span className="text-muted-foreground">{prefix}</span>}
          {value}
          {suffix && <span className="text-muted-foreground">{suffix}</span>}
          {trend && <TrendIcon trend={trend} />}
        </p>
        {label && (
          <p className={cn(sizeClasses[size].label, 'text-muted-foreground mt-1')}>
            {label}
          </p>
        )}
      </div>
    );
  }
);

StatValue.displayName = 'StatValue';


'use client';

/**
 * COMPOSITION EXAMPLE: Stats Grid
 * 
 * Shows how to compose a statistics display using atomic components.
 * 
 * @example Simple stats row
 * ```tsx
 * <HStack gap={8} justify="center">
 *   <StatValue value="10+" label="Years Experience" />
 *   <Separator orientation="vertical" className="h-12" />
 *   <StatValue value="50+" label="Projects Completed" />
 *   <Separator orientation="vertical" className="h-12" />
 *   <StatValue value="99%" label="Client Satisfaction" />
 * </HStack>
 * ```
 * 
 * @example Stats in cards
 * ```tsx
 * <div className="grid grid-cols-3 gap-4">
 *   {stats.map(stat => (
 *     <Card key={stat.label}>
 *       <CardContent className="pt-6">
 *         <StatValue 
 *           value={stat.value} 
 *           label={stat.label}
 *           prefix={stat.prefix}
 *           suffix={stat.suffix}
 *           size="lg"
 *         />
 *       </CardContent>
 *     </Card>
 *   ))}
 * </div>
 * ```
 */

import { forwardRef, Fragment, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { HStack } from '../../core/primitives/stack';
import { Cluster } from '../../core/primitives/cluster';
import { StatValue, StatValueSize } from '../../core/atoms/stat-value';
import { Separator } from '../../core/ui/separator';
import { Card, CardContent } from '../../core/ui/card';

export interface StatItem {
  value: ReactNode;
  label: string;
  prefix?: string;
  suffix?: string;
  trend?: 'up' | 'down' | 'neutral';
}

export interface StatsGridProps extends HTMLAttributes<HTMLDivElement> {
  /** Stats to display */
  stats: StatItem[];
  /** Layout variant */
  variant?: 'inline' | 'cards' | 'minimal';
  /** Stat size */
  size?: StatValueSize;
  /** Show separators (for inline variant) */
  showSeparators?: boolean;
  /** Number of columns (for cards variant) */
  columns?: 2 | 3 | 4;
}

const columnClasses = {
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
};

/**
 * Pre-composed Stats Grid using micro components
 */
export const StatsGrid = forwardRef<HTMLDivElement, StatsGridProps>(
  (
    {
      className,
      stats,
      variant = 'inline',
      size = 'md',
      showSeparators = true,
      columns = 3,
      ...props
    },
    ref
  ) => {
    if (variant === 'cards') {
      return (
        <div
          ref={ref}
          className={cn('grid gap-4', columnClasses[columns], className)}
          {...props}
        >
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="pt-6">
                <StatValue
                  value={stat.value}
                  label={stat.label}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  trend={stat.trend}
                  size={size}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      );
    }

    if (variant === 'minimal') {
      return (
        <Cluster
          ref={ref}
          gap={8}
          justify="center"
          className={className}
          {...props}
        >
          {stats.map((stat) => (
            <StatValue
              key={stat.label}
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
              trend={stat.trend}
              size={size}
            />
          ))}
        </Cluster>
      );
    }

    // Inline variant with separators
    return (
      <HStack
        ref={ref}
        gap={8}
        justify="center"
        align="center"
        className={className}
        {...props}
      >
        {stats.map((stat, index) => (
          <Fragment key={stat.label}>
            {showSeparators && index > 0 && (
              <Separator orientation="vertical" className="h-12" />
            )}
            <StatValue
              value={stat.value}
              label={stat.label}
              prefix={stat.prefix}
              suffix={stat.suffix}
              trend={stat.trend}
              size={size}
            />
          </Fragment>
        ))}
      </HStack>
    );
  }
);

StatsGrid.displayName = 'StatsGrid';


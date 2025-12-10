'use client';

import { forwardRef, HTMLAttributes, useEffect, useState } from 'react';
import { cn } from '../../lib/utils';

export interface SkillBarProps extends HTMLAttributes<HTMLDivElement> {
  /** Skill name */
  name: string;
  /** Skill level (0-100) */
  level: number;
  /** Show percentage */
  showPercent?: boolean;
  /** Animate on mount */
  animate?: boolean;
}

/**
 * Skill progress bar component
 */
export const SkillBar = forwardRef<HTMLDivElement, SkillBarProps>(
  ({ className, name, level, showPercent = true, animate = true, ...props }, ref) => {
    const [width, setWidth] = useState(animate ? 0 : level);

    useEffect(() => {
      if (animate) {
        const timer = setTimeout(() => setWidth(level), 100);
        return () => clearTimeout(timer);
      }
    }, [animate, level]);

    return (
      <div ref={ref} className={cn('space-y-2', className)} {...props}>
        <div className="flex justify-between text-sm">
          <span className="font-medium">{name}</span>
          {showPercent && (
            <span className="text-muted-foreground">{level}%</span>
          )}
        </div>
        <div className="h-2 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all duration-1000"
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  }
);

SkillBar.displayName = 'SkillBar';


'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';

export type TagSize = 'sm' | 'md' | 'lg';
export type TagVariant = 'default' | 'secondary' | 'outline' | 'destructive';

export interface TagListProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of tag strings or custom render */
  tags: string[] | ReactNode[];
  /** Size of tags */
  size?: TagSize;
  /** Visual variant */
  variant?: TagVariant;
  /** Maximum tags to show (rest shown as +N) */
  maxVisible?: number;
  /** Gap between tags */
  gap?: 1 | 2 | 3 | 4;
}

const sizeClasses: Record<TagSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-xs px-2.5 py-0.5',
  lg: 'text-sm px-3 py-1',
};

const gapClasses: Record<number, string> = {
  1: 'gap-1',
  2: 'gap-2',
  3: 'gap-3',
  4: 'gap-4',
};

/**
 * List of tags/badges with overflow handling
 */
export const TagList = forwardRef<HTMLDivElement, TagListProps>(
  (
    {
      className,
      tags,
      size = 'md',
      variant = 'secondary',
      maxVisible,
      gap = 2,
      ...props
    },
    ref
  ) => {
    const visibleTags = maxVisible ? tags.slice(0, maxVisible) : tags;
    const hiddenCount = maxVisible ? Math.max(0, tags.length - maxVisible) : 0;

    return (
      <div
        ref={ref}
        className={cn('flex flex-wrap', gapClasses[gap], className)}
        {...props}
      >
        {visibleTags.map((tag, index) => (
          typeof tag === 'string' ? (
            <Badge 
              key={index} 
              variant={variant} 
              className={sizeClasses[size]}
            >
              {tag}
            </Badge>
          ) : (
            <span key={index}>{tag}</span>
          )
        ))}
        {hiddenCount > 0 && (
          <Badge variant="outline" className={sizeClasses[size]}>
            +{hiddenCount}
          </Badge>
        )}
      </div>
    );
  }
);

TagList.displayName = 'TagList';


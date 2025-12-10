import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';

export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  /** Badge text above title */
  badge?: string;
  /** Section title */
  title: string;
  /** Section description */
  description?: string;
  /** Alignment */
  align?: 'left' | 'center' | 'right';
  /** Title element (defaults to h2) */
  titleAs?: 'h1' | 'h2' | 'h3';
  /** Additional content after description */
  children?: ReactNode;
}

const alignClasses = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
};

/**
 * Section header with badge, title, and description
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      className,
      badge,
      title,
      description,
      align = 'center',
      titleAs = 'h2',
      children,
      ...props
    },
    ref
  ) => {
    const TitleComponent = titleAs;

    return (
      <div
        ref={ref}
        className={cn('mb-12', alignClasses[align], className)}
        {...props}
      >
        {badge && (
          <Badge variant="secondary" className="mb-4">
            {badge}
          </Badge>
        )}
        <TitleComponent className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </TitleComponent>
        {description && (
          <p className="mt-4 text-lg text-muted-foreground">{description}</p>
        )}
        {children}
      </div>
    );
  }
);

SectionHeader.displayName = 'SectionHeader';


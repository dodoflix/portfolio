'use client';

import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import { Container, ContainerSize } from '../../core/primitives/container';

export type SectionSpacing = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type SectionVariant = 'default' | 'muted' | 'accent' | 'gradient';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Vertical spacing variant */
  spacing?: SectionSpacing;
  /** Background variant */
  variant?: SectionVariant;
  /** Use container inside */
  container?: boolean;
  /** Container size when container is true */
  containerSize?: ContainerSize;
}

const spacingClasses: Record<SectionSpacing, string> = {
  none: '',
  xs: 'py-6',
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-24',
  xl: 'py-32',
  '2xl': 'py-40',
};

const variantClasses: Record<SectionVariant, string> = {
  default: '',
  muted: 'bg-muted/30',
  accent: 'bg-primary/5',
  gradient: 'bg-gradient-to-b from-background to-muted/20',
};

/**
 * Section component - composed from primitives
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      className,
      spacing = 'lg',
      variant = 'default',
      container = true,
      containerSize = 'lg',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn(spacingClasses[spacing], variantClasses[variant], className)}
        {...props}
      >
        {container ? (
          <Container size={containerSize}>{children}</Container>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';

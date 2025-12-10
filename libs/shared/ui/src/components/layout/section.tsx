import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface SectionProps extends HTMLAttributes<HTMLElement> {
  /** Vertical spacing variant */
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  /** Background variant */
  variant?: 'default' | 'muted' | 'accent';
  /** Use container inside */
  container?: boolean;
  /** Container size when container is true */
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const spacingClasses = {
  none: '',
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-24',
  xl: 'py-32',
};

const variantClasses = {
  default: '',
  muted: 'bg-muted/30',
  accent: 'bg-primary/5',
};

const containerSizeClasses = {
  sm: 'max-w-2xl',
  md: 'max-w-4xl',
  lg: 'max-w-6xl',
  xl: 'max-w-7xl',
  full: 'max-w-full',
};

/**
 * Section component for page sections
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
          <div className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', containerSizeClasses[containerSize])}>
            {children}
          </div>
        ) : (
          children
        )}
      </section>
    );
  }
);

Section.displayName = 'Section';


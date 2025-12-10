import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Left content (usually copyright) */
  left?: ReactNode;
  /** Right content (usually links) */
  right?: ReactNode;
  /** Show top border */
  bordered?: boolean;
}

/**
 * Footer component
 */
export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, left, right, bordered = true, children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn('py-8', bordered && 'border-t', className)}
        {...props}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {children || (
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              {left && (
                <p className="text-sm text-muted-foreground">{left}</p>
              )}
              {right && (
                <div className="flex items-center gap-4">{right}</div>
              )}
            </div>
          )}
        </div>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

/**
 * Simple copyright text
 */
export function Copyright({ name }: { name: string }) {
  return (
    <span className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} {name}
    </span>
  );
}


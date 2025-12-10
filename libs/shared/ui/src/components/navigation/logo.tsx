import { forwardRef, AnchorHTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface LogoProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Primary letter (highlighted) */
  primary?: string;
  /** Secondary letters */
  secondary?: string;
}

/**
 * Logo component for brand display
 */
export const Logo = forwardRef<HTMLAnchorElement, LogoProps>(
  ({ className, primary = 'D', secondary = 'M', href = '/', ...props }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        className={cn('text-xl font-bold tracking-tight', className)}
        {...props}
      >
        <span className="text-primary">{primary}</span>
        {secondary}
      </a>
    );
  }
);

Logo.displayName = 'Logo';


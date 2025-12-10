import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Button } from '../ui/button';

export interface SocialLink {
  /** Link name */
  name: string;
  /** Link URL */
  href: string;
  /** Icon element */
  icon: ReactNode;
}

export interface SocialLinksProps extends HTMLAttributes<HTMLDivElement> {
  /** Array of social links */
  links: SocialLink[];
  /** Button variant */
  variant?: 'default' | 'outline' | 'ghost';
  /** Button size */
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /** Layout direction */
  direction?: 'row' | 'column';
}

/**
 * Social media links component
 */
export const SocialLinks = forwardRef<HTMLDivElement, SocialLinksProps>(
  (
    {
      className,
      links,
      variant = 'outline',
      size = 'lg',
      direction = 'row',
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex gap-4',
          direction === 'column' ? 'flex-col items-center' : 'flex-row flex-wrap justify-center',
          className
        )}
        {...props}
      >
        {links.map((link) => (
          <Button key={link.name} variant={variant} size={size} asChild>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="mr-2 h-4 w-4">{link.icon}</span>
              {link.name}
            </a>
          </Button>
        ))}
      </div>
    );
  }
);

SocialLinks.displayName = 'SocialLinks';


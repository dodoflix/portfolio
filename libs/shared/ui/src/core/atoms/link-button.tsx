'use client';

import { forwardRef, AnchorHTMLAttributes, ReactNode } from 'react';
import { Button, ButtonProps } from '../ui/button';

export interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /** Button content */
  children: ReactNode;
  /** Icon before text */
  iconBefore?: ReactNode;
  /** Icon after text */
  iconAfter?: ReactNode;
  /** Button variant */
  variant?: ButtonProps['variant'];
  /** Button size */
  size?: ButtonProps['size'];
  /** Open in new tab */
  external?: boolean;
}

/**
 * Button that renders as a link
 */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
  (
    {
      className,
      children,
      iconBefore,
      iconAfter,
      variant = 'default',
      size = 'default',
      external = false,
      href,
      ...props
    },
    ref
  ) => {
    const externalProps = external ? {
      target: '_blank',
      rel: 'noopener noreferrer',
    } : {};

    return (
      <Button variant={variant} size={size} asChild className={className}>
        <a ref={ref} href={href} {...externalProps} {...props}>
          {iconBefore && <span className="mr-2 h-4 w-4">{iconBefore}</span>}
          {children}
          {iconAfter && <span className="ml-2 h-4 w-4">{iconAfter}</span>}
        </a>
      </Button>
    );
  }
);

LinkButton.displayName = 'LinkButton';


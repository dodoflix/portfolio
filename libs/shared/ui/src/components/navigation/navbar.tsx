'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Stack, HStack } from '../../core/primitives/stack';
import { Spacer } from '../../core/primitives/spacer';
import { Container, ContainerSize } from '../../core/primitives/container';

export interface NavbarProps extends HTMLAttributes<HTMLElement> {
  /** Logo/Brand element */
  logo?: ReactNode;
  /** Right side actions */
  actions?: ReactNode;
  /** Make navbar fixed */
  fixed?: boolean;
  /** Add blur effect to background */
  blur?: boolean;
  /** Show bottom border */
  bordered?: boolean;
  /** Container size */
  size?: ContainerSize;
  /** Height class */
  height?: 'sm' | 'md' | 'lg';
}

/** Height of the navbar in pixels */
export const NAVBAR_HEIGHT = 64;

const heightClasses = {
  sm: 'h-12',
  md: 'h-16',
  lg: 'h-20',
};

/**
 * Navbar component - composed from primitives
 */
export const Navbar = forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo,
      actions,
      fixed = true,
      blur = true,
      bordered = true,
      size = 'lg',
      height = 'md',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <>
        <nav
          ref={ref}
          className={cn(
            'top-0 z-50 w-full bg-background/80',
            fixed && 'fixed',
            blur && 'backdrop-blur-md',
            bordered && 'border-b',
            className
          )}
          {...props}
        >
          <Container size={size} className={cn('flex items-center', heightClasses[height])}>
            <Stack direction="horizontal" align="center" justify="between" className="w-full">
              {logo}
              <HStack gap={6} align="center">
                <HStack gap={6} align="center" className="hidden sm:flex">
                  {children}
                </HStack>
                {actions}
              </HStack>
            </Stack>
          </Container>
        </nav>
        {/* Spacer to prevent content from being hidden under fixed navbar */}
        {fixed && <Spacer size={height === 'sm' ? 'md' : height === 'md' ? 'lg' : 'xl'} aria-hidden="true" />}
      </>
    );
  }
);

Navbar.displayName = 'Navbar';

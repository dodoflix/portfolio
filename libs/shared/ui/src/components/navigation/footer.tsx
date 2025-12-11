'use client';

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Stack, HStack } from '../../core/primitives/stack';
import { Container, ContainerSize } from '../../core/primitives/container';

export interface FooterProps extends HTMLAttributes<HTMLElement> {
  /** Left content (usually copyright) */
  left?: ReactNode;
  /** Right content (usually links) */
  right?: ReactNode;
  /** Show top border */
  bordered?: boolean;
  /** Container size */
  size?: ContainerSize;
}

/**
 * Footer component - composed from primitives
 */
export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, left, right, bordered = true, size = 'lg', children, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn('py-8', bordered && 'border-t', className)}
        {...props}
      >
        <Container size={size}>
          {children || (
            <Stack
              direction="horizontal"
              align="center"
              justify="between"
              wrap
              gap={4}
              className="flex-col sm:flex-row"
            >
              {left && (
                <span className="text-sm text-muted-foreground">{left}</span>
              )}
              {right && (
                <HStack gap={4} align="center">
                  {right}
                </HStack>
              )}
            </Stack>
          )}
        </Container>
      </footer>
    );
  }
);

Footer.displayName = 'Footer';

/**
 * Simple copyright text atom
 */
export function Copyright({ name }: { name: string }) {
  return (
    <span className="text-sm text-muted-foreground">
      © {new Date().getFullYear()} {name}
    </span>
  );
}

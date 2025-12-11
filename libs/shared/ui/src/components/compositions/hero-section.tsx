'use client';

/**
 * COMPOSITION EXAMPLE: Hero Section
 * 
 * This demonstrates how to compose a hero section using micro components.
 * Instead of using the monolithic <Hero> component, you can compose
 * exactly what you need from smaller pieces.
 * 
 * @example Basic hero
 * ```tsx
 * <FullCenter className="min-h-screen">
 *   <RelativeBox>
 *     <GradientBlob position="top-left" opacity={10} />
 *     <GradientBlob position="bottom-right" opacity={5} />
 *     
 *     <VStack align="center" gap={6}>
 *       <Badge>Hello World</Badge>
 *       <Heading size="display">Your Name</Heading>
 *       <Text muted>Your tagline here</Text>
 *       <HStack gap={4}>
 *         <Button>Primary CTA</Button>
 *         <Button variant="outline">Secondary</Button>
 *       </HStack>
 *     </VStack>
 *     
 *     <ScrollIndicator />
 *   </RelativeBox>
 * </FullCenter>
 * ```
 */

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { FullCenter } from '../../core/primitives/center';
import { RelativeBox, Overlay } from '../../core/primitives/overlay';
import { VStack, HStack } from '../../core/primitives/stack';
import { GradientBlob } from '../../core/decorative/gradient-blob';
import { ScrollIndicator } from '../../core/decorative/scroll-indicator';

export interface HeroSectionProps extends HTMLAttributes<HTMLElement> {
  /** Badge content */
  badge?: ReactNode;
  /** Main headline */
  headline: ReactNode;
  /** Subheadline or dynamic text */
  subheadline?: ReactNode;
  /** Description paragraph */
  description?: string;
  /** Action buttons */
  actions?: ReactNode;
  /** Show background blobs */
  showBackground?: boolean;
  /** Show scroll indicator */
  showScrollIndicator?: boolean;
  /** Scroll indicator target */
  scrollTarget?: string;
}

/**
 * Pre-composed Hero Section using micro components
 * 
 * Use this as a starting point or reference for building your own hero sections.
 */
export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      className,
      badge,
      headline,
      subheadline,
      description,
      actions,
      showBackground = true,
      showScrollIndicator = true,
      scrollTarget,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn('relative min-h-screen overflow-hidden', className)}
        {...props}
      >
        <RelativeBox className="h-full">
          {/* Background layer */}
          {showBackground && (
            <Overlay position="fill" zIndex={-1}>
              <GradientBlob position="top-left" opacity={10} size="lg" />
              <GradientBlob position="bottom-right" opacity={5} size="lg" />
            </Overlay>
          )}

          {/* Content */}
          <FullCenter className="min-h-screen px-4 pt-16">
            <VStack align="center" gap={6} className="max-w-4xl text-center">
              {badge}
              
              <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
                {headline}
              </h1>
              
              {subheadline && (
                <div className="h-12 text-xl text-muted-foreground sm:text-2xl">
                  {subheadline}
                </div>
              )}
              
              {description && (
                <p className="max-w-2xl text-lg text-muted-foreground">
                  {description}
                </p>
              )}
              
              {actions && (
                <HStack gap={4} justify="center" wrap className="pt-4">
                  {actions}
                </HStack>
              )}

              {children}
            </VStack>
          </FullCenter>

          {/* Scroll indicator */}
          {showScrollIndicator && (
            <ScrollIndicator targetId={scrollTarget} />
          )}
        </RelativeBox>
      </section>
    );
  }
);

HeroSection.displayName = 'HeroSection';


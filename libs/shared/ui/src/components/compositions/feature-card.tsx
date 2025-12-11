'use client';

/**
 * COMPOSITION EXAMPLE: Feature Card
 * 
 * This demonstrates how to compose cards using micro components
 * instead of using the specific <ProjectCard>.
 * 
 * @example Basic feature card
 * ```tsx
 * <Card className="group">
 *   <CardHeader>
 *     <IconBox icon="🚀" size="lg" hoverScale />
 *     <Spacer size="sm" />
 *     <CardTitle>Feature Name</CardTitle>
 *     <CardDescription>Feature description here</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     <TagList tags={['React', 'TypeScript', 'Tailwind']} />
 *   </CardContent>
 * </Card>
 * ```
 */

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { VStack } from '../../core/primitives/stack';
import { Spacer } from '../../core/primitives/spacer';
import { IconBox, IconBoxSize, IconBoxVariant } from '../../core/atoms/icon-box';
import { TagList } from '../../core/atoms/tag-list';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../../core/ui/card';

export interface FeatureCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Icon or emoji */
  icon?: ReactNode;
  /** Icon size */
  iconSize?: IconBoxSize;
  /** Icon variant */
  iconVariant?: IconBoxVariant;
  /** Card title */
  title: string;
  /** Card description */
  description?: string;
  /** Technology tags */
  tags?: string[];
  /** Link URL */
  href?: string;
  /** Hover lift effect */
  hoverLift?: boolean;
}

/**
 * Pre-composed Feature Card using micro components
 */
export const FeatureCard = forwardRef<HTMLDivElement, FeatureCardProps>(
  (
    {
      className,
      icon,
      iconSize = 'lg',
      iconVariant = 'default',
      title,
      description,
      tags = [],
      href,
      hoverLift = true,
      ...props
    },
    ref
  ) => {
    const CardWrapper = href ? 'a' : 'div';
    const wrapperProps = href 
      ? { href, target: '_blank', rel: 'noopener noreferrer' } 
      : {};

    return (
      <Card
        ref={ref}
        className={cn(
          'group overflow-hidden transition-all',
          hoverLift && 'hover:-translate-y-1 hover:shadow-lg',
          href && 'cursor-pointer',
          className
        )}
        {...props}
      >
        <CardWrapper {...wrapperProps}>
          <CardHeader>
            <VStack align="start" gap={4}>
              {icon && (
                <IconBox 
                  icon={icon} 
                  size={iconSize} 
                  variant={iconVariant}
                  hoverScale 
                />
              )}
              <div>
                <CardTitle className="text-xl">{title}</CardTitle>
                {description && (
                  <>
                    <Spacer size="xs" />
                    <CardDescription>{description}</CardDescription>
                  </>
                )}
              </div>
            </VStack>
          </CardHeader>
          
          {tags.length > 0 && (
            <CardContent>
              <TagList tags={tags} size="sm" />
            </CardContent>
          )}
        </CardWrapper>
      </Card>
    );
  }
);

FeatureCard.displayName = 'FeatureCard';


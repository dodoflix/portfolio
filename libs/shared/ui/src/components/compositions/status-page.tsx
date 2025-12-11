'use client';

/**
 * COMPOSITION EXAMPLE: Status Page
 * 
 * Shows how to build error/status pages using atomic components.
 * 
 * @example 404 page
 * ```tsx
 * <StatusPage
 *   code="404"
 *   icon={<AlertCircle className="h-16 w-16" />}
 *   title="Page Not Found"
 *   description="The page you're looking for doesn't exist."
 *   actions={
 *     <>
 *       <Button onClick={() => router.back()}>Go Back</Button>
 *       <Button variant="outline" asChild>
 *         <Link href="/">Home</Link>
 *       </Button>
 *     </>
 *   }
 * />
 * ```
 * 
 * @example Composing manually
 * ```tsx
 * <FullCenter className="min-h-screen">
 *   <RelativeBox>
 *     <DecorativeText text="404" size="xl" />
 *     <Overlay position="center">
 *       <VStack align="center" gap={4}>
 *         <IconBox icon={<AlertCircle />} size="xl" variant="ghost" />
 *         <Heading>Page Not Found</Heading>
 *         <Text muted>The page doesn't exist.</Text>
 *         <HStack gap={4}>
 *           <Button>Go Back</Button>
 *           <Button variant="outline">Home</Button>
 *         </HStack>
 *       </VStack>
 *     </Overlay>
 *   </RelativeBox>
 * </FullCenter>
 * ```
 */

import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { FullCenter } from '../../core/primitives/center';
import { RelativeBox } from '../../core/primitives/overlay';
import { VStack, HStack } from '../../core/primitives/stack';
import { DecorativeText, DecorativeTextSize } from '../../core/decorative/decorative-text';
import { IconBox } from '../../core/atoms/icon-box';

export interface StatusPageProps extends HTMLAttributes<HTMLDivElement> {
  /** Large background code (404, 500, etc.) */
  code?: string;
  /** Code text size */
  codeSize?: DecorativeTextSize;
  /** Icon element */
  icon?: ReactNode;
  /** Title text */
  title: string;
  /** Description text */
  description?: string;
  /** Action buttons */
  actions?: ReactNode;
  /** Additional content */
  children?: ReactNode;
}

/**
 * Pre-composed Status Page using micro components
 */
export const StatusPage = forwardRef<HTMLDivElement, StatusPageProps>(
  (
    {
      className,
      code,
      codeSize = 'xl',
      icon,
      title,
      description,
      actions,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <FullCenter
        ref={ref}
        className={cn('min-h-screen px-4 py-16', className)}
        {...props}
      >
        <RelativeBox className="w-full max-w-2xl text-center">
          {/* Background code */}
          {code && <DecorativeText text={code} size={codeSize} />}
          
          {/* Content - using relative positioning for better layout */}
          <VStack align="center" gap={4} className="relative z-10">
            {icon && (
              <IconBox icon={icon} size="xl" variant="ghost" />
            )}
            
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            
            {description && (
              <p className="max-w-md text-muted-foreground sm:text-lg">
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
        </RelativeBox>
      </FullCenter>
    );
  }
);

StatusPage.displayName = 'StatusPage';


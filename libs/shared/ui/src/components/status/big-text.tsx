import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';

export interface BigTextProps extends HTMLAttributes<HTMLDivElement> {
  /** Large background text */
  text: string;
  /** Overlay content */
  children?: ReactNode;
}

/**
 * Large decorative text with overlay (e.g., 404 pages)
 */
export const BigText = forwardRef<HTMLDivElement, BigTextProps>(
  ({ className, text, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('relative', className)} {...props}>
        <span className="text-[12rem] font-bold leading-none text-muted-foreground/10 sm:text-[16rem]">
          {text}
        </span>
        {children && (
          <div className="absolute inset-0 flex items-center justify-center">
            {children}
          </div>
        )}
      </div>
    );
  }
);

BigText.displayName = 'BigText';


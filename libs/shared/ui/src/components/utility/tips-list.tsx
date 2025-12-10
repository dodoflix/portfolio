import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';

export interface TipsListProps extends HTMLAttributes<HTMLDivElement> {
  /** Title for the tips */
  title: string;
  /** List of tip items */
  items: string[];
}

/**
 * Tips/Help list component
 */
export const TipsList = forwardRef<HTMLDivElement, TipsListProps>(
  ({ className, title, items, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('mt-4 max-w-md rounded-lg bg-muted p-4 text-left', className)}
        {...props}
      >
        <h3 className="font-medium text-foreground">{title}</h3>
        <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    );
  }
);

TipsList.displayName = 'TipsList';


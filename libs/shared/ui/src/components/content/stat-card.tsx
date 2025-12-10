import { forwardRef, HTMLAttributes, ReactNode } from 'react';
import { cn } from '../../lib/utils';
import { Separator } from '../ui/separator';

export interface StatItemProps {
  value: string | number;
  label: string;
}

export interface StatCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Stats to display */
  stats: StatItemProps[];
  /** Icon or visual element */
  icon?: ReactNode;
  /** Card variant */
  variant?: 'default' | 'gradient';
}

/**
 * Statistics card component
 */
export const StatCard = forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, stats, icon, variant = 'default', ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'aspect-square overflow-hidden rounded-2xl p-8',
          variant === 'gradient' && 'bg-gradient-to-br from-primary/20 via-primary/10 to-transparent',
          variant === 'default' && 'bg-muted',
          className
        )}
        {...props}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-4 rounded-xl border bg-card/50 backdrop-blur">
          {icon && <div className="text-8xl">{icon}</div>}

          {stats.map((stat, index) => (
            <div key={stat.label}>
              {index > 0 && <Separator className="mb-4 w-1/2 mx-auto" />}
              <div className="text-center">
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

StatCard.displayName = 'StatCard';


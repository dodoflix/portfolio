import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '../../lib/utils';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Badge } from '../ui/badge';

export interface ProjectCardProps extends HTMLAttributes<HTMLDivElement> {
  /** Project title */
  title: string;
  /** Project description */
  description: string;
  /** Icon or emoji */
  icon?: string;
  /** Technology tags */
  tags?: string[];
  /** Link URL */
  href?: string;
}

/**
 * Project card component for showcasing projects
 */
export const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ className, title, description, icon, tags = [], href, ...props }, ref) => {
    const CardWrapper = href ? 'a' : 'div';
    const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};

    return (
      <Card
        ref={ref}
        className={cn(
          'group overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg',
          href && 'cursor-pointer',
          className
        )}
        {...props}
      >
        <CardWrapper {...wrapperProps}>
          <CardHeader>
            {icon && (
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-4xl transition-transform group-hover:scale-110">
                {icon}
              </div>
            )}
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            {tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </CardWrapper>
      </Card>
    );
  }
);

ProjectCard.displayName = 'ProjectCard';


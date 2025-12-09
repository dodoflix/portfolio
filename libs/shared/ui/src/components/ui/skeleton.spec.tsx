import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Skeleton } from './skeleton';

describe('Skeleton', () => {
  it('renders correctly', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
  });

  it('has pulse animation class', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('animate-pulse');
  });

  it('has rounded class', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('rounded-md');
  });

  it('applies custom className', () => {
    render(<Skeleton className="h-10 w-10" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('h-10', 'w-10');
  });

  it('renders as div', () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton').tagName).toBe('DIV');
  });

  it('passes additional props', () => {
    render(<Skeleton id="my-skeleton" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveAttribute('id', 'my-skeleton');
  });

  it('can be used for text placeholder', () => {
    render(<Skeleton className="h-4 w-[200px]" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('h-4', 'w-[200px]');
  });

  it('can be used for avatar placeholder', () => {
    render(<Skeleton className="h-12 w-12 rounded-full" data-testid="skeleton" />);
    expect(screen.getByTestId('skeleton')).toHaveClass('h-12', 'w-12', 'rounded-full');
  });
});


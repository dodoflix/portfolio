import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge, badgeVariants } from './badge';

describe('Badge', () => {
  it('renders with default variant', () => {
    render(<Badge>Default</Badge>);
    expect(screen.getByText('Default')).toBeInTheDocument();
  });

  it('renders with different variants', () => {
    const { rerender } = render(<Badge variant="secondary">Secondary</Badge>);
    expect(screen.getByText('Secondary')).toHaveClass('bg-secondary');

    rerender(<Badge variant="destructive">Destructive</Badge>);
    expect(screen.getByText('Destructive')).toHaveClass('bg-destructive');

    rerender(<Badge variant="outline">Outline</Badge>);
    expect(screen.getByText('Outline')).toHaveClass('text-foreground');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-badge">Custom</Badge>);
    expect(screen.getByText('Custom')).toHaveClass('custom-badge');
  });

  it('exports badgeVariants for use outside component', () => {
    expect(badgeVariants).toBeDefined();
    expect(typeof badgeVariants).toBe('function');
  });

  it('renders as a div by default', () => {
    render(<Badge data-testid="badge">Badge</Badge>);
    expect(screen.getByTestId('badge').tagName).toBe('DIV');
  });

  it('passes additional props', () => {
    render(
      <Badge data-testid="badge" id="my-badge">
        Props
      </Badge>
    );
    expect(screen.getByTestId('badge')).toHaveAttribute('id', 'my-badge');
  });
});


import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Heading } from './heading';

describe('Heading', () => {
  it('renders as h2 by default', () => {
    render(<Heading>Title</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders as different heading levels', () => {
    const { rerender } = render(<Heading as="h1">H1</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<Heading as="h3">H3</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<Heading size="xl" data-testid="heading">Title</Heading>);
    expect(screen.getByTestId('heading')).toHaveClass('text-4xl');
  });

  it('applies gradient class when gradient is true', () => {
    render(<Heading gradient data-testid="heading">Title</Heading>);
    expect(screen.getByTestId('heading')).toHaveClass('bg-gradient-to-r', 'bg-clip-text', 'text-transparent');
  });

  it('applies custom className', () => {
    render(<Heading className="custom-class" data-testid="heading">Title</Heading>);
    expect(screen.getByTestId('heading')).toHaveClass('custom-class');
  });
});


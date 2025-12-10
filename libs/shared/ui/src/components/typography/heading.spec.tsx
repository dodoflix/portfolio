import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Heading } from './heading';

describe('Heading', () => {
  it('renders children', () => {
    render(<Heading>Test Heading</Heading>);
    expect(screen.getByText('Test Heading')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<Heading>Heading</Heading>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders different heading levels', () => {
    const { rerender } = render(<Heading as="h1">H1</Heading>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<Heading as="h3">H3</Heading>);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();

    rerender(<Heading as="h6">H6</Heading>);
    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<Heading size="xl">Large</Heading>);
    expect(container.firstChild).toHaveClass('text-4xl');

    rerender(<Heading size="sm">Small</Heading>);
    expect(container.firstChild).toHaveClass('text-xl');
  });

  it('applies gradient effect when enabled', () => {
    const { container } = render(<Heading gradient>Gradient</Heading>);
    expect(container.firstChild).toHaveClass('bg-clip-text', 'text-transparent');
  });

  it('applies tracking-tight class', () => {
    const { container } = render(<Heading>Heading</Heading>);
    expect(container.firstChild).toHaveClass('tracking-tight');
  });

  it('applies custom className', () => {
    const { container } = render(<Heading className="custom-class">Heading</Heading>);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});


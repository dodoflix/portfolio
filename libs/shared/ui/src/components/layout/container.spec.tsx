import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from './container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default size class', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toHaveClass('max-w-6xl');
  });

  it('applies different size classes', () => {
    const { container, rerender } = render(<Container size="sm">Content</Container>);
    expect(container.firstChild).toHaveClass('max-w-2xl');

    rerender(<Container size="xl">Content</Container>);
    expect(container.firstChild).toHaveClass('max-w-7xl');

    rerender(<Container size="full">Content</Container>);
    expect(container.firstChild).toHaveClass('max-w-full');
  });

  it('applies padding by default', () => {
    const { container } = render(<Container>Content</Container>);
    expect(container.firstChild).toHaveClass('px-4');
  });

  it('removes padding when padded is false', () => {
    const { container } = render(<Container padded={false}>Content</Container>);
    expect(container.firstChild).not.toHaveClass('px-4');
  });

  it('applies custom className', () => {
    const { container } = render(<Container className="custom-class">Content</Container>);
    expect(container.firstChild).toHaveClass('custom-class');
  });

  it('forwards ref', () => {
    const ref = { current: null };
    render(<Container ref={ref}>Content</Container>);
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });
});


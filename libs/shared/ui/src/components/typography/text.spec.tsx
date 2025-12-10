import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './text';

describe('Text', () => {
  it('renders children', () => {
    render(<Text>Test text</Text>);
    expect(screen.getByText('Test text')).toBeInTheDocument();
  });

  it('renders as p by default', () => {
    const { container } = render(<Text>Paragraph</Text>);
    expect(container.querySelector('p')).toBeInTheDocument();
  });

  it('renders as different elements', () => {
    const { container, rerender } = render(<Text as="span">Span</Text>);
    expect(container.querySelector('span')).toBeInTheDocument();

    rerender(<Text as="div">Div</Text>);
    expect(container.querySelector('div')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<Text size="lg">Large</Text>);
    expect(container.firstChild).toHaveClass('text-lg');

    rerender(<Text size="sm">Small</Text>);
    expect(container.firstChild).toHaveClass('text-sm');

    rerender(<Text size="xl">XL</Text>);
    expect(container.firstChild).toHaveClass('text-xl');
  });

  it('applies variant classes', () => {
    const { container, rerender } = render(<Text variant="muted">Muted</Text>);
    expect(container.firstChild).toHaveClass('text-muted-foreground');

    rerender(<Text variant="primary">Primary</Text>);
    expect(container.firstChild).toHaveClass('text-primary');

    rerender(<Text variant="destructive">Destructive</Text>);
    expect(container.firstChild).toHaveClass('text-destructive');
  });

  it('applies weight classes', () => {
    const { container, rerender } = render(<Text weight="bold">Bold</Text>);
    expect(container.firstChild).toHaveClass('font-bold');

    rerender(<Text weight="medium">Medium</Text>);
    expect(container.firstChild).toHaveClass('font-medium');
  });

  it('applies leading classes', () => {
    const { container, rerender } = render(<Text leading="tight">Tight</Text>);
    expect(container.firstChild).toHaveClass('leading-tight');

    rerender(<Text leading="relaxed">Relaxed</Text>);
    expect(container.firstChild).toHaveClass('leading-relaxed');
  });

  it('applies custom className', () => {
    const { container } = render(<Text className="custom">Text</Text>);
    expect(container.firstChild).toHaveClass('custom');
  });
});


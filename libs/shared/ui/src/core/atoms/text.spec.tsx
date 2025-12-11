import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './text';

describe('Text', () => {
  it('renders as p by default', () => {
    render(<Text>Content</Text>);
    expect(screen.getByText('Content').tagName).toBe('P');
  });

  it('renders as span when specified', () => {
    render(<Text as="span">Content</Text>);
    expect(screen.getByText('Content').tagName).toBe('SPAN');
  });

  it('applies size classes', () => {
    render(<Text size="lg" data-testid="text">Content</Text>);
    expect(screen.getByTestId('text')).toHaveClass('text-lg');
  });

  it('applies variant classes', () => {
    render(<Text variant="muted" data-testid="text">Content</Text>);
    expect(screen.getByTestId('text')).toHaveClass('text-muted-foreground');
  });

  it('applies weight classes', () => {
    render(<Text weight="bold" data-testid="text">Content</Text>);
    expect(screen.getByTestId('text')).toHaveClass('font-bold');
  });

  it('applies custom className', () => {
    render(<Text className="custom-class" data-testid="text">Content</Text>);
    expect(screen.getByTestId('text')).toHaveClass('custom-class');
  });
});


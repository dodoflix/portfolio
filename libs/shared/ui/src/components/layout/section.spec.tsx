import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Section } from './section';

describe('Section', () => {
  it('renders children', () => {
    render(<Section>Test content</Section>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('renders as section element', () => {
    const { container } = render(<Section>Content</Section>);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('applies default spacing', () => {
    const { container } = render(<Section>Content</Section>);
    expect(container.firstChild).toHaveClass('py-24');
  });

  it('applies different spacing variants', () => {
    const { container, rerender } = render(<Section spacing="sm">Content</Section>);
    expect(container.firstChild).toHaveClass('py-12');

    rerender(<Section spacing="none">Content</Section>);
    expect(container.firstChild).not.toHaveClass('py-24');
  });

  it('applies variant classes', () => {
    const { container, rerender } = render(<Section variant="muted">Content</Section>);
    expect(container.firstChild).toHaveClass('bg-muted/30');

    rerender(<Section variant="accent">Content</Section>);
    expect(container.firstChild).toHaveClass('bg-primary/5');
  });

  it('includes container by default', () => {
    const { container } = render(<Section>Content</Section>);
    const innerDiv = container.querySelector('section > div');
    expect(innerDiv).toHaveClass('mx-auto');
  });

  it('renders without container when container is false', () => {
    render(<Section container={false}>Direct content</Section>);
    const section = screen.getByText('Direct content').closest('section');
    expect(section?.querySelector('div.mx-auto')).toBeNull();
  });

  it('applies id attribute', () => {
    const { container } = render(<Section id="test-section">Content</Section>);
    expect(container.querySelector('#test-section')).toBeInTheDocument();
  });
});


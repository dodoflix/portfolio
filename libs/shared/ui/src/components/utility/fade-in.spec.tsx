import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FadeIn } from './fade-in';

describe('FadeIn', () => {
  it('renders children', () => {
    render(<FadeIn>Content</FadeIn>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies translate class based on direction', () => {
    const { container, rerender } = render(<FadeIn direction="up" delay={10000}>Content</FadeIn>);
    expect(container.firstChild).toHaveClass('translate-y-10');

    rerender(<FadeIn direction="down" delay={10000}>Content</FadeIn>);
    expect(container.firstChild).toHaveClass('-translate-y-10');

    rerender(<FadeIn direction="left" delay={10000}>Content</FadeIn>);
    expect(container.firstChild).toHaveClass('translate-x-10');

    rerender(<FadeIn direction="right" delay={10000}>Content</FadeIn>);
    expect(container.firstChild).toHaveClass('-translate-x-10');
  });

  it('applies no translate when direction is none', () => {
    const { container } = render(<FadeIn direction="none" delay={10000}>Content</FadeIn>);
    expect(container.firstChild).not.toHaveClass('translate-y-10');
    expect(container.firstChild).not.toHaveClass('translate-x-10');
  });

  it('applies transition-all class', () => {
    const { container } = render(<FadeIn>Content</FadeIn>);
    expect(container.firstChild).toHaveClass('transition-all');
  });

  it('applies custom duration style', () => {
    const { container } = render(<FadeIn duration={500}>Content</FadeIn>);
    expect(container.firstChild).toHaveStyle({ transitionDuration: '500ms' });
  });

  it('applies custom className', () => {
    const { container } = render(<FadeIn className="custom">Content</FadeIn>);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('starts with opacity-0 before animation', () => {
    const { container } = render(<FadeIn delay={10000}>Content</FadeIn>);
    expect(container.firstChild).toHaveClass('opacity-0');
  });
});

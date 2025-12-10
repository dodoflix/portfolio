import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NavLink } from './nav-link';

describe('NavLink', () => {
  it('renders children', () => {
    render(<NavLink href="#">Link text</NavLink>);
    expect(screen.getByText('Link text')).toBeInTheDocument();
  });

  it('renders as anchor element', () => {
    render(<NavLink href="/test">Link</NavLink>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('applies muted color by default', () => {
    const { container } = render(<NavLink href="#">Link</NavLink>);
    expect(container.firstChild).toHaveClass('text-muted-foreground');
  });

  it('applies foreground color when active', () => {
    const { container } = render(<NavLink href="#" active>Link</NavLink>);
    expect(container.firstChild).toHaveClass('text-foreground');
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<NavLink href="#" size="sm">Link</NavLink>);
    expect(container.firstChild).toHaveClass('text-xs');

    rerender(<NavLink href="#" size="lg">Link</NavLink>);
    expect(container.firstChild).toHaveClass('text-base');
  });

  it('applies transition classes', () => {
    const { container } = render(<NavLink href="#">Link</NavLink>);
    expect(container.firstChild).toHaveClass('transition-colors');
  });
});


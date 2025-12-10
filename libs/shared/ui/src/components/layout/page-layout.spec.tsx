import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { PageLayout } from './page-layout';

describe('PageLayout', () => {
  it('renders children', () => {
    render(<PageLayout>Page content</PageLayout>);
    expect(screen.getByText('Page content')).toBeInTheDocument();
  });

  it('applies background class', () => {
    const { container } = render(<PageLayout>Content</PageLayout>);
    expect(container.firstChild).toHaveClass('bg-background');
  });

  it('applies min-h-screen by default', () => {
    const { container } = render(<PageLayout>Content</PageLayout>);
    expect(container.firstChild).toHaveClass('min-h-screen');
  });

  it('removes min-h-screen when fullHeight is false', () => {
    const { container } = render(<PageLayout fullHeight={false}>Content</PageLayout>);
    expect(container.firstChild).not.toHaveClass('min-h-screen');
  });

  it('applies custom className', () => {
    const { container } = render(<PageLayout className="custom">Content</PageLayout>);
    expect(container.firstChild).toHaveClass('custom');
  });
});


import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FadeIn } from './fade-in';

describe('FadeIn', () => {
  it('renders children', () => {
    render(<FadeIn>Content</FadeIn>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('starts with opacity-0 class', () => {
    render(<FadeIn data-testid="fadein" delay={10000}>Content</FadeIn>);
    expect(screen.getByTestId('fadein')).toHaveClass('opacity-0');
  });

  it('applies direction classes', () => {
    render(<FadeIn direction="up" data-testid="fadein" delay={10000}>Content</FadeIn>);
    expect(screen.getByTestId('fadein')).toHaveClass('translate-y-10');
  });

  it('applies custom className', () => {
    render(<FadeIn className="custom-class" data-testid="fadein">Content</FadeIn>);
    expect(screen.getByTestId('fadein')).toHaveClass('custom-class');
  });
});


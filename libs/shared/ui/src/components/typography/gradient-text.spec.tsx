import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GradientText } from './gradient-text';

describe('GradientText', () => {
  it('renders children', () => {
    render(<GradientText>Gradient Text</GradientText>);
    expect(screen.getByText('Gradient Text')).toBeInTheDocument();
  });

  it('renders as span', () => {
    const { container } = render(<GradientText>Text</GradientText>);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('applies gradient classes', () => {
    const { container } = render(<GradientText>Text</GradientText>);
    expect(container.firstChild).toHaveClass('bg-clip-text', 'text-transparent');
  });

  it('applies direction classes', () => {
    const { container, rerender } = render(<GradientText direction="right">Text</GradientText>);
    expect(container.firstChild).toHaveClass('bg-gradient-to-r');

    rerender(<GradientText direction="left">Text</GradientText>);
    expect(container.firstChild).toHaveClass('bg-gradient-to-l');

    rerender(<GradientText direction="top">Text</GradientText>);
    expect(container.firstChild).toHaveClass('bg-gradient-to-t');

    rerender(<GradientText direction="bottom">Text</GradientText>);
    expect(container.firstChild).toHaveClass('bg-gradient-to-b');
  });

  it('applies variant classes', () => {
    const { container, rerender } = render(<GradientText variant="primary">Text</GradientText>);
    expect(container.firstChild).toHaveClass('from-primary');

    rerender(<GradientText variant="rainbow">Text</GradientText>);
    expect(container.firstChild).toHaveClass('from-red-500');
  });

  it('applies custom className', () => {
    const { container } = render(<GradientText className="custom">Text</GradientText>);
    expect(container.firstChild).toHaveClass('custom');
  });
});


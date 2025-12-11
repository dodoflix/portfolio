import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GradientText } from './gradient-text';

describe('GradientText', () => {
  it('renders children', () => {
    render(<GradientText>Gradient</GradientText>);
    expect(screen.getByText('Gradient')).toBeInTheDocument();
  });

  it('applies gradient classes', () => {
    render(<GradientText data-testid="gradient">Text</GradientText>);
    expect(screen.getByTestId('gradient')).toHaveClass('bg-clip-text', 'text-transparent');
  });

  it('applies direction classes', () => {
    render(<GradientText direction="left" data-testid="gradient">Text</GradientText>);
    expect(screen.getByTestId('gradient')).toHaveClass('bg-gradient-to-l');
  });

  it('applies variant classes', () => {
    render(<GradientText variant="rainbow" data-testid="gradient">Text</GradientText>);
    expect(screen.getByTestId('gradient')).toHaveClass('from-red-500');
  });

  it('applies custom className', () => {
    render(<GradientText className="custom-class" data-testid="gradient">Text</GradientText>);
    expect(screen.getByTestId('gradient')).toHaveClass('custom-class');
  });
});


import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LabeledProgress } from './labeled-progress';

describe('LabeledProgress', () => {
  it('renders', () => {
    render(<LabeledProgress value={50} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<LabeledProgress value={50} label="Loading" />);
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

  it('shows percentage when showValue is true', () => {
    render(<LabeledProgress value={75} showValue />);
    expect(screen.getByText('75%')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<LabeledProgress value={50} size="lg" data-testid="progress" />);
    expect(screen.getByTestId('progress').querySelector('.rounded-full.bg-muted')).toHaveClass('h-3');
  });

  it('applies variant classes', () => {
    render(<LabeledProgress value={50} variant="success" data-testid="progress" />);
    const progressBar = screen.getByTestId('progress').querySelector('.rounded-full.transition-all');
    expect(progressBar).toHaveClass('bg-green-500');
  });
});


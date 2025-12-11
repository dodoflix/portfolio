import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { GradientBlob } from './gradient-blob';

describe('GradientBlob', () => {
  it('renders', () => {
    render(<GradientBlob data-testid="blob" />);
    expect(screen.getByTestId('blob')).toBeInTheDocument();
  });

  it('is hidden from accessibility tree', () => {
    render(<GradientBlob data-testid="blob" />);
    expect(screen.getByTestId('blob')).toHaveAttribute('aria-hidden', 'true');
  });

  it('has absolute positioning', () => {
    render(<GradientBlob data-testid="blob" />);
    expect(screen.getByTestId('blob')).toHaveClass('absolute');
  });

  it('applies size classes', () => {
    render(<GradientBlob size="xl" data-testid="blob" />);
    expect(screen.getByTestId('blob')).toHaveClass('h-[32rem]', 'w-[32rem]');
  });

  it('applies color classes', () => {
    render(<GradientBlob color="primary" data-testid="blob" />);
    expect(screen.getByTestId('blob')).toHaveClass('bg-primary');
  });

  it('applies blur classes', () => {
    render(<GradientBlob blur="lg" data-testid="blob" />);
    expect(screen.getByTestId('blob')).toHaveClass('blur-3xl');
  });

  it('applies custom className', () => {
    render(<GradientBlob className="custom-class" data-testid="blob" />);
    expect(screen.getByTestId('blob')).toHaveClass('custom-class');
  });
});


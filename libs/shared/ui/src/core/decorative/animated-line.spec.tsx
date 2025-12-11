import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AnimatedLine } from './animated-line';

describe('AnimatedLine', () => {
  it('renders', () => {
    render(<AnimatedLine data-testid="line" />);
    expect(screen.getByTestId('line')).toBeInTheDocument();
  });

  it('is hidden from accessibility tree', () => {
    render(<AnimatedLine data-testid="line" />);
    expect(screen.getByTestId('line')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies horizontal length classes', () => {
    render(<AnimatedLine direction="horizontal" length="lg" data-testid="line" />);
    expect(screen.getByTestId('line')).toHaveClass('w-16');
  });

  it('applies vertical length classes', () => {
    render(<AnimatedLine direction="vertical" length="lg" data-testid="line" />);
    expect(screen.getByTestId('line')).toHaveClass('h-16');
  });

  it('applies thickness classes', () => {
    render(<AnimatedLine thickness="thick" direction="horizontal" data-testid="line" />);
    expect(screen.getByTestId('line')).toHaveClass('h-1');
  });

  it('applies custom className', () => {
    render(<AnimatedLine className="custom-class" data-testid="line" />);
    expect(screen.getByTestId('line')).toHaveClass('custom-class');
  });
});


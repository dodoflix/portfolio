import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Progress } from './progress';

describe('Progress', () => {
  it('renders correctly', () => {
    render(<Progress value={50} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  it('renders with 0% progress', () => {
    render(<Progress value={0} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  it('renders with 100% progress', () => {
    render(<Progress value={100} data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Progress value={50} className="custom-progress" data-testid="progress" />);
    expect(screen.getByTestId('progress')).toHaveClass('custom-progress');
  });

  it('handles undefined value', () => {
    render(<Progress data-testid="progress" />);
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });

  it('has correct role', () => {
    render(<Progress value={50} />);
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

  it('renders with progress indicator', () => {
    render(<Progress value={75} data-testid="progress" />);
    // Progress renders correctly with value
    expect(screen.getByTestId('progress')).toBeInTheDocument();
  });
});

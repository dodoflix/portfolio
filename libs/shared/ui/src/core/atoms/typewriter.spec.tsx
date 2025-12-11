import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TypeWriter } from './typewriter';

describe('TypeWriter', () => {
  it('renders', () => {
    render(<TypeWriter words={['Hello']} data-testid="typewriter" />);
    expect(screen.getByTestId('typewriter')).toBeInTheDocument();
  });

  it('returns null when words array is empty', () => {
    const { container } = render(<TypeWriter words={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('shows cursor when showCursor is true', () => {
    render(<TypeWriter words={['Hello']} showCursor data-testid="typewriter" />);
    expect(screen.getByText('|')).toBeInTheDocument();
  });

  it('hides cursor when showCursor is false', () => {
    render(<TypeWriter words={['Hello']} showCursor={false} data-testid="typewriter" />);
    expect(screen.queryByText('|')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<TypeWriter words={['Hello']} className="custom-class" data-testid="typewriter" />);
    expect(screen.getByTestId('typewriter')).toHaveClass('custom-class');
  });
});


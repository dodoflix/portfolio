import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TypeWriter } from './typewriter';

describe('TypeWriter', () => {
  it('renders text content', () => {
    const { container } = render(<TypeWriter words={['Hello', 'World']} />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });

  it('shows cursor by default', () => {
    const { container } = render(<TypeWriter words={['Test']} />);
    const cursor = container.querySelector('.animate-pulse');
    expect(cursor).toBeInTheDocument();
    expect(cursor).toHaveTextContent('|');
  });

  it('hides cursor when showCursor is false', () => {
    const { container } = render(<TypeWriter words={['Test']} showCursor={false} />);
    expect(container.querySelector('.animate-pulse')).not.toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<TypeWriter words={['Test']} className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('applies font-medium class', () => {
    const { container } = render(<TypeWriter words={['Test']} />);
    expect(container.firstChild).toHaveClass('font-medium');
  });

  it('returns null for empty words array', () => {
    const { container } = render(<TypeWriter words={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders as span element', () => {
    const { container } = render(<TypeWriter words={['Hi']} />);
    expect(container.querySelector('span')).toBeInTheDocument();
  });
});

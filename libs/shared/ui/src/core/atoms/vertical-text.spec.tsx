import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { VerticalText } from './vertical-text';

describe('VerticalText', () => {
  it('renders text', () => {
    render(<VerticalText text="Hello" />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });

  it('applies vertical writing mode', () => {
    render(<VerticalText text="Hello" data-testid="vertical" />);
    expect(screen.getByTestId('vertical')).toHaveStyle({ writingMode: 'vertical-rl' });
  });

  it('rotates for up direction', () => {
    render(<VerticalText text="Hello" direction="up" data-testid="vertical" />);
    expect(screen.getByTestId('vertical')).toHaveStyle({ transform: 'rotate(180deg)' });
  });

  it('applies custom className', () => {
    render(<VerticalText text="Hello" className="custom-class" data-testid="vertical" />);
    expect(screen.getByTestId('vertical')).toHaveClass('custom-class');
  });
});


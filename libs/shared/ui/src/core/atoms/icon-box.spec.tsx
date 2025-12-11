import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { IconBox } from './icon-box';

describe('IconBox', () => {
  it('renders icon content', () => {
    render(<IconBox icon="🚀" data-testid="icon-box" />);
    expect(screen.getByTestId('icon-box')).toBeInTheDocument();
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<IconBox icon="🚀" size="lg" data-testid="icon-box" />);
    expect(screen.getByTestId('icon-box')).toHaveClass('h-16', 'w-16');
  });

  it('applies variant classes', () => {
    render(<IconBox icon="🚀" variant="outline" data-testid="icon-box" />);
    expect(screen.getByTestId('icon-box')).toHaveClass('border-2');
  });

  it('applies shape classes', () => {
    render(<IconBox icon="🚀" shape="circle" data-testid="icon-box" />);
    expect(screen.getByTestId('icon-box')).toHaveClass('rounded-full');
  });

  it('applies hover scale when hoverScale is true', () => {
    render(<IconBox icon="🚀" hoverScale data-testid="icon-box" />);
    expect(screen.getByTestId('icon-box')).toHaveClass('hover:scale-110');
  });

  it('applies custom className', () => {
    render(<IconBox icon="🚀" className="custom-class" data-testid="icon-box" />);
    expect(screen.getByTestId('icon-box')).toHaveClass('custom-class');
  });
});


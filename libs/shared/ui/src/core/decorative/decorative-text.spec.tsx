import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { DecorativeText } from './decorative-text';

describe('DecorativeText', () => {
  it('renders text', () => {
    render(<DecorativeText text="404" />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('is hidden from accessibility tree', () => {
    render(<DecorativeText text="404" data-testid="text" />);
    expect(screen.getByTestId('text')).toHaveAttribute('aria-hidden', 'true');
  });

  it('is not selectable', () => {
    render(<DecorativeText text="404" data-testid="text" />);
    expect(screen.getByTestId('text')).toHaveClass('select-none');
  });

  it('applies size classes', () => {
    render(<DecorativeText text="404" size="xl" data-testid="text" />);
    expect(screen.getByTestId('text')).toHaveClass('text-[12rem]');
  });

  it('applies opacity', () => {
    render(<DecorativeText text="404" opacity={20} data-testid="text" />);
    expect(screen.getByTestId('text')).toHaveStyle({ opacity: 0.2 });
  });

  it('applies custom className', () => {
    render(<DecorativeText text="404" className="custom-class" data-testid="text" />);
    expect(screen.getByTestId('text')).toHaveClass('custom-class');
  });
});


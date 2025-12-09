import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Separator } from './separator';

describe('Separator', () => {
  it('renders correctly', () => {
    render(<Separator data-testid="separator" />);
    expect(screen.getByTestId('separator')).toBeInTheDocument();
  });

  it('renders horizontal by default', () => {
    render(<Separator data-testid="separator" />);
    expect(screen.getByTestId('separator')).toHaveClass('h-[1px]', 'w-full');
  });

  it('renders vertical orientation', () => {
    render(<Separator orientation="vertical" data-testid="separator" />);
    expect(screen.getByTestId('separator')).toHaveClass('h-full', 'w-[1px]');
  });

  it('applies custom className', () => {
    render(<Separator className="custom-separator" data-testid="separator" />);
    expect(screen.getByTestId('separator')).toHaveClass('custom-separator');
  });

  it('has correct data-orientation attribute', () => {
    render(<Separator data-testid="separator" />);
    expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('can be decorative', () => {
    render(<Separator decorative={true} data-testid="separator" />);
    expect(screen.getByTestId('separator')).toHaveAttribute('data-orientation', 'horizontal');
  });

  it('passes additional props', () => {
    render(<Separator id="my-separator" data-testid="separator" />);
    expect(screen.getByTestId('separator')).toHaveAttribute('id', 'my-separator');
  });
});

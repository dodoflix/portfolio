import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Overlay, RelativeBox } from './overlay';

describe('Overlay', () => {
  it('renders children', () => {
    render(<Overlay data-testid="overlay">Content</Overlay>);
    expect(screen.getByTestId('overlay')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has absolute positioning', () => {
    render(<Overlay data-testid="overlay">Content</Overlay>);
    expect(screen.getByTestId('overlay')).toHaveClass('absolute');
  });

  it('applies fill position by default', () => {
    render(<Overlay data-testid="overlay">Content</Overlay>);
    expect(screen.getByTestId('overlay')).toHaveClass('inset-0');
  });

  it('applies center position', () => {
    render(<Overlay position="center" data-testid="overlay">Content</Overlay>);
    expect(screen.getByTestId('overlay')).toHaveClass('inset-0', 'flex', 'items-center', 'justify-center');
  });

  it('applies custom zIndex', () => {
    render(<Overlay zIndex={10} data-testid="overlay">Content</Overlay>);
    expect(screen.getByTestId('overlay')).toHaveStyle({ zIndex: 10 });
  });
});

describe('RelativeBox', () => {
  it('renders with relative positioning', () => {
    render(<RelativeBox data-testid="box">Content</RelativeBox>);
    expect(screen.getByTestId('box')).toHaveClass('relative');
  });
});


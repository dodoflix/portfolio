import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Container } from './container';

describe('Container', () => {
  it('renders children', () => {
    render(<Container data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('applies max-width class based on size', () => {
    render(<Container size="lg" data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toHaveClass('max-w-6xl');
  });

  it('applies padding when padded is true', () => {
    render(<Container padded data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toHaveClass('px-4');
  });

  it('centers by default', () => {
    render(<Container data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toHaveClass('mx-auto');
  });

  it('applies custom className', () => {
    render(<Container className="custom-class" data-testid="container">Content</Container>);
    expect(screen.getByTestId('container')).toHaveClass('custom-class');
  });
});


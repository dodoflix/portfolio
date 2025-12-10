import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Logo } from './logo';

describe('Logo', () => {
  it('renders default letters', () => {
    render(<Logo />);
    expect(screen.getByText('D')).toBeInTheDocument();
    expect(screen.getByText(/M/)).toBeInTheDocument();
  });

  it('renders as anchor element', () => {
    render(<Logo />);
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('has default href to /', () => {
    render(<Logo />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });

  it('accepts custom href', () => {
    render(<Logo href="/home" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home');
  });

  it('renders custom primary and secondary letters', () => {
    render(<Logo primary="A" secondary="B" />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText(/B/)).toBeInTheDocument();
  });

  it('applies primary class to first letter', () => {
    const { container } = render(<Logo />);
    const primarySpan = container.querySelector('.text-primary');
    expect(primarySpan).toBeInTheDocument();
    expect(primarySpan).toHaveTextContent('D');
  });
});


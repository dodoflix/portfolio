import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Center, FullCenter } from './center';

describe('Center', () => {
  it('renders children', () => {
    render(<Center data-testid="center">Content</Center>);
    expect(screen.getByTestId('center')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has flex and centering classes', () => {
    render(<Center data-testid="center">Content</Center>);
    expect(screen.getByTestId('center')).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('renders inline when inline prop is true', () => {
    render(<Center inline data-testid="center">Content</Center>);
    expect(screen.getByTestId('center')).toHaveClass('justify-start');
  });

  it('applies custom className', () => {
    render(<Center className="custom-class" data-testid="center">Content</Center>);
    expect(screen.getByTestId('center')).toHaveClass('custom-class');
  });
});

describe('FullCenter', () => {
  it('renders with min-h-screen', () => {
    render(<FullCenter data-testid="fullcenter">Content</FullCenter>);
    expect(screen.getByTestId('fullcenter')).toHaveClass('min-h-screen');
  });
});


import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatValue } from './stat-value';

describe('StatValue', () => {
  it('renders value', () => {
    render(<StatValue value="100" />);
    expect(screen.getByText('100')).toBeInTheDocument();
  });

  it('renders label when provided', () => {
    render(<StatValue value="100" label="Users" />);
    expect(screen.getByText('Users')).toBeInTheDocument();
  });

  it('renders prefix', () => {
    render(<StatValue value="100" prefix="$" />);
    expect(screen.getByText('$')).toBeInTheDocument();
  });

  it('renders suffix', () => {
    render(<StatValue value="100" suffix="%" />);
    expect(screen.getByText('%')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    render(<StatValue value="100" size="lg" data-testid="stat" />);
    expect(screen.getByTestId('stat').querySelector('p')).toHaveClass('text-4xl');
  });

  it('applies alignment classes', () => {
    render(<StatValue value="100" align="left" data-testid="stat" />);
    expect(screen.getByTestId('stat')).toHaveClass('text-left');
  });
});


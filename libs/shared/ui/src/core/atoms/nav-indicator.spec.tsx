import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { NavIndicator } from './nav-indicator';

describe('NavIndicator', () => {
  it('renders', () => {
    render(<NavIndicator data-testid="indicator" />);
    expect(screen.getByTestId('indicator')).toBeInTheDocument();
  });

  it('is hidden from accessibility tree', () => {
    render(<NavIndicator data-testid="indicator" />);
    expect(screen.getByTestId('indicator')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies active styles when active', () => {
    render(<NavIndicator active data-testid="indicator" />);
    const indicator = screen.getByTestId('indicator');
    expect(indicator).toHaveStyle({ width: '32px' });
  });

  it('applies inactive styles when not active', () => {
    render(<NavIndicator active={false} data-testid="indicator" />);
    const indicator = screen.getByTestId('indicator');
    expect(indicator).toHaveStyle({ width: '16px' });
  });

  it('applies custom className', () => {
    render(<NavIndicator className="custom-class" data-testid="indicator" />);
    expect(screen.getByTestId('indicator')).toHaveClass('custom-class');
  });
});


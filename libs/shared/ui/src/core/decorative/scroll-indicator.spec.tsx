import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ScrollIndicator } from './scroll-indicator';

describe('ScrollIndicator', () => {
  it('renders', () => {
    render(<ScrollIndicator data-testid="indicator" />);
    expect(screen.getByTestId('indicator')).toBeInTheDocument();
  });

  it('has absolute positioning at bottom', () => {
    render(<ScrollIndicator data-testid="indicator" />);
    expect(screen.getByTestId('indicator')).toHaveClass('absolute', 'bottom-8');
  });

  it('applies animation class', () => {
    render(<ScrollIndicator animation="bounce" data-testid="indicator" />);
    expect(screen.getByTestId('indicator')).toHaveClass('animate-bounce');
  });

  it('renders label when provided', () => {
    render(<ScrollIndicator label="Scroll down" />);
    expect(screen.getByText('Scroll down')).toBeInTheDocument();
  });

  it('calls onClick handler', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<ScrollIndicator onClick={handleClick} data-testid="indicator" />);
    await user.click(screen.getByTestId('indicator'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('applies custom className', () => {
    render(<ScrollIndicator className="custom-class" data-testid="indicator" />);
    expect(screen.getByTestId('indicator')).toHaveClass('custom-class');
  });
});


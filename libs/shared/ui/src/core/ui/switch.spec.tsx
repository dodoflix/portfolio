import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Switch } from './switch';

describe('Switch', () => {
  it('renders correctly', () => {
    render(<Switch aria-label="Toggle feature" />);
    expect(screen.getByRole('switch')).toBeInTheDocument();
  });

  it('can be toggled', async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="Toggle" />);

    const switchEl = screen.getByRole('switch');
    expect(switchEl).toHaveAttribute('data-state', 'unchecked');

    await user.click(switchEl);
    expect(switchEl).toHaveAttribute('data-state', 'checked');

    await user.click(switchEl);
    expect(switchEl).toHaveAttribute('data-state', 'unchecked');
  });

  it('can be disabled', () => {
    render(<Switch disabled aria-label="Disabled switch" />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Switch onCheckedChange={handleChange} aria-label="Switch" />);

    await user.click(screen.getByRole('switch'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('can be controlled', () => {
    const { rerender } = render(<Switch checked={false} aria-label="Controlled" />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'unchecked');

    rerender(<Switch checked={true} aria-label="Controlled" />);
    expect(screen.getByRole('switch')).toHaveAttribute('data-state', 'checked');
  });

  it('applies custom className', () => {
    render(<Switch className="custom-switch" aria-label="Custom" />);
    expect(screen.getByRole('switch')).toHaveClass('custom-switch');
  });
});


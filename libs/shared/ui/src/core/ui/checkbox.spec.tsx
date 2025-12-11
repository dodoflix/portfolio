import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  it('renders correctly', () => {
    render(<Checkbox aria-label="Accept terms" />);
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('can be checked and unchecked', async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Toggle" />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it('can be disabled', () => {
    render(<Checkbox disabled aria-label="Disabled checkbox" />);
    expect(screen.getByRole('checkbox')).toBeDisabled();
  });

  it('calls onCheckedChange when toggled', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Checkbox onCheckedChange={handleChange} aria-label="Checkbox" />);

    await user.click(screen.getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it('can be controlled', () => {
    const { rerender } = render(<Checkbox checked={false} aria-label="Controlled" />);
    expect(screen.getByRole('checkbox')).not.toBeChecked();

    rerender(<Checkbox checked={true} aria-label="Controlled" />);
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('applies custom className', () => {
    render(<Checkbox className="custom-checkbox" aria-label="Custom" />);
    expect(screen.getByRole('checkbox')).toHaveClass('custom-checkbox');
  });
});


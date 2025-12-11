import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { ThemeToggle } from './theme-toggle';

// Mock next-themes
const mockSetTheme = vi.fn();
vi.mock('next-themes', () => ({
  useTheme: () => ({
    setTheme: mockSetTheme,
    theme: 'light',
  }),
}));

describe('ThemeToggle', () => {
  beforeEach(() => {
    mockSetTheme.mockClear();
  });

  it('renders toggle button', () => {
    render(<ThemeToggle />);
    expect(screen.getByRole('button', { name: /toggle theme/i })).toBeInTheDocument();
  });

  it('opens dropdown on click', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));
    expect(screen.getByText('Light')).toBeVisible();
    expect(screen.getByText('Dark')).toBeVisible();
    expect(screen.getByText('System')).toBeVisible();
  });

  it('calls setTheme with light when Light is clicked', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));
    await user.click(screen.getByText('Light'));
    expect(mockSetTheme).toHaveBeenCalledWith('light');
  });

  it('calls setTheme with dark when Dark is clicked', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));
    await user.click(screen.getByText('Dark'));
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });

  it('calls setTheme with system when System is clicked', async () => {
    const user = userEvent.setup();
    render(<ThemeToggle />);

    await user.click(screen.getByRole('button', { name: /toggle theme/i }));
    await user.click(screen.getByText('System'));
    expect(mockSetTheme).toHaveBeenCalledWith('system');
  });
});


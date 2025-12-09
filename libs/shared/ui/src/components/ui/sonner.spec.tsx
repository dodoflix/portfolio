import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Toaster } from './sonner';

// Mock next-themes
vi.mock('next-themes', () => ({
  useTheme: () => ({ theme: 'light' }),
}));

describe('Toaster (Sonner)', () => {
  it('renders correctly', () => {
    render(<Toaster />);
    // Sonner renders a section with aria-label for notifications
    expect(screen.getByRole('region', { name: /notifications/i })).toBeInTheDocument();
  });

  it('renders as live region for accessibility', () => {
    render(<Toaster />);
    const region = screen.getByRole('region', { name: /notifications/i });
    expect(region).toHaveAttribute('aria-live', 'polite');
  });

  it('accepts position prop', () => {
    render(<Toaster position="top-center" />);
    expect(screen.getByRole('region', { name: /notifications/i })).toBeInTheDocument();
  });

  it('accepts custom toastOptions', () => {
    render(
      <Toaster
        toastOptions={{
          classNames: {
            toast: 'custom-toast',
          },
        }}
      />
    );
    expect(screen.getByRole('region', { name: /notifications/i })).toBeInTheDocument();
  });
});

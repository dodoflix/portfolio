import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { LanguageSwitcher } from './language-switcher';

// Mock next-intl
vi.mock('next-intl', () => ({
  useLocale: () => 'en',
}));

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/en/test',
}));

describe('LanguageSwitcher', () => {
  it('renders the language switcher button', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByTestId('language-switcher')).toBeInTheDocument();
  });

  it('shows current language flag', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('🇺🇸')).toBeInTheDocument();
  });

  it('has accessible label', () => {
    render(<LanguageSwitcher />);
    expect(screen.getByText('Switch language')).toBeInTheDocument();
  });
});


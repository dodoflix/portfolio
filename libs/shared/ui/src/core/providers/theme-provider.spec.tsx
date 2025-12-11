import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from './theme-provider';

describe('ThemeProvider', () => {
  it('renders children', () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Child content</div>
      </ThemeProvider>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('accepts attribute prop', () => {
    render(
      <ThemeProvider attribute="class">
        <div>Content</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('accepts defaultTheme prop', () => {
    render(
      <ThemeProvider defaultTheme="dark">
        <div>Dark theme</div>
      </ThemeProvider>
    );
    expect(screen.getByText('Dark theme')).toBeInTheDocument();
  });

  it('accepts enableSystem prop', () => {
    render(
      <ThemeProvider enableSystem>
        <div>System theme</div>
      </ThemeProvider>
    );
    expect(screen.getByText('System theme')).toBeInTheDocument();
  });
});


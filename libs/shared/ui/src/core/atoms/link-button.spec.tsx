import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { LinkButton } from './link-button';

describe('LinkButton', () => {
  it('renders as a link', () => {
    render(<LinkButton href="/test">Click me</LinkButton>);
    expect(screen.getByRole('link', { name: /click me/i })).toBeInTheDocument();
  });

  it('applies href', () => {
    render(<LinkButton href="/test">Link</LinkButton>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('opens in new tab when external is true', () => {
    render(<LinkButton href="/test" external>Link</LinkButton>);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders icon before text', () => {
    render(<LinkButton href="/test" iconBefore={<span data-testid="icon">→</span>}>Link</LinkButton>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders icon after text', () => {
    render(<LinkButton href="/test" iconAfter={<span data-testid="icon">→</span>}>Link</LinkButton>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
});


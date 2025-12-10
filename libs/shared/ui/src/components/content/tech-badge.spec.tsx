import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TechBadge } from './tech-badge';

describe('TechBadge', () => {
  it('renders children', () => {
    render(<TechBadge>TypeScript</TechBadge>);
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('applies border and background classes', () => {
    const { container } = render(<TechBadge>React</TechBadge>);
    expect(container.firstChild).toHaveClass('border', 'bg-card');
  });

  it('applies hover effect by default', () => {
    const { container } = render(<TechBadge>Node</TechBadge>);
    expect(container.firstChild).toHaveClass('hover:bg-primary');
  });

  it('removes hover effect when interactive is false', () => {
    const { container } = render(<TechBadge interactive={false}>Vue</TechBadge>);
    expect(container.firstChild).not.toHaveClass('hover:bg-primary');
  });

  it('applies padding classes', () => {
    const { container } = render(<TechBadge>Angular</TechBadge>);
    expect(container.firstChild).toHaveClass('px-4', 'py-2');
  });
});


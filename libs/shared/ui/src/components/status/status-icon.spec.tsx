import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusIcon } from './status-icon';

describe('StatusIcon', () => {
  it('renders children', () => {
    render(<StatusIcon><span>Icon</span></StatusIcon>);
    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    const { container } = render(<StatusIcon><span>X</span></StatusIcon>);
    expect(container.querySelector('.bg-muted')).toBeInTheDocument();
  });

  it('applies error variant classes', () => {
    const { container } = render(<StatusIcon variant="error"><span>X</span></StatusIcon>);
    expect(container.querySelector('.bg-destructive\\/10')).toBeInTheDocument();
  });

  it('applies warning variant classes', () => {
    const { container } = render(<StatusIcon variant="warning"><span>X</span></StatusIcon>);
    expect(container.querySelector('.bg-amber-500\\/10')).toBeInTheDocument();
  });

  it('applies success variant classes', () => {
    const { container } = render(<StatusIcon variant="success"><span>X</span></StatusIcon>);
    expect(container.querySelector('.bg-green-500\\/10')).toBeInTheDocument();
  });

  it('applies size classes', () => {
    const { container, rerender } = render(<StatusIcon size="sm"><span>X</span></StatusIcon>);
    expect(container.querySelector('.h-16')).toBeInTheDocument();

    rerender(<StatusIcon size="lg"><span>X</span></StatusIcon>);
    expect(container.querySelector('.h-32')).toBeInTheDocument();
  });

  it('shows pulse effect when enabled', () => {
    const { container } = render(<StatusIcon pulse><span>X</span></StatusIcon>);
    expect(container.querySelector('.animate-ping')).toBeInTheDocument();
  });

  it('hides pulse effect by default', () => {
    const { container } = render(<StatusIcon><span>X</span></StatusIcon>);
    expect(container.querySelector('.animate-ping')).not.toBeInTheDocument();
  });
});


import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatCard } from './stat-card';

describe('StatCard', () => {
  const mockStats = [
    { value: '5+', label: 'Years' },
    { value: '50+', label: 'Projects' },
  ];

  it('renders stats', () => {
    render(<StatCard stats={mockStats} />);
    expect(screen.getByText('5+')).toBeInTheDocument();
    expect(screen.getByText('Years')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<StatCard stats={mockStats} icon="👨‍💻" />);
    expect(screen.getByText('👨‍💻')).toBeInTheDocument();
  });

  it('applies gradient variant classes', () => {
    const { container } = render(<StatCard stats={mockStats} variant="gradient" />);
    expect(container.firstChild).toHaveClass('bg-gradient-to-br');
  });

  it('applies default variant classes', () => {
    const { container } = render(<StatCard stats={mockStats} variant="default" />);
    expect(container.firstChild).toHaveClass('bg-muted');
  });

  it('applies aspect-square class', () => {
    const { container } = render(<StatCard stats={mockStats} />);
    expect(container.firstChild).toHaveClass('aspect-square');
  });
});


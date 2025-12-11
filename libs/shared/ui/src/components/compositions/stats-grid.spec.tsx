import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatsGrid } from './stats-grid';

const mockStats = [
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '99%', label: 'Client Satisfaction' },
];

describe('StatsGrid', () => {
  it('renders all stats', () => {
    render(<StatsGrid stats={mockStats} />);
    
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('99%')).toBeInTheDocument();
    expect(screen.getByText('Years Experience')).toBeInTheDocument();
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
    expect(screen.getByText('Client Satisfaction')).toBeInTheDocument();
  });

  it('renders inline variant by default', () => {
    render(<StatsGrid stats={mockStats} data-testid="stats" />);
    // HStack renders with flex
    expect(screen.getByTestId('stats')).toHaveClass('flex');
  });

  it('renders cards variant', () => {
    render(<StatsGrid stats={mockStats} variant="cards" data-testid="stats" />);
    expect(screen.getByTestId('stats')).toHaveClass('grid');
  });

  it('renders minimal variant', () => {
    render(<StatsGrid stats={mockStats} variant="minimal" data-testid="stats" />);
    expect(screen.getByTestId('stats')).toHaveClass('flex');
  });

  it('shows separators in inline variant by default', () => {
    const { container } = render(<StatsGrid stats={mockStats} />);
    // Separators should be present (2 separators for 3 items)
    const separators = container.querySelectorAll('[data-orientation="vertical"]');
    expect(separators.length).toBe(2);
  });

  it('hides separators when showSeparators is false', () => {
    const { container } = render(
      <StatsGrid stats={mockStats} showSeparators={false} />
    );
    const separators = container.querySelectorAll('[data-orientation="vertical"]');
    expect(separators.length).toBe(0);
  });

  it('applies custom columns for cards variant', () => {
    render(<StatsGrid stats={mockStats} variant="cards" columns={2} data-testid="stats" />);
    expect(screen.getByTestId('stats')).toHaveClass('grid-cols-2');
  });

  it('applies custom className', () => {
    render(<StatsGrid stats={mockStats} className="custom-class" data-testid="stats" />);
    expect(screen.getByTestId('stats')).toHaveClass('custom-class');
  });

  it('renders with prefix and suffix', () => {
    const statsWithPrefixSuffix = [
      { value: '100', label: 'Revenue', prefix: '$', suffix: 'K' },
    ];
    render(<StatsGrid stats={statsWithPrefixSuffix} />);
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('K')).toBeInTheDocument();
  });

  it('renders empty grid with no stats', () => {
    render(<StatsGrid stats={[]} data-testid="stats" />);
    expect(screen.getByTestId('stats')).toBeInTheDocument();
  });
});


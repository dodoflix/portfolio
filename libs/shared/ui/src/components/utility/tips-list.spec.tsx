import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TipsList } from './tips-list';

const mockItems = [
  'Check your connection',
  'Try restarting',
  'Contact support',
];

describe('TipsList', () => {
  it('renders title', () => {
    render(<TipsList title="Tips" items={mockItems} />);
    expect(screen.getByText('Tips')).toBeInTheDocument();
  });

  it('renders all items', () => {
    render(<TipsList title="Tips" items={mockItems} />);
    expect(screen.getByText(/Check your connection/)).toBeInTheDocument();
    expect(screen.getByText(/Try restarting/)).toBeInTheDocument();
    expect(screen.getByText(/Contact support/)).toBeInTheDocument();
  });

  it('renders items with bullet points', () => {
    render(<TipsList title="Tips" items={['Item 1']} />);
    expect(screen.getByText(/• Item 1/)).toBeInTheDocument();
  });

  it('applies background class', () => {
    const { container } = render(<TipsList title="Tips" items={mockItems} />);
    expect(container.firstChild).toHaveClass('bg-muted');
  });

  it('applies rounded corners', () => {
    const { container } = render(<TipsList title="Tips" items={mockItems} />);
    expect(container.firstChild).toHaveClass('rounded-lg');
  });

  it('applies left text alignment', () => {
    const { container } = render(<TipsList title="Tips" items={mockItems} />);
    expect(container.firstChild).toHaveClass('text-left');
  });

  it('applies custom className', () => {
    const { container } = render(<TipsList title="Tips" items={mockItems} className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });
});


import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusIndicator } from './status-indicator';

describe('StatusIndicator', () => {
  it('renders label when provided', () => {
    render(<StatusIndicator label="Online" />);
    expect(screen.getByText('Online')).toBeInTheDocument();
  });

  it('applies online variant colors', () => {
    const { container } = render(<StatusIndicator variant="online" />);
    expect(container.querySelector('.bg-green-500')).toBeInTheDocument();
  });

  it('applies offline variant colors', () => {
    const { container } = render(<StatusIndicator variant="offline" />);
    expect(container.querySelector('.bg-gray-500')).toBeInTheDocument();
  });

  it('applies busy variant colors', () => {
    const { container } = render(<StatusIndicator variant="busy" />);
    expect(container.querySelector('.bg-red-500')).toBeInTheDocument();
  });

  it('applies away variant colors', () => {
    const { container } = render(<StatusIndicator variant="away" />);
    expect(container.querySelector('.bg-amber-500')).toBeInTheDocument();
  });

  it('shows animation by default', () => {
    const { container } = render(<StatusIndicator />);
    expect(container.querySelector('.animate-ping')).toBeInTheDocument();
  });

  it('hides animation when animate is false', () => {
    const { container } = render(<StatusIndicator animate={false} />);
    expect(container.querySelector('.animate-ping')).not.toBeInTheDocument();
  });

  it('applies pill shape classes', () => {
    const { container } = render(<StatusIndicator />);
    expect(container.firstChild).toHaveClass('rounded-full');
  });
});


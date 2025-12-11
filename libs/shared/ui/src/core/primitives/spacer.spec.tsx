import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Spacer, FlexSpacer } from './spacer';

describe('Spacer', () => {
  it('renders', () => {
    render(<Spacer data-testid="spacer" />);
    expect(screen.getByTestId('spacer')).toBeInTheDocument();
  });

  it('is hidden from accessibility tree', () => {
    render(<Spacer data-testid="spacer" />);
    expect(screen.getByTestId('spacer')).toHaveAttribute('aria-hidden', 'true');
  });

  it('applies size classes for vertical axis', () => {
    render(<Spacer size="lg" axis="vertical" data-testid="spacer" />);
    expect(screen.getByTestId('spacer')).toHaveClass('h-12');
  });

  it('applies size classes for horizontal axis', () => {
    render(<Spacer size="lg" axis="horizontal" data-testid="spacer" />);
    expect(screen.getByTestId('spacer')).toHaveClass('w-12');
  });
});

describe('FlexSpacer', () => {
  it('renders with flex-1', () => {
    render(<FlexSpacer data-testid="flex-spacer" />);
    expect(screen.getByTestId('flex-spacer')).toHaveClass('flex-1');
  });

  it('is hidden from accessibility tree', () => {
    render(<FlexSpacer data-testid="flex-spacer" />);
    expect(screen.getByTestId('flex-spacer')).toHaveAttribute('aria-hidden', 'true');
  });
});


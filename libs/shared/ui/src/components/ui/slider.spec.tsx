import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Slider } from './slider';

describe('Slider', () => {
  it('renders correctly', () => {
    render(<Slider data-testid="slider" defaultValue={[50]} />);
    expect(screen.getByTestId('slider')).toBeInTheDocument();
  });

  it('renders with default value', () => {
    render(<Slider defaultValue={[50]} />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('renders with min and max', () => {
    render(<Slider min={0} max={100} defaultValue={[25]} />);
    const slider = screen.getByRole('slider');
    expect(slider).toHaveAttribute('aria-valuemin', '0');
    expect(slider).toHaveAttribute('aria-valuemax', '100');
  });

  it('applies custom className', () => {
    render(<Slider className="custom-slider" data-testid="slider" defaultValue={[50]} />);
    expect(screen.getByTestId('slider')).toHaveClass('custom-slider');
  });

  it('can be disabled', () => {
    render(<Slider disabled defaultValue={[50]} />);
    expect(screen.getByRole('slider')).toHaveAttribute('data-disabled', '');
  });

  it('supports step attribute', () => {
    render(<Slider step={10} defaultValue={[50]} />);
    expect(screen.getByRole('slider')).toBeInTheDocument();
  });

  it('renders with controlled value', () => {
    render(<Slider value={[75]} />);
    expect(screen.getByRole('slider')).toHaveAttribute('aria-valuenow', '75');
  });
});

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { BigText } from './big-text';

describe('BigText', () => {
  it('renders text', () => {
    render(<BigText text="404" />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders children as overlay', () => {
    render(
      <BigText text="404">
        <h1>Not Found</h1>
      </BigText>
    );
    expect(screen.getByText('Not Found')).toBeInTheDocument();
  });

  it('applies large text styling', () => {
    const { container } = render(<BigText text="404" />);
    const textSpan = container.querySelector('span');
    expect(textSpan).toHaveClass('font-bold', 'leading-none');
  });

  it('positions overlay in center', () => {
    const { container } = render(
      <BigText text="500">
        <span>Error</span>
      </BigText>
    );
    const overlay = container.querySelector('.absolute.inset-0');
    expect(overlay).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('applies custom className', () => {
    const { container } = render(<BigText text="404" className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });

  it('has relative positioning', () => {
    const { container } = render(<BigText text="404" />);
    expect(container.firstChild).toHaveClass('relative');
  });
});

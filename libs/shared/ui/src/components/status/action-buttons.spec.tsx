import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ActionButtons } from './action-buttons';

describe('ActionButtons', () => {
  it('renders children', () => {
    render(
      <ActionButtons>
        <button>Button 1</button>
        <button>Button 2</button>
      </ActionButtons>
    );
    expect(screen.getByText('Button 1')).toBeInTheDocument();
    expect(screen.getByText('Button 2')).toBeInTheDocument();
  });

  it('applies flex layout', () => {
    const { container } = render(
      <ActionButtons>
        <button>Click</button>
      </ActionButtons>
    );
    expect(container.firstChild).toHaveClass('flex');
  });

  it('applies gap between buttons', () => {
    const { container } = render(
      <ActionButtons>
        <button>A</button>
        <button>B</button>
      </ActionButtons>
    );
    expect(container.firstChild).toHaveClass('gap-4');
  });

  it('applies custom className', () => {
    const { container } = render(
      <ActionButtons className="custom-class">
        <button>Click</button>
      </ActionButtons>
    );
    expect(container.firstChild).toHaveClass('custom-class');
  });
});


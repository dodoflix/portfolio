import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ScrollArea } from './scroll-area';

describe('ScrollArea', () => {
  it('renders correctly', () => {
    render(
      <ScrollArea data-testid="scroll-area">
        <div>Scrollable content</div>
      </ScrollArea>
    );
    expect(screen.getByTestId('scroll-area')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <ScrollArea>
        <div>Test content</div>
      </ScrollArea>
    );
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <ScrollArea className="custom-scroll" data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    expect(screen.getByTestId('scroll-area')).toHaveClass('custom-scroll');
  });

  it('renders with overflow hidden', () => {
    render(
      <ScrollArea data-testid="scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    expect(screen.getByTestId('scroll-area')).toHaveClass('overflow-hidden');
  });

  it('renders long content', () => {
    const longContent = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);
    render(
      <ScrollArea className="h-[200px]" data-testid="scroll-area">
        {longContent.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </ScrollArea>
    );
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 50')).toBeInTheDocument();
  });
});

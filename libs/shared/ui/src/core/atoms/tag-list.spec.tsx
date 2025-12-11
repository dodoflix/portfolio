import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { TagList } from './tag-list';

describe('TagList', () => {
  it('renders tags', () => {
    render(<TagList tags={['React', 'TypeScript']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('limits visible tags when maxVisible is set', () => {
    render(<TagList tags={['A', 'B', 'C', 'D']} maxVisible={2} />);
    expect(screen.getByText('A')).toBeInTheDocument();
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.getByText('+2')).toBeInTheDocument();
  });

  it('applies gap classes', () => {
    render(<TagList tags={['Tag']} gap={4} data-testid="tag-list" />);
    expect(screen.getByTestId('tag-list')).toHaveClass('gap-4');
  });

  it('applies custom className', () => {
    render(<TagList tags={['Tag']} className="custom-class" data-testid="tag-list" />);
    expect(screen.getByTestId('tag-list')).toHaveClass('custom-class');
  });
});


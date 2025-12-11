import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Cluster } from './cluster';

describe('Cluster', () => {
  it('renders children', () => {
    render(<Cluster data-testid="cluster">Content</Cluster>);
    expect(screen.getByTestId('cluster')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('has flex-wrap by default', () => {
    render(<Cluster data-testid="cluster">Content</Cluster>);
    expect(screen.getByTestId('cluster')).toHaveClass('flex', 'flex-wrap');
  });

  it('applies gap classes', () => {
    render(<Cluster gap={6} data-testid="cluster">Content</Cluster>);
    expect(screen.getByTestId('cluster')).toHaveClass('gap-6');
  });

  it('applies alignment classes', () => {
    render(<Cluster align="start" data-testid="cluster">Content</Cluster>);
    expect(screen.getByTestId('cluster')).toHaveClass('items-start');
  });

  it('applies justify classes', () => {
    render(<Cluster justify="center" data-testid="cluster">Content</Cluster>);
    expect(screen.getByTestId('cluster')).toHaveClass('justify-center');
  });

  it('applies custom className', () => {
    render(<Cluster className="custom-class" data-testid="cluster">Content</Cluster>);
    expect(screen.getByTestId('cluster')).toHaveClass('custom-class');
  });
});


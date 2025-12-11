import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Stack, HStack, VStack } from './stack';

describe('Stack', () => {
  it('renders children', () => {
    render(<Stack data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders with horizontal direction', () => {
    render(<Stack direction="horizontal" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('flex-row');
  });

  it('renders with vertical direction', () => {
    render(<Stack direction="vertical" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('flex-col');
  });

  it('applies gap classes', () => {
    render(<Stack gap={8} data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('gap-8');
  });

  it('applies alignment classes', () => {
    render(<Stack align="center" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('items-center');
  });

  it('applies justify classes', () => {
    render(<Stack justify="between" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('justify-between');
  });

  it('applies wrap class when wrap is true', () => {
    render(<Stack wrap data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('flex-wrap');
  });

  it('applies custom className', () => {
    render(<Stack className="custom-class" data-testid="stack">Content</Stack>);
    expect(screen.getByTestId('stack')).toHaveClass('custom-class');
  });
});

describe('HStack', () => {
  it('renders horizontally by default', () => {
    render(<HStack data-testid="hstack">Content</HStack>);
    expect(screen.getByTestId('hstack')).toHaveClass('flex-row');
  });
});

describe('VStack', () => {
  it('renders vertically by default', () => {
    render(<VStack data-testid="vstack">Content</VStack>);
    expect(screen.getByTestId('vstack')).toHaveClass('flex-col');
  });
});


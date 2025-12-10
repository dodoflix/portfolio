import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SectionHeader } from './section-header';

describe('SectionHeader', () => {
  it('renders title', () => {
    render(<SectionHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(<SectionHeader title="Title" badge="Badge Text" />);
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<SectionHeader title="Title" description="Description text" />);
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('renders as h2 by default', () => {
    render(<SectionHeader title="Title" />);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('renders different heading levels', () => {
    const { rerender } = render(<SectionHeader title="Title" titleAs="h1" />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<SectionHeader title="Title" titleAs="h3" />);
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
  });

  it('applies alignment classes', () => {
    const { container, rerender } = render(<SectionHeader title="Title" align="center" />);
    expect(container.firstChild).toHaveClass('text-center');

    rerender(<SectionHeader title="Title" align="left" />);
    expect(container.firstChild).toHaveClass('text-left');
  });

  it('renders children', () => {
    render(<SectionHeader title="Title"><span>Child content</span></SectionHeader>);
    expect(screen.getByText('Child content')).toBeInTheDocument();
  });
});


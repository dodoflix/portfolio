import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Hero } from './hero';

describe('Hero', () => {
  it('renders title', () => {
    render(<Hero title="Hero Title" />);
    expect(screen.getByText('Hero Title')).toBeInTheDocument();
  });

  it('renders as section element', () => {
    const { container } = render(<Hero title="Title" />);
    expect(container.querySelector('section')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(<Hero title="Title" badge={<span>Badge</span>} />);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<Hero title="Title" subtitle={<span>Subtitle</span>} />);
    expect(screen.getByText('Subtitle')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Hero title="Title" description="Description text" />);
    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(<Hero title="Title" actions={<button>Action</button>} />);
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('shows scroll indicator by default', () => {
    const { container } = render(<Hero title="Title" />);
    expect(container.querySelector('.animate-bounce')).toBeInTheDocument();
  });

  it('hides scroll indicator when showScrollIndicator is false', () => {
    const { container } = render(<Hero title="Title" showScrollIndicator={false} />);
    expect(container.querySelector('.animate-bounce')).toBeNull();
  });

  it('shows background by default', () => {
    const { container } = render(<Hero title="Title" />);
    expect(container.querySelector('.blur-3xl')).toBeInTheDocument();
  });

  it('hides background when showBackground is false', () => {
    const { container } = render(<Hero title="Title" showBackground={false} />);
    expect(container.querySelector('.blur-3xl')).toBeNull();
  });

  it('applies min-h-screen class', () => {
    const { container } = render(<Hero title="Title" />);
    expect(container.firstChild).toHaveClass('min-h-screen');
  });
});


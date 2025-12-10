import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ProjectCard } from './project-card';

describe('ProjectCard', () => {
  it('renders title', () => {
    render(<ProjectCard title="Project Title" description="Description" />);
    expect(screen.getByText('Project Title')).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<ProjectCard title="Title" description="Project description" />);
    expect(screen.getByText('Project description')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(<ProjectCard title="Title" description="Desc" icon="🚀" />);
    expect(screen.getByText('🚀')).toBeInTheDocument();
  });

  it('renders tags when provided', () => {
    render(<ProjectCard title="Title" description="Desc" tags={['React', 'TypeScript']} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
  });

  it('renders as link when href is provided', () => {
    render(<ProjectCard title="Title" description="Desc" href="https://example.com" />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies hover classes', () => {
    const { container } = render(<ProjectCard title="Title" description="Desc" />);
    expect(container.querySelector('.hover\\:-translate-y-1')).toBeInTheDocument();
  });
});


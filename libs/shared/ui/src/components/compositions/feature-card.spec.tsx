import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FeatureCard } from './feature-card';

describe('FeatureCard', () => {
  it('renders with required title prop', () => {
    render(<FeatureCard title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <FeatureCard 
        title="Test" 
        description="Test description" 
      />
    );
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(
      <FeatureCard 
        title="Test" 
        icon={<span data-testid="icon">🚀</span>} 
      />
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders tags when provided', () => {
    render(
      <FeatureCard 
        title="Test" 
        tags={['React', 'TypeScript', 'Tailwind']} 
      />
    );
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Tailwind')).toBeInTheDocument();
  });

  it('does not render tags section when tags array is empty', () => {
    const { container } = render(<FeatureCard title="Test" tags={[]} />);
    // CardContent should not be rendered when no tags
    const cardContents = container.querySelectorAll('[class*="CardContent"]');
    expect(cardContents.length).toBe(0);
  });

  it('applies hover lift effect by default', () => {
    render(<FeatureCard title="Test" data-testid="card" />);
    expect(screen.getByTestId('card')).toHaveClass('hover:-translate-y-1');
  });

  it('removes hover lift when hoverLift is false', () => {
    render(<FeatureCard title="Test" hoverLift={false} data-testid="card" />);
    expect(screen.getByTestId('card')).not.toHaveClass('hover:-translate-y-1');
  });

  it('renders as link when href is provided', () => {
    render(
      <FeatureCard 
        title="Test" 
        href="https://example.com" 
      />
    );
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('applies custom className', () => {
    render(<FeatureCard title="Test" className="custom-class" data-testid="card" />);
    expect(screen.getByTestId('card')).toHaveClass('custom-class');
  });
});


import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { HeroSection } from './hero-section';

describe('HeroSection', () => {
  it('renders with required headline prop', () => {
    render(<HeroSection headline="Test Headline" />);
    expect(screen.getByText('Test Headline')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(
      <HeroSection 
        headline="Test" 
        badge={<span data-testid="badge">Badge Content</span>} 
      />
    );
    expect(screen.getByTestId('badge')).toBeInTheDocument();
  });

  it('renders subheadline when provided', () => {
    render(
      <HeroSection 
        headline="Test" 
        subheadline="Subheadline Text" 
      />
    );
    expect(screen.getByText('Subheadline Text')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <HeroSection 
        headline="Test" 
        description="Description text here" 
      />
    );
    expect(screen.getByText('Description text here')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(
      <HeroSection 
        headline="Test" 
        actions={<button>Click Me</button>} 
      />
    );
    expect(screen.getByRole('button', { name: 'Click Me' })).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <HeroSection headline="Test">
        <div data-testid="child">Child Content</div>
      </HeroSection>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders as section element', () => {
    render(<HeroSection headline="Test" data-testid="hero" />);
    expect(screen.getByTestId('hero').tagName).toBe('SECTION');
  });

  it('applies custom className', () => {
    render(<HeroSection headline="Test" className="custom-class" data-testid="hero" />);
    expect(screen.getByTestId('hero')).toHaveClass('custom-class');
  });

  it('hides background when showBackground is false', () => {
    const { container } = render(
      <HeroSection headline="Test" showBackground={false} />
    );
    // GradientBlob elements should not be rendered (they have blur classes)
    expect(container.querySelector('[class*="blur-"]')).toBeNull();
  });
});


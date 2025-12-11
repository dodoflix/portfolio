import { render, screen } from '@testing-library/react';
import ComponentsPage from './page';

describe('ComponentsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentsPage />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the header title', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Component Library')).toBeInTheDocument();
  });

  it('should display dev only badge', () => {
    render(<ComponentsPage />);
    expect(screen.getAllByText('Dev Only').length).toBeGreaterThan(0);
  });

  // Navigation links
  it('should have navigation links', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('link', { name: 'Core' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Primitives' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Atoms' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Decorative' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Compositions' })).toBeInTheDocument();
  });

  // Section headers
  it('should have Core UI Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Core UI Components')).toBeInTheDocument();
  });

  it('should have Layout Primitives section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Layout Primitives')).toBeInTheDocument();
  });

  it('should have Atomic Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Atomic Components')).toBeInTheDocument();
  });

  it('should have Decorative Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Decorative Components')).toBeInTheDocument();
  });

  it('should have Compositions section', () => {
    render(<ComponentsPage />);
    // There are multiple "Compositions" texts - one in nav, one in section
    expect(screen.getAllByText('Compositions').length).toBeGreaterThan(0);
  });

  // Core UI component sections
  it('should have Button section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Button' })).toBeInTheDocument();
  });

  it('should have Badge section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Badge' })).toBeInTheDocument();
  });

  it('should have Input & Textarea section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Input & Textarea' })).toBeInTheDocument();
  });

  it('should have Card section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Card' })).toBeInTheDocument();
  });

  it('should have Tabs section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Tabs' })).toBeInTheDocument();
  });

  it('should have Accordion section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Accordion' })).toBeInTheDocument();
  });

  // Primitive sections
  it('should have VStack & HStack section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'VStack & HStack' })).toBeInTheDocument();
  });

  it('should have Cluster section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Cluster (Auto-wrap)' })).toBeInTheDocument();
  });

  it('should have FullCenter section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'FullCenter' })).toBeInTheDocument();
  });

  it('should have Spacer section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Spacer' })).toBeInTheDocument();
  });

  // Atomic component sections
  it('should have Typography section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Typography' })).toBeInTheDocument();
  });

  it('should have TypeWriter section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'TypeWriter' })).toBeInTheDocument();
  });

  it('should have FadeIn section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'FadeIn' })).toBeInTheDocument();
  });

  it('should have LabeledProgress section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'LabeledProgress' })).toBeInTheDocument();
  });

  it('should have StatValue section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'StatValue' })).toBeInTheDocument();
  });

  it('should have IconBox section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'IconBox' })).toBeInTheDocument();
  });

  it('should have LinkButton section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'LinkButton' })).toBeInTheDocument();
  });

  it('should have Icons section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Icons' })).toBeInTheDocument();
  });

  // Decorative component sections
  it('should have DecorativeText section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'DecorativeText' })).toBeInTheDocument();
  });

  it('should have GradientBlob section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'GradientBlob' })).toBeInTheDocument();
  });

  it('should have AnimatedLine section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'AnimatedLine' })).toBeInTheDocument();
  });

  it('should have ScrollIndicator section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'ScrollIndicator' })).toBeInTheDocument();
  });

  // Composition sections
  it('should have HeroSection section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'HeroSection' })).toBeInTheDocument();
  });

  it('should have FeatureCard section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'FeatureCard' })).toBeInTheDocument();
  });

  it('should have StatsGrid section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'StatsGrid' })).toBeInTheDocument();
  });

  it('should have StatusPage section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'StatusPage' })).toBeInTheDocument();
  });

  // Footer
  it('should have footer', () => {
    const { container } = render(<ComponentsPage />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});

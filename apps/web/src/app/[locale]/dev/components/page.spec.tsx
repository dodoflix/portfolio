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
    expect(screen.getByRole('link', { name: 'Base' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Layout' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Content' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Status' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Utility' })).toBeInTheDocument();
  });

  // Section headers
  it('should have Base Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Base Components')).toBeInTheDocument();
  });

  it('should have Layout Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Layout Components')).toBeInTheDocument();
  });

  it('should have Content Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Content Components')).toBeInTheDocument();
  });

  it('should have Status Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Status Components')).toBeInTheDocument();
  });

  it('should have Utility Components section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Utility Components')).toBeInTheDocument();
  });

  // Base component sections
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

  // Layout component sections
  it('should have Typography section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Typography' })).toBeInTheDocument();
  });

  it('should have Section component section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Section' })).toBeInTheDocument();
  });

  it('should have CenteredLayout section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'CenteredLayout' })).toBeInTheDocument();
  });

  // Content component sections
  it('should have Hero section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Hero' })).toBeInTheDocument();
  });

  it('should have ProjectCard section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'ProjectCard' })).toBeInTheDocument();
  });

  it('should have SkillBar section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'SkillBar' })).toBeInTheDocument();
  });

  it('should have StatCard section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'StatCard' })).toBeInTheDocument();
  });

  // Status component sections
  it('should have StatusIcon section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'StatusIcon' })).toBeInTheDocument();
  });

  it('should have BigText section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'BigText' })).toBeInTheDocument();
  });

  // Utility component sections
  it('should have TypeWriter section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'TypeWriter' })).toBeInTheDocument();
  });

  it('should have FadeIn section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'FadeIn' })).toBeInTheDocument();
  });

  it('should have Icons section', () => {
    render(<ComponentsPage />);
    expect(screen.getByRole('heading', { name: 'Icons' })).toBeInTheDocument();
  });

  // Footer
  it('should have footer', () => {
    const { container } = render(<ComponentsPage />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });
});

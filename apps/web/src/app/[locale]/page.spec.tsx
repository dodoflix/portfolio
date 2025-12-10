import { render } from '@testing-library/react';
import HomePage from './page';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('HomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });

  it('should have navigation', () => {
    const { container } = render(<HomePage />);
    const nav = container.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should have hero section', () => {
    const { container } = render(<HomePage />);
    const heroSection = container.querySelector('section');
    expect(heroSection).toBeTruthy();
  });

  it('should have about section', () => {
    const { container } = render(<HomePage />);
    const aboutSection = container.querySelector('#about');
    expect(aboutSection).toBeTruthy();
  });

  it('should have projects section', () => {
    const { container } = render(<HomePage />);
    const projectsSection = container.querySelector('#projects');
    expect(projectsSection).toBeTruthy();
  });

  it('should have skills section', () => {
    const { container } = render(<HomePage />);
    const skillsSection = container.querySelector('#skills');
    expect(skillsSection).toBeTruthy();
  });

  it('should have contact section', () => {
    const { container } = render(<HomePage />);
    const contactSection = container.querySelector('#contact');
    expect(contactSection).toBeTruthy();
  });

  it('should have footer', () => {
    const { container } = render(<HomePage />);
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});

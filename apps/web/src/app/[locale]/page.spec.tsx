import { render } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import HomePage from './page';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock next-intl
jest.mock('next-intl', () => ({
  ...jest.requireActual('next-intl'),
  useTranslations: () => (key: string) => key,
}));

const messages = {
  nav: {
    about: 'About',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    badge: 'Available for work',
    greeting: "Hi, I'm",
    name: 'Dogukan Metan',
    description: 'Test description',
    roles: {
      developer: 'Full Stack Developer',
      designer: 'UI/UX Enthusiast',
      solver: 'Problem Solver',
      explorer: 'Tech Explorer',
    },
    cta: {
      work: 'View My Work',
      contact: 'Get In Touch',
    },
  },
  about: {
    badge: 'About Me',
    title: 'Passionate about creating',
    description1: 'Description 1',
    description2: 'Description 2',
    more: '+{count} more',
    yearsExperience: 'Years Experience',
    projectsCompleted: 'Projects Completed',
  },
  projects: {
    badge: 'Projects',
    title: 'Featured Work',
    description: 'A selection of projects',
    viewAll: 'View All Projects',
    items: {
      alpha: { title: 'Project Alpha', description: 'Alpha description' },
      beta: { title: 'Project Beta', description: 'Beta description' },
      gamma: { title: 'Project Gamma', description: 'Gamma description' },
    },
  },
  skills: {
    badge: 'Skills',
    title: 'Technical Expertise',
    description: 'Technologies I work with',
  },
  contact: {
    badge: 'Contact',
    title: "Let's Work Together",
    description: 'Have a project in mind?',
    email: 'Send Email',
    github: 'GitHub',
    linkedin: 'LinkedIn',
  },
  footer: {
    rights: 'All rights reserved.',
    privacy: 'Privacy',
    terms: 'Terms',
  },
};

const renderWithIntl = (component: React.ReactNode) => {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {component}
    </NextIntlClientProvider>
  );
};

describe('HomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = renderWithIntl(<HomePage />);
    expect(baseElement).toBeTruthy();
  });

  it('should have navigation links', () => {
    const { container } = renderWithIntl(<HomePage />);
    const nav = container.querySelector('nav');
    expect(nav).toBeTruthy();
  });

  it('should have hero section', () => {
    const { container } = renderWithIntl(<HomePage />);
    const heroSection = container.querySelector('section');
    expect(heroSection).toBeTruthy();
  });

  it('should have about section', () => {
    const { container } = renderWithIntl(<HomePage />);
    const aboutSection = container.querySelector('#about');
    expect(aboutSection).toBeTruthy();
  });

  it('should have projects section', () => {
    const { container } = renderWithIntl(<HomePage />);
    const projectsSection = container.querySelector('#projects');
    expect(projectsSection).toBeTruthy();
  });

  it('should have skills section', () => {
    const { container } = renderWithIntl(<HomePage />);
    const skillsSection = container.querySelector('#skills');
    expect(skillsSection).toBeTruthy();
  });

  it('should have contact section', () => {
    const { container } = renderWithIntl(<HomePage />);
    const contactSection = container.querySelector('#contact');
    expect(contactSection).toBeTruthy();
  });

  it('should have footer', () => {
    const { container } = renderWithIntl(<HomePage />);
    const footer = container.querySelector('footer');
    expect(footer).toBeTruthy();
  });
});


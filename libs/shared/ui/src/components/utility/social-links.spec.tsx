import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { SocialLinks } from './social-links';

const mockLinks = [
  { name: 'GitHub', href: 'https://github.com', icon: <span>GH</span> },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: <span>LI</span> },
];

describe('SocialLinks', () => {
  it('renders all links', () => {
    render(<SocialLinks links={mockLinks} />);
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('renders links with correct href', () => {
    render(<SocialLinks links={mockLinks} />);
    const githubLink = screen.getByRole('link', { name: /GitHub/ });
    expect(githubLink).toHaveAttribute('href', 'https://github.com');
  });

  it('opens links in new tab', () => {
    render(<SocialLinks links={mockLinks} />);
    const link = screen.getByRole('link', { name: /GitHub/ });
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('renders icons', () => {
    render(<SocialLinks links={mockLinks} />);
    expect(screen.getByText('GH')).toBeInTheDocument();
    expect(screen.getByText('LI')).toBeInTheDocument();
  });

  it('applies flex layout', () => {
    const { container } = render(<SocialLinks links={mockLinks} />);
    expect(container.firstChild).toHaveClass('flex');
  });

  it('applies gap between links', () => {
    const { container } = render(<SocialLinks links={mockLinks} />);
    expect(container.firstChild).toHaveClass('gap-4');
  });

  it('applies row direction by default', () => {
    const { container } = render(<SocialLinks links={mockLinks} />);
    expect(container.firstChild).toHaveClass('flex-row');
  });

  it('applies column direction when specified', () => {
    const { container } = render(<SocialLinks links={mockLinks} direction="column" />);
    expect(container.firstChild).toHaveClass('flex-col');
  });
});


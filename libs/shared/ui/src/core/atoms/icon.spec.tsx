import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon, GitHubIcon, LinkedInIcon, EmailIcon } from './icon';

describe('Icon', () => {
  it('renders svg element', () => {
    render(<Icon data-testid="icon"><path /></Icon>);
    expect(screen.getByTestId('icon').tagName).toBe('svg');
  });

  it('applies size classes', () => {
    render(<Icon size="lg" data-testid="icon"><path /></Icon>);
    expect(screen.getByTestId('icon')).toHaveClass('h-8', 'w-8');
  });

  it('applies custom className', () => {
    render(<Icon className="custom-class" data-testid="icon"><path /></Icon>);
    expect(screen.getByTestId('icon')).toHaveClass('custom-class');
  });
});

describe('GitHubIcon', () => {
  it('renders svg', () => {
    render(<GitHubIcon />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});

describe('LinkedInIcon', () => {
  it('renders svg', () => {
    render(<LinkedInIcon />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});

describe('EmailIcon', () => {
  it('renders svg', () => {
    render(<EmailIcon />);
    expect(document.querySelector('svg')).toBeInTheDocument();
  });
});


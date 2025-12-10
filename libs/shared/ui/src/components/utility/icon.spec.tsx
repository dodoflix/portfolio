import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Icon, Icons, GitHubIcon, LinkedInIcon, EmailIcon } from './icon';

describe('Icon', () => {
  it('renders as svg element', () => {
    const { container } = render(<Icon><path d="M1 1" /></Icon>);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies default size', () => {
    const { container } = render(<Icon><path /></Icon>);
    expect(container.firstChild).toHaveClass('h-6', 'w-6');
  });

  it('applies different sizes', () => {
    const { container, rerender } = render(<Icon size="sm"><path /></Icon>);
    expect(container.firstChild).toHaveClass('h-4', 'w-4');

    rerender(<Icon size="lg"><path /></Icon>);
    expect(container.firstChild).toHaveClass('h-8', 'w-8');

    rerender(<Icon size="xl"><path /></Icon>);
    expect(container.firstChild).toHaveClass('h-12', 'w-12');
  });

  it('renders children', () => {
    const { container } = render(
      <Icon>
        <path d="M1 1" data-testid="icon-path" />
      </Icon>
    );
    expect(container.querySelector('[data-testid="icon-path"]')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<Icon className="custom"><path /></Icon>);
    expect(container.firstChild).toHaveClass('custom');
  });
});

describe('Icons', () => {
  it('has email icon path', () => {
    expect(Icons.email).toBeDefined();
  });

  it('has arrowRight icon path', () => {
    expect(Icons.arrowRight).toBeDefined();
  });

  it('has warning icon path', () => {
    expect(Icons.warning).toBeDefined();
  });

  it('has settings icon path', () => {
    expect(Icons.settings).toBeDefined();
  });

  it('has wifiOff icon path', () => {
    expect(Icons.wifiOff).toBeDefined();
  });
});

describe('GitHubIcon', () => {
  it('renders svg', () => {
    const { container } = render(<GitHubIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    const { container } = render(<GitHubIcon className="custom" />);
    expect(container.firstChild).toHaveClass('custom');
  });
});

describe('LinkedInIcon', () => {
  it('renders svg', () => {
    const { container } = render(<LinkedInIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

describe('EmailIcon', () => {
  it('renders icon', () => {
    const { container } = render(<EmailIcon />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});


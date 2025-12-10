import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Navbar } from './navbar';

describe('Navbar', () => {
  it('renders children', () => {
    render(<Navbar>Nav links</Navbar>);
    expect(screen.getByText('Nav links')).toBeInTheDocument();
  });

  it('renders as nav element', () => {
    render(<Navbar>Content</Navbar>);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('renders logo', () => {
    render(<Navbar logo={<span>Logo</span>}>Links</Navbar>);
    expect(screen.getByText('Logo')).toBeInTheDocument();
  });

  it('renders actions', () => {
    render(<Navbar actions={<button>Action</button>}>Links</Navbar>);
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });

  it('is fixed by default', () => {
    const { container } = render(<Navbar>Content</Navbar>);
    expect(container.firstChild).toHaveClass('fixed');
  });

  it('is not fixed when fixed is false', () => {
    const { container } = render(<Navbar fixed={false}>Content</Navbar>);
    expect(container.firstChild).not.toHaveClass('fixed');
  });

  it('has blur effect by default', () => {
    const { container } = render(<Navbar>Content</Navbar>);
    expect(container.firstChild).toHaveClass('backdrop-blur-md');
  });

  it('has border by default', () => {
    const { container } = render(<Navbar>Content</Navbar>);
    expect(container.firstChild).toHaveClass('border-b');
  });
});


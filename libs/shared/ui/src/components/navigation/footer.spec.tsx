import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer, Copyright } from './footer';

describe('Footer', () => {
  it('renders children', () => {
    render(<Footer>Footer content</Footer>);
    expect(screen.getByText('Footer content')).toBeInTheDocument();
  });

  it('renders as footer element', () => {
    const { container } = render(<Footer>Content</Footer>);
    expect(container.querySelector('footer')).toBeInTheDocument();
  });

  it('renders left content', () => {
    render(<Footer left={<span>Left</span>} />);
    expect(screen.getByText('Left')).toBeInTheDocument();
  });

  it('renders right content', () => {
    render(<Footer right={<span>Right</span>} />);
    expect(screen.getByText('Right')).toBeInTheDocument();
  });

  it('has border by default', () => {
    const { container } = render(<Footer>Content</Footer>);
    expect(container.firstChild).toHaveClass('border-t');
  });

  it('has no border when bordered is false', () => {
    const { container } = render(<Footer bordered={false}>Content</Footer>);
    expect(container.firstChild).not.toHaveClass('border-t');
  });
});

describe('Copyright', () => {
  it('renders name', () => {
    render(<Copyright name="Test Name" />);
    expect(screen.getByText(/Test Name/)).toBeInTheDocument();
  });

  it('includes current year', () => {
    render(<Copyright name="Test" />);
    const year = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument();
  });

  it('includes copyright symbol', () => {
    render(<Copyright name="Test" />);
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });
});


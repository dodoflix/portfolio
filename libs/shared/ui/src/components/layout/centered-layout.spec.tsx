import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { CenteredLayout } from './centered-layout';

describe('CenteredLayout', () => {
  it('renders children', () => {
    render(<CenteredLayout>Centered content</CenteredLayout>);
    expect(screen.getByText('Centered content')).toBeInTheDocument();
  });

  it('applies centering classes', () => {
    const { container } = render(<CenteredLayout>Content</CenteredLayout>);
    expect(container.firstChild).toHaveClass('flex', 'items-center', 'justify-center');
  });

  it('renders topRight content', () => {
    render(
      <CenteredLayout topRight={<button>Toggle</button>}>
        Content
      </CenteredLayout>
    );
    expect(screen.getByRole('button', { name: 'Toggle' })).toBeInTheDocument();
  });

  it('renders footer content', () => {
    render(
      <CenteredLayout footer={<span>Footer text</span>}>
        Content
      </CenteredLayout>
    );
    expect(screen.getByText('Footer text')).toBeInTheDocument();
  });

  it('positions topRight in top-right corner', () => {
    const { container } = render(
      <CenteredLayout topRight={<span>Top right</span>}>Content</CenteredLayout>
    );
    const topRightContainer = container.querySelector('.absolute.right-6.top-6');
    expect(topRightContainer).toBeInTheDocument();
  });

  it('positions footer at bottom', () => {
    const { container } = render(
      <CenteredLayout footer={<span>Footer</span>}>Content</CenteredLayout>
    );
    const footerContainer = container.querySelector('.absolute.bottom-6');
    expect(footerContainer).toBeInTheDocument();
  });
});


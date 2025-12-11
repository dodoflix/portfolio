import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { StatusPage } from './status-page';

describe('StatusPage', () => {
  it('renders with required title prop', () => {
    render(<StatusPage title="Page Not Found" />);
    expect(screen.getByRole('heading', { name: 'Page Not Found' })).toBeInTheDocument();
  });

  it('renders code when provided', () => {
    render(<StatusPage title="Not Found" code="404" />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(
      <StatusPage 
        title="Error" 
        description="Something went wrong" 
      />
    );
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('renders icon when provided', () => {
    render(
      <StatusPage 
        title="Error" 
        icon={<span data-testid="icon">⚠️</span>} 
      />
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('renders actions when provided', () => {
    render(
      <StatusPage 
        title="Error" 
        actions={
          <>
            <button>Go Back</button>
            <button>Go Home</button>
          </>
        } 
      />
    );
    expect(screen.getByRole('button', { name: 'Go Back' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Go Home' })).toBeInTheDocument();
  });

  it('renders children', () => {
    render(
      <StatusPage title="Error">
        <div data-testid="child">Additional content</div>
      </StatusPage>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <StatusPage 
        title="Error" 
        className="custom-class" 
        data-testid="status-page" 
      />
    );
    expect(screen.getByTestId('status-page')).toHaveClass('custom-class');
  });

  it('renders without code', () => {
    const { container } = render(<StatusPage title="Error" />);
    // DecorativeText should not be present
    expect(container.querySelector('[class*="select-none"]')).toBeNull();
  });
});


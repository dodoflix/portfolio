import { render } from '@testing-library/react';
import Loading from './loading';

describe('Loading', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Loading />);
    expect(baseElement).toBeTruthy();
  });

  it('should display a spinner', () => {
    const { container } = render(<Loading />);
    const spinner = container.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('should display skeleton loaders', () => {
    const { container } = render(<Loading />);
    // Skeleton components have specific classes
    const skeletons = container.querySelectorAll('[class*="animate-pulse"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('should be centered on the screen', () => {
    const { container } = render(<Loading />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('flex', 'min-h-screen', 'items-center', 'justify-center');
  });

  it('should have proper structure', () => {
    const { container } = render(<Loading />);
    // Should have a container with spinner and skeleton text
    const innerContainer = container.querySelector('.flex.flex-col.items-center.gap-6');
    expect(innerContainer).toBeInTheDocument();
  });
});


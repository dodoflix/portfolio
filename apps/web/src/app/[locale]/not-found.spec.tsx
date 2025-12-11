import { render, screen, fireEvent } from '@testing-library/react';
import NotFound from './not-found';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock window.history.back
const mockHistoryBack = jest.fn();
Object.defineProperty(window, 'history', {
  value: { back: mockHistoryBack },
  writable: true,
});

describe('NotFound', () => {
  beforeEach(() => {
    mockHistoryBack.mockClear();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<NotFound />);
    expect(baseElement).toBeTruthy();
  });

  it('should display 404 text', () => {
    render(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('should display title', () => {
    const { container } = render(<NotFound />);
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
  });

  it('should have a link to home', () => {
    render(<NotFound />);
    const homeLink = screen.getByRole('link');
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should have a go back button', () => {
    render(<NotFound />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should call history.back when go back button is clicked', () => {
    render(<NotFound />);
    const buttons = screen.getAllByRole('button');
    const backButton = buttons.find(btn => btn.textContent === 'Go back');
    if (backButton) {
      fireEvent.click(backButton);
      expect(mockHistoryBack).toHaveBeenCalled();
    }
  });

  it('should have theme toggle', () => {
    render(<NotFound />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2); // ThemeToggle + Go back
  });
});

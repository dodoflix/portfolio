import { render, screen, fireEvent } from '@testing-library/react';
import RootNotFound from './not-found';

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

describe('RootNotFound', () => {
  beforeEach(() => {
    mockHistoryBack.mockClear();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<RootNotFound />);
    expect(baseElement).toBeTruthy();
  });

  it('should display 404 text', () => {
    render(<RootNotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('should display "Page not found" title', () => {
    render(<RootNotFound />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent('Page not found');
  });

  it('should display description text', () => {
    render(<RootNotFound />);
    expect(
      screen.getByText(/The page you're looking for doesn't exist/)
    ).toBeInTheDocument();
  });

  it('should have a link to home with correct text', () => {
    render(<RootNotFound />);
    const homeLink = screen.getByRole('link', { name: 'Back to home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should have a go back button', () => {
    render(<RootNotFound />);
    expect(
      screen.getByRole('button', { name: 'Go back' })
    ).toBeInTheDocument();
  });

  it('should call history.back when go back button is clicked', () => {
    render(<RootNotFound />);
    const backButton = screen.getByRole('button', { name: 'Go back' });
    fireEvent.click(backButton);
    expect(mockHistoryBack).toHaveBeenCalledTimes(1);
  });

  it('should have theme toggle', () => {
    render(<RootNotFound />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(2); // ThemeToggle + Go back
  });
});

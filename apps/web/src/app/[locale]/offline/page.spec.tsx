import { render, screen, fireEvent } from '@testing-library/react';
import OfflinePage from './page';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

// Mock window.location.reload
const mockReload = jest.fn();
Object.defineProperty(window, 'location', {
  value: { reload: mockReload },
  writable: true,
});

describe('OfflinePage', () => {
  beforeEach(() => {
    mockReload.mockClear();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<OfflinePage />);
    expect(baseElement).toBeTruthy();
  });

  it('should display offline title', () => {
    render(<OfflinePage />);
    expect(screen.getByText("You're Offline")).toBeInTheDocument();
  });

  it('should display offline description', () => {
    render(<OfflinePage />);
    expect(screen.getByText(/lost your internet connection/)).toBeInTheDocument();
  });

  it('should have try again button', () => {
    render(<OfflinePage />);
    const tryAgainButton = screen.getByRole('button', { name: 'Try again' });
    expect(tryAgainButton).toBeInTheDocument();
  });

  it('should reload page when try again is clicked', () => {
    render(<OfflinePage />);
    const tryAgainButton = screen.getByRole('button', { name: 'Try again' });
    fireEvent.click(tryAgainButton);
    expect(mockReload).toHaveBeenCalled();
  });

  it('should have a link to home', () => {
    render(<OfflinePage />);
    const homeLink = screen.getByRole('link', { name: 'Go home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should display troubleshooting tips', () => {
    render(<OfflinePage />);
    expect(screen.getByText('Things to try:')).toBeInTheDocument();
    expect(screen.getByText(/Check your Wi-Fi/)).toBeInTheDocument();
    expect(screen.getByText(/restarting your router/)).toBeInTheDocument();
    expect(screen.getByText(/airplane mode/)).toBeInTheDocument();
  });

  it('should have an offline icon', () => {
    const { container } = render(<OfflinePage />);
    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });

  it('should have theme toggle', () => {
    const { container } = render(<OfflinePage />);
    const buttons = container.querySelectorAll('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should display copyright footer', () => {
    render(<OfflinePage />);
    expect(screen.getByText(/© \d{4} Portfolio/)).toBeInTheDocument();
  });

  it('should be centered on the screen', () => {
    const { container } = render(<OfflinePage />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('flex', 'min-h-screen', 'items-center', 'justify-center');
  });
});


import { render, screen, fireEvent } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
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

const messages = {
  notFound: {
    title: 'Page Not Found',
    description: "Sorry, we couldn't find the page you're looking for.",
    backHome: 'Back to Home',
  },
};

const renderWithIntl = (component: React.ReactNode) => {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {component}
    </NextIntlClientProvider>
  );
};

describe('NotFound', () => {
  beforeEach(() => {
    mockHistoryBack.mockClear();
  });

  it('should render successfully', () => {
    const { baseElement } = renderWithIntl(<NotFound />);
    expect(baseElement).toBeTruthy();
  });

  it('should display 404 text', () => {
    renderWithIntl(<NotFound />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('should display translated title', () => {
    renderWithIntl(<NotFound />);
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('should display translated description', () => {
    renderWithIntl(<NotFound />);
    expect(screen.getByText("Sorry, we couldn't find the page you're looking for.")).toBeInTheDocument();
  });

  it('should have a link to home', () => {
    renderWithIntl(<NotFound />);
    const homeLink = screen.getByRole('link', { name: 'Back to Home' });
    expect(homeLink).toHaveAttribute('href', '/');
  });

  it('should have a go back button', () => {
    renderWithIntl(<NotFound />);
    const backButton = screen.getByRole('button', { name: 'Go back' });
    expect(backButton).toBeInTheDocument();
  });

  it('should call history.back when go back button is clicked', () => {
    renderWithIntl(<NotFound />);
    const backButton = screen.getByRole('button', { name: 'Go back' });
    fireEvent.click(backButton);
    expect(mockHistoryBack).toHaveBeenCalled();
  });

  it('should have theme toggle', () => {
    const { container } = renderWithIntl(<NotFound />);
    expect(container.querySelector('button')).toBeTruthy();
  });

  it('should display copyright footer', () => {
    renderWithIntl(<NotFound />);
    expect(screen.getByText(/© \d{4} Portfolio/)).toBeInTheDocument();
  });
});


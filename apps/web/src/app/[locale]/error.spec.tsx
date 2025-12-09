import { render, screen, fireEvent } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import Error from './error';

// Mock window.history.back
const mockHistoryBack = jest.fn();
Object.defineProperty(window, 'history', {
  value: { back: mockHistoryBack },
  writable: true,
});

// Mock console.error
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});

const messages = {
  error: {
    title: 'Something went wrong',
    description: 'An unexpected error has occurred. Please try again.',
    tryAgain: 'Try again',
  },
};

const mockError = new Error('Test error message');
const mockReset = jest.fn();

const renderWithIntl = (component: React.ReactNode) => {
  return render(
    <NextIntlClientProvider locale="en" messages={messages}>
      {component}
    </NextIntlClientProvider>
  );
};

describe('Error', () => {
  beforeEach(() => {
    mockHistoryBack.mockClear();
    mockReset.mockClear();
    mockConsoleError.mockClear();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  it('should render successfully', () => {
    const { baseElement } = renderWithIntl(<Error error={mockError} reset={mockReset} />);
    expect(baseElement).toBeTruthy();
  });

  it('should display translated title', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });

  it('should display translated description', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    expect(screen.getByText('An unexpected error has occurred. Please try again.')).toBeInTheDocument();
  });

  it('should log error to console', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    expect(mockConsoleError).toHaveBeenCalledWith(mockError);
  });

  it('should have try again button', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    const tryAgainButton = screen.getByRole('button', { name: 'Try again' });
    expect(tryAgainButton).toBeInTheDocument();
  });

  it('should call reset when try again button is clicked', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    const tryAgainButton = screen.getByRole('button', { name: 'Try again' });
    fireEvent.click(tryAgainButton);
    expect(mockReset).toHaveBeenCalled();
  });

  it('should have a go back button', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    const backButton = screen.getByRole('button', { name: 'Go back' });
    expect(backButton).toBeInTheDocument();
  });

  it('should call history.back when go back button is clicked', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    const backButton = screen.getByRole('button', { name: 'Go back' });
    fireEvent.click(backButton);
    expect(mockHistoryBack).toHaveBeenCalled();
  });

  it('should have an error icon', () => {
    const { container } = renderWithIntl(<Error error={mockError} reset={mockReset} />);
    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });

  it('should display copyright footer', () => {
    renderWithIntl(<Error error={mockError} reset={mockReset} />);
    expect(screen.getByText(/© \d{4} Portfolio/)).toBeInTheDocument();
  });
});


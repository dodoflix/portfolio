import { render, screen, fireEvent } from '@testing-library/react';
import ErrorPage from './error';

// Mock console.error
const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  function noop() {}
);

// Mock window.history.back
const mockHistoryBack = jest.fn();
Object.defineProperty(window, 'history', {
  value: { back: mockHistoryBack },
  writable: true,
});

const mockError = new window.Error('Test error message');
const mockReset = jest.fn();

describe('ErrorPage', () => {
  beforeEach(() => {
    mockReset.mockClear();
    mockConsoleError.mockClear();
    mockHistoryBack.mockClear();
  });

  afterAll(() => {
    mockConsoleError.mockRestore();
  });

  it('should render successfully', () => {
    const { baseElement } = render(<ErrorPage error={mockError} reset={mockReset} />);
    expect(baseElement).toBeTruthy();
  });

  it('should display 500 error code', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    expect(screen.getByText('500')).toBeInTheDocument();
  });

  it('should display title', () => {
    const { container } = render(<ErrorPage error={mockError} reset={mockReset} />);
    const heading = container.querySelector('h1');
    expect(heading).toBeTruthy();
  });

  it('should log error to console', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    expect(mockConsoleError).toHaveBeenCalledWith(mockError);
  });

  it('should have buttons', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });

  it('should call reset when try again button is clicked', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    const buttons = screen.getAllByRole('button');
    // Find the button with translated text for tryAgain
    const tryAgainButton = buttons.find(btn => 
      btn.textContent?.includes('tryAgain') || btn.textContent?.includes('Try again')
    );
    expect(tryAgainButton).toBeTruthy();
    if (tryAgainButton) {
      fireEvent.click(tryAgainButton);
      expect(mockReset).toHaveBeenCalled();
    }
  });

  it('should call history.back when go back button is clicked', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    const buttons = screen.getAllByRole('button');
    // Find the "Go back" button
    const goBackButton = buttons.find(btn => btn.textContent === 'Go back');
    expect(goBackButton).toBeTruthy();
    if (goBackButton) {
      fireEvent.click(goBackButton);
      expect(mockHistoryBack).toHaveBeenCalled();
    }
  });

  it('should have an error icon', () => {
    const { container } = render(<ErrorPage error={mockError} reset={mockReset} />);
    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });

  it('should have language switcher and theme toggle', () => {
    render(<ErrorPage error={mockError} reset={mockReset} />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThanOrEqual(3); // LanguageSwitcher + ThemeToggle + tryAgain + goBack
  });
});

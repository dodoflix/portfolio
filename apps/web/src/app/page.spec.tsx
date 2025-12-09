import { render } from '@testing-library/react';
import HomePage from './page';

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe('HomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the name', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('Dogukan Metan')).toBeInTheDocument();
  });

  it('should have navigation links', () => {
    const { getByText } = render(<HomePage />);
    expect(getByText('About')).toBeInTheDocument();
    expect(getByText('Projects')).toBeInTheDocument();
    expect(getByText('Skills')).toBeInTheDocument();
    expect(getByText('Contact')).toBeInTheDocument();
  });
});


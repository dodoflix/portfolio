import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi } from 'vitest';
import { SideNav, SideNavLink } from './side-nav';

const mockLinks: SideNavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

describe('SideNav', () => {
  beforeEach(() => {
    // Mock window.innerHeight
    Object.defineProperty(window, 'innerHeight', { value: 800, writable: true });
  });

  it('should render successfully', () => {
    const { baseElement } = render(<SideNav links={mockLinks} />);
    expect(baseElement).toBeTruthy();
  });

  it('should render all navigation links', () => {
    render(<SideNav links={mockLinks} />);
    mockLinks.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  it('should have correct href on links', () => {
    render(<SideNav links={mockLinks} />);
    mockLinks.forEach((link) => {
      const anchor = screen.getByText(link.label).closest('a');
      expect(anchor).toHaveAttribute('href', link.href);
    });
  });

  it('should apply left position by default', () => {
    render(<SideNav links={mockLinks} data-testid="sidenav" />);
    const nav = screen.getByTestId('sidenav');
    expect(nav).toHaveClass('left-6');
  });

  it('should apply right position when specified', () => {
    render(<SideNav links={mockLinks} position="right" data-testid="sidenav" />);
    const nav = screen.getByTestId('sidenav');
    expect(nav).toHaveClass('right-6');
  });

  it('should apply muted styles to links by default (no section in view)', () => {
    render(<SideNav links={mockLinks} />);
    const link = screen.getByText('About').closest('a');
    expect(link).toHaveClass('text-muted-foreground');
  });

  it('should detect active section on scroll', () => {
    // Create mock section element
    const mockElement = document.createElement('div');
    mockElement.id = 'about';
    document.body.appendChild(mockElement);

    // Mock getBoundingClientRect - section at top of viewport (scrolled into view)
    mockElement.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 100, // Below trigger point (40% of 800 = 320)
    });

    render(<SideNav links={mockLinks} />);

    // Update mock to simulate scrolling - section now above trigger point
    mockElement.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 200, // Below trigger point, section is in view
    });

    act(() => {
      fireEvent.scroll(window);
    });

    const activeLink = screen.getByText('About').closest('a');
    expect(activeLink).toHaveClass('text-foreground', 'font-medium');

    // Cleanup
    document.body.removeChild(mockElement);
  });

  it('should accept additional className', () => {
    render(
      <SideNav links={mockLinks} className="custom-class" data-testid="sidenav" />
    );
    const nav = screen.getByTestId('sidenav');
    expect(nav).toHaveClass('custom-class');
  });

  it('should render decorative lines', () => {
    const { container } = render(<SideNav links={mockLinks} />);
    const decorativeLines = container.querySelectorAll('.h-12.w-px.bg-border');
    expect(decorativeLines.length).toBe(2);
  });

  it('should expand indicator line for active link', () => {
    // Create mock section element
    const mockElement = document.createElement('div');
    mockElement.id = 'projects';
    document.body.appendChild(mockElement);

    // Mock section scrolled past trigger point
    mockElement.getBoundingClientRect = vi.fn().mockReturnValue({
      top: 100,
    });

    render(<SideNav links={mockLinks} />);

    act(() => {
      fireEvent.scroll(window);
    });

    // Find the indicator span for the active link
    const projectsLink = screen.getByText('Projects').closest('a');
    const indicator = projectsLink?.querySelector('span');
    expect(indicator).toHaveClass('w-8');

    // Cleanup
    document.body.removeChild(mockElement);
  });

  it('should remove scroll listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const { unmount } = render(<SideNav links={mockLinks} />);
    unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });
});


import { render, screen } from '@testing-library/react';
import { SideNav, SideNavLink } from './side-nav';

const mockLinks: SideNavLink[] = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

describe('SideNav', () => {
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

  it('should apply active styles to active link', () => {
    const linksWithActive: SideNavLink[] = [
      { href: '#about', label: 'About', active: true },
      { href: '#projects', label: 'Projects' },
    ];
    render(<SideNav links={linksWithActive} />);
    const activeLink = screen.getByText('About').closest('a');
    expect(activeLink).toHaveClass('text-foreground', 'font-medium');
  });

  it('should apply muted styles to inactive links', () => {
    render(<SideNav links={mockLinks} />);
    const inactiveLink = screen.getByText('About').closest('a');
    expect(inactiveLink).toHaveClass('text-muted-foreground');
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
});


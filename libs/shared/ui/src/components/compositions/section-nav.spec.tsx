import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SectionNav } from './section-nav';

const mockSections = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

describe('SectionNav', () => {
  it('renders all section buttons', () => {
    render(<SectionNav sections={mockSections} />);
    
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders as nav element', () => {
    render(<SectionNav sections={mockSections} data-testid="nav" />);
    expect(screen.getByTestId('nav').tagName).toBe('NAV');
  });

  it('calls onSelect when section is clicked', () => {
    const onSelect = vi.fn();
    render(<SectionNav sections={mockSections} onSelect={onSelect} />);
    
    fireEvent.click(screen.getByText('Work'));
    expect(onSelect).toHaveBeenCalledWith('work');
  });

  it('highlights active section', () => {
    render(<SectionNav sections={mockSections} activeId="work" />);
    
    const workButton = screen.getByText('Work').closest('button');
    expect(workButton).toHaveClass('text-foreground');
    expect(workButton).toHaveClass('font-medium');
  });

  it('positions on left by default', () => {
    render(<SectionNav sections={mockSections} data-testid="nav" />);
    expect(screen.getByTestId('nav')).toHaveClass('left-6');
  });

  it('positions on right when specified', () => {
    render(<SectionNav sections={mockSections} position="right" data-testid="nav" />);
    expect(screen.getByTestId('nav')).toHaveClass('right-6');
  });

  it('applies custom className', () => {
    render(
      <SectionNav 
        sections={mockSections} 
        className="custom-class" 
        data-testid="nav" 
      />
    );
    expect(screen.getByTestId('nav')).toHaveClass('custom-class');
  });

  it('renders with empty sections array', () => {
    render(<SectionNav sections={[]} data-testid="nav" />);
    expect(screen.getByTestId('nav')).toBeInTheDocument();
  });
});


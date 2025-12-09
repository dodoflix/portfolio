import { render, screen } from '@testing-library/react';
import MaintenancePage from './page';

describe('MaintenancePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MaintenancePage />);
    expect(baseElement).toBeTruthy();
  });

  it('should display maintenance title', () => {
    render(<MaintenancePage />);
    expect(screen.getByText('Under Maintenance')).toBeInTheDocument();
  });

  it('should display maintenance description', () => {
    render(<MaintenancePage />);
    expect(screen.getByText(/performing scheduled maintenance/)).toBeInTheDocument();
  });

  it('should display status indicator', () => {
    render(<MaintenancePage />);
    expect(screen.getByText('Maintenance in progress')).toBeInTheDocument();
  });

  it('should have a settings/gear icon', () => {
    const { container } = render(<MaintenancePage />);
    const svgIcon = container.querySelector('svg');
    expect(svgIcon).toBeInTheDocument();
  });

  it('should have animated pulse ring', () => {
    const { container } = render(<MaintenancePage />);
    const pulseRing = container.querySelector('.animate-ping');
    expect(pulseRing).toBeInTheDocument();
  });

  it('should display copyright footer', () => {
    render(<MaintenancePage />);
    expect(screen.getByText(/© \d{4} Portfolio/)).toBeInTheDocument();
  });

  it('should be centered on the screen', () => {
    const { container } = render(<MaintenancePage />);
    const mainDiv = container.firstChild as HTMLElement;
    expect(mainDiv).toHaveClass('flex', 'min-h-screen', 'items-center', 'justify-center');
  });
});

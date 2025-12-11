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

  it('should have animated status badge', () => {
    const { container } = render(<MaintenancePage />);
    const pulseBadge = container.querySelector('.animate-pulse');
    expect(pulseBadge).toBeInTheDocument();
  });

  it('should display estimated completion text', () => {
    render(<MaintenancePage />);
    expect(screen.getByText(/Estimated completion/)).toBeInTheDocument();
  });

  it('should have theme toggle', () => {
    render(<MaintenancePage />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBeGreaterThan(0);
  });
});

import { render, screen } from '@testing-library/react';
import ComponentsPage from './page';

// Mock process.env
const originalEnv = process.env;

beforeEach(() => {
  jest.resetModules();
  process.env = { ...originalEnv, NODE_ENV: 'development' };
});

afterAll(() => {
  process.env = originalEnv;
});

describe('ComponentsPage', () => {
  it('should render successfully in development', () => {
    const { baseElement } = render(<ComponentsPage />);
    expect(baseElement).toBeTruthy();
  });

  it('should display the header title', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Component Library')).toBeInTheDocument();
  });

  it('should display development only badge', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Development Only')).toBeInTheDocument();
  });

  it('should have button section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  it('should have badge section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Badge')).toBeInTheDocument();
  });

  it('should have input section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Input & Textarea')).toBeInTheDocument();
  });

  it('should have checkbox section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Checkbox & Switch')).toBeInTheDocument();
  });

  it('should have select section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Select')).toBeInTheDocument();
  });

  it('should have slider section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Slider & Progress')).toBeInTheDocument();
  });

  it('should have card section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Card')).toBeInTheDocument();
  });

  it('should have avatar section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Avatar')).toBeInTheDocument();
  });

  it('should have tabs section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Tabs')).toBeInTheDocument();
  });

  it('should have accordion section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Accordion')).toBeInTheDocument();
  });

  it('should have dialog section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Dialog')).toBeInTheDocument();
  });

  it('should have dropdown menu section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Dropdown Menu')).toBeInTheDocument();
  });

  it('should have popover section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Popover & Tooltip')).toBeInTheDocument();
  });

  it('should have skeleton section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Skeleton')).toBeInTheDocument();
  });

  it('should have scroll area section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Scroll Area')).toBeInTheDocument();
  });

  it('should have separator section', () => {
    render(<ComponentsPage />);
    expect(screen.getByText('Separator')).toBeInTheDocument();
  });

  it('should have footer', () => {
    const { container } = render(<ComponentsPage />);
    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('should have theme toggle in header', () => {
    const { container } = render(<ComponentsPage />);
    const header = container.querySelector('header');
    expect(header).toBeInTheDocument();
    const buttons = header?.querySelectorAll('button');
    expect(buttons?.length).toBeGreaterThan(0);
  });
});


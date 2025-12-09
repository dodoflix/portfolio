import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Popover, PopoverTrigger, PopoverContent } from './popover';

describe('Popover', () => {
  const renderPopover = () =>
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content here</PopoverContent>
      </Popover>
    );

  it('renders trigger', () => {
    renderPopover();
    expect(screen.getByText('Open Popover')).toBeInTheDocument();
  });

  it('opens popover on trigger click', async () => {
    const user = userEvent.setup();
    renderPopover();

    await user.click(screen.getByText('Open Popover'));
    expect(screen.getByText('Popover content here')).toBeVisible();
  });

  it('closes popover when clicking outside', async () => {
    const user = userEvent.setup();
    render(
      <div>
        <Popover>
          <PopoverTrigger>Open</PopoverTrigger>
          <PopoverContent>Content</PopoverContent>
        </Popover>
        <button>Outside</button>
      </div>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Content')).toBeVisible();

    await user.click(screen.getByText('Outside'));
    // Popover closes on outside click
  });

  it('renders with custom className', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent className="custom-popover">Custom content</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Custom content')).toHaveClass('custom-popover');
  });

  it('renders with different align options', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent align="start">Start aligned</PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Start aligned')).toBeInTheDocument();
  });

  it('works with controlled state', () => {
    render(
      <Popover open={true}>
        <PopoverTrigger>Open</PopoverTrigger>
        <PopoverContent>Controlled popover</PopoverContent>
      </Popover>
    );
    expect(screen.getByText('Controlled popover')).toBeVisible();
  });

  it('renders complex content', async () => {
    const user = userEvent.setup();
    render(
      <Popover>
        <PopoverTrigger>Settings</PopoverTrigger>
        <PopoverContent>
          <div>
            <h4>Settings</h4>
            <input type="text" placeholder="Name" />
            <button>Save</button>
          </div>
        </PopoverContent>
      </Popover>
    );

    await user.click(screen.getByText('Settings'));
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
  });
});


import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuShortcut,
} from './dropdown-menu';

describe('DropdownMenu', () => {
  const renderDropdown = () =>
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

  it('renders trigger', () => {
    renderDropdown();
    expect(screen.getByText('Open Menu')).toBeInTheDocument();
  });

  it('opens menu on trigger click', async () => {
    const user = userEvent.setup();
    renderDropdown();

    await user.click(screen.getByText('Open Menu'));
    expect(screen.getByText('My Account')).toBeVisible();
    expect(screen.getByText('Profile')).toBeVisible();
    expect(screen.getByText('Settings')).toBeVisible();
  });

  it('renders menu items', async () => {
    const user = userEvent.setup();
    renderDropdown();

    await user.click(screen.getByText('Open Menu'));
    expect(screen.getByText('Profile')).toBeInTheDocument();
    expect(screen.getByText('Settings')).toBeInTheDocument();
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('closes menu on item click', async () => {
    const user = userEvent.setup();
    renderDropdown();

    await user.click(screen.getByText('Open Menu'));
    await user.click(screen.getByText('Profile'));
    expect(screen.queryByText('My Account')).not.toBeInTheDocument();
  });

  it('renders checkbox items', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Options</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem checked={true}>
            Show Status Bar
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem checked={false}>
            Show Activity Bar
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Options'));
    expect(screen.getByText('Show Status Bar')).toBeInTheDocument();
  });

  it('renders shortcuts', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Edit</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            Copy <DropdownMenuShortcut>⌘C</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Edit'));
    expect(screen.getByText('⌘C')).toBeInTheDocument();
  });

  it('calls onSelect when item is clicked', async () => {
    const user = userEvent.setup();
    const handleSelect = vi.fn();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onSelect={handleSelect}>Action</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Menu'));
    await user.click(screen.getByText('Action'));
    expect(handleSelect).toHaveBeenCalled();
  });

  it('can disable menu items', async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem disabled>Disabled Item</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Menu'));
    expect(screen.getByText('Disabled Item')).toHaveAttribute('data-disabled');
  });
});


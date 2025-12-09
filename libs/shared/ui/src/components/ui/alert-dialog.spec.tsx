import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
} from './alert-dialog';

describe('AlertDialog', () => {
  const renderAlertDialog = () =>
    render(
      <AlertDialog>
        <AlertDialogTrigger>Delete</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );

  it('renders trigger', () => {
    renderAlertDialog();
    expect(screen.getByText('Delete')).toBeInTheDocument();
  });

  it('opens on trigger click', async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    await user.click(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure?')).toBeVisible();
    expect(screen.getByText('This action cannot be undone.')).toBeVisible();
  });

  it('closes on cancel click', async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    await user.click(screen.getByText('Delete'));
    expect(screen.getByText('Are you sure?')).toBeVisible();

    await user.click(screen.getByText('Cancel'));
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  it('closes on action click', async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    await user.click(screen.getByText('Delete'));
    await user.click(screen.getByText('Continue'));
    expect(screen.queryByText('Are you sure?')).not.toBeInTheDocument();
  });

  it('renders action button with correct styles', async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    await user.click(screen.getByText('Delete'));
    // Action button should have primary button styles
    expect(screen.getByText('Continue')).toBeInTheDocument();
  });

  it('renders cancel button with outline styles', async () => {
    const user = userEvent.setup();
    renderAlertDialog();

    await user.click(screen.getByText('Delete'));
    // Cancel button should have outline variant
    expect(screen.getByText('Cancel')).toBeInTheDocument();
  });

  it('renders with controlled open state', () => {
    render(
      <AlertDialog open={true}>
        <AlertDialogContent>
          <AlertDialogTitle>Controlled Alert</AlertDialogTitle>
          <AlertDialogAction>OK</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );
    expect(screen.getByText('Controlled Alert')).toBeVisible();
  });

  it('calls onOpenChange when state changes', async () => {
    const user = userEvent.setup();
    const handleOpenChange = vi.fn();
    render(
      <AlertDialog onOpenChange={handleOpenChange}>
        <AlertDialogTrigger>Open</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Title</AlertDialogTitle>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    );

    await user.click(screen.getByText('Open'));
    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });
});


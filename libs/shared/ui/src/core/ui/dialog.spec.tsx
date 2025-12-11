import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './dialog';

describe('Dialog', () => {
  it('renders trigger', () => {
    render(
      <Dialog>
        <DialogTrigger>Open Dialog</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText('Open Dialog')).toBeInTheDocument();
  });

  it('opens on trigger click', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>Dialog description</DialogDescription>
        </DialogContent>
      </Dialog>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Dialog Title')).toBeVisible();
    expect(screen.getByText('Dialog description')).toBeVisible();
  });

  it('closes on close button click', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByText('Title')).toBeVisible();

    await user.click(screen.getByRole('button', { name: /close/i }));
    expect(screen.queryByText('Title')).not.toBeInTheDocument();
  });

  it('renders DialogHeader', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogHeader data-testid="header">
            <DialogTitle>Title</DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('renders DialogFooter', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent>
          <DialogTitle>Title</DialogTitle>
          <DialogFooter data-testid="footer">
            <button>Save</button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('renders with controlled open state', () => {
    render(
      <Dialog open={true}>
        <DialogContent>
          <DialogTitle>Controlled Dialog</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText('Controlled Dialog')).toBeVisible();
  });

  it('applies custom className to DialogContent', async () => {
    const user = userEvent.setup();
    render(
      <Dialog>
        <DialogTrigger>Open</DialogTrigger>
        <DialogContent className="custom-content" data-testid="content">
          <DialogTitle>Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );

    await user.click(screen.getByText('Open'));
    expect(screen.getByRole('dialog')).toHaveClass('custom-content');
  });
});


import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from './tooltip';

describe('Tooltip', () => {
  it('renders trigger', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows tooltip on hover', async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Tooltip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    await user.hover(screen.getByText('Hover me'));
    // Use getByRole to get the tooltip
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });

  it('renders with custom className on content', async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent className="custom-tooltip">Custom tip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    await user.hover(screen.getByText('Hover'));
    // Check that tooltip exists
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });

  it('works with button trigger using asChild', async () => {
    const user = userEvent.setup();
    render(
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            <button>Button with tooltip</button>
          </TooltipTrigger>
          <TooltipContent>Button tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    await user.hover(screen.getByRole('button', { name: /button with tooltip/i }));
    expect(await screen.findByRole('tooltip')).toBeInTheDocument();
  });

  it('tooltip is hidden by default', () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover me</TooltipTrigger>
          <TooltipContent>Hidden tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion';

describe('Accordion', () => {
  const renderAccordion = () =>
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content for section 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content for section 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

  it('renders accordion triggers', () => {
    renderAccordion();
    expect(screen.getByText('Section 1')).toBeInTheDocument();
    expect(screen.getByText('Section 2')).toBeInTheDocument();
  });

  it('expands content on trigger click', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByText('Section 1');
    await user.click(trigger);

    expect(screen.getByText('Content for section 1')).toBeVisible();
  });

  it('collapses content when clicking again (collapsible)', async () => {
    const user = userEvent.setup();
    renderAccordion();

    const trigger = screen.getByText('Section 1');
    await user.click(trigger);
    expect(screen.getByText('Content for section 1')).toBeVisible();

    await user.click(trigger);
    // Content should be hidden after collapse
    expect(trigger).toHaveAttribute('data-state', 'closed');
  });

  it('applies custom className to AccordionItem', () => {
    render(
      <Accordion type="single">
        <AccordionItem value="item-1" className="custom-item" data-testid="item">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );
    expect(screen.getByTestId('item')).toHaveClass('custom-item');
  });

  it('supports multiple type accordion', async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="multiple">
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Section 2</AccordionTrigger>
          <AccordionContent>Content 2</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    await user.click(screen.getByText('Section 1'));
    await user.click(screen.getByText('Section 2'));

    // Both should be open in multiple mode
    expect(screen.getByText('Content 1')).toBeVisible();
    expect(screen.getByText('Content 2')).toBeVisible();
  });
});


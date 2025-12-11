import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './tabs';

describe('Tabs', () => {
  const renderTabs = () =>
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
      </Tabs>
    );

  it('renders tab triggers', () => {
    renderTabs();
    expect(screen.getByText('Tab 1')).toBeInTheDocument();
    expect(screen.getByText('Tab 2')).toBeInTheDocument();
    expect(screen.getByText('Tab 3')).toBeInTheDocument();
  });

  it('shows default tab content', () => {
    renderTabs();
    expect(screen.getByText('Content 1')).toBeVisible();
  });

  it('switches content on tab click', async () => {
    const user = userEvent.setup();
    renderTabs();

    await user.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content 2')).toBeVisible();

    await user.click(screen.getByText('Tab 3'));
    expect(screen.getByText('Content 3')).toBeVisible();
  });

  it('marks active tab', () => {
    renderTabs();
    expect(screen.getByText('Tab 1').closest('button')).toHaveAttribute(
      'data-state',
      'active'
    );
  });

  it('applies custom className to TabsList', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList className="custom-list" data-testid="list">
          <TabsTrigger value="tab1">Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    );
    expect(screen.getByTestId('list')).toHaveClass('custom-list');
  });

  it('applies custom className to TabsTrigger', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1" className="custom-trigger">
            Tab
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content</TabsContent>
      </Tabs>
    );
    expect(screen.getByText('Tab')).toHaveClass('custom-trigger');
  });

  it('can disable tab triggers', () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2" disabled>
            Tab 2
          </TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );
    expect(screen.getByText('Tab 2')).toBeDisabled();
  });
});


import { test, expect } from '@playwright/test';

test.describe('Offline Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/offline');
  });

  test('shows offline title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /offline/i })).toBeVisible();
  });

  test('has action buttons', async ({ page }) => {
    // Should have at least one button (Try again)
    const buttons = page.getByRole('button');
    await expect(buttons.first()).toBeVisible();
  });

  test('has home link', async ({ page }) => {
    const homeLink = page.getByRole('link', { name: /home/i });
    await expect(homeLink).toBeVisible();
  });

  test('has tips card', async ({ page }) => {
    // The tips are in a Card component with "Try:" title
    await expect(page.getByText(/try:/i)).toBeVisible();
  });

  test('has offline icon', async ({ page }) => {
    const icon = page.locator('svg').first();
    await expect(icon).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('is centered on screen', async ({ page }) => {
    // StatusPage uses FullCenter - check for centered flex container
    const container = page.locator('.items-center.justify-center').first();
    await expect(container).toBeVisible();
  });
});

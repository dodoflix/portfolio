import { test, expect } from '@playwright/test';

test.describe('Maintenance Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/maintenance');
  });

  test('shows maintenance title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /maintenance/i })).toBeVisible();
  });

  test('shows maintenance description', async ({ page }) => {
    await expect(page.getByText(/performing scheduled maintenance/i)).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('has gear/settings icon', async ({ page }) => {
    const icon = page.locator('svg').first();
    await expect(icon).toBeVisible();
  });

  test('is centered on screen', async ({ page }) => {
    // StatusPage uses FullCenter which centers content
    const container = page.locator('.items-center.justify-center').first();
    await expect(container).toBeVisible();
  });
});

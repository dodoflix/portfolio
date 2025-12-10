import { test, expect } from '@playwright/test';

test.describe('Maintenance Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/maintenance');
  });

  test('shows maintenance title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /maintenance/i })).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('has copyright footer', async ({ page }) => {
    const year = new Date().getFullYear().toString();
    await expect(page.getByText(new RegExp(`© ${year}`))).toBeVisible();
  });
});

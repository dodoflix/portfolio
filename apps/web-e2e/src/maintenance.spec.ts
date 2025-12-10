import { test, expect } from '@playwright/test';

test.describe('Maintenance Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/maintenance');
  });

  test('shows maintenance title', async ({ page }) => {
    await expect(page.getByText('Under Maintenance')).toBeVisible();
  });

  test('shows status indicator', async ({ page }) => {
    await expect(page.getByText('Maintenance in progress')).toBeVisible();
  });

  test('has animated pulse', async ({ page }) => {
    const pulse = page.locator('.animate-ping');
    await expect(pulse).toBeVisible();
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


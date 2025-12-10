import { test, expect } from '@playwright/test';

test.describe('Theme', () => {
  test('has theme toggle button', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('can switch to dark mode', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    const themeToggle = page.getByTestId('theme-toggle');

    // Open menu and click Dark
    await themeToggle.click();
    await page.getByRole('menuitem', { name: 'Dark' }).click();

    await expect(html).toHaveClass(/dark/);
  });

  test('can switch to light mode', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    const themeToggle = page.getByTestId('theme-toggle');

    // Set dark first
    await themeToggle.click();
    await page.getByRole('menuitem', { name: 'Dark' }).click();
    await expect(html).toHaveClass(/dark/);

    // Then switch to light
    await themeToggle.click();
    await page.getByRole('menuitem', { name: 'Light' }).click();
    await expect(html).not.toHaveClass(/dark/);
  });

  test('theme persists after reload', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    const themeToggle = page.getByTestId('theme-toggle');

    // Set dark mode
    await themeToggle.click();
    await page.getByRole('menuitem', { name: 'Dark' }).click();
    await expect(html).toHaveClass(/dark/);

    // Reload and check
    await page.reload();
    await expect(html).toHaveClass(/dark/);
  });
});

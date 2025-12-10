import { test, expect } from '@playwright/test';

test.describe('Theme', () => {
  test('toggle switches between light and dark', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    const themeToggle = page.getByTestId('theme-toggle');

    // Check initial state
    const hasDark = await html.evaluate((el) => el.classList.contains('dark'));

    // Click toggle
    await themeToggle.click();

    // Should have toggled
    if (hasDark) {
      await expect(html).not.toHaveClass(/dark/);
    } else {
      await expect(html).toHaveClass(/dark/);
    }

    // Click again
    await themeToggle.click();

    // Should be back to original
    if (hasDark) {
      await expect(html).toHaveClass(/dark/);
    } else {
      await expect(html).not.toHaveClass(/dark/);
    }
  });

  test('dark mode applies dark class', async ({ page }) => {
    await page.goto('/');

    // Force dark mode via localStorage
    await page.evaluate(() => {
      localStorage.setItem('theme', 'dark');
    });
    await page.reload();

    const html = page.locator('html');
    await expect(html).toHaveClass(/dark/);
  });

  test('light mode removes dark class', async ({ page }) => {
    await page.goto('/');

    // Force light mode via localStorage
    await page.evaluate(() => {
      localStorage.setItem('theme', 'light');
    });
    await page.reload();

    const html = page.locator('html');
    await expect(html).not.toHaveClass(/dark/);
  });

  test('theme persists after reload', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.getByTestId('theme-toggle');
    const html = page.locator('html');

    // Check initial and toggle
    const initialHasDark = await html.evaluate((el) => el.classList.contains('dark'));
    await themeToggle.click();

    await page.reload();

    // Should maintain toggled state
    if (initialHasDark) {
      await expect(html).not.toHaveClass(/dark/);
    } else {
      await expect(html).toHaveClass(/dark/);
    }
  });
});

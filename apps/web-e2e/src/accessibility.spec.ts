import { test, expect } from '@playwright/test';

test.describe('Accessibility', () => {
  test('page has lang attribute', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', /en|tr/);
  });

  test('images have alt text', async ({ page }) => {
    await page.goto('/');

    const images = page.locator('img');
    const count = await images.count();

    for (let i = 0; i < count; i++) {
      const img = images.nth(i);
      await expect(img).toHaveAttribute('alt', /.+/);
    }
  });

  test('buttons are keyboard accessible', async ({ page }) => {
    await page.goto('/');

    // Tab to first button
    await page.keyboard.press('Tab');

    // Should have focus on an interactive element
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('nav links are focusable', async ({ page }) => {
    await page.goto('/');

    const links = page.locator('nav a');
    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const link = links.nth(i);
      await link.focus();
      await expect(link).toBeFocused();
    }
  });

  test('has main heading', async ({ page }) => {
    await page.goto('/');

    const h1 = page.locator('h1').first();
    await expect(h1).toBeVisible();
  });

  test('interactive elements have visible focus', async ({ page }) => {
    await page.goto('/');

    const themeToggle = page.getByTestId('theme-toggle');
    await themeToggle.focus();
    await expect(themeToggle).toBeFocused();
  });
});

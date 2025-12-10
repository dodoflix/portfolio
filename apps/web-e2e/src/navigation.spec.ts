import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navbar is fixed at top', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    await expect(nav).toHaveCSS('position', 'fixed');
  });

  test('navbar has blur effect', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav');
    const backdropFilter = await nav.evaluate((el) => 
      window.getComputedStyle(el).backdropFilter
    );
    expect(backdropFilter).toContain('blur');
  });

  test('logo links to home', async ({ page }) => {
    await page.goto('/');

    const logo = page.locator('nav a[href="/"]');
    await expect(logo).toBeVisible();
  });

  test('footer has copyright', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    const year = new Date().getFullYear().toString();
    await expect(footer).toContainText(year);
  });
});


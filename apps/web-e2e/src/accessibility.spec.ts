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

    // Tab to first interactive element
    await page.keyboard.press('Tab');

    // Should have focus on an interactive element
    const focused = page.locator(':focus');
    await expect(focused).toBeVisible();
  });

  test('nav links are focusable', async ({ page }) => {
    await page.goto('/');

    // Focus on navbar links
    const navLinks = page.locator('nav').first().locator('a');
    const count = await navLinks.count();

    for (let i = 0; i < count; i++) {
      const link = navLinks.nth(i);
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

  test('sections have proper heading hierarchy', async ({ page }) => {
    await page.goto('/');

    // Should have h1 followed by h2s for sections
    const h1 = page.locator('h1');
    const h2s = page.locator('h2');

    await expect(h1.first()).toBeVisible();
    await expect(h2s.first()).toBeVisible();
  });

  test('decorative elements are hidden from screen readers', async ({ page }) => {
    await page.goto('/');

    // Decorative elements should have aria-hidden
    const decorativeElements = page.locator('[aria-hidden="true"]');
    const count = await decorativeElements.count();
    
    // Should have some decorative elements hidden
    expect(count).toBeGreaterThan(0);
  });

  test('progress bars have proper ARIA attributes', async ({ page }) => {
    await page.goto('/');

    const progressBars = page.locator('[role="progressbar"]');
    const count = await progressBars.count();

    for (let i = 0; i < count; i++) {
      const bar = progressBars.nth(i);
      // Progress bars should have value attributes
      await expect(bar).toHaveAttribute('aria-valuenow', /.+/);
    }
  });

  test('buttons have accessible names', async ({ page }) => {
    await page.goto('/');

    const buttons = page.locator('button');
    const count = await buttons.count();

    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i);
      const ariaLabel = await button.getAttribute('aria-label');
      const textContent = await button.textContent();
      const title = await button.getAttribute('title');

      // Button should have some accessible name
      expect(ariaLabel || textContent?.trim() || title).toBeTruthy();
    }
  });
});

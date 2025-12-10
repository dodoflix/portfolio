import { test, expect } from '@playwright/test';

test.describe('Internationalization', () => {
  test('default language is English', async ({ page }) => {
    await page.goto('/');

    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });

  test('can switch to Turkish', async ({ page }) => {
    await page.goto('/');

    // Click language switcher
    const langSwitcher = page.getByTestId('language-switcher');
    await langSwitcher.click();

    // Select Turkish (click on Türkçe text)
    await page.getByText('Türkçe').click();

    // URL should change to /tr
    await expect(page).toHaveURL(/\/tr/);
  });

  test('Turkish route works', async ({ page }) => {
    await page.goto('/tr');

    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'tr');
  });

  test('English route works', async ({ page }) => {
    await page.goto('/en');

    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });
});

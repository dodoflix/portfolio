import { test, expect } from '@playwright/test';

test.describe('404 Page', () => {
  test('shows 404 for invalid route', async ({ page }) => {
    await page.goto('/en/invalid-page-that-does-not-exist');

    await expect(page.getByText('404')).toBeVisible();
  });

  test('has navigation back option', async ({ page }) => {
    await page.goto('/en/invalid-page');

    // Should have some way to go back/home
    const button = page.getByRole('button').or(page.getByRole('link'));
    await expect(button.first()).toBeVisible();
  });
});

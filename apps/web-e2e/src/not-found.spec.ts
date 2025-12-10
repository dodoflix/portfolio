import { test, expect } from '@playwright/test';

test.describe('404 Page', () => {
  test('shows 404 for invalid route', async ({ page }) => {
    await page.goto('/invalid-page-that-does-not-exist');

    // Should show 404 text
    await expect(page.getByText('404')).toBeVisible();
  });

  test('has back home link', async ({ page }) => {
    await page.goto('/invalid-page');

    const homeLink = page.locator('a[href="/"]');
    await expect(homeLink).toBeVisible();
  });

  test('has go back button', async ({ page }) => {
    await page.goto('/invalid-page');

    const backButton = page.getByRole('button', { name: /go back/i });
    await expect(backButton).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    await page.goto('/invalid-page');

    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('back home link works', async ({ page }) => {
    await page.goto('/invalid-page');

    await page.click('a[href="/"]');
    await expect(page).toHaveURL(/\/$/);
  });
});


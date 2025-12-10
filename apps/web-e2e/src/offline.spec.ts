import { test, expect } from '@playwright/test';

test.describe('Offline Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/en/offline');
  });

  test('shows offline title', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /offline/i })).toBeVisible();
  });

  test('has try again button', async ({ page }) => {
    const tryAgain = page.getByRole('button', { name: /try|retry/i });
    await expect(tryAgain).toBeVisible();
  });

  test('has home link', async ({ page }) => {
    const homeLink = page.getByRole('link', { name: /home/i });
    await expect(homeLink).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });
});

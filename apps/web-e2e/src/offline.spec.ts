import { test, expect } from '@playwright/test';

test.describe('Offline Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/offline');
  });

  test('shows offline title', async ({ page }) => {
    await expect(page.getByText("You're Offline")).toBeVisible();
  });

  test('shows troubleshooting tips', async ({ page }) => {
    await expect(page.getByText('Things to try:')).toBeVisible();
    await expect(page.getByText(/Check your Wi-Fi/)).toBeVisible();
  });

  test('has try again button', async ({ page }) => {
    const tryAgain = page.getByRole('button', { name: /try again/i });
    await expect(tryAgain).toBeVisible();
  });

  test('has home link', async ({ page }) => {
    const homeLink = page.getByRole('link', { name: /go home/i });
    await expect(homeLink).toHaveAttribute('href', '/');
  });

  test('has theme toggle', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });
});


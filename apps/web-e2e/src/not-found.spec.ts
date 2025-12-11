import { test, expect } from '@playwright/test';

test.describe('404 Page', () => {
  test('shows 404 for invalid route', async ({ page }) => {
    await page.goto('/en/invalid-page-that-does-not-exist');

    await expect(page.getByText('404')).toBeVisible();
  });

  test('has page title', async ({ page }) => {
    await page.goto('/en/invalid-page');

    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();
  });

  test('has description text', async ({ page }) => {
    await page.goto('/en/invalid-page');

    // StatusPage shows description - look for the paragraph
    const description = page.locator('p').filter({ hasText: /exist|moved/i });
    await expect(description.first()).toBeVisible();
  });

  test('has navigation back option', async ({ page }) => {
    await page.goto('/en/invalid-page');

    // Should have buttons for navigation
    const homeLink = page.getByRole('link');
    const backButton = page.getByRole('button', { name: /back/i });
    
    await expect(homeLink.or(backButton).first()).toBeVisible();
  });

  test('has home link', async ({ page }) => {
    await page.goto('/en/invalid-page');

    const homeLink = page.getByRole('link', { name: /home/i });
    await expect(homeLink).toBeVisible();
  });

  test('has go back button', async ({ page }) => {
    await page.goto('/en/invalid-page');

    const backButton = page.getByRole('button', { name: /go back/i });
    await expect(backButton).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    await page.goto('/en/invalid-page');

    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('is centered on screen', async ({ page }) => {
    await page.goto('/en/invalid-page');

    // StatusPage uses FullCenter - check for centered flex container
    const container = page.locator('.items-center.justify-center').first();
    await expect(container).toBeVisible();
  });
});

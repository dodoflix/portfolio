import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navbar is fixed at top', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav').first();
    await expect(nav).toHaveCSS('position', 'fixed');
  });

  test('navbar has blur effect', async ({ page }) => {
    await page.goto('/');

    const nav = page.locator('nav').first();
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

  test('side navigation is visible on desktop', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1280, height: 720 });

    // SectionNav is a fixed nav element
    const sideNav = page.locator('nav.fixed.left-6');
    await expect(sideNav).toBeVisible();
  });

  test('side navigation is hidden on mobile', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 375, height: 667 });

    // SectionNav should be hidden on mobile (lg:block)
    const sideNav = page.locator('nav.fixed.left-6');
    await expect(sideNav).toBeHidden();
  });

  test('clicking side nav scrolls to section', async ({ page }) => {
    await page.goto('/');
    await page.setViewportSize({ width: 1280, height: 720 });

    // Click on a section button in the side nav
    const sideNavButton = page.locator('nav.fixed.left-6 button').first();
    await sideNavButton.click();

    // Wait for scroll
    await page.waitForTimeout(500);

    // First section (about) should be in viewport
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeInViewport();
  });

  test('footer links are visible', async ({ page }) => {
    await page.goto('/');

    const footer = page.locator('footer');
    const links = footer.locator('a');
    await expect(links.first()).toBeVisible();
  });
});

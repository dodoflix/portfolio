import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has navigation', async ({ page }) => {
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
  });

  test('has logo', async ({ page }) => {
    const logo = page.locator('nav a').first();
    await expect(logo).toBeVisible();
  });

  test('has theme toggle', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await expect(themeToggle).toBeVisible();
  });

  test('has language switcher', async ({ page }) => {
    const langSwitcher = page.getByTestId('language-switcher');
    await expect(langSwitcher).toBeVisible();
  });

  test('has hero section', async ({ page }) => {
    const hero = page.locator('section').first();
    await expect(hero).toBeVisible();
  });

  test('has about section', async ({ page }) => {
    const about = page.locator('#about');
    await expect(about).toBeVisible();
  });

  test('has projects section', async ({ page }) => {
    const projects = page.locator('#projects');
    await expect(projects).toBeVisible();
  });

  test('has skills section', async ({ page }) => {
    const skills = page.locator('#skills');
    await expect(skills).toBeVisible();
  });

  test('has contact section', async ({ page }) => {
    const contact = page.locator('#contact');
    await expect(contact).toBeVisible();
  });

  test('has footer', async ({ page }) => {
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
  });

  test('nav links scroll to sections', async ({ page }) => {
    await page.click('nav a[href="#about"]');
    await expect(page.locator('#about')).toBeInViewport();
  });

  test('theme toggle opens menu', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await themeToggle.click();

    // Menu should open with options
    await expect(page.getByText('Dark')).toBeVisible();
  });
});

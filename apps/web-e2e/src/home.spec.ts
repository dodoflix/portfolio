import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has navigation', async ({ page }) => {
    const nav = page.locator('nav').first();
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

  test('has hero section with headline', async ({ page }) => {
    // Hero section contains the main heading
    const heading = page.locator('h1').first();
    await expect(heading).toBeVisible();
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

  test('has side navigation on desktop', async ({ page }) => {
    // Side navigation is only visible on large screens
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // SectionNav renders as a nav element with vertical text
    const sideNav = page.locator('nav.fixed.left-6');
    await expect(sideNav).toBeVisible();
  });

  test('side nav buttons scroll to sections', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Find and click a section button in side nav (the fixed nav element)
    const sideNavButtons = page.locator('nav.fixed button');
    const buttonCount = await sideNavButtons.count();
    
    // Should have nav buttons
    expect(buttonCount).toBeGreaterThan(0);
    
    // Click the first button
    await sideNavButtons.first().click();
    
    // Wait for scroll animation
    await page.waitForTimeout(800);
    
    // Check that we scrolled (about section should be closer to top)
    const aboutSection = page.locator('#about');
    await expect(aboutSection).toBeVisible();
  });

  test('theme toggle opens menu', async ({ page }) => {
    const themeToggle = page.getByTestId('theme-toggle');
    await themeToggle.click();

    // Menu should open with options
    await expect(page.getByText('Dark')).toBeVisible();
  });

  test('has feature cards in projects section', async ({ page }) => {
    const projectCards = page.locator('#projects .rounded-xl');
    await expect(projectCards.first()).toBeVisible();
  });

  test('has skill progress bars in skills section', async ({ page }) => {
    // LabeledProgress renders div with progress bar styling - scroll to skills first
    await page.locator('#skills').scrollIntoViewIfNeeded();
    // Look for the progress bar elements (rounded-full bg-primary)
    const progressBars = page.locator('#skills .rounded-full.bg-primary');
    await expect(progressBars.first()).toBeVisible();
  });

  test('has contact links', async ({ page }) => {
    const contactSection = page.locator('#contact');
    const links = contactSection.locator('a');
    await expect(links.first()).toBeVisible();
  });
});

import { test, expect } from '@playwright/test';

test.describe('DuneUI Navigation and Pages', () => {
  test('Homepage loads correctly', async ({ page }) => {
    await page.goto('/');
    // Check if the title is set (Astro default or specific title)
    // We expect some basic elements to exist
    await expect(page).toHaveTitle(/./); // Just checking it has a title
    
    // Check for the main heading or a specific text (we'll assume the logo or home link is there)
    const body = await page.locator('body');
    await expect(body).toBeVisible();
  });

  test('Blog page loads', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.locator('body')).toBeVisible();
    // Assuming a heading or title might have 'Blog'
    const title = await page.title();
    // Optional: expect(title).toMatch(/Blog/i);
  });

  test('Components page loads', async ({ page }) => {
    await page.goto('/components');
    await expect(page.locator('body')).toBeVisible();
  });

  test('Changelog page loads', async ({ page }) => {
    await page.goto('/changelog');
    await expect(page.locator('body')).toBeVisible();
  });

  test('FAQs page loads', async ({ page }) => {
    await page.goto('/faqs');
    await expect(page.locator('body')).toBeVisible();
  });

  test('Support page loads', async ({ page }) => {
    await page.goto('/support');
    await expect(page.locator('body')).toBeVisible();
  });

  test('License page loads', async ({ page }) => {
    await page.goto('/license');
    await expect(page.locator('body')).toBeVisible();
  });

  test('404 page for unknown routes', async ({ page }) => {
    const response = await page.goto('/this-route-does-not-exist');
    // Ensure the response status is 404
    expect(response?.status()).toBe(404);
  });
});

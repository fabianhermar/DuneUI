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

  test('Documentation page loads and interactive tabs switch', async ({ page }) => {
    await page.goto('/docs');
    await expect(page).toHaveTitle(/Documentation/i);
    await expect(page.getByRole('heading', { name: /Installing Tailwind CSS/i })).toBeVisible();

    const postcssTab = page.getByRole('tab', { name: /Using PostCSS/i });
    await expect(async () => {
      await postcssTab.click();
      await expect(postcssTab).toHaveAttribute('aria-selected', 'true');
    }).toPass();
    await expect(page.getByText('postcss.config.mjs')).toBeVisible();

    const pnpmBtn = page.getByRole('button', { name: 'pnpm', exact: true }).first();
    await pnpmBtn.click();
    await expect(page.getByText(/pnpm add tailwindcss @tailwindcss\/postcss postcss/)).toBeVisible();
    await expect(page.getByText(/pnpm astro add tailwind/)).toBeVisible();

    const astroManualTab = page.getByRole('tab', { name: /Manual Setup/i });
    await astroManualTab.click();
    await expect(astroManualTab).toHaveAttribute('aria-selected', 'true');
    await expect(page.getByText('astro.config.mjs', { exact: true })).toBeVisible();
  });

  test('404 page for unknown routes', async ({ page }) => {
    const response = await page.goto('/this-route-does-not-exist');
    // Ensure the response status is 404
    expect(response?.status()).toBe(404);
  });
});

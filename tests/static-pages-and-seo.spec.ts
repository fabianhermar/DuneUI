import { test, expect } from '@playwright/test';

const CORE_ROUTES = [
  '/',
  '/components',
  '/css',
  '/templates',
  '/icons',
  '/docs',
  '/changelog',
  '/faqs',
  '/support',
  '/license',
];

test.describe('Static Pages, SEO Metadata & Core Interactions', () => {
  for (const route of CORE_ROUTES) {
    test(`route ${route} responds 200 with valid SEO metadata and zero runtime errors`, async ({
      page,
    }) => {
      const pageErrors: string[] = [];
      page.on('pageerror', (err) => pageErrors.push(err.message));

      const response = await page.goto(route);
      expect(response?.status()).toBe(200);

      const title = await page.title();
      expect(title.trim().length).toBeGreaterThan(3);

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute('content');
      expect((description || '').trim().length).toBeGreaterThan(10);

      await expect(page.locator('h1').first()).toBeVisible();
      expect(pageErrors).toEqual([]);
    });
  }

  test('FAQ accordion items expand and collapse interactively', async ({ page }) => {
    await page.goto('/faqs');
    const firstTrigger = page.locator('.faq-trigger').first();
    await expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');

    await firstTrigger.click();
    await expect(firstTrigger).toHaveAttribute('aria-expanded', 'true');

    await firstTrigger.click();
    await expect(firstTrigger).toHaveAttribute('aria-expanded', 'false');
  });

  test('Changelog index links to release detail pages', async ({ page }) => {
    await page.goto('/changelog');
    const releaseLink = page.locator('main a[href^="/changelog/"]').first();
    await expect(releaseLink).toBeVisible();
    await releaseLink.click();
    await expect(page).toHaveURL(/\/changelog\/.+/);
    await expect(page.locator('main')).toBeVisible();
  });
});

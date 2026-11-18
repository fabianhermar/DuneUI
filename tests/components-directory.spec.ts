import { test, expect } from '@playwright/test';

test.describe('Components Directory & Category Routes', () => {
  test('renders all 59 categories and filters by search query and tag', async ({ page }) => {
    await page.goto('/components');

    const gridLinks = page.locator('#directory-grid a');
    const totalCards = await gridLinks.count();
    expect(totalCards).toBeGreaterThanOrEqual(59);

    // Search filter
    const searchInput = page.locator('#directory-search');
    await searchInput.fill('footer');
    const visibleAfterSearch = page.locator('#directory-grid a:visible');
    await expect(visibleAfterSearch).toHaveCount(1);
    await expect(visibleAfterSearch.first()).toHaveAttribute('href', '/components/footer');

    // Clear search restores all categories
    await searchInput.fill('');
    await expect(page.locator('#directory-grid a:visible')).toHaveCount(totalCards);

    // Filter by Commerce tag
    const commerceTag = page.locator('#directory-tags button[data-tag="Commerce"]');
    await commerceTag.click();
    const visibleCommerce = await page.locator('#directory-grid a:visible').count();
    expect(visibleCommerce).toBeGreaterThanOrEqual(5);
    expect(visibleCommerce).toBeLessThan(totalCards);

    // Reset back to All
    await page.locator('#directory-tags button[data-tag="All"]').click();
    await expect(page.locator('#directory-grid a:visible')).toHaveCount(totalCards);
  });

  test('navigates across application-ui, marketing, and ecommerce category pages cleanly', async ({
    page,
  }) => {
    const sampleRoutes = [
      { path: '/components/alerts', heading: /Alerts/i },
      { path: '/components/heroes', heading: /Hero Sections/i },
      { path: '/components/shopping-carts', heading: /Shopping Carts/i },
    ];

    for (const route of sampleRoutes) {
      const pageErrors: string[] = [];
      page.on('pageerror', (err) => pageErrors.push(err.message));

      const response = await page.goto(route.path);
      expect(response?.status()).toBe(200);
      await expect(page.getByRole('heading', { level: 1, name: route.heading })).toBeVisible();
      await expect(page.locator('main section')).toHaveCount(10);
      await expect(page.locator('main section').first().locator('iframe')).toBeVisible({
        timeout: 15_000,
      });
      expect(pageErrors).toEqual([]);
    }
  });

  test('supports sibling category pagination between families', async ({ page }) => {
    await page.goto('/components/accordion');
    const pagination = page.getByRole('navigation', { name: 'Category pagination' });
    const nextLink = pagination.getByRole('link', { name: /Next Family/i });
    await expect(nextLink).toHaveAttribute('href', '/components/alerts');

    // Scroll to footer pagination; retry click if lazy iframe height expansion shifts the link mid-scroll
    await expect(async () => {
      await nextLink.scrollIntoViewIfNeeded();
      await nextLink.click();
      await expect(page).toHaveURL(/\/components\/alerts\/?$/, { timeout: 8_000 });
    }).toPass({ timeout: 20_000 });

    await expect(page.getByRole('heading', { level: 1, name: /Alerts/i })).toBeVisible({
      timeout: 15_000,
    });

    const prevLink = page
      .getByRole('navigation', { name: 'Category pagination' })
      .getByRole('link', { name: /Previous Family/i });
    await expect(prevLink).toHaveAttribute('href', '/components/accordion');
  });
});

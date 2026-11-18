import { test, expect } from '@playwright/test';

test.describe('ComponentPreview Interaction', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/accordion');
    // Wait for the eager first ComponentPreview island to hydrate before clicking controls
    await expect(page.locator('main section').first().locator('iframe')).toBeVisible({
      timeout: 15_000,
    });
  });

  test('Toggles between Preview and Code tabs with pre-highlighted Shiki code', async ({ page }) => {
    const firstSection = page.locator('main section').first();
    const codeButton = firstSection.getByRole('button', { name: /Code/i });
    const previewButton = firstSection.getByRole('button', { name: /Preview/i });
    const preBlock = firstSection.locator('pre.astro-code');

    await expect(preBlock).toBeHidden();

    await codeButton.click();
    await expect(preBlock).toBeVisible();

    await previewButton.click();
    await expect(preBlock).toBeHidden();
  });

  test('Changes viewport width', async ({ page }) => {
    const firstSection = page.locator('main section').first();
    const mobileButton = firstSection.getByRole('button', { name: 'MOBILE' });
    await mobileButton.click();

    const resizableDiv = firstSection.locator('.transition-\\[width\\]').first();
    await expect(resizableDiv).toHaveCSS('width', '375px');
  });

  test('Copies code to clipboard', async ({ page, context, browserName }) => {
    if (browserName === 'chromium') {
      await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    }

    const firstSection = page.locator('main section').first();
    const copyButton = firstSection.locator('button', { hasText: /Copy|Copied/i });
    await copyButton.click();

    await expect(copyButton).toContainText('Copied');
  });

  test('Switches stage backdrop theme without reloading iframe', async ({ page }) => {
    const firstSection = page.locator('main section').first();
    const iframe = firstSection.locator('iframe');
    await expect(iframe).toBeVisible();

    await firstSection.getByRole('button', { name: 'Dark stage' }).click();
    await expect
      .poll(() =>
        iframe.evaluate((el: HTMLIFrameElement) =>
          el.contentDocument?.documentElement.classList.contains('dark')
        )
      )
      .toBe(true);
  });

  test('Lazily mounts iframes for below-the-fold components', async ({ page }) => {
    const totalSections = await page.locator('main section').count();
    expect(totalSections).toBe(10);

    const initialIframes = await page.locator('main iframe').count();
    expect(initialIframes).toBeLessThan(totalSections);

    const lastSection = page.locator('main section').last();
    await lastSection.scrollIntoViewIfNeeded();
    await expect(lastSection.locator('iframe')).toBeVisible();
  });
});

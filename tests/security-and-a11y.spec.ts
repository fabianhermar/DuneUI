import { test, expect } from '@playwright/test';

const AUDIT_ROUTES = [
  '/',
  '/components',
  '/components/accordion',
  '/icons',
  '/faqs',
  '/support',
];

test.describe('Runtime Security & Accessibility Checks', () => {
  for (const route of AUDIT_ROUTES) {
    test(`security and accessibility baseline on ${route}`, async ({ page }) => {
      const consoleErrors: string[] = [];
      const pageErrors: string[] = [];

      page.on('console', (msg) => {
        if (msg.type() === 'error') consoleErrors.push(msg.text());
      });
      page.on('pageerror', (err) => pageErrors.push(err.message));

      await page.goto(route);

      // HTML lang attribute & semantic landmarks
      await expect(page.locator('html')).toHaveAttribute('lang', 'en');
      await expect(page.locator('header').first()).toBeVisible();
      await expect(page.locator('main').first()).toBeVisible();
      await expect(page.locator('footer').first()).toBeVisible();

      // Every external target="_blank" link must include noopener and noreferrer
      const unsafeLinks = await page.evaluate(() => {
        const bad: string[] = [];
        document.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]').forEach((a) => {
          const rel = (a.getAttribute('rel') || '').toLowerCase();
          if (!rel.includes('noopener') || !rel.includes('noreferrer')) {
            bad.push(`${a.href} (rel="${rel}")`);
          }
        });
        return bad;
      });
      expect(unsafeLinks).toEqual([]);

      // Visible images must define alt text and load without broken dimensions
      const brokenImages = await page.evaluate(() => {
        const issues: string[] = [];
        document.querySelectorAll<HTMLImageElement>('img').forEach((img) => {
          const style = window.getComputedStyle(img);
          if (style.display === 'none' || style.visibility === 'hidden') return;
          if (img.getAttribute('alt') === null) {
            issues.push(`Missing alt on ${img.src}`);
          }
          if (img.complete && img.naturalWidth === 0) {
            issues.push(`Broken image ${img.src}`);
          }
        });
        return issues;
      });
      expect(brokenImages).toEqual([]);

      expect(pageErrors).toEqual([]);
      expect(consoleErrors).toEqual([]);
    });
  }

  test('ComponentPreview iframes enforce sandbox restrictions', async ({ page }) => {
    await page.goto('/components/accordion');
    const firstIframe = page.locator('main section').first().locator('iframe');
    await expect(firstIframe).toBeVisible({ timeout: 15_000 });

    const sandbox = (await firstIframe.getAttribute('sandbox')) || '';
    expect(sandbox).toContain('allow-scripts');
    expect(sandbox).toContain('allow-same-origin');
    expect(sandbox).not.toContain('allow-top-navigation');
    expect(sandbox).not.toContain('allow-popups');
    expect(sandbox).not.toContain('allow-modals');
  });
});

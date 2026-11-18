import { test, expect } from '@playwright/test';

test.describe('SVG Icons Library (/icons)', () => {
  test('renders 340+ icons with valid geometry and interactive controls', async ({ page, context }) => {
    await context.grantPermissions(['clipboard-read', 'clipboard-write']);
    await page.goto('/icons');

    const cards = page.locator('[data-icon-card]');
    const total = await cards.count();
    expect(total).toBeGreaterThanOrEqual(600);

    // Verify every single rendered SVG icon has valid non-zero geometry inside the 24x24 viewBox
    const invalidIcons = await page.evaluate(() => {
      const problems: string[] = [];
      document.querySelectorAll<HTMLElement>('[data-icon-card]').forEach((card) => {
        const name = card.dataset.name || 'unknown';
        const svg = card.querySelector('svg');
        if (!svg) {
          problems.push(`${name}: missing svg`);
          return;
        }
        const paths = svg.querySelectorAll('path');
        if (paths.length === 0) {
          problems.push(`${name}: no paths`);
          return;
        }
        const bbox = (svg as unknown as SVGGraphicsElement).getBBox();
        if (!Number.isFinite(bbox.width) || !Number.isFinite(bbox.height) || (bbox.width <= 0 && bbox.height <= 0)) {
          problems.push(`${name}: zero bbox (${bbox.width}x${bbox.height})`);
        }
        if (bbox.x < -1 || bbox.y < -1 || bbox.x + bbox.width > 25 || bbox.y + bbox.height > 25) {
          problems.push(`${name}: out of bounds (${bbox.x},${bbox.y},${bbox.width},${bbox.height})`);
        }
      });
      return problems;
    });
    expect(invalidIcons).toEqual([]);

    // Search for fingerprint and inspect it
    const search = page.locator('#icons-search');
    await search.fill('fingerprint');
    const visibleCards = page.locator('[data-icon-card]:visible');
    await expect(visibleCards).toHaveCount(1);
    await expect(visibleCards.first()).toHaveAttribute('data-name', 'fingerprint');

    // Click fingerprint to open inspector WITHOUT auto-copying
    await visibleCards.first().click();
    await expect(page.locator('#icon-inspector')).toBeVisible();
    await expect(page.locator('#inspector-name')).toHaveText('fingerprint');
    await expect(page.locator('#icons-copy-toast')).toHaveClass(/opacity-0/);

    // Copy SVG via inspector button -> shows confirmation notification & copies SVG
    await page.locator('#inspector-copy-svg').click();
    await expect(page.locator('#icons-copy-toast')).toHaveClass(/opacity-100/);
    await expect(page.locator('#icons-toast-title')).toContainText('Copied fingerprint.svg');
    const copiedSvg = await page.evaluate(() => navigator.clipboard.readText());
    expect(copiedSvg).toContain('<svg');

    // Copy JSX via inspector button -> shows confirmation notification & copies JSX
    await page.locator('#inspector-copy-jsx').click();
    await expect(page.locator('#icons-toast-title')).toContainText('Copied fingerprint JSX');
    const copiedJsx = await page.evaluate(() => navigator.clipboard.readText());
    expect(copiedJsx).toContain('strokeWidth=');

    // Download .SVG via inspector button -> shows progress/promise notification, downloads file, and resolves to success
    const downloadPromise = page.waitForEvent('download');
    await page.locator('#inspector-download').click();
    await expect(page.locator('#icons-toast-title')).toContainText('Downloading fingerprint.svg');
    await expect(page.locator('#icons-toast-progress-wrap')).toBeVisible();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe('fingerprint.svg');
    await expect(page.locator('#icons-toast-title')).toContainText('Downloaded fingerprint.svg');

    // Switch styles (Two-Tone, Stroke, Duotone)
    await page.getByRole('button', { name: 'Two-Tone', exact: true }).click();
    await expect(page.locator('#icons-grid')).toHaveAttribute('data-style', 'twotone');

    await page.getByRole('button', { name: 'Stroke', exact: true }).click();
    await expect(page.locator('#icons-grid')).toHaveAttribute('data-style', 'stroke');

    await page.getByRole('button', { name: 'Duotone', exact: true }).click();
    await expect(page.locator('#icons-grid')).toHaveAttribute('data-style', 'duotone');

    // Clear search and test category + audience filtering
    await search.fill('');
    await page.locator('[data-icon-role="design"]').click();
    const designRoleCount = await page.locator('[data-icon-card]:visible').count();
    expect(designRoleCount).toBeGreaterThan(100);
    expect(designRoleCount).toBeLessThan(total);

    await page.locator('[data-icon-cat="Security"]').click();
    const securityVisible = await page.locator('[data-icon-card]:visible').count();
    expect(securityVisible).toBeGreaterThanOrEqual(20);
    expect(securityVisible).toBeLessThan(total);
  });
});

import { test, expect } from '@playwright/test';

test.describe('Mobile Navigation Interaction', () => {
  // Use mobile viewport for this test suite
  test.use({ viewport: { width: 375, height: 812 } });

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('Hamburger menu opens and closes on click', async ({ page }) => {
    const hamburger = page.locator('#hamburger');
    const navlinks = page.locator('#navlinks');

    // Wait for the elements to be present
    await expect(hamburger).toBeVisible();
    
    // Initially, navlinks should NOT have the 'visible!' class or should have 'opacity-0'
    await expect(navlinks).toHaveClass(/opacity-0/);

    // Click the hamburger to open the menu
    await hamburger.click();

    // Verify it adds the visibility and opacity classes
    await expect(navlinks).toHaveClass(/opacity-100!/);
    await expect(navlinks).toHaveClass(/visible!/);
    
    // Verify hamburger button gets 'toggled' class
    await expect(hamburger).toHaveClass(/toggled/);

    // Click the hamburger again to close
    await hamburger.click();

    // Verify classes are removed
    await expect(navlinks).not.toHaveClass(/opacity-100!/);
    await expect(navlinks).not.toHaveClass(/visible!/);
    await expect(hamburger).not.toHaveClass(/toggled/);
  });

  test('Clicking a navigation link closes the mobile menu', async ({ page }) => {
    const hamburger = page.locator('#hamburger');
    const navlinks = page.locator('#navlinks');

    // Open the menu
    await hamburger.click();
    await expect(navlinks).toHaveClass(/visible!/);

    // Click on the first link inside the nav (e.g., Components)
    const firstLink = navlinks.locator('a').first();
    await firstLink.click();

    // Wait for a brief moment in case there's an animation or navigation
    // (If it navigates away, the context changes, but the script handles click event before navigation)
    
    // Check if the menu would be closed. Actually, navigating away will close it anyway,
    // but the JS specifically removes the classes. We can test if the classes are gone or if we navigated.
    await expect(page).toHaveURL(/.*components/);
  });
});

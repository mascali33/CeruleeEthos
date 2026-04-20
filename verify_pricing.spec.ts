import { test, expect } from '@playwright/test';

test('pricing page logic', async ({ page }) => {
  await page.goto('http://localhost:5173/pricing');

  // Default mode is professionnel (as per my implementation)
  const slider = page.locator('input[type="range"]');
  await expect(slider).toBeVisible();

  // Switch to personnel
  await page.click('button:has-text("Personnel")');
  await expect(slider).not.toBeVisible();

  // Check price for personnel (1 user)
  // Base price 5 + Cloud 2.5 + Budget 3.0 = 10.5
  const totalPrice = page.locator('span:has-text("€10.50")');
  await expect(totalPrice).toBeVisible();

  // Switch back to professionnel
  await page.click('button:has-text("Professionnel")');
  await expect(slider).toBeVisible();
});

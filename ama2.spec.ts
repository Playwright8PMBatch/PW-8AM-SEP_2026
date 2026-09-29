import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'Bestsellers' }).click();
  await page.getByRole('link', { name: 'Astrotalk Zodiac Crystal' }).click();
  await page.locator('.a-icon.a-icon-checkbox').first().click();
  await page.getByRole('link', { name: 'Amazon' }).click();
});
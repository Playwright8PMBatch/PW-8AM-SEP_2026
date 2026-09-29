import { test, expect } from '@playwright/test';

test('fill and submit the Text Box form on demoqa.com', async ({ page }) => {
  const fullName = 'Anusha Sharma';
  const email = 'anusha@test.com';
  const currentAddress = 'Hyderabad, Telangana';
  const permanentAddress = 'Same as current';

  await page.goto('https://demoqa.com/text-box');

  await page.locator('#userName').fill(fullName);
  await page.locator('#userEmail').fill(email);
  await page.locator('#currentAddress').fill(currentAddress);
  await page.locator('#permanentAddress').fill(permanentAddress);

  await page.locator('#submit').click();

  const output = page.locator('#output');
  await expect(output).toBeVisible();
  await expect(page.locator('#output #name')).toHaveText(`Name:${fullName}`);
  await expect(page.locator('#output #email')).toHaveText(`Email:${email}`);
  await expect(page.locator('#output #currentAddress')).toHaveText(`Current Address :${currentAddress}`);
  await expect(page.locator('#output #permanentAddress')).toHaveText(`Permananet Address :${permanentAddress}`);
});

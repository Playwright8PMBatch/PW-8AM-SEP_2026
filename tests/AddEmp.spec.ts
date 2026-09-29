import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  // goto PIM
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

  await page.getByRole('textbox', { name: 'First Name' }).fill('Anusha');
  await page.getByRole('textbox', { name: 'Middle Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Trainer');

  // await page.getByRole('textbox', {name:'Employee Id'}).fill('1000');
  await page.getByLabel('Employee Id').fill('1000');

  await expect(page.getByRole('textbox').nth(4)).toBeVisible();
  await expect(page.getByRole('textbox').nth(4)).toHaveValue('0426');

  await page.getByRole('textbox').nth(5).click();

  await page.getByRole('textbox').nth(5).fill('Anusha');

  await page.locator('input[type="password"]').first().fill('Anusha123');

  await page.locator('input[type="password"]').nth(1).fill('Anusha123');
  await page.getByRole('button', { name: 'Save' }).click();


  // await page.getByRole('textbox').nth(4).click();
  // await page.getByRole('textbox').nth(4).fill('1000');
  // await page.getByRole('button', { name: 'Save' }).click();
  // await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  // await page.getByRole('option', { name: 'Indian' }).click();
  // await page.getByText('-- Select --').first().click();
  // await page.getByRole('option', { name: 'Married' }).click();
  // await page.locator('div:nth-child(5) > div:nth-child(2) > div > .oxd-input-group > div:nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-icon').click();
  // await page.getByText('September').click();
  // await page.getByText('March').click();
  // await page.getByText('2026', { exact: true }).click();
  // await page.getByText('2000').click();
  // await page.getByText('10').click();
  // await page.locator('div:nth-child(2) > div:nth-child(2) > .oxd-radio-wrapper > label > .oxd-radio-input').click();
  // await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  // await page.locator('form').filter({ hasText: 'Blood Type-- Select --' }).getByRole('button').click();
  // await page.getByText('pavan user').click();
  // await page.getByRole('menuitem', { name: 'Logout' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).click();
  // await page.getByRole('textbox', { name: 'Username' }).fill('Anusha');
  // await page.getByRole('textbox', { name: 'Username' }).press('Tab');
  // await page.getByRole('textbox', { name: 'Password' }).fill('Anusha123');
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.locator('span').filter({ hasText: 'Anusha Trainer' }).click();
  // await expect(page.getByText('Anusha Trainer')).toBeVisible();
});
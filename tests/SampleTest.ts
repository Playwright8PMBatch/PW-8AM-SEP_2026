import {test,expect} from '@playwright/test';

test('Sample Test', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const title = await page.title();
  expect(title).toBe('Checkboxes');
}); 
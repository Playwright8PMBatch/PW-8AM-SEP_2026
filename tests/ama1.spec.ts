import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByLabel('Select the department you').selectOption('search-alias=baby');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('girls');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).press('Enter');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Apply the filter Get It Today' }).click();
  await page.getByRole('link', { name: 'Apply the filter Get It by' }).click();
  await page.getByText('You pay ₹').nth(1).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Kids Phone – Rechargeable Toy' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/Kids-Phone-Rechargeable-Learning-Educational/dp/B0GSZ14C55/ref=sr_1_8_mod_primary_new?dd=hMQCxdcKMBmMWbzFA5Yg9w%2C%2C&dib=eyJ2IjoiMSJ9.7-Xaub21w3d2GaJ9T-UqfJO0wPzJKSjmYtWO14g7TlBJhDjSrnUC0aNvA4jDKegi9EdIWa0z9kYPMhsfz8aP-lrNCqD_hwPFPpwBOTlY7_wVsR_JanmItw-fNU_F7qGooEN5wu-NS8YlZhoEDnJKmKOAmELufAqZebzUDnSC-afS2E8gnB0fpsZ9_mtHHI8ly92KB9KzGOWDEbTioeKMpGU43QyvYsvaBsVKQ6NWa-kBDKmFQ0pmKKK4ueE88ucvWWeA0PtFdsoSdi4x_3DfxhifSDDgFsx8sqDNXwc_VRA.BbR4qZ_M9ny65ixHY4KIXq78nsO8fF79t_NLQ0JitPk&dib_tag=se&keywords=girls&qid=1788924289&refinements=p_90%3A6741118031&rnid=6741116031&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=8-8&th=1');
  await page1.locator('.a-checkbox.a-checkbox-fancy > label > .a-icon').first().click();
  await page1.getByRole('button', { name: 'Continue' }).click();
  await expect(page1.getByText('Enter your mobile number or')).toBeVisible();
  await page1.getByRole('link', { name: 'Amazon' }).click();
  await page1.goto('https://www.amazon.in/ref=ap_frn_logo');
});
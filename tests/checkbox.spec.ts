import {test, expect} from '@playwright/test'

test('verify checkbox', async({page})=>{
    test.slow(); //default time*3x wait
    await page.goto('https://the-internet.herokuapp.com/checkboxes',);

    // verify title:
    await expect(page.getByRole('heading', {name: 'Checkboxes'})).toBeVisible({timeout: 4000});
    await expect(page.getByRole('heading', {name: 'Checkboxes'})).toHaveText('Checkboxes');

    // click on First checkbox;
    await expect.soft(page.locator('[type="checkbox"]').first()).toBeVisible();

    await page.locator('[type="checkbox"]').first().check();
    await page.locator('[type="checkbox"]').nth(1).check();

    await page.waitForTimeout(5000);

    // verify the checkboxes are selected or not
    await expect(page.locator('[type="checkbox"]').first()).toBeChecked();
    await expect(page.locator('[type="checkbox"]').nth(1)).toBeChecked();

    // uncheck the checkboxes
    await page.locator('[type="checkbox"]').first().uncheck();
    await page.locator('[type="checkbox"]').nth(1).uncheck();

});

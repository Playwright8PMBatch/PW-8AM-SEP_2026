import {test, expect} from '@playwright/test'
import path from 'node:path';
    
test.use({
        screenshot:'on',
        video:'on',
        trace:'on'
    })

test.describe("debug testcase", ()=>{

test('capture the screenshot', async({page})=>{
    await page.goto('https://www.amazon.in/');

    await expect(page.getByPlaceholder('Search Amazon.in')).toBeVisible();

    // full page screenshot:
    await page.screenshot({
        path:'files/fullpage1.jpg',
        fullPage:true
    });

    await page.waitForTimeout(5000)
})

test('capture the screenshot Demo Webshop', async({page})=>{
    await page.goto('https://demowebshop.tricentis.com');

    await expect(page.locator('#small-searchterms')).toBeVisible();

    await page.locator('#small-searchterms').screenshot({path:'files/searchtextbox.jpg'});
    // full page screenshot:
    await page.screenshot({
        path:'files/fullpage1.jpg',
        fullPage:true
    });

    await page.waitForTimeout(5000)
})

});


test('capture the screenshot', async({page})=>{
    test.use({
        screenshot: 'on',
        video:'on',
        trace:'on'
    });
    await page.goto('https://www.amazon.in/');

    await expect(page.getByPlaceholder('Search Amazon.in')).toBeVisible();

    // full page screenshot:
    await page.screenshot({
        path:'files/fullpage1.jpg',
        fullPage:true
    });

    await page.waitForTimeout(5000)
})

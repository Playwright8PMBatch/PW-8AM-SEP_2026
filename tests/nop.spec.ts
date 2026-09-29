import {test, expect} from '@playwright/test';

test('nop playwright inbuilt locators', async ({page}) => {
    await page.goto("https://demowebshop.tricentis.com");

    // Click on Register link
    const registerlink = page.getByRole('link', {name: 'Register'});
    await registerlink.click();

    await page.getByRole('link', {name: 'Register'}).click();

    await expect(page.getByRole('link', {name: 'Register'})).toBeVisible();
    await expect(registerlink).toBeVisible();

    // get By Label Locator
    await page.getByLabel('Email:').fill('Anusha@gmail.com');
    
    //  getBy text (visible Text)
    // await expect(page.getByText('$1,200.00')).toBeVisible();

    // get By ALt Text (attribute)
    await page.getByAltText('Tricentis Demo Web Shop').click();

    // get By Placeholder (attribute)
    await page.getByPlaceholder('Search store').fill('Books');

    // getByTitle (Attribute)
    await page.getByTitle('Home').click();

    // getByRole
    await expect(page.getByRole('heading',{name:'Electronics'})).toBeVisible();

    // getByTestID (attribute)
    /* 
    Developer
    <button data-testid = "login">Loign</Button>
    <button data-testid = "user-login">Loign</Button>

    duplicates --> unique
    index. 
    */
   
    await page.getByTestId('user-login').click();

    await page.getByRole("button", {name: 'Add to cart'}).first().click();
    await page.getByRole("button", {name: 'Add to cart'}).nth(3).click();
     
});



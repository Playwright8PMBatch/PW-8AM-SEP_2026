import {test, expect} from '@playwright/test';

test("Parabank Registration",async({page})=>{
    test.setTimeout(50000);
    // launch application
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');

    // click on Register
    await page.getByRole('link', {name: 'Register'}).click({timeout:3000}); //auto waiting

    await page.getByRole('link', {name: 'Register'}).click({force:true}); //avoid auto waiting 
    
    // verify signup page
    const signup = page.getByRole('heading', {name: 'Signing up is easy!'});
    await expect(signup).toBeVisible();

    //soft assertions
    await expect.soft(page.getByRole('heading', {name: 'Signing up is easy!'})).toBeVisible({timeout: 8000});
    await expect.soft(page.getByRole('heading', {name: 'Signing up is easy!'})).toHaveText('Signing up is');
    await expect.soft(page.getByRole('heading', {name: 'Signing up is easy!'})).not.toBeVisible();
    // Hard assertion
    await expect(page.getByRole('heading', {name: 'Signing up is easy!'})).toBeVisible();
    // await expect(page.getByRole('heading', {name: 'Signing up is easy!'})).toHaveText('Signing up is');

    // Enter Registration Details:
    // await page.getByRole('textbox', {name: 'First Name'}).fill('Anusha');
    
    // CSS Locators (Id, Class)
    let name = page.locator('[name= "customer.firstName"]').waitFor({state:'visible'});
    await page.waitForTimeout(2000);
    await name.fill('Anusha');
    await page.locator('[name= "customer.lastName"]').fill('Playwright',{timeout: 3000});
    await page.locator('[name= "customer.address.street"]').fill('Hyderabad');
    await page.locator('[name= "customer.address.city"]').fill('HYD');
    await page.locator('[name= "customer.address.state"]').fill('TS');
    await page.locator('[name= "customer.address.zipCode"]').fill('777777');
    await page.locator('[name= "customer.phoneNumber"]').fill('9876543211');
    await page.locator('[name= "customer.ssn"]').fill('111');
    await page.locator('[name= "customer.username"]').fill('Anusha112');
    await page.locator('[name= "customer.password"]').fill('Anusha');
    await page.locator('[name= "repeatedPassword"]').fill('Anusha');

    await page.locator('.button[value="Register"]').click();

    await page.waitForTimeout(5000);
});

test('ParaBank login Funtionality', async({page})=>{
    await page.goto('https://parabank.parasoft.com/parabank/index.htm');

    // verify Customer login scree:
    await expect(page.getByRole('heading', {name: 'Customer Login'})).toBeVisible();

    // Enter Login Credentials:
    await page.locator('[name="username"]').fill("Anusha112");
    await page.locator('[name="password"]').fill("Anusha");
    await page.locator('[value="Log In"]').click();
    await page.waitForTimeout(3000);
});
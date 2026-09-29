import {test,expect} from'@playwright/test';

test('storage state :Login Orange HRM', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    await page.context().storageState({path:'auth.json'});
});

test.use({
    storageState: 'auth.json'
});

test("Admin", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
        await page.getByText('ADMIN').click();
})

test("PIM", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
    await page.getByText('PIM').click();
})

test("Time", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
    await page.getByText('TIME').first().click();
})

test("Leave", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
    await page.getByText('PIM').click();
})


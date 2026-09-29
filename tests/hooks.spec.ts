import {test,expect} from '@playwright/test'
/*Hooks: these are execute before test executuion.
BeforeEach(): it run before each test run
After Each(): it run every test ending
beforeALl() --> onetime execution for before all test 
afterAll() --> one time exe for after all test execution complete
*/

test.beforeAll(()=>{
    console.log("the Hooks concept started")
})

test.afterAll(()=>{
    console.log("the Hooks concept ended")
})
// run before each test run
test.beforeEach(async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
});

// run after each test run
test.afterEach(async({page})=>{
    //logout

})

test("Admin", async({page})=>{
        await page.getByText('ADMIN').click();
})

test("PIM", async({page})=>{
    await page.getByText('PIM').click();
})

test("Time", async({page})=>{
    await page.getByText('TIME').first().click();
})

test("Leave", async({page})=>{
    await page.getByText('PIM').click();
})


// describe ==> Group
test.describe('verify all pages in OrangeHRM', ()=>{
    test.beforeAll(()=>{
        console.log("the describe group started");
    })

    test.beforeEach(async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",{waitUntil:'domcontentloaded'});
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    })

test("Admin", async({page})=>{
        await page.getByText('ADMIN').click();
})

test("PIM", async({page})=>{
    await page.getByText('PIM').click();
})

test("Time", async({page})=>{
    await page.getByText('TIME').first().click();
})

test("Leave", async({page})=>{
    await page.getByText('PIM').click();
})

test.afterEach(()=>{
    console.log("after each logout functionality")
})

test.afterAll(()=>{
    console.log('descrive after all is ended')
})
});
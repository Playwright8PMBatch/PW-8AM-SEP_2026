import {test, expect, chromium} from '@playwright/test'

test('with out fixture operations', async()=>{

    const browser = await chromium.launch();
    const browsercontext = await browser.newContext(); //cookies, local storage, session stroge delete
    const page = await browsercontext.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

test('with browser fixture operations', async({browser})=>{
    
    const browsercontext = await browser.newContext(); //cookies, local storage, session stroge delete
    const page = await browsercontext.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

test('with browser & context  fixture operations', async({browser, context})=>{
    
    const page = await context.newPage();

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
})

test('with page  fixture operations', async({page})=>{
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
});

test('with context fixture operations', async({context})=>{

    const page = await context.newPage();  // tab1
    const page1 = await context.newPage(); // tab2
    const page2 = await context.newPage(); // tab3

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page1.goto('https://www.amazon.in/');
    await page2.goto('https://parabank.parasoft.com/parabank/index.htm');
});


// Dialog boxes, certificate popups, alert ...
test.only('handle the alerts', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // if future if any dialog box trigger then execute this.
    page.on('dialog', async dialog => {
        console.log("the alert message", dialog.message());
        // await dialog.accept(); // OK accept the dialog
        await dialog.dismiss(); //cancel 
        // await dialog.accept('Anusha');
    });

    // await page.getByRole('button', {name: 'Click for JS Alert'}).click();

    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();

    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    
    await page.waitForTimeout(4000);
});
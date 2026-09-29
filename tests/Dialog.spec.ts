import {test,expect} from'@playwright/test';

// Dialog boxes, certificate popups, alert ...
test('handle the alerts', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    // if future if any dialog box trigger then execute this.
    page.on('dialog', async dialog => {
        console.log("the alert message", dialog.message()); 
        console.log("the message type", dialog.type()); 

        if(dialog.type() === 'alert'){
            console.log('****** alert *******')
             await dialog.accept(); // OK accept the dialog
        } 
        else if(dialog.type() === 'confirm'){
            console.log('****** Confirm *******')
            await dialog.dismiss(); //cancel 
        }
        else if(dialog.type() === 'prompt'){
            console.log('****** Prompt *******')
            await dialog.accept('Anusha');
        }
    });

    await page.getByRole('button', {name: 'Click for JS Alert'}).click();

    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();

    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    
    await page.waitForTimeout(4000);
});

// HTTP Certificate popups
test("approach 1: handle Basic AUth http ",async({browser})=>{

    const context = await browser.newContext({httpCredentials:{
        username: 'admin',
        password:'admin'
    }});

    const page = await context.newPage();
    await page.goto('https://the-internet.herokuapp.com/basic_auth');

    await page.waitForTimeout(4000);
});

test("approach 2: handle Basic AUth http ",async({page})=>{

    // await page.goto('https://username:password@the-internet.herokuapp.com/basic_auth');
    
    await page.goto('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    await page.waitForTimeout(4000);
});
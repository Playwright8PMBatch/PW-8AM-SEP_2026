import {test, expect} from'@playwright/test'

test("keyboard Operations", async({page})=>{
    await page.goto("https://demowebshop.tricentis.com");

    // Click on Register link
    await page.getByRole('link', {name: 'Register'}).click();

    // get By Label Locator (keyboard Operations)
    await page.getByLabel('Email:').fill('Anusha@gmail.com'); // fill enter the Text
    await page.getByLabel('Email:').press('Enter'); // press the Enter key in keyboard.

    await page.getByLabel('Email:').press('Tab');//press the TAB key in keyboard. 

    await page.getByLabel('Password:', {exact:true}).fill('Anusha123');

    // Copy the Password use keyboard shortcuts
    await page.getByRole('textbox', {name:'Password:', exact:true}).press('Control+A');
    await page.getByRole('textbox', {name:'Password:', exact:true}).press('Control+C');

    await page.getByLabel('Email:').press('Tab');
    await page.getByRole('textbox', {name:'Confirm password:',exact:true}).press('Control+V');

     await page.getByLabel('Email:').press('Enter');

    // Use Keyboard arrows
    await page.getByLabel('Email:').press('ArrowDown');
    await page.getByLabel('Email:').press('ArrowUp');
  
    // Page level keyboard operations
    await page.keyboard.type('hello');
    await page.keyboard.press('Enter');

});

test('mouse Operations', async({page}) =>{
    await page.goto("https://demowebshop.tricentis.com");

    // Click on Register link
    await page.getByRole('link', {name: 'Register'}).click();

    await page.getByRole('link', {name: 'Register'}).dblclick();

    await page.getByRole('link', {name: 'Register'}).click({button: 'right'});

    await page.getByRole('link', {name: 'Register'}).hover();

    await page.mouse.move(500,500);

    await page.mouse.click(500,500);

    // drag drop options
    await page.mouse.down(); // hold the cursor
    await page.mouse.up(); //mouse release

     await page.getByRole('link', {name: 'Register'}).dragTo(page.locator('#id'));

    //  mouse wheel scrolling:
    await page.mouse.wheel(0, 100); // 0 (horizontal), 100(vertical scroll) scroll down

});
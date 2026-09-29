import {test,expect} from '@playwright/test'

test('div tables',async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    // click on PIM
    await page.getByText('PIM').click();

    // DIV Table Operations
    const divtable = page.locator('div.oxd-table.orangehrm-employee-list');
    const divtablehead = page.locator('.oxd-table-header');
    const divtablebody = page.locator('.oxd-table-body');
    const rows = divtablebody.locator('.oxd-table-card');
    const cells = page.locator('.oxd-table-cell');

    await page.waitForTimeout(4000);

    // Rows Count:
    console.log('the rows of the table',await rows.count());

    let firstrow = await rows.first().innerText();
    console.log(firstrow);

    // let firstrowarray  = await rows.first().allInnerTexts();
    let firstrowarray  = await rows.first().allTextContents();
    console.log(firstrowarray);

    // let allrows = await rows.allInnerTexts();
    let allrows = await rows.allTextContents();
    console.log("all rows in table:", allrows);

    // Cell operations
    console.log('the cells of the table',await cells.count());

    let firstrowcellvalue = rows.nth(0).locator('.oxd-table-cell').nth(0);
    await firstrowcellvalue.click();

    // Name based instead of index: identify the row
  let findrow =  rows.filter({hasText: 'Adeline Ellie Grant Huel'});
    console.log(await findrow.textContent());

    await page.waitForTimeout(4000);



})
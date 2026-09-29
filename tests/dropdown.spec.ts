/*
Native Dropdowns (<Select> <option>)
*/

import {test, expect} from '@playwright/test'

test("Native Dropdown", async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    // verify the dropdown title
    await expect(page.getByRole('heading', {name: 'Dropdown List'})).toBeVisible()

    // inbuilt locator
   /* page.getByRole('combobox');
    await page.getByRole('option', {name:'Option 2'});
    */

    // css locators:  (select  --> option )
    await page.locator('#dropdown').selectOption('Option 2');
    await page.waitForTimeout(4000);

    await expect(page.locator('#dropdown')).toContainText('Option 2');

    // css using value attribute
    await page.locator('#dropdown').selectOption('2');

    await expect(page.locator('#dropdown')).toHaveValue('2');
});

test("custom dropdown", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();

    // click on PIM
    await page.getByText('PIM').click();

    // select custom dropdown Employement Status  (dropdown (click) --> list item --> item Click)
    await page.locator('.oxd-select-text-input').first().click();
    await page.getByText('Freelance').click();


    await page.locator('.oxd-select-text-input').last().click();
    await page.getByText('Client Services').click();
    await page.waitForTimeout(5000);  
    
    
    //Avoide the Index  Parent idenitfication
    const custdrop= page.locator('.oxd-input-group').filter({hasText: 'Employment Status'});
    await custdrop.locator('.oxd-select-text').click({timeout:3000});

    
    await page.getByRole('listbox').getByText('Freelance', {exact:true}).click({timeout: 2000});

    await page.locator('.oxd-input-group').filter({hasText: 'Job Title'}).locator('.oxd-select-text').click();
    await page.getByText('Automaton Tester',{exact: true}).click();
    await page.waitForTimeout(3000);
});


test("search dropdown", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder('Username').fill("Admin");
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', {name: 'Login'}).click();
    // click on PIM
    await page.getByText('PIM').click();
   
    
    //DB Search dropdown
    const custdrop= page.locator('.oxd-input-group').filter({hasText: 'Employee Name'});
    await custdrop.getByPlaceholder('Type for hints...').fill('A');

    await page.getByText('Test  Automation',{exact: true}).click();
    await page.waitForTimeout(5000);
});

test.only("multiselect native dropdown", async({page})=>{
    await page.goto("https://obstaclecourse.tricentis.com/Obstacles/94441/retry");
    await page.waitForTimeout(5000);    
    const multi = page.locator("#multiselect")
    await multi.selectOption("Unit testing",{timeout: 3000});
    await multi.selectOption("End2End testing",{timeout: 2000});
    await multi.selectOption("Exploratory testing",{timeout: 200});

    await multi.selectOption(['Unit testing', 'End2End testing', 'Exploratory testing' ])
    await page.waitForTimeout(5000);

})
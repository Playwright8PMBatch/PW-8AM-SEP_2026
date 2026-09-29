import {test, expect} from '@playwright/test'
import { describe } from 'node:test';

test('Amazon',{tag:'@smoke'}, async({page})=>{ //this tag is recommended

    await page.goto("www.amazon.com");

    await expect(page).toHaveTitle(/Online/);
});

test('icici @smoke', async({page})=>{

    await page.goto("https://www.icici.bank.in/personal-banking/ways-to-bank/net-banking");

    await expect(page).toHaveTitle(/ICICI/);
});

// Add multiple Taggings:
test.skip('Parabank',{tag:['@smoke', '@regression']}, async({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    await expect(page).toHaveTitle(/ParaBank/);
});

test('Parabank1 ',{tag:['@smoke', '@regression']}, async({page})=>{
    test.slow()
    await page.goto("https://parabank.parasoft.com/parabank/index.htm",{waitUntil:'domcontentloaded'});

    await expect(page).toHaveTitle(/ParaBank/);
});

test.fail('Parabank2',{tag:['@smoke', '@regression']}, async({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    await expect(page).toHaveTitle(/ParaBank/);
});

test('Parabank3',{tag:['@smoke', '@regression']}, async({page})=>{
    test.fixme(process.platform === 'android'); // this has issue, once developer fix the issue then re test.
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    await expect(page).toHaveTitle(/ParaBank/);
});

test.fail('Parabank4',{tag:['@smoke', '@regression']}, async({page})=>{
    test.fixme(process.platform === 'android'); // this has issue, once developer fix the issue then re test.
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    await expect(page).toHaveTitle(/ParaBank/);
});

test.only('Parabank5',{tag:['@smoke', '@regression']}, async({page})=>{
    test.fixme(process.platform === 'android'); // this has issue, once developer fix the issue then re test.
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    await expect(page).toHaveTitle(/ParaBank/);
});

   
test('Parabank6',{tag:['@smoke', '@regression']}, async({page})=>{
test.info().annotations.push({
    type: 'issue',
    description: 'Bug - 4556'
    },
    {
    type: 'Requirment',
    description: 'Req - 4556'
    }
    
)
    await page.goto("https://parabank.parasoft.com/parabank/index.htm");

    await expect(page).toHaveTitle(/ParaBank/);
});
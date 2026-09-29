import {test, expect} from '@playwright/test';
import * as XLSX from 'xlsx'
import {readJsonData, readExcelData,readCSVData} from '../Utility/dataRead';
import { toAsyncStreamable } from 'node:stream/iter';

// Excel Data
const workbook = XLSX.readFile('./data/Para.xlsx');
const sheet = workbook.Sheets['Parabank'];

type RegistrationData = {
    [key: string]: any;
    TestCaseID: string;
    FirstName: string;
    LastName: string;
    Address: string;
    City:string;
    State: string;
    ZipCode: number;
    PhNum: number;
    SSN: number;
    Username: string;
    Password: string;
};

const data = XLSX.utils.sheet_to_json<RegistrationData>(sheet);

for(let i of data){

    console.log(`************* ${i.TestCaseID} is Here*********`)

    test(`${i.TestCaseID} Parabank Registration`,async({page})=>{

    // launch application
    await page.goto('https://parabank.parasoft.com/parabank/register.htm');

    // click on Register
    await page.getByRole('link', {name: 'Register'}).click({timeout:3000}); //auto waiting

    await page.getByRole('link', {name: 'Register'}).click({force:true}); //avoid auto waiting 
    
    // verify signup page
    const signup = page.getByRole('heading', {name: 'Signing up is easy!'});
    await expect(signup).toBeVisible();

    // Enter Registration Details:
    await page.locator('[name="customer.firstName"]').fill(i.FirstName);
    await page.locator('[name= "customer.lastName"]').fill(i.LastName,{timeout: 3000});
    await page.locator('[name= "customer.address.street"]').fill(i.Address);
    await page.locator('[name= "customer.address.city"]').fill(i.City);
    await page.locator('[name= "customer.address.state"]').fill(i.State);
    await page.locator('[name= "customer.address.zipCode"]').fill(String(i.ZipCode));
    await page.locator('[name= "customer.phoneNumber"]').fill(String(i.PhNum));
    await page.locator('[name= "customer.ssn"]').fill(String(i.SSN));
    await page.locator('[name= "customer.username"]').fill(i.Username);
    await page.locator('[name= "customer.password"]').fill(i.Password);
    await page.locator('[name= "repeatedPassword"]').fill(i.Password);

    await page.locator('.button[value="Register"]').click();

    console.log(`********* i value is `, i);
    await page.waitForTimeout(5000);
    });
}

// JSON Created in Utility

const loginData = readJsonData('./data/jdata.json');

test("parabank JSON Login", async({page})=>{

    for(const i of loginData as Array<{username: string; password: string}>){
        console.log(i.Username);
        console.log(i.password);

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('[name="username"]').fill(i.username);
        await page.locator('[name="password"]').fill(i.password);

        await page.locator('[value="Log In"]').click();
    }    
});

// Excel Data Reader
const loginxlData = readExcelData('./data/jdata.json');
test("parabank Excel login Login", async({page})=>{

    for(const i of loginxlData as Array<{username: string; password: string}>){
        console.log(i.Username);
        console.log(i.password);

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('[name="username"]').fill(i.username);
        await page.locator('[name="password"]').fill(i.password);

        await page.locator('[value="Log In"]').click();
    }    
});

// csv data reader
const logincsvdata = readCSVData('./data/csvdata.csv');

test("parabank csv login Login", async({page})=>{

    for(const i of logincsvdata as Array<{username: string; password: string}>){
        console.log(i.username);
        console.log(i.password);

        await page.goto('https://parabank.parasoft.com/parabank/index.htm');
        await page.locator('[name="username"]').fill(i.username);
        await page.locator('[name="password"]').fill(i.password);

        await page.locator('[value="Log In"]').click();
    }    
});

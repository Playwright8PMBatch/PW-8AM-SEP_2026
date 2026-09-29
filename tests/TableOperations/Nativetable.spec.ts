import {test, expect} from '@playwright/test'

test.beforeEach('Add items to the cart', async({page})=>{
    console.log('Welcome to table oprations');
    await page.goto('https://demowebshop.tricentis.com/');

    // click on Books
    // use index
    await page.getByRole('link', {name:'Books'}).first().click();

    // add items to the cart
    const addtocart = page.getByRole('button', {name: 'Add to cart'});

    // get the count of all add to cart, and click on all add to cart
    const addtocartcount = await addtocart.count();
    console.log("the count fo add to cart is:", addtocartcount)

    for(let i = 0; i<addtocartcount; i++){
        await addtocart.nth(i).click({timeout: 4000});
        console.log(`Repetion ${i}`);
        await page.waitForTimeout(1000);
    }

    // click on Shopping cart
    await page.getByRole('link', { name: 'Shopping cart', exact: true }).click();

await page.waitForTimeout(6000);
});

test('get the Row Count', async({page})=>{
    // table Operatons
    const table = page.locator('.cart');
    const tbodyrows = table.locator('tbody tr');

    // 1) get the table row count:
    const tablerowcount = await tbodyrows.count();
    console.log(`the number of Rows ${tablerowcount}`);

    await page. waitForTimeout(5000);
});

test('get Product Names', async({page})=>{
    // table Operatons
    const table = page.locator('.cart');
    const tbodyrows = table.locator('tbody tr');
    const cell= tbodyrows.locator('td');

    // 1) get the table product names
    const cellcount = await cell.count();
    console.log(`the number of Rows ${cellcount}`);

    // print the rows
    for(let i = 0; i<await tbodyrows.count(); i++){
        const row = tbodyrows.nth(i);
        const rowtext = await row.innerText();
        console.log(rowtext);
    }

    // Print Particular cell value
    for(let i = 0; i<await tbodyrows.count(); i++){
        const row = tbodyrows.nth(i).locator('td').nth(2);
        const rowtext = await row.innerText();
        console.log('the row text is:', rowtext);
         await page. waitForTimeout(5000);
    }
    await page. waitForTimeout(5000);
});

test.only('do operations for particular row', async({page})=>{
    // table Operatons
    const table = page.locator('.cart');
    const tbodyrows = table.locator('tbody tr');
    const cell  = tbodyrows.locator('td');

    // 1) Print the Row using AllInnertext(), AllTextContexts(), All();
    // const firstrow = await tbodyrows.nth(1).allInnerTexts(); // capture the visible text into array format reutrn.
    // console.log(firstrow); // output:[ '\t\tFiction\t24.00\t\t24.00' ]

    const firstrowtext = await tbodyrows.nth(1).allTextContents(); // capture the text based on DOM , hiidden elemnts also captured
    console.log(firstrowtext); //output: ['\n' +'                            \n' +'                                Remove:\n' +'                                \n' +'                            \n' +'                                                                            \n' +'                                \n' +'                            \n' +'                        \n' +'                            Fiction\n' +'                                                                                                            \n' +'                        \n' +'                            Price:\n' + '                            24.00\n' +'                        \n' +'                        \n' +'                            Qty.:\n' +'                                    \n' +'                        \n' +'                        \n' +'                            Total:\n' +'                            24.00\n' +'                        \n' +'                    ']

    // const firstrowall = await tbodyrows.nth(1).all(); // return array all ements locators object Promisses
    // console.log(firstrowall); //output: [ locator('.cart').locator('tbody tr').nth(1).first() ]

    // create one for loop to itreate the AllTextContext();
    for(const ele of firstrowtext){
        const item1 =  ele.replace(/\s+/g, '');// \s -space, + --> 1 or more , /g --> all occurence, ''
        console.log(item1);
    }

    const finaltext = firstrowtext.map(ele => ele.trim())
    console.log(finaltext)
})


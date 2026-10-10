# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: fixtures.spec.ts >> handle the alerts
- Location: tests\fixtures.spec.ts:44:6

# Error details

```
TimeoutError: page.goto: Timeout 20000ms exceeded.
Call log:
  - navigating to "https://the-internet.herokuapp.com/javascript_alerts", waiting until "load"

```

# Test source

```ts
  1  | import {test, expect, chromium} from '@playwright/test'
  2  | 
  3  | test('with out fixture operations', async()=>{
  4  | 
  5  |     const browser = await chromium.launch();
  6  |     const browsercontext = await browser.newContext(); //cookies, local storage, session stroge delete
  7  |     const page = await browsercontext.newPage();
  8  | 
  9  |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  10 | })
  11 | 
  12 | test('with browser fixture operations', async({browser})=>{
  13 |     
  14 |     const browsercontext = await browser.newContext(); //cookies, local storage, session stroge delete
  15 |     const page = await browsercontext.newPage();
  16 | 
  17 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  18 | })
  19 | 
  20 | test('with browser & context  fixture operations', async({browser, context})=>{
  21 |     
  22 |     const page = await context.newPage();
  23 | 
  24 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  25 | })
  26 | 
  27 | test('with page  fixture operations', async({page})=>{
  28 |    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  29 | });
  30 | 
  31 | test('with context fixture operations', async({context})=>{
  32 | 
  33 |     const page = await context.newPage();  // tab1
  34 |     const page1 = await context.newPage(); // tab2
  35 |     const page2 = await context.newPage(); // tab3
  36 | 
  37 |     await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
  38 |     await page1.goto('https://www.amazon.in/');
  39 |     await page2.goto('https://parabank.parasoft.com/parabank/index.htm');
  40 | });
  41 | 
  42 | 
  43 | // Dialog boxes, certificate popups, alert ...
  44 | test.only('handle the alerts', async({page})=>{
> 45 |     await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
     |                ^ TimeoutError: page.goto: Timeout 20000ms exceeded.
  46 | 
  47 |     // if future if any dialog box trigger then execute this.
  48 |     page.on('dialog', async dialog => {
  49 |         console.log("the alert message", dialog.message());
  50 |         // await dialog.accept(); // OK accept the dialog
  51 |         await dialog.dismiss(); //cancel 
  52 |         // await dialog.accept('Anusha');
  53 |     });
  54 | 
  55 |     // await page.getByRole('button', {name: 'Click for JS Alert'}).click();
  56 | 
  57 |     await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
  58 | 
  59 |     await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
  60 |     
  61 |     await page.waitForTimeout(4000);
  62 | });
```
# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> mouse Operations
- Location: tests\keyboard.spec.ts:36:5

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.dragTo: Test timeout of 40000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Register' })
    - locator resolved to <a href="/register" class="ico-register">Register</a>
  - attempting move and down action
    - waiting for element to be visible and stable
    - element is visible and stable
    - scrolling into view if needed
    - done scrolling
    - performing move and down action
    - move and down action done
    - waiting for scheduled navigations to finish
    - navigations have finished
  - waiting for locator('#id')

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
  - generic [ref=f2e3]:
    - generic [ref=f2e4]:
      - link [ref=f2e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f2e7]
      - list [ref=f2e10]:
        - listitem [ref=f2e11]:
          - link "Register" [ref=f2e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f2e13]:
          - link "Log in" [ref=f2e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f2e15]:
          - link "Shopping cart (0)" [ref=f2e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f2e17]: Shopping cart
            - generic [ref=f2e18]: (0)
        - listitem [ref=f2e19]:
          - link "Wishlist (0)" [ref=f2e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f2e21]: Wishlist
            - generic [ref=f2e22]: (0)
      - generic [ref=f2e24]:
        - status [ref=f2e25]
        - textbox [ref=f2e26]: Search store
        - button "Search" [ref=f2e27] [cursor=pointer]
    - list [ref=f2e29]:
      - listitem [ref=f2e30]:
        - link "Books" [ref=f2e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f2e32]:
        - link "Computers" [ref=f2e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f2e34]:
        - link "Electronics" [ref=f2e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f2e36]:
        - link "Apparel & Shoes" [ref=f2e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f2e38]:
        - link "Digital downloads" [ref=f2e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f2e40]:
        - link "Jewelry" [ref=f2e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f2e42]:
        - link "Gift Cards" [ref=f2e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f2e44]:
        - generic [ref=f2e45]:
          - strong [ref=f2e47]: Categories
          - list [ref=f2e49]:
            - listitem [ref=f2e50]:
              - link "Books" [ref=f2e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f2e52]:
              - link "Computers" [ref=f2e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f2e54]:
              - link "Electronics" [ref=f2e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f2e56]:
              - link "Apparel & Shoes" [ref=f2e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f2e58]:
              - link "Digital downloads" [ref=f2e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f2e60]:
              - link "Jewelry" [ref=f2e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f2e62]:
              - link "Gift Cards" [ref=f2e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f2e64]:
          - strong [ref=f2e66]: Manufacturers
          - list [ref=f2e68]:
            - listitem [ref=f2e69]:
              - link "Tricentis" [ref=f2e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f2e71]:
          - strong [ref=f2e73]: Newsletter
          - generic [ref=f2e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f2e77]
            - button "Subscribe" [ref=f2e79] [cursor=pointer]
      - generic [ref=f2e82]:
        - heading "Register" [level=1] [ref=f2e84]
        - generic [ref=f2e85]:
          - generic [ref=f2e86]:
            - strong [ref=f2e88]: Your Personal Details
            - generic [ref=f2e89]:
              - generic [ref=f2e90]:
                - generic [ref=f2e91]: "Gender:"
                - generic [ref=f2e92]:
                  - radio "Male" [ref=f2e93]
                  - text: Male
                - generic [ref=f2e94]:
                  - radio "Female" [ref=f2e95]
                  - text: Female
              - generic [ref=f2e96]:
                - generic [ref=f2e97]: "First name:"
                - textbox "First name:" [ref=f2e98]
                - text: "*"
              - generic [ref=f2e99]:
                - generic [ref=f2e100]: "Last name:"
                - textbox "Last name:" [ref=f2e101]
                - text: "*"
              - generic [ref=f2e102]:
                - generic [ref=f2e103]: "Email:"
                - textbox "Email:" [ref=f2e104]
                - text: "*"
          - generic [ref=f2e105]:
            - strong [ref=f2e107]: Your Password
            - generic [ref=f2e108]:
              - generic [ref=f2e109]:
                - generic [ref=f2e110]: "Password:"
                - textbox "Password:" [ref=f2e111]
                - text: "*"
              - generic [ref=f2e112]:
                - generic [ref=f2e113]: "Confirm password:"
                - textbox "Confirm password:" [ref=f2e114]
                - text: "*"
          - button "Register" [ref=f2e116] [cursor=pointer]
  - generic [ref=f2e117]:
    - generic [ref=f2e118]:
      - generic [ref=f2e119]:
        - heading "Information" [level=3] [ref=f2e120]
        - list [ref=f2e121]:
          - listitem [ref=f2e122]:
            - link "Sitemap" [ref=f2e123] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f2e124]:
            - link "Shipping & Returns" [ref=f2e125] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f2e126]:
            - link "Privacy Notice" [ref=f2e127] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f2e128]:
            - link "Conditions of Use" [ref=f2e129] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f2e130]:
            - link "About us" [ref=f2e131] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f2e132]:
            - link "Contact us" [ref=f2e133] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f2e134]:
        - heading "Customer service" [level=3] [ref=f2e135]
        - list [ref=f2e136]:
          - listitem [ref=f2e137]:
            - link "Search" [ref=f2e138] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f2e139]:
            - link "News" [ref=f2e140] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f2e141]:
            - link "Blog" [ref=f2e142] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f2e143]:
            - link "Recently viewed products" [ref=f2e144] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f2e145]:
            - link "Compare products list" [ref=f2e146] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f2e147]:
            - link "New products" [ref=f2e148] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f2e149]:
        - heading "My account" [level=3] [ref=f2e150]
        - list [ref=f2e151]:
          - listitem [ref=f2e152]:
            - link "My account" [ref=f2e153] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f2e154]:
            - link "Orders" [ref=f2e155] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f2e156]:
            - link "Addresses" [ref=f2e157] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f2e158]:
            - link "Shopping cart" [ref=f2e159] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f2e160]:
            - link "Wishlist" [ref=f2e161] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f2e162]:
        - heading "Follow us" [level=3] [ref=f2e163]
        - list [ref=f2e164]:
          - listitem [ref=f2e165]:
            - link "Facebook" [ref=f2e166] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f2e167]:
            - link "Twitter" [ref=f2e168] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f2e169]:
            - link "RSS" [ref=f2e170] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f2e171]:
            - link "YouTube" [ref=f2e172] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f2e173]:
            - link "Google+" [ref=f2e174] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f2e175]:
      - text: Powered by
      - link "nopCommerce" [ref=f2e176] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f2e177]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | import {test, expect} from'@playwright/test'
  2  | 
  3  | test("keyboard Operations", async({page})=>{
  4  |     await page.goto("https://demowebshop.tricentis.com");
  5  | 
  6  |     // Click on Register link
  7  |     await page.getByRole('link', {name: 'Register'}).click();
  8  | 
  9  |     // get By Label Locator (keyboard Operations)
  10 |     await page.getByLabel('Email:').fill('Anusha@gmail.com'); // fill enter the Text
  11 |     await page.getByLabel('Email:').press('Enter'); // press the Enter key in keyboard.
  12 | 
  13 |     await page.getByLabel('Email:').press('Tab');//press the TAB key in keyboard. 
  14 | 
  15 |     await page.getByLabel('Password:', {exact:true}).fill('Anusha123');
  16 | 
  17 |     // Copy the Password use keyboard shortcuts
  18 |     await page.getByRole('textbox', {name:'Password:', exact:true}).press('Control+A');
  19 |     await page.getByRole('textbox', {name:'Password:', exact:true}).press('Control+C');
  20 | 
  21 |     await page.getByLabel('Email:').press('Tab');
  22 |     await page.getByRole('textbox', {name:'Confirm password:',exact:true}).press('Control+V');
  23 | 
  24 |      await page.getByLabel('Email:').press('Enter');
  25 | 
  26 |     // Use Keyboard arrows
  27 |     await page.getByLabel('Email:').press('ArrowDown');
  28 |     await page.getByLabel('Email:').press('ArrowUp');
  29 |   
  30 |     // Page level keyboard operations
  31 |     await page.keyboard.type('hello');
  32 |     await page.keyboard.press('Enter');
  33 | 
  34 | });
  35 | 
  36 | test('mouse Operations', async({page}) =>{
  37 |     await page.goto("https://demowebshop.tricentis.com");
  38 | 
  39 |     // Click on Register link
  40 |     await page.getByRole('link', {name: 'Register'}).click();
  41 | 
  42 |     await page.getByRole('link', {name: 'Register'}).dblclick();
  43 | 
  44 |     await page.getByRole('link', {name: 'Register'}).click({button: 'right'});
  45 | 
  46 |     await page.getByRole('link', {name: 'Register'}).hover();
  47 | 
  48 |     await page.mouse.move(500,500);
  49 | 
  50 |     await page.mouse.click(500,500);
  51 | 
  52 |     // drag drop options
  53 |     await page.mouse.down(); // hold the cursor
  54 |     await page.mouse.up(); //mouse release
  55 | 
> 56 |      await page.getByRole('link', {name: 'Register'}).dragTo(page.locator('#id'));
     |                                                       ^ Error: locator.dragTo: Test timeout of 40000ms exceeded.
  57 | 
  58 |     //  mouse wheel scrolling:
  59 |     await page.mouse.wheel(0, 100); // 0 (horizontal), 100(vertical scroll) scroll down
  60 | 
  61 | });
```
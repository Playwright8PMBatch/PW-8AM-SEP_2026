# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: keyboard.spec.ts >> keyboard Operations
- Location: tests\keyboard.spec.ts:3:5

# Error details

```
Error: locator.press: Error: strict mode violation: getByLabel('Password:') resolved to 2 elements:
    1) <input value="" id="Password" data-val="true" name="Password" type="password" data-val-length-min="6" data-val-length-max="999" data-val-required="Password is required." class="text-box single-line password input-validation-error" data-val-length="The password should have at least 6 characters."/> aka getByRole('textbox', { name: 'Password:', exact: true })
    2) <input value="" data-val="true" type="password" id="ConfirmPassword" name="ConfirmPassword" data-val-equalto-other="*.Password" data-val-required="Password is required." class="text-box single-line password input-validation-error" data-val-equalto="The password and confirmation password do not match."/> aka getByRole('textbox', { name: 'Confirm password:' })

Call log:
  - waiting for getByLabel('Password:')

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - generic [ref=f1e4]:
      - link [ref=f1e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=f1e7]
      - list [ref=f1e10]:
        - listitem [ref=f1e11]:
          - link "Register" [ref=f1e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=f1e13]:
          - link "Log in" [ref=f1e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=f1e15]:
          - link "Shopping cart (0)" [ref=f1e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=f1e17]: Shopping cart
            - generic [ref=f1e18]: (0)
        - listitem [ref=f1e19]:
          - link "Wishlist (0)" [ref=f1e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=f1e21]: Wishlist
            - generic [ref=f1e22]: (0)
      - generic [ref=f1e24]:
        - status [ref=f1e25]
        - textbox [ref=f1e26]: Search store
        - button "Search" [ref=f1e27] [cursor=pointer]
    - list [ref=f1e29]:
      - listitem [ref=f1e30]:
        - link "Books" [ref=f1e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=f1e32]:
        - link "Computers" [ref=f1e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=f1e34]:
        - link "Electronics" [ref=f1e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=f1e36]:
        - link "Apparel & Shoes" [ref=f1e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=f1e38]:
        - link "Digital downloads" [ref=f1e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=f1e40]:
        - link "Jewelry" [ref=f1e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=f1e42]:
        - link "Gift Cards" [ref=f1e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=f1e44]:
        - generic [ref=f1e45]:
          - strong [ref=f1e47]: Categories
          - list [ref=f1e49]:
            - listitem [ref=f1e50]:
              - link "Books" [ref=f1e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=f1e52]:
              - link "Computers" [ref=f1e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=f1e54]:
              - link "Electronics" [ref=f1e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=f1e56]:
              - link "Apparel & Shoes" [ref=f1e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=f1e58]:
              - link "Digital downloads" [ref=f1e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=f1e60]:
              - link "Jewelry" [ref=f1e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=f1e62]:
              - link "Gift Cards" [ref=f1e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=f1e64]:
          - strong [ref=f1e66]: Manufacturers
          - list [ref=f1e68]:
            - listitem [ref=f1e69]:
              - link "Tricentis" [ref=f1e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=f1e71]:
          - strong [ref=f1e73]: Newsletter
          - generic [ref=f1e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=f1e77]
            - button "Subscribe" [ref=f1e79] [cursor=pointer]
      - generic [ref=f1e82]:
        - heading "Register" [level=1] [ref=f1e84]
        - generic [ref=f1e85]:
          - generic [ref=f1e86]:
            - strong [ref=f1e88]: Your Personal Details
            - generic [ref=f1e89]:
              - generic [ref=f1e90]:
                - generic [ref=f1e91]: "Gender:"
                - generic [ref=f1e92]:
                  - radio "Male" [ref=f1e93]
                  - text: Male
                - generic [ref=f1e94]:
                  - radio "Female" [ref=f1e95]
                  - text: Female
              - generic [ref=f1e96]:
                - generic [ref=f1e97]: "First name:"
                - textbox "First name:" [ref=f1e98]
                - text: "*"
                - generic [ref=f1e99]: First name is required.
              - generic [ref=f1e100]:
                - generic [ref=f1e101]: "Last name:"
                - textbox "Last name:" [ref=f1e102]
                - text: "*"
                - generic [ref=f1e103]: Last name is required.
              - generic [ref=f1e104]:
                - generic [ref=f1e105]: "Email:"
                - textbox "Email:" [ref=f1e106]: Anusha@gmail.com
                - text: "*"
          - generic [ref=f1e107]:
            - strong [ref=f1e109]: Your Password
            - generic [ref=f1e110]:
              - generic [ref=f1e111]:
                - generic [ref=f1e112]: "Password:"
                - textbox "Password:" [active] [ref=f1e113]: Anusha
                - text: "*"
                - generic [ref=f1e114]: Password is required.
              - generic [ref=f1e115]:
                - generic [ref=f1e116]: "Confirm password:"
                - textbox "Confirm password:" [ref=f1e117]
                - text: "*"
                - generic [ref=f1e118]: Password is required.
          - button "Register" [ref=f1e120] [cursor=pointer]
  - generic [ref=f1e121]:
    - generic [ref=f1e122]:
      - generic [ref=f1e123]:
        - heading "Information" [level=3] [ref=f1e124]
        - list [ref=f1e125]:
          - listitem [ref=f1e126]:
            - link "Sitemap" [ref=f1e127] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=f1e128]:
            - link "Shipping & Returns" [ref=f1e129] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=f1e130]:
            - link "Privacy Notice" [ref=f1e131] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=f1e132]:
            - link "Conditions of Use" [ref=f1e133] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=f1e134]:
            - link "About us" [ref=f1e135] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=f1e136]:
            - link "Contact us" [ref=f1e137] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=f1e138]:
        - heading "Customer service" [level=3] [ref=f1e139]
        - list [ref=f1e140]:
          - listitem [ref=f1e141]:
            - link "Search" [ref=f1e142] [cursor=pointer]:
              - /url: /search
          - listitem [ref=f1e143]:
            - link "News" [ref=f1e144] [cursor=pointer]:
              - /url: /news
          - listitem [ref=f1e145]:
            - link "Blog" [ref=f1e146] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=f1e147]:
            - link "Recently viewed products" [ref=f1e148] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=f1e149]:
            - link "Compare products list" [ref=f1e150] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=f1e151]:
            - link "New products" [ref=f1e152] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=f1e153]:
        - heading "My account" [level=3] [ref=f1e154]
        - list [ref=f1e155]:
          - listitem [ref=f1e156]:
            - link "My account" [ref=f1e157] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=f1e158]:
            - link "Orders" [ref=f1e159] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=f1e160]:
            - link "Addresses" [ref=f1e161] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=f1e162]:
            - link "Shopping cart" [ref=f1e163] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=f1e164]:
            - link "Wishlist" [ref=f1e165] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=f1e166]:
        - heading "Follow us" [level=3] [ref=f1e167]
        - list [ref=f1e168]:
          - listitem [ref=f1e169]:
            - link "Facebook" [ref=f1e170] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=f1e171]:
            - link "Twitter" [ref=f1e172] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=f1e173]:
            - link "RSS" [ref=f1e174] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=f1e175]:
            - link "YouTube" [ref=f1e176] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=f1e177]:
            - link "Google+" [ref=f1e178] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=f1e179]:
      - text: Powered by
      - link "nopCommerce" [ref=f1e180] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=f1e181]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
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
  15 |     await page.getByLabel('Password:', {exact:true}).fill('Anusha');
  16 | 
  17 |     // Copy the Password use keyboard shortcuts
> 18 |     await page.getByLabel('Password:').press('Control+A');
     |                                        ^ Error: locator.press: Error: strict mode violation: getByLabel('Password:') resolved to 2 elements:
  19 |     await page.getByLabel('Password:').press('Control+C');
  20 | 
  21 |     await page.getByLabel('Email:').press('Tab');
  22 |     await page.getByLabel('Confirm password:').press('Control+V');
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
```
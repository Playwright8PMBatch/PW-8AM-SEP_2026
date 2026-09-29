import {test, expect} from '@playwright/test'

test("iframe validations", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/iframe');

    const frame =  page.frameLocator('#mce_0_ifr');
   const message =  frame.locator('#tinymce').getByText('Your content goes here.');

   console.log(await message.textContent());

    await expect(message).toBeVisible();
    await expect(message).toContainText('Your content goes here.');

    await page.waitForTimeout(2000);
})

test.only('Nested Frames', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const frames = page.frames();
    console.log(frames.length);

    // capture the name of the frames.
    for(let i of frames){
        console.log(`Frame is:`, i.name());
    }

    // Specific Frame content:
    const top = page.frame({name: 'frame-top'});
    const topname = top?.locator('body');
   
    expect(top).toBeTruthy();

    //  LEFT Frame
    const left = page.frame({name: 'frame-left'});
    const leftname = await left?.locator('body').innerText();
    console.log(leftname);
     expect(leftname).toContain("LEFT");

    //  Middle Frame
    const middle = page.frame({name: 'frame-middle'});
    const middlename = await middle?.locator('body').innerText();
    console.log(middlename);
     expect(middlename).toContain("MIDDLE");

    //  RIGHT Frame
    const right = page.frame({name: 'frame-right'});
    const rightname = await right?.locator('body').innerText();
    console.log(rightname);
     expect(rightname).toContain("RIGHT");
    
     //  bottom Frame
    const bottom = page.frame({name: 'frame-bottom'});
    const bottomname = await bottom?.locator('body').innerText();
    console.log(bottomname);
     expect(bottomname).toContain("BOTTOM");
})
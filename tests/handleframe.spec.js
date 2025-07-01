import { test, expect } from '@playwright/test';

test('Handle Frame', async ({ page }) => {


    await page.goto("https://ui.vision/demo/webtest/frames/")

    const allframes =await page.frames();
    console.log("Total no of frames: " + allframes.length)


    //approch 1 using name or url

    //const frame1= await page.frame('mytext1')

    // const frame1 = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'})
    // await frame1.fill("//input[@name='mytext1']", 'Hello');


    // //approach 2 using frame locator 
    // const input = await page.frameLocator("frame[src='frame_1.html']").locator("//input[@name='mytext1']")
    // await input.fill("hello")


    //Handle Inner frames 

        const frame3= await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_3.html'})
        //await frame3.fill("//input[@name='mytext3']", 'Yes');

        //Hnadle Nested frame 

        const childFrame= await frame3.childFrames();
        await childFrame[0].locator("//*[@id='i6']/div[3]/div").check();

        
        await page.waitForTimeout(10000)



})
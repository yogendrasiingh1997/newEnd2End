const { test, expect } = require("playwright/test");

test("drag and drop", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/") 

const drag = await page.locator("//p[normalize-space()='Drag me to my target']")
const drop= await page.locator("//div[@id='droppable']")


//Approach 1 

// await drag.hover()
// await page.mouse.down();

// await drop.hover()
// await page.mouse.up()

//Approach 2 

await drag.dragTo(drop);

await page.waitForTimeout(5000)


})
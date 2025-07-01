const { test, expect } = require("playwright/test");

test("mouse actions", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/")

const point = await page.locator("//button[normalize-space()='Point Me']")
const laptop= await page.locator("//a[normalize-space()='Laptops']")

//mouse hover

await point.hover();
await laptop.click()

//Right click
//  const button= await page.locator("");

//  await button.click({button: 'right'})


//Doubel click

const doubleClick= await page.locator("//button[normalize-space()='Copy Text']")
await doubleClick.dblclick();


await page.waitForTimeout(5000)


})
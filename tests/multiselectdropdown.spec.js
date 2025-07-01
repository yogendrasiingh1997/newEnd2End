const { test ,expect } = require("playwright/test");

test('handle multiselectdropdown', async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#colors", ['Red', 'Blue'])

await page.waitForTimeout(5000);








})
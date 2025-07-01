const { test, expect } = require("playwright/test");

test("keyboard actions", async({page})=>{


await page.goto("https://gotranscript.com/text-compare")

await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("Welcome")

//Ctrl+A
await page.keyboard.press('Control+A')

//Ctrl+C
await page.keyboard.press('Control+C')

//Tab
await page.keyboard.down('Tab')
await page.keyboard.up('Tab')

//Ctrl+v
await page.keyboard.press('Control+V')

const copy = await page.locator("//textarea[@placeholder='Paste another version of the text here.']")

await expect(copy).toHaveValue('Welcome')


await page.waitForTimeout(5000)





})
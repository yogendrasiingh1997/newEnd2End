const { link } = require("fs");
const {test, expect } = require("playwright/test")

test('LocateMultipleElements', async({page})=>{

    await page.goto("https://www.traveluro.com");
    const allLinks =await page.$$('a')

    for(const link of allLinks)
    {
        const linkText = await link.textContent();
        console.log(linkText);
    }




})


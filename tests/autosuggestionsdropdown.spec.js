const { test, expect } = require("playwright/test");

test("handle auto sugestion drowndown", async({page})=>{

    await page.goto("https://www1.traveluro.com")

    await page.click("//div[@id='cookiescript_accept']");

    await page.locator("//input[@placeholder='Location, landmark or property']").fill('Las')

    await page.waitForSelector("//ul[@class='options-list__options-list']/li")

    const location =await page.$$("//ul[@class='options-list__options-list']/li")

    for(let destination of location)
    {
            const value = await destination.textContent();
            //console.log(value);
            if(value.includes('Las VegasCity in Las Vegas, Nevada, United States of America'))
            {
                await destination.click();
                break;
            }
    }

    await page.waitForTimeout(10000);


})
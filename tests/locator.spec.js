//const {test, expect } = require("playwright/test")
import {test, expect} from '@playwright/test'


test('login', async({page})=>{

    await page.goto("https://www.traveluro.com");


    //Link or Button
    await page.locator("//a[@class='clickable'][normalize-space()='Login']").click()


    //Input box
    await page.locator("//div[@id='myModalNorm']//input[@id='email']").fill('parth@splittytravel.com');
    //await page.type('parth@splittytravel.com', 'id=email')

    await page.fill("//div[@id='myModalNorm']//input[@id='password']", 'Abcd@1234')



    await page.click("//div[@id='myModalNorm']//button")
    // [@type='submit'][normalize-space()='Login']")


    //Locate multiple element 
    //const elements= page.$$(locator)

    const allLinks =await page.$$('a')


})


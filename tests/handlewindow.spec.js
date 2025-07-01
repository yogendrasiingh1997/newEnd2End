import {test, expect, chromium } from "playwright/test";

test('Handle windows', async()=>{

const browser= await chromium.launch()
const context= await browser.newContext()

const page1= context.newPage()
const page2= context.newPage()

const allpages= context.pages();

await page1.goto("https://www.traveluro.com")
await page2.goto("https://www1.traveluro.com")

})




test('Handle multiple windows', async()=>{

const browser= await chromium.launch()
const context= await browser.newContext()

const page1= await context.newPage()
await page1.goto("https://www1.traveluro.com/destinations/bangkok?checkIn=2025-07-07&checkOut=2025-07-09&occupancy=%5B%7B%22adults%22%3A2%2C%22children%22%3A%5B%5D%7D%5D&placeId=R604&placeType=city&map=false")
await expect(page1).toHaveTitle("Bangkok Hotel Search Results")

const pagePromise= context.waitForEvent('page')
await page1.locator("//div[@data-testid='total-price-tag']").nth(1).click();

const bapage= await pagePromise;
bapage.setDefaultTimeout(30000)
await bapage.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeLarge MuiButton-primarySizeLarge MuiButton-colorPrimary MuiButton-root MuiButton-primary MuiButton-primaryPrimary MuiButton-sizeLarge MuiButton-primarySizeLarge MuiButton-colorPrimary primary-button css-f4j1go']").nth(0).click();

})
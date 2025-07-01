const { test, expect } = require("playwright/test");

test("page screenshot", async({page})=>{

await page.goto("https://www1.traveluro.com") 
await page.screenshot({path:'C:/Users/ADMIN/newEnd2End/tests/screenshot/' + 'Homepage_'+ Date.now()+ '.png'})
})


test("full page screenshot", async({page})=>{

await page.goto("https://www1.traveluro.com") 
await page.screenshot({path:'C:/Users/ADMIN/newEnd2End/tests/screenshot/' + 'Fullpage_'+ Date.now()+ '.png', fullPage:true })
})



test.only("locatot screenshot", async({page})=>{

await page.goto("https://www1.traveluro.com") 
await page.locator('//*[@id="root"]/div/div/div[3]/div/div[1]').screenshot({path:'C:/Users/ADMIN/newEnd2End/tests/screenshot/' + 'Footer_'+ Date.now()+ '.png'})
})
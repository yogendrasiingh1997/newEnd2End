const { test, expect } = require("playwright/test");

let page;

test.beforeEach(async ({browser})=>{

    page= await browser.newPage();

    await page.goto("https://demoblaze.com/index.html")

    //Login 
    await page.locator("//a[@id='login2']").click()
    await page.fill("//input[@id='loginusername']", 'pavanol')
    await page.fill("//input[@id='loginpassword']", 'test@123')
    await page.click("//button[normalize-space()='Log in']")

})

test.afterEach(async()=>{
    //logout 
    await page.click("//a[@id='logout2']")

})

test("Home Page", async()=>{

    //Total Product
    const products = await page.locator("//a[@class='hrefch']")
    await expect(products).toHaveCount(9);
})

test("Add to cart", async()=>{

    //Add to cart
    await page.click("//a[normalize-space()='Samsung galaxy s6']")
    await page.click("//a[normalize-space()='Add to cart']")

    page.on('dialog', async dialog=>{
        expect(dialog.message()).toContain('Product added.')
        await dialog.accept
    })
})

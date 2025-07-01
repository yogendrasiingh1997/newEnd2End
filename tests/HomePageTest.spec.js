const {test, expect } = require('playwright/test')

test('HomePage', async({page})=>{

    await page.goto('https://www1.traveluro.com/')

    const PageTitle= await page.title();
    console.log('Page title is', PageTitle);

    await expect(page).toHaveTitle('Traveluro: Better Hotel Deals')
    await page.close();

})
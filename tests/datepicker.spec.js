const { test ,expect } = require("playwright/test");

test('date picker', async({page})=>{

await page.goto("https://www1.traveluro.com") 


const monthYear= "March 2026"
const checkIn="20"
const checkout="21"


await page.locator("//button[@data-testid='date-range-field']").click();

while(true)
{
    const currentMonthYear= await page.locator("//span[@class='MuiTypography-root MuiTypography-subtitle1 css-penf9g']").nth(0).textContent();

    if(currentMonthYear.trim() === monthYear)
    {
        break;
    }
    await page.locator("//button[@title='Next month']").nth(1).click(); 
}

    const allDates= await page.$$("//div[@class='MuiDayCalendar-weekContainer css-cy45vv']/div");
    
    for(const startDate of allDates)
    {
        const dateText = await startDate.textContent();
        if(dateText.trim()===checkIn)
        {
            console.log("checkIn Date: " + dateText+  " "+ monthYear)
            await startDate.click();
            break;
        }
    }

     for(const endDate of allDates)
    {
        const dateText = await endDate.textContent();
        if(dateText.trim()===checkout)
        {
            console.log("checkOut Date: " + dateText+ " " +  monthYear)
            await endDate.click();
            break;
        }
    }

    await page.waitForTimeout(10000)


    //date selection without loop

    await page.click(`locator`)

















})
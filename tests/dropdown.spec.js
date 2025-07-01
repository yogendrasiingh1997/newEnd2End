const { test, expect } = require("playwright/test");

test("handle drowndown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //await page.locator("#country").selectOption({label: 'India'});
    //await page.locator("#country").selectOption('India') //by visible text
    // await page.locator("#country").selectOption({value:'uk'})  //by using value
    // await page.locator("#country").selectOption({index:1}); //by using index
    // await page.selectOption("#country", 'India')

    //Assertion
    //1. check no of options in dropdown --approach 1
    // const options= await page.locator('#country option')
    // await expect(options).toHaveCount(10);


    //2. check no of options in dropdown --approach 2
    // const options= await page.$$('#country option')
    // console.log("Number of options: " + options.length)
    // await expect(options.length).toBe(10);
    // await page.waitForTimeout(5000);


    //3 check presence of value in dropdown
    // const content = await page.locator('#country').textContent();
    // await expect(content.includes('India')).toBeTruthy



     //4 check presence of value in dropdown using looping statement 
     /*
     const options= await page.$$('#country option')
     let status=false;
     for (const option of options)
     {
        //console.log(await option.textContent());
        let value= await option.textContent()
        if(value.includes('Brazil'))
        {
            status=true;
            break;
        }
     }
     await expect(status).toBeTruthy();
    */ 

     //5 select dropdown from list using looping 
     const options= await page.$$('#country option')
    
     for (const option of options)
     {
        //console.log(await option.textContent());
        let value= await option.textContent()
        if(value.includes('brazil'))
        {
            await page.selectOption("#country", value)
            break;
        }
     }

})
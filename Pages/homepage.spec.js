exports.homepage= 
class homepage{

    constructor(page)
    {
        this.page=page;
        this.cookies= "//div[@id='cookiescript_accept']"
        this.location= "//input[@placeholder='Location, landmark or property']"
        this.calender="//button[@data-testid='date-range-field']"
        this.nextBtn="//button[@title='Next month']"
        this.currentDate="//span[@class='MuiTypography-root MuiTypography-subtitle1 css-penf9g']"
        this.allDates="//div[@class='MuiDayCalendar-weekContainer css-cy45vv']/div"
    }

    async homepage()
    {
        await this.page.goto("https://www1.traveluro.com")
    }

    async destination()
    {
        await this.page.locator(this.cookies).click();
        await this.page.locator(this.location).fill("Las");
        await this.page.waitForSelector("//ul[@class='options-list__options-list']/li")

        const location =await this.page.$$("//ul[@class='options-list__options-list']/li")

        for(let destination of location)
        {
                const value = await destination.textContent();
                if(value.includes('Las VegasCity in Las Vegas, Nevada, United States of America'))
                {
                    await destination.click();
                    break;
                }
        }
    }


    async dateSelection(monthYear, checkIn, checkOut)
    {
        await this.page.locator(this.calender).click();


        //Month and Year selection 
        while(true)
        {
            const currentMonthYear= await this.page.locator(this.currentDate).nth(0).textContent();

            if(currentMonthYear.trim() === monthYear)
            {
                break;
            }
            await this.page.locator(this.nextBtn).nth(1).click();
        }

        //Checkin date selection 

        const dates= await this.page.$$(this.allDates)
        for(const startDate of dates)
        {
            const datetext= await startDate.textContent()
            if(datetext.trim() === checkIn)
            {
                console.log("checkIn Date: " + datetext+  " "+ monthYear)
                await startDate.click();
                break;
            }
        }

        //Checkout date selection 
       
        for(const endDate of dates)
        {
            const datetext= await endDate.textContent()
            if(datetext.trim() === checkOut)
            {
                console.log("checkOut Date: " + datetext+  " "+ monthYear)
                await endDate.click();
                break;
            }
        }

    }

}
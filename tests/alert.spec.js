const { test, expect } = require("playwright/test");

test.skip("handle alert box", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler

    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain('I am an alert box!');
        await dialog.accept();

    })

    await page.click("//button[@id='alertBtn']");
    await page.waitForTimeout(5000);
})

test.skip("handle confirmation alert with ok and cancel button", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler

    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('confirm');
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept();

    })

    await page.click("//button[@id='confirmBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed OK!')
    await page.waitForTimeout(5000);
})


test("Promt dialog", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    //enabling dialog window handler

    page.on('dialog', async dialog=>{

        expect(dialog.type()).toContain('prompt');
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter');

        await dialog.accept('Yogendra')

    })

    await page.click("//button[@id='promptBtn']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Yogendra! How are you today?')
    await page.waitForTimeout(5000);
})


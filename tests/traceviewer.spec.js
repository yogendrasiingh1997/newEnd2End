
import { test, expect } from '@playwright/test';

test('Login_Test', async ({ page }) => {
//Login 

    await page.goto("https://demoblaze.com/index.html")
    await page.locator("//a[@id='login2']").click()
    await page.fill("//input[@id='loginusername']", 'pavanol')
    await page.fill("//input[@id='loginpassword']", 'test@123')
    await page.click("//button[normalize-space()='Log in']")
})
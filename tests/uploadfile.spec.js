const { test, expect } = require("playwright/test");

test("upload single file", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/") 

await page.waitForSelector("//input[@id='singleFileInput']")

await page.locator("//input[@id='singleFileInput']").setInputFiles("C:/Users/ADMIN/IdeaProjects/New Traveluro Automation/reports/test.html")

await page.waitForTimeout(5000);
})




test.only("upload multiple file", async({page})=>{


await page.goto("https://testautomationpractice.blogspot.com/") 

await page.waitForSelector("//input[@id='multipleFilesInput']")

await page.locator("//input[@id='multipleFilesInput']").setInputFiles(["C:/Users/ADMIN/IdeaProjects/New Traveluro Automation/reports/test.html", "C:/Users/ADMIN/IdeaProjects/New Traveluro Automation/reports/test1.html"])

await page.waitForTimeout(5000);


})
import { test, expect } from '@playwright/test';

test('Login_Test', async ({ page }) => {
  await page.goto('https://www.traveluro.com/');
  await page.locator('#main-menu').getByText('Login').click();
  await page.locator('#myModalNorm #email').fill('parth@splittytravel.com');
  await page.locator('#myModalNorm #password').fill('Abcd@1234');
  await page.locator('#myModalNorm').getByText('Login', { exact: true }).click();
  await page.locator('#sm-15236008200698604-3').click();
  await page.getByLabel('Parth Patel').getByText('Sign out').click();
});
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.traveluro.com/');
  await page.getByRole('contentinfo').getByRole('img').nth(3).click();
  await page.locator('app-cookie-banner span').nth(1).click();
  await page.locator('#main-menu').getByText('Login').click();
  await page.locator('#myModalNorm').getByText('Sign Up').click();

  await page.locator('#registerFName').fill('Dilip Raj');
  await page.locator('#registerEmail').fill('Diilip@gmail.com');
  await page.locator('#registerPassword').fill('Abcd@1234');
  await page.locator('#registerConfirmPassword').fill('Abcd@1234');
  await page.locator('#IAgree').check();
  await page.locator('#privacy').check();
  await page.locator('#myModalRegister').getByText('Create account').click();
  await page.locator('#sm-15236008200698604-3').click();
  await page.getByLabel('Dilip Raj').getByText('Sign out').click();
});
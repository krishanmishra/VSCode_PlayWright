import {test,expect} from '@playwright/test';

test('Locators', async({page})=>{

   await page.goto('https://demoblaze.com/');

   await page.click('id=login2');

   //await page.fill('##loginusername')

   //await page.type('#loginusername','Krishan123');

   await page.fill('#loginusername','Krishan123');


   //await page.fill('#loginpassword');

   await page.fill("input[id='loginpassword']",'Test@123');


   await page.click("//button[normalize-space()='Log in']");

   const logoutlink=await page.locator("//a[normalize-space()='Log out']");

  await expect(logoutlink).toBeVisible();

    await page.close();


})
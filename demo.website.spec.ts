// @ts-check
import { test, expect } from '@playwright/test';
// test.describe.configure({ mode: 'parallel' });

test.describe('Test', () => {


test.beforeEach(async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page).toHaveTitle("OrangeHRM");
  
  await page.getByPlaceholder('Username').fill('Admin');

  await page.getByPlaceholder('Password').fill('admin123');

  await page.getByRole('button', { name: 'Login' }).click();
  }
  );
  test('change password', async ({ page }) => {

    console.log("start test for change password")

  
  // Click the has title link.
  // Expect a title "to contain" a substring.



  // await page.pause()
  await page.locator('.oxd-topbar-header-userarea > ul > .oxd-userdropdown').click();
 

  await page.getByRole('menuitem', { name: 'Change Password' }).click();

  await page.getByRole('textbox').nth(1).fill('admin123');

  await page.getByRole('textbox').nth(2).fill('admin123456');

  await page.getByRole('textbox').nth(3).fill('admin123456');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.locator('.oxd-topbar-header-userarea > ul > .oxd-userdropdown').click();
  console.log("end test for change password")
  // await page.getByRole('menuitem', { name: 'Logout' }).click();
  // ---------------------
});

  
  test('user profile', async ({ page }) => {

    console.log("start test for user profile")
    await page.locator('.oxd-topbar-header-userarea > ul > .oxd-userdropdown').click();
    // await page.locator('span').filter({ hasText: 'Paulie Collings' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Support' }).click();
    await page.getByText('Getting Started with OrangeHRMLearning how to use a new application can be').click();
    await page.locator('.orangehrm-support').click();
    await page.getByRole('link', { name: 'ossupport@orangehrm.com' }).click();
    // await page.locator('span').filter({ hasText: 'Paulie Collings' }).locator('i').click();
    await page.locator('.oxd-topbar-header-userarea > ul > .oxd-userdropdown').click();
    await page.getByRole('menuitem', { name: 'About' }).click();
    await page.getByRole('dialog').getByText('OrangeHRM OS').click();
    await page.getByText('58').click();
    await page.getByText('0', { exact: true }).click();
    await page.getByRole('button', { name: '×' }).click();
    await page.locator('.oxd-topbar-header-userarea > ul > .oxd-userdropdown').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
   console.log("end test for user profile") 

  });
  //  add new user 
  test('add user', async ({ page }) => {
  console.log('start test for add user')

await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  // await page.getByPlaceholder('Type for hints...').click();
  await page.getByPlaceholder('Type for hints...').fill('s');
  await page.getByRole('option', { name: 'Lisa Andrews' }).click();
  await page.locator('form i').nth(1).click();
  await page.getByRole('option', { name: 'Enabled' }).click();
  // await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('sarmadbaig12');
  // await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('testing1234');
  // await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('testing1234');
  await page.getByRole('button', { name: 'Save' }).click();
  console.log('end test for add user')
  });
  

});


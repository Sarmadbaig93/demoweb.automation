// @ts-check
const { test, expect } = require('@playwright/test');

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();
  await page.getByRole('link', { name: 'API', exact: true }).click();
  await page.getByRole('heading', { name: 'Playwright Library' }).dblclick();
  await page.getByRole('heading', { name: 'PropertiesDirect link to' }).click();
  await page.getByRole('heading', { name: 'errorsDirect link to errors' }).click();
  await page.getByRole('link', { name: 'Classes' }).click();
  await page.getByRole('link', { name: 'Classes' }).click();
  await page.getByLabel('Docs sidebar').getByRole('link', { name: 'APIRequest', exact: true }).click();
  await page.getByRole('heading', { name: 'APIRequest' }).click();
  await page.getByText('Exposes API that can be used').click();
  await page.getByRole('heading', { name: 'MethodsDirect link to Methods' }).click();
  await page.getByRole('heading', { name: 'newContextDirect link to' }).click();
  await page.getByText('APIRequestExposes API that').click();



  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

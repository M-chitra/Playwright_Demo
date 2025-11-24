import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Selenium Certification Training/);
});

test('Elements', async ({ page }) => {
  await page.goto('https://demoqa.com/');

  // Click the Element.
  await page.getByRole('heading', { name: 'Elements' }).click();

  // Expects page to have a button with the name of Text Box.
  await expect(page.locator('ul > li')).toContainText(['Text Box']);
});
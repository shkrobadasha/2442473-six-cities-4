import { test, expect } from '@playwright/test';

test('checking the functionality of the registration fields', async ({ page }) => {

  await page.goto('http://localhost:5173/login');

  // некорректные данные
  await page.fill('input[name="email"]', 'dary@mail');
  await page.fill('input[name="password"]', 'ldhs23');
  await page.click('button[type="submit"]');

  // Проверка,что остались на странице
  await expect(page).toHaveURL('http://localhost:5173/login');

  // корректные данные
  await page.fill('input[name="email"]', 'dary@mail.ru');
  await page.fill('input[name="password"]', 'ldhs23');
  await page.click('button[type="submit"]');
  await page.waitForTimeout(2000);

  // Проверка перехода в main
  expect(page.url()).toBe('http://localhost:5173/');
});

import { test, expect } from '@playwright/test';

test('checking the transition to the card page', async ({ page }) => {

  await page.goto('http://localhost:5173');

  await page.waitForSelector('.cities__card');

  // Информация о первой карточке
  const firstCardName = await page.locator('.place-card__name').first().textContent();
  const firstCardPrice = await page.locator('.place-card__price-value').first().textContent();

  await page.locator('.place-card__name').first().click();

  await page.waitForSelector('.offer__inside-list');

  // Информация о предложении
  const offerName = await page.locator('.offer__name').textContent();
  const offerPrice = await page.locator('.offer__price-value').textContent();

  //проверка совпадения данных предложения и данных карточки
  expect(offerName).toBe(firstCardName);
  expect(offerPrice).toBe(firstCardPrice);

  // Проверка наличия на странице предложения всех элементов
  expect(await page.isVisible('.offer__gallery')).toBe(true);
  expect(await page.isVisible('.offer__rating')).toBe(true);
  expect(await page.isVisible('.offer__price')).toBe(true);
  expect(await page.isVisible('.offer__inside')).toBe(true);
  expect(await page.isVisible('.offer__host')).toBe(true);
  expect(await page.isVisible('.offer__description')).toBe(true);
  expect(await page.isVisible('.reviews')).toBe(true);
});

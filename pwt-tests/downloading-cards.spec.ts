import { test, expect } from '@playwright/test';

test('checking card downloads from the server', async ({ page }) => {

  await page.goto('http://localhost:5173');

  //ожидание появления карточек
    await page.waitForSelector('.cities__card');
    const cardItems= await page.locator('.cities__card');
    const cardElementsNumber = await cardItems.count();

    //проверка, что число карточек не превышет 20 и больше 0
    expect(cardElementsNumber).toBeGreaterThan(0);
    expect(cardElementsNumber).toBeLessThanOrEqual(20);

    for (let i = 0; i < cardElementsNumber; i++) {
        const currentcardItem = cardItems.nth(i);
        await expect(currentcardItem.locator('.place-card__image')).toHaveAttribute('src', /https:\/\/.+[.]jpg/);
        await expect(currentcardItem.locator('.place-card__price')).toHaveText(/^\€\d+/);
        await expect(currentcardItem.locator('.place-card__rating')).toBeVisible();
    }
});

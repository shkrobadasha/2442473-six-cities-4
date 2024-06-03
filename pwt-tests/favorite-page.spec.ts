import { test, expect } from '@playwright/test';

test('favorites is available only after authorization', async ({page}) => {

    const isFavorite = async () => {
      const favBtnClassList = await page
        .locator('.bookmark-button')
        .first()
        .evaluate((el) => [...el.classList]);
      return favBtnClassList.includes('place-card__bookmark-button--active');
    };

    const getFavoritesNumber = async () =>
      parseInt(
        (await page.locator('.header__favorite-count').textContent()) || '0'
      );

    await page.goto('http://localhost:5173');
    await page.waitForSelector('.cities__card');

    await page.locator('.bookmark-button').first().click();
    await page.waitForURL('http://localhost:5173/login');

    await page.goto('http://localhost:5173');
    await page.waitForSelector('.cities__card');

    await page.locator('.place-card__name').locator('a').first().click();
    await page.waitForSelector('.offer__inside-list');

    await page.locator('.bookmark-button').first().click();
    await page.waitForURL('http://localhost:5173/login');

    await page.goto('http://localhost:5173/favorites');
    await page.waitForURL('http://localhost:5173/login');


    await page.goto('http://localhost:5173/login');

    await page.fill('input[name="email"]', 'testUser@mail.com');
    await page.fill('input[name="password"]', 'dkkh3js');

    await Promise.all([
      page.waitForURL('http://localhost:5173'),
      page.click('button[type="submit"]'),
    ]);

    await page.waitForSelector('.cities__card');

    await Promise.all([
      page.waitForResponse(
        (resp) =>
          resp.url().includes('/favorite') &&
          resp.status() ===  201
      ),
      page.locator('.bookmark-button').first().click(),
    ]);

    const isFavoriteAfterAction = await isFavorite();
    expect(isFavoriteAfterAction).toBeTruthy();

    await page.waitForSelector("text='1'");

    await Promise.all([
      page.waitForURL('http://localhost:5173/favorites'),
      page.getByRole('link', { name: 'testUser@mail.com' }).click(),
    ])

    await page.waitForSelector(`.favorites__list`);

    const favoriteCardCity = await page.locator('.locations__item-link').first().textContent();
    expect(favoriteCardCity).toBe('Paris');

    const favoriteCardsNumber = await page.locator('.locations__item-link').count();
    const lastFavCounter = await getFavoritesNumber();
    expect(favoriteCardsNumber).toBe(lastFavCounter);

    await Promise.all([
      page.waitForResponse(
        (resp) =>
          resp.url().includes('/favorite') &&
          resp.status() ===  200
      ),
      page.locator('.bookmark-button').first().click(),
    ]);

    await page.waitForSelector("text='Nothing yet saved.'");
  });

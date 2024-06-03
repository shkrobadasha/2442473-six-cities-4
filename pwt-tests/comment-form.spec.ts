import { test, expect } from '@playwright/test';

const REVIEW = 'This is the most beautiful place I\'ve been in a while! The idea of spending a vacation here was excellent. I\'m sure everyone should come here at least once!';
const RATING = 'perfect';

test('comment form is available only after authorization', async ({ page }) => {

  await page.goto('http://localhost:5173');

  //попытка доступа к форме без авторизации
  await page.waitForSelector('.cities__card');
  await page.locator('.place-card__name').first().click();
  await page.waitForURL('**/offer/**');

  const reviewForm = await page.isVisible('.reviews__form');
  expect(reviewForm).toBeFalsy();

  //авторизация пользователя
  await page.goto('http://localhost:5173/login');
  await page.fill('input[name="email"]', 'testUser@mail.ru');
  await page.fill('input[name="password"]', 'dhfjdhej1');
  await page.click('button[type="submit"]');

  //попытка доступа к форме после авторизации
  await page.waitForSelector('.cities__card');
  await page.locator('.place-card__name').first().click();
  await page.waitForURL('**/offer/**');

  await page.fill('[name="review"]', REVIEW);
  await page.getByTitle(RATING).click();
  await page.waitForSelector('.offer__inside-list');

  const commentForm = await page.isVisible('.reviews__form');
  expect(commentForm).toBeTruthy();

  await Promise.all([
    page.waitForResponse(
      (resp) => resp.url().includes('/comments') && resp.status() === 201
    ),
    page.click('button[type="submit"]'),
  ]);

  const reviewText = await page.locator('.reviews__text').first().textContent();
  const reviewAuthor = (await page.locator('.reviews__user-name').first().textContent())?.trim();
  const reviewRating = await page.locator('.reviews__stars>span').first().getAttribute('style');

  expect(reviewText).toBe(REVIEW);
  expect(reviewAuthor).toBe('testUser');
  expect(reviewRating).toBe('width: 100%;');
});

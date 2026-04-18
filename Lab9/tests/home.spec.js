import { test, expect } from '../fixtures/pages.js';

test.describe('Home page', () => {
  test('loads successfully and shows a non-empty title', async ({ pages, page }) => {
    const response = await page.goto('/', { waitUntil: 'networkidle' });

    expect(response?.status()).toBe(200);
    expect(await pages.home().title()).not.toBe('');
    await expect(pages.home().heroHeading).toBeVisible();
  });

  test('sign-in link navigates to /sign-in', async ({ pages, page }) => {
    const home = pages.home();
    await home.goto();

    await home.openSignIn();

    await expect(page).toHaveURL(/\/sign-in\/?$/);
  });

  test('has a visible sign-in link on load', async ({ pages }) => {
    const home = pages.home();
    await home.goto();

    await expect(home.signInLink).toBeVisible();
  });
});

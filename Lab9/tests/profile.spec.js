import { test, expect } from '../fixtures/pages.js';

const EMAIL = process.env.UMSYS_EMAIL;

test.describe('Profile page (authenticated)', () => {
  test('loads for authenticated user', async ({ pages, page }) => {
    test.skip(!EMAIL, 'UMSYS_EMAIL not set');
    const profile = pages.profile(EMAIL);
    await profile.goto();

    await expect(page).toHaveURL(new RegExp(`/${EMAIL.replace(/[.@+]/g, '\\$&')}/?$`));
    await expect(profile.profileHeading).toBeVisible();
  });

  test('sign-out returns to sign-in or home', async ({ pages, page }) => {
    test.skip(!EMAIL, 'UMSYS_EMAIL not set');
    const profile = pages.profile(EMAIL);
    await profile.goto();

    await profile.signOut();

    await expect(page).toHaveURL(/\/(sign-in)?\/?$/);
  });
});

test.describe('Profile page (anonymous)', () => {
  test.use({ storageState: { cookies: [], origins: [] } });

  test('anonymous visitor is redirected to /sign-in', async ({ page }) => {
    test.skip(!EMAIL, 'UMSYS_EMAIL not set');
    await page.goto(`/${EMAIL}`);

    await expect(page).toHaveURL(/\/sign-in/);
  });
});

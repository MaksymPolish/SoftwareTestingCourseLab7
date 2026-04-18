import { test, expect } from '../fixtures/pages.js';

test.describe('Sign in page (OAuth)', () => {
  test.beforeEach(async ({ pages }) => {
    await pages.signIn().goto();
  });

  test('page loads successfully with OAuth login buttons', async ({ pages, page }) => {
    const signIn = pages.signIn();
    
    // Перевіряємо, що сторінка завантажилась
    await expect(page).toHaveURL(/\/sign-in/);
    
    // Перевіряємо наявність OAuth кнопок
    await expect(signIn.googleLoginButton).toBeVisible();
    await expect(signIn.microsoftLoginButton).toBeVisible();
  });

  test('google login button is clickable', async ({ pages }) => {
    const signIn = pages.signIn();
    
    // Перевіряємо, що кнопка відображається та включена
    const googleBtn = signIn.googleLoginButton;
    await expect(googleBtn).toBeEnabled();
    await expect(googleBtn).toBeVisible();
  });

  test('microsoft login button is visible', async ({ pages }) => {
    const signIn = pages.signIn();
    
    // Перевіряємо Microsoft кнопку
    await expect(signIn.microsoftLoginButton).toBeVisible();
    await expect(signIn.microsoftLoginButton).toBeEnabled();
  });
});

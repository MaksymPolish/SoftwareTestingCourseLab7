import fs from 'fs';
import { test as base, expect } from '@playwright/test';
import { PageFactory } from '../pages/page-factory.js';

/**
 * Власна фіксхура для ін'єкції PageFactory у тести
 * Використання: test('name', async ({ pages }) => { ... })
 */
export const test = base.extend({
  pages: async ({ page }, use) => {
    await use(new PageFactory(page));
  },
});

// ✅ Завантажити cookies перед кожним тестом (крім auth.setup.js)
// Це дозволяє сесії з auth.setup.js передаватися до наступних тестів
test.beforeEach(async ({ page }) => {
  const authFile = '.auth/user.json';
  
  if (fs.existsSync(authFile)) {
    try {
      const storageState = JSON.parse(fs.readFileSync(authFile, 'utf-8'));
      
      // Завантажити cookies до браузера
      if (storageState.cookies && storageState.cookies.length > 0) {
        await page.context().addCookies(storageState.cookies);
      }
      
      // Завантажити localStorage (якщо є)
      if (storageState.origins && storageState.origins.length > 0) {
        for (const origin of storageState.origins) {
          await page.addInitScript((data) => {
            if (data && data.localStorage) {
              Object.entries(data.localStorage).forEach(([key, value]) => {
                localStorage.setItem(key, value);
              });
            }
          }, origin.localStorage);
        }
      }
    } catch (error) {
      console.warn('⚠️  Не вдалося завантажити cookies:', error.message);
    }
  }
});

export { expect };

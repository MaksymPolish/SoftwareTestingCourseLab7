import fs from 'fs';
import path from 'path';
import { test as setup } from '@playwright/test';

const authFile = '.auth/user.json';

setup('authenticate', async ({ page }) => {
  // Навігуємо на сторінку входу
  await page.goto('/sign-in', { waitUntil: 'domcontentloaded' });

  
  console.log('');

  // Чекаємо, поки користувач пройде логін і браузер перенаправить на /dashboard або /{email}
  await page.waitForFunction(() => {
    const url = window.location.href;
    return url.includes('/dashboard') || url.match(/\/[\w.-]+@[\w.-]+\.\w+/);
  }, { timeout: 900000 }); // 15 хвилин для ручного входу + 2FA

  console.log('Успішно автентифіковано!');
  console.log('Зберігаю cookies...');

  // Зберігаємо стан авторизації для наступних тестів
  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }
  
  await page.context().storageState({ path: authFile });
  
  console.log('Cookies збережені у .auth/user.json');
  console.log('');
  console.log('Тепер можете запустити тести:');
  console.log('  npm test');
});

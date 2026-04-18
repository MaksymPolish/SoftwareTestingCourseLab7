import { BasePage } from './base-page.js';

/**
 * ProfilePage — сторінка профілю користувача
 * URL: https://umsys.com.ua/{email}
 * Доступна тільки для авторизованих користувачів
 */
export class ProfilePage extends BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   * @param {string} email
   */
  constructor(page, email) {
    super(page);
    this.email = email;
  }

  get path() {
    return `/${this.email}`;
  }

  /**
   * Заголовок профілю
   */
  get profileHeading() {
    return this.page.getByRole('heading').first();
  }

  /**
   * Кнопка "Sign out"
   */
  get signOutButton() {
    return this.page.getByRole('button', { name: /sign out|вийти|log out/i });
  }

  /**
   * Вихід з профілю
   */
  async signOut() {
    await this.signOutButton.click();
  }
}

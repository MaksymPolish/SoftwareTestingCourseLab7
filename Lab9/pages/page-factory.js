import { HomePage } from './home-page.js';
import { SignInPage } from './sign-in-page.js';
import { ProfilePage } from './profile-page.js';

/**
 * PageFactory — фабрика для створення об'єктів сторінок
 * Централізує création екземплярів сторінок.
 * Тести отримують фабрику через fixture, а не конструюють сторінки вручну.
 */
export class PageFactory {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * @returns {HomePage}
   */
  home() {
    return new HomePage(this.page);
  }

  /**
   * @returns {SignInPage}
   */
  signIn() {
    return new SignInPage(this.page);
  }

  /**
   * @param {string} email
   * @returns {ProfilePage}
   */
  profile(email) {
    return new ProfilePage(this.page, email);
  }
}

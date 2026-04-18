import { BasePage } from './base-page.js';

/**
 * HomePage — сторінка https://umsys.com.ua/
 * Містить локатори для входу та головного заголовка
 */
export class HomePage extends BasePage {
  get path() {
    return '/';
  }

  /**
   * Посилання на вхід (знаходимо за роллю та текстом)
   */
  get signInLink() {
    return this.page.getByRole('link', { name: /sign[- ]?in|увійти/i });
  }

  /**
   * Головний заголовок на сторінці
   */
  get heroHeading() {
    return this.page.getByRole('heading').first();
  }

  /**
   * Клік на посилання входу
   */
  async openSignIn() {
    await this.signInLink.click();
  }
}

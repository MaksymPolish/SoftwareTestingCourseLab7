/**
 * BasePage — базовий клас для всіх сторінок
 * Інкапсулює спільну функціональність: навігація, заголовок сторінки
 */
export class BasePage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
  }

  /**
   * Дочірні класи перевизначають цей геттер
   */
  get path() {
    return '/';
  }

  /**
   * Навігація на сторінку
   */
  async goto() {
    return this.page.goto(this.path, { waitUntil: 'networkidle' });
  }

  /**
   * Отримати заголовок сторінки
   */
  title() {
    return this.page.title();
  }
}

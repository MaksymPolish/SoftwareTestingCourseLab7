import { BasePage } from './base-page.js';

/**
 * SignInPage — сторінка https://umsys.com.ua/sign-in
 * Містить локатори для форми входу
 */
export class SignInPage extends BasePage {
  get path() {
    return '/sign-in';
  }

  /**
   * Кнопка входу через Google
   */
  get googleLoginButton() {
    return this.page.getByTestId('login-btn');
  }

  /**
   * Кнопка входу через Microsoft
   */
  get microsoftLoginButton() {
    return this.page.getByTestId('microsoft-login-btn');
  }

  /**
   * Повідомлення про помилку
   */
  get errorMessage() {
    return this.page.getByRole('alert');
  }

  /**
   * Клік на кнопку Google логіну
   */
  async loginWithGoogle() {
    await this.googleLoginButton.click();
  }

  /**
   * Клік на кнопку Microsoft логіну
   */
  async loginWithMicrosoft() {
    await this.microsoftLoginButton.click();
  }
}

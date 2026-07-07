import { expect } from '@playwright/test'

export class LoginPage {
  constructor(page) {
    this.page = page
    this.usernameInput = page.locator('#user-name')
    this.passwordInput = page.locator('#password')
    this.loginButton = page.locator('#login-button')
    this.errorMessage = page.locator('[data-test="error"]')
    this.pageTitle = page.locator('.title')
  }

  async goto(baseUrl) {
    await this.page.goto(baseUrl)
  }

  async login(username, password) {
    await this.usernameInput.fill(username)
    await this.passwordInput.fill(password)
    await this.loginButton.click()
  }

  async verifyLoginSuccess(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl)
    await expect(this.pageTitle).toHaveText('Products')
  }

  async verifyErrorMessage(expectedMessage) {
    await expect(this.errorMessage).toHaveText(expectedMessage)
  }
}
import { expect } from '@playwright/test'

export class CheckoutStepTwoPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.finishButton = page.locator('#finish')
  }

  async verifyCheckoutStepTwoPage(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl)
    await expect(this.pageTitle).toHaveText('Checkout: Overview')
  }

  async clickFinish() {
    await this.finishButton.click()
  }
}
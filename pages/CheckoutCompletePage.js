import { expect } from '@playwright/test'

export class CheckoutCompletePage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.completeHeader = page.locator('.complete-header')
    this.completeText = page.locator('.complete-text')
  }

  async verifyCheckoutCompletePage(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl)
    await expect(this.pageTitle).toHaveText('Checkout: Complete!')
  }

  async verifyThankYouMessage(expectedHeader) {
    await expect(this.completeHeader).toHaveText(expectedHeader)
    await expect(this.completeText).toBeVisible()
  }
}
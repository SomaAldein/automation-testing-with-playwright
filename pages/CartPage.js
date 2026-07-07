import { expect } from '@playwright/test'

export class CartPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.locator('.title')
    this.cartItems = page.locator('.cart_item')
    this.checkoutButton = page.locator('#checkout')
  }

  async verifyCartPage(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl)
    await expect(this.pageTitle).toHaveText('Your Cart')
  }

  async verifyCartItemsCount(count) {
    await expect(this.cartItems).toHaveCount(count)
  }

  async clickCheckout() {
    await this.checkoutButton.click()
  }
}
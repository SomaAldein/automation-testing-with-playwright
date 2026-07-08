import { expect } from "@playwright/test";

export class InventoryPage {
  constructor(page) {
    this.page = page
    this.pageTitle = page.getByText('Products')
    this.shoppingCartBadge = page.getByTestId('shopping-cart-badge')
    this.shoppingCartLink = page.getByTestId('shopping-cart-link')
    this.backpackButton = page.getByTestId('add-to-cart-sauce-labs-backpack')
    this.bikeLightButton = page.getByTestId('add-to-cart-sauce-labs-bike-light')
  }

  async verifyInventoryPage(expectedUrl) {
    await expect(this.page).toHaveURL(expectedUrl)
    await expect(this.pageTitle).toHaveText('Products')
  }

  async addBackpackToCart() {
    await this.backpackButton.click()
  }

  async addBikeLightToCart() {
    await this.bikeLightButton.click()
  }

  async verifyCartBadgeCount(count) {
    await expect(this.shoppingCartBadge).toHaveText(String(count))
  }

  async goToCart() {
    await this.shoppingCartLink.click()
  }
}
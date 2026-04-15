import { expect } from "@playwright/test";

export class InventoryPage {
    constructor(page){
        this.page = page
        this.pageTitle = page.locator('.title')
        this.shoppingCartBadge = page.locator('.shopping_cart_badge')
        this.shoppingCartLink = page.locator('.shopping_cart_link')

        }

    async verifyInventoryPage(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
        await expect(this.pageTitle).toHaveText('Products') 
    }
    async addBackpackToCart(){
        await this.page.locator('#add-to-cart-sauce-labs-backpack').click()
        
    }
    async addBikeLightToCart() {
    await this.page.locator('#add-to-cart-sauce-labs-bike-light').click()
}
    async verifyCartBadgeCount(count) {
        await expect(this.shoppingCartBadge).toHaveText(String(count))
    }
    async goToCart(){
        await this.shoppingCartLink.click()
    }   
}

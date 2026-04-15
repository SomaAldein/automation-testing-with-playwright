import {expect} from '@playwright/test'

export class CartPage {
    constructor(page){
        this.page = page
        this.pageTitle = page.locator('.title')
        this.cartItems = page.locator('.cart_item')
        this.checkoutButton = page.locator('#checkout')
    }
    async verifyCartPage(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/cart.html')
        await expect(this.pageTitle).toHaveText('Your Cart') 
    }   
    async verifyCartItemsCount(count){
        await expect(this.cartItems).toHaveCount(count)
    }  
    async clickCheckout(){
        await this.checkoutButton.click()
    }
} 
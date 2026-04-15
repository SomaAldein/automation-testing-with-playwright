import {expect } from '@playwright/test'

export class CheckoutStepTwoPage {
    constructor(page){
        this.page = page
        this.pageTitle = page.locator('.title')
        this.finishButton = page.locator('#finish')
    }

    async verifyCheckoutStepTwoPage(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html')
        await expect(this.pageTitle).toHaveText('Checkout: Overview')
    }

    async clickFinish(){
        await this.finishButton.click()
    }
}
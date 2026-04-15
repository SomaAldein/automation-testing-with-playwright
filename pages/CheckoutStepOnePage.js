import {expect} from '@playwright/test'

export class CheckoutStepOnePage {
    constructor(page){
        this.page = page
        this.pageTitle = page.locator('.title')
        this.firstNameInput = page.locator('#first-name')
        this.lastNameInput = page.locator('#last-name')
        this.postalCodeInput = page.locator('#postal-code')
        this.continueButton = page.locator('#continue')
    }

    async verifyCheckoutStepOnePage(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html')
        await expect(this.pageTitle).toHaveText('Checkout: Your Information')
    }

    async fillcheckoutInformation(firstName, lastName, postalCode){
        await this.firstNameInput.fill(firstName)
        await this.lastNameInput.fill(lastName)
        await this.postalCodeInput.fill(postalCode)
    }

    async clickContinue(){
        await this.continueButton.click()
    }
}
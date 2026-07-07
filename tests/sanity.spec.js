import { test } from '@playwright/test'
import { testData } from '../data/testData'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage'
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage'
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage'

test.describe('Sanity Test - Swag Labs', () => {
  let inventoryPage
  let cartPage
  let checkoutStepOnePage
  let checkoutStepTwoPage
  let checkoutCompletePage

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page)
    inventoryPage = new InventoryPage(page)
    cartPage = new CartPage(page)
    checkoutStepOnePage = new CheckoutStepOnePage(page)
    checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    checkoutCompletePage = new CheckoutCompletePage(page)

    await loginPage.goto(testData.baseUrl)
    await loginPage.login(
      testData.validUsers.standard,
      testData.password.valid,
    )
  })

  test('Complete purchase flow with 2 items', async () => {
    await inventoryPage.verifyInventoryPage(testData.inventoryUrl)

    await inventoryPage.addBackpackToCart()
    await inventoryPage.addBikeLightToCart()
    await inventoryPage.verifyCartBadgeCount(2)
    await inventoryPage.goToCart()

    await cartPage.verifyCartPage(testData.cartUrl)
    await cartPage.verifyCartItemsCount(2)
    await cartPage.clickCheckout()

    await checkoutStepOnePage.verifyCheckoutStepOnePage(testData.checkoutStepOneUrl)
    await checkoutStepOnePage.fillCheckoutInformation(
      testData.checkoutInfo.firstName,
      testData.checkoutInfo.lastName,
      testData.checkoutInfo.postalCode,
    )
    await checkoutStepOnePage.clickContinue()

    await checkoutStepTwoPage.verifyCheckoutStepTwoPage(testData.checkoutStepTwoUrl)
    await checkoutStepTwoPage.clickFinish()

    await checkoutCompletePage.verifyCheckoutCompletePage(testData.checkoutCompleteUrl)
    await checkoutCompletePage.verifyThankYouMessage(
      testData.expectedMessages.checkoutCompleteHeader,
    )
  })
})
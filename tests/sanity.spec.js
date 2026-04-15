import { test } from '@playwright/test'
import { testData } from '../data/testData'
import { LoginPage } from '../pages/LoginPage'
import { InventoryPage } from '../pages/InventoryPage'
import { CartPage } from '../pages/CartPage'
import { CheckoutStepOnePage } from '../pages/CheckoutStepOnePage'
import { CheckoutStepTwoPage } from '../pages/CheckoutStepTwoPage'
import { CheckoutCompletePage } from '../pages/CheckoutCompletePage'

test.describe('Sanity Test - Swag Labs', () => {
  test('Complete purchase flow with 2 items', async ({ page }) => {
    const loginPage = new LoginPage(page)
    const inventoryPage = new InventoryPage(page)
    const cartPage = new CartPage(page)
    const checkoutStepOnePage = new CheckoutStepOnePage(page)
    const checkoutStepTwoPage = new CheckoutStepTwoPage(page)
    const checkoutCompletePage = new CheckoutCompletePage(page)

    await loginPage.goto(testData.baseUrl)
    await loginPage.login(
      testData.validUsers.standard,
      testData.password.valid,
    )

    await inventoryPage.verifyInventoryPage()

    await inventoryPage.addBackpackToCart()
    await inventoryPage.addBikeLightToCart()
    await inventoryPage.verifyCartBadgeCount(2)

    await inventoryPage.goToCart()

    await cartPage.verifyCartPage()
    await cartPage.verifyCartItemsCount(2)
    await cartPage.clickCheckout()

    await checkoutStepOnePage.verifyCheckoutStepOnePage()
    await checkoutStepOnePage.fillcheckoutInformation(
      testData.checkoutInfo.firstName,
      testData.checkoutInfo.lastName,
      testData.checkoutInfo.postalCode,
    )
    await checkoutStepOnePage.clickContinue()

    await checkoutStepTwoPage.verifyCheckoutStepTwoPage()
    await checkoutStepTwoPage.clickFinish()

    await checkoutCompletePage.verifyCheckoutCompletePage()
    await checkoutCompletePage.verifyThankYouMessage(
      testData.expectedMessages.checkoutCompleteHeader,
    )
  })
})
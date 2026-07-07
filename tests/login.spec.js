import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { testData } from '../data/testData'

test.describe('Login Tests', () => {
  test.describe('Positive Tests', () => {
    const validUsers = [
      testData.validUsers.standard,
      testData.validUsers.problem,
      testData.validUsers.performance,
      testData.validUsers.error_user,
      testData.validUsers.visual,
    ]

    validUsers.forEach((user) => {
      test(`Login with valid user: ${user}`, async ({ page }) => {
        const loginPage = new LoginPage(page)
        await loginPage.goto(testData.baseUrl)
        await loginPage.login(user, testData.password.valid)
        await loginPage.verifyLoginSuccess(testData.inventoryUrl)
      })
    })
  })

  test.describe('Negative Tests', () => {
    test('Login with locked out user', async ({ page }) => {
      const loginPage = new LoginPage(page)
      await loginPage.goto(testData.baseUrl)
      await loginPage.login(
        testData.invalidUsers.lockedOut,
        testData.password.valid
      )
      await loginPage.verifyErrorMessage(testData.expectedMessages.lockedOut)
    })

    test('Login with wrong username', async ({ page }) => {
      const loginPage = new LoginPage(page)
      await loginPage.goto(testData.baseUrl)
      await loginPage.login(
        testData.invalidUsers.wrongUsername,
        testData.password.valid
      )
      await loginPage.verifyErrorMessage(
        testData.expectedMessages.invalidCredentials
      )
    })

    test('Login with empty username', async ({ page }) => {
      const loginPage = new LoginPage(page)
      await loginPage.goto(testData.baseUrl)
      await loginPage.login(
        testData.invalidUsers.empty,
        testData.password.valid
      )
      await loginPage.verifyErrorMessage(
        testData.expectedMessages.usernameRequired
      )
    })

    test('Login with empty password', async ({ page }) => {
      const loginPage = new LoginPage(page)
      await loginPage.goto(testData.baseUrl)
      await loginPage.login(
        testData.validUsers.standard,
        testData.password.empty
      )
      await loginPage.verifyErrorMessage(
        testData.expectedMessages.passwordRequired
      )
    })
  })
})
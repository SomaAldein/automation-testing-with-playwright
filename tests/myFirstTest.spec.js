import {test , expect} from '@playwright/test'

// Test suite
test.describe('Async Suite Example', () => {
    // test.beforeEach(async () => {})
    // test.beforeAll(async () => {})
    // test.afterEach(async () => {})
    // test.afterAll(async () => {})
    // Test case 1
    test(' Navigate Example', async ({page}) => {
        await page.goto('https://www.google.com')
        await expect(page).toHaveTitle('Google')
    })
   

})



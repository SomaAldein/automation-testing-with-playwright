const baseUrl = 'https://www.saucedemo.com'

export const testData = {
  baseUrl,
  inventoryUrl: `${baseUrl}/inventory.html`,
  cartUrl: `${baseUrl}/cart.html`,
  checkoutStepOneUrl: `${baseUrl}/checkout-step-one.html`,
  checkoutStepTwoUrl: `${baseUrl}/checkout-step-two.html`,
  checkoutCompleteUrl: `${baseUrl}/checkout-complete.html`,

  validUsers: {
    standard: 'standard_user',
    problem: 'problem_user',
    performance: 'performance_glitch_user',
    error_user: 'error_user',
    visual: 'visual_user',
  },

  invalidUsers: {
    lockedOut: 'locked_out_user',
    wrongUsername: 'wrong_user',
    empty: '',
  },

  password: {
    valid: 'secret_sauce',
    invalid: 'wrong_password',
    empty: '',
  },

  checkoutInfo: {
    firstName: 'Lando',
    lastName: 'Norris',
    postalCode: '12345',
  },

  expectedMessages: {
    lockedOut: 'Epic sadface: Sorry, this user has been locked out.',
    invalidCredentials:
      'Epic sadface: Username and password do not match any user in this service',
    usernameRequired: 'Epic sadface: Username is required',
    passwordRequired: 'Epic sadface: Password is required',
    checkoutCompleteHeader: 'Thank you for your order!',
  },
}
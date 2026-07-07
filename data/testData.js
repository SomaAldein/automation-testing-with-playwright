export const testData = {
  baseUrl: 'https://www.saucedemo.com/',
  inventoryUrl: 'https://www.saucedemo.com/inventory.html',
  cartUrl: 'https://www.saucedemo.com/cart.html',
  checkoutStepOneUrl: 'https://www.saucedemo.com/checkout-step-one.html',
  checkoutStepTwoUrl: 'https://www.saucedemo.com/checkout-step-two.html',
  checkoutCompleteUrl: 'https://www.saucedemo.com/checkout-complete.html',

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
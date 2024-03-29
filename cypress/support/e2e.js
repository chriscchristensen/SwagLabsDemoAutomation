// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import '../e2e/commands/login_commands.cy'
import '../e2e/commands/products_commands.cy'
import "./cyLogCustomStyles"
import "../e2e/commands/cart_commands.cy"
import "../support/step_definitions/login-steps.js"

// Alternatively you can use CommonJS syntax:
// require('./commands')
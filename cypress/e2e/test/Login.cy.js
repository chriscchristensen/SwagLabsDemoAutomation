describe('Login', () => {

  beforeEach(() => {
    cy.visit('/', { timeout: 5000 })
  })

  it('Login Page - Verification', () => {
    cy.verifyPageComponents();
  });
  it('Login Error', () => {
    cy.clickLogin();
  });
})
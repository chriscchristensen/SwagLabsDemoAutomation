describe('Login', () => {

  beforeEach(() => {
    cy.visit('/', { timeout: 5000 })
  })

  it('Login Page - OK', () => {
    cy.typeCorrectUsername();
    cy.typeCorrectPassword();
    cy.clickLogin();
    cy.verifyRedirectOnLoginURL();
  });
  it('Login Page - Verification', () => {
    cy.verifyPageComponents();
  });
  it('Login Error Blank Fields', () => {
    cy.clickLogin();
    cy.verifyPageErrorComponents();
  });
  it('Login Error Wrong/Blank Username', () => {
    cy.typeCorrectUsername();
    cy.clickLogin();
    cy.verifyPageUsernameErrorComponents();
  });
  it('Login Error Wrong/Blank Password', () => {
    cy.typeCorrectPassword();
    cy.clickLogin();
    cy.verifyPagePasswordErrorComponents();
    });
})
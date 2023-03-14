describe('Cart', () => {
    beforeEach(() => {
        cy.visit('/', { timeout: 5000 });
        cy.typeCorrectUsername();
        cy.typeCorrectPassword();
        cy.clickLogin();
        cy.clickCartButton();
      })

      it('Cart Page - Verification', () => {
        cy.verifyCartPageComponents();
      })
})
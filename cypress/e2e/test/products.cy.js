describe('Products', () => {

    beforeEach(() => {
      cy.visit('/', { timeout: 5000 });
      cy.typeCorrectUsername();
      cy.typeCorrectPassword();
      cy.clickLogin();
    })
  
    it('Products Page - Verification', () => {
        cy.verifyProductPageComponents();
      });
  })
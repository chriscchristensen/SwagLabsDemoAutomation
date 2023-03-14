const CartSelectors = {
    LogoHeader: () => {
        return cy.get('.app_logo')
    },
    HamburgerMenuButton: () => {
        return cy.get('#react-burger-menu-btn')
    },
    YourCartHeader: () => {
        return cy.get('.title')
    },
    CartQtyLabel: () => {
        return cy.get('.cart_quantity_label')
    },
    CartDescriptionLabel: () => {
        return cy.get('.cart_desc_label')
    },
    ContinueShoppingButton: () => {
        return cy.get('#continue-shopping')
    },
    CheckoutButton: () => {
        return cy.get('#checkout')
    },
    CartButton: () => {
        return cy.get('.shopping_cart_link')
    },
};

export default { CartSelectors }
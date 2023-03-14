import { CartSelectors } from "./cart_selectors.cy";

const LABELS = {
    SWAG_HEADER: 'Swag Labs',
    YOURCART: 'Your Cart',
    QTY: 'QTY',
    DESC: 'Description',
    CONTSHOPPING: 'Continue Shopping',
    CHCKOUT: 'Checkout',
};

class Cart {
    constructor() {
        this.select = CartSelectors;
    }

    verifyCartPageComponents() {
        this.select.LogoHeader().should('exist');
        this.select.HamburgerMenuButton().should('exist');
        this.select.YourCartHeader().should('exist').contains(LABELS.YOURCART);
        this.select.CartQtyLabel().should('exist').contains(LABELS.QTY);
        this.select.CartDescriptionLabel().should('exist').contains(LABELS.DESC);
        this.select.ContinueShoppingButton().should('exist').contains(LABELS.CONTSHOPPING);
        this.select.CheckoutButton().should('exist').contains(LABELS.CHCKOUT);
    }
    clickCartButton() {
        this.select.CartButton().click();
    }
}
export default {
    Cart,
    LABELS,
}
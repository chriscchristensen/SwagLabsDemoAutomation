import { ProductsSelectors } from "./products_selectors.cy";

const LABELS = {
    SWAG_HEADER: 'Swag Labs',
    PRODUCTS: 'Products',
    DESCENDING: 'Name (A to Z)',
    ASCENDING: 'Name (Z to A)',
    LOHIPRICE: 'Price (low to high)',
    HILOPRICE: 'Price (high to low)',
    FOOTER: '© 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy',
    TOS: "Terms of Service",
    PRIVACYP: "Privacy Policy",
    TWITTER: "https://twitter.com/saucelabs",
    FACEBOOK: 'https://www.facebook.com/saucelabs',
    INDEED: 'https://www.linkedin.com/company/sauce-labs/',
    BACKPACK: 'Sauce Labs Backpack',
    DESCRIPTION: 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.',
    PRICE: '$29.99',
    ADDTOCART: 'Add to cart',
    REMOVEFROMCART: 'Remove',
};

class Products {
        constructor() {
            this.select = ProductsSelectors;
        }

        verifyProductPageComponents() {
            //Verify Components
            this.select.LogoHeader().should('exist').contains(LABELS.SWAG_HEADER);
            this.select.ProductsHeader().should('exist').contains(LABELS.PRODUCTS);
            this.select.HamburgerMenuButton().should('exist');
            this.select.SortContainer().should('exist').contains(LABELS.DESCENDING);
            this.select.SortContainer().should('exist').contains(LABELS.ASCENDING);
            this.select.SortContainer().should('exist').contains(LABELS.LOHIPRICE);
            this.select.SortContainer().should('exist').contains(LABELS.HILOPRICE);
            this.select.FooterText().should('exist').contains(LABELS.FOOTER);
            //These two tests are expected to fail. They will be logged and highlighted in red.
            this.select.ToSButton();
            this.select.PPButton();
            //The following tests will pass.
            this.select.TwitterButton().should('have.attr', 'href', LABELS.TWITTER);
            this.select.FacebookButton().should('have.attr', 'href', LABELS.FACEBOOK);
            this.select.IndeedButton().should('have.attr', 'href', LABELS.INDEED);
            this.select.InventoryItem().should('have.length', 6);
            this.select.InventoryItemAddToCartButton().should('exist').contains(LABELS.ADDTOCART);
            this.select.InventoryItemAddToCartButton().click('right')
            this.select.InventoryItemRemoveFromCartButton().should('exist').contains(LABELS.REMOVEFROMCART);
            this.select.ShoppingCartIcon().should('exist');
        }
        addRemoveFromCart() {
            this.select.InventoryItemAddToCartButton().should('exist').contains(LABELS.ADDTOCART);
            this.select.InventoryItemAddToCartButton().click('right');
            this.select.ShoppingCartBadge().should('exist');
            this.select.InventoryItemRemoveFromCartButton().should('exist').contains(LABELS.REMOVEFROMCART);
            this.select.InventoryItemAddToCartButton().click('right')
            this.select.InventoryItemAddToCartButton().should('exist').contains(LABELS.ADDTOCART);
            this.select.ShoppingCartBadge().should('not.exist');
        }

}
export default {
    Products,  
    LABELS,      
}
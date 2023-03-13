const ProductsSelectors = {
    LogoHeader: () => {
        return cy.get('.app_logo')
    },
    ProductsHeader: () => {
        return cy.get('.title')
    },
    HamburgerMenuButton: () => {
        return cy.get('#react-burger-menu-btn')
    },
    SortContainer: () => {
        return cy.get('.product_sort_container')
    },
    CartButton: () => {
        return cy.get('.shopping_cart_link')
    },
    TwitterButton: () => {
        return cy.get('.social_twitter')
    },
    FacebookButton: () => {
        return cy.get('.social_facebook')
    },
    IndeedButton: () => {
        return cy.get('.social_linkedin')
    },
    FooterText: () => {
        return cy.get('.footer_copy')
    },
    //This element doesn't exist.
    ToSButton: () => {
        return cy.get('ToS').then(($ToS) => {
            if ($ToS.find("#Terms_Of_Service").length > 0 ) {
                cy.get('#Terms_Of_Service')
            } else {
                cy.softAssert(true, false, '#Terms_Of_Service is NOT FOUND');
            }
        })
    },
    //This element doesn't exist.
    PPButton: () => {
        return cy.get('PPPolicy').then(($ToS) => {
            if ($ToS.find("##Privacy_Policy").length > 0 ) {
                cy.get('##Privacy_Policy')
            } else {
                cy.softAssert(true, false, '#Terms_Of_Service is NOT FOUND');
            }
        })
    },
    InventoryList: () => {
        return cy.get('.inventory_list')
    },
    InventoryItem: () => {
        return cy.get('.inventory_item')
    },
    InventoryItemImg: () => {
        return cy.get('.inventory_item_img')
    },
    InventoryItemDescription: () => {
        return cy.get('.inventory_item_description')
    },
    InventoryItemPrice: () => {
        return cy.get('.inventory_item_price')
    },
    InventoryItemAddToCartButton: () => {
        return cy.get('.btn btn_primary btn_small btn_inventory')
    },
};

export default { ProductsSelectors };
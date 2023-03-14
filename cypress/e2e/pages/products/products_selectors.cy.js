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
        return cy.get('.social_twitter > a')
    },
    FacebookButton: () => {
        return cy.get('.social_facebook > a')
    },
    IndeedButton: () => {
        return cy.get('.social_linkedin > a')
    },
    FooterText: () => {
        return cy.get('.footer_copy')
    },
    //This element doesn't exist.
    ToSButton: () => {
        cy.get('.footer_copy').then($body => {
            if ($body.find("#Terms_Of_Service").length > 0) {
                cy.log("Terms of Service Link does exist.")
            } else {
                cy.log("Terms of Service Link doesn't exist.")
            }
        })
    },
    //This element doesn't exist.
    PPButton: () => {
        cy.get('.footer_copy').then($body => {
            if ($body.find("#Privacy_Policy").length > 0) {
                cy.log("Privacy Policy Link does exist.")
            } else {
                cy.log("Terms of Service Link doesn't exist.")
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
        return cy.get(':nth-child(1) > .inventory_item_description > .pricebar')
    },
    InventoryItemRemoveFromCartButton: () => {
        return cy.get(':nth-child(1) > .inventory_item_description > .pricebar')
    },
    ShoppingCartBadge: () => {
        return cy.get('.shopping_cart_badge')
    },
    ShoppingCartIcon: () => {
        return cy.get('.shopping_cart_link')
    }
};

export default { ProductsSelectors };
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
        return cy.get('#Terms_Of_Service')
    },
    //This element doesn't exist.
    PPButton: () => {
        return cy.get('#Privacy_Policy')
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
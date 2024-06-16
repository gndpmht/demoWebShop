class shoppingCartPage {
    shoppingCart(){
        cy.get('.ico-cart > .cart-label').click()
    }
    get productName(){
        return cy.get('.product-name')
    }



}

export default new shoppingCartPage()
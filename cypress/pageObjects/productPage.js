class ProductPage {
    get currentURL() {
      return cy.url();
    }
  
    searchProduct(name) {
      cy.get('#small-searchterms').clear().type(`${name}{enter}`);
    }
  
    get productTitle() {
      return cy.get('.product-title > a');
    }
  
    booksCategory(cat) {
      cy.get('.top-menu > :nth-child(1) > a').click();
      cy.get('h1').should('contain.text', cat);
    }
  
    computersCategory(cat) {
      cy.get('.top-menu > :nth-child(2) > [href="/computers"]').click();
      cy.get('h1').should('contain.text', cat);
    }
  
    electronicsCategory(cat) {
      cy.get('.top-menu > :nth-child(3) > a').click();
      cy.get('h1').should('contain.text', cat);
    }
  
    apparelCategory(cat) {
      cy.get('.top-menu > :nth-child(4) > a').click();
      cy.get('h1').should('contain.text', cat);
    }
  
    digitalCategory(cat) {
      cy.get('.top-menu > :nth-child(5) > a').click();
      cy.get('h1').should('contain.text', cat);
    }
  
    jewelryCategory(cat) {
      cy.get('.top-menu > :nth-child(6) > a').click();
      cy.get('h1').should('contain.text', cat);
    }
  
    giftCardsCategory(cat) {
      cy.get('.top-menu > :nth-child(7) > a').click();
      cy.get('h1').should('contain.text', cat);
    }
  
    // Item
    clickOnItemPicture() {
      cy.get('.product-title > a').first().click();
    }
  
    addtocart28() {
      cy.get('#add-to-cart-button-28').click();
    }
  
    addQuantity28(no) {
      cy.get('#addtocart_28_EnteredQuantity').clear().type(no);
    }
  
    addProductToCart(product) {
      this.searchProduct(product);
      this.clickOnItemPicture();
      this.addtocart28(); 
    }
  }
  
  export default new ProductPage();
  
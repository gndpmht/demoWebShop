import productPage from "../pageObjects/productPage"
import shoppingCArtPage from "../pageObjects/shoppingCArtPage";

describe('Adding items to cart', { testIsolation: false }, () => {
  let userdata;

  before(() => {
    cy.fixture('data.json').then((jsondata) => {
      userdata = jsondata;
    });
  });

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.clearCookies(); // Clear cookies to reset the session
    cy.clearLocalStorage(); // Clear local storage to reset the session
    cy.visit(userdata.URL);
    cy.url().should('eq', userdata.URL);
  });
  
    it('Add selected product in cart', () => {
        //search desired product
        productPage.searchProduct(userdata.shoes)
        productPage.productTitle.should('contain.text', userdata.shoes)

        //View the specific product page
        productPage.clickOnItemPicture()
        cy.url().should('eq', userdata.URL+'blue-and-green-sneaker');
        //add the product to cart
        productPage.addtocart28()

    })
  
    it('Add multiple products in cart', () => {
       //search desired product
       productPage.searchProduct(userdata.shoes)
       productPage.productTitle.should('contain.text', userdata.shoes)

       //View the specific product page
       productPage.clickOnItemPicture()
       cy.url().should('eq', userdata.URL+'blue-and-green-sneaker');
       //add quantity
       productPage.addQuantity28(3)
       //add the product to cart
       productPage.addtocart28()
  
    })
    it('View added product in cart', () => {
      //Add product to cart
      productPage.addProductToCart(userdata.shoes)

      // Redirect to cart and verify the product
      shoppingCArtPage.shoppingCart()
      cy.url().should('eq', userdata.URL+'cart');
      shoppingCArtPage.productName.should('contain.text', userdata.shoes)







  
    })
  
  
  })
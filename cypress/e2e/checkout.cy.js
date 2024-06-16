import productPage from "../pageObjects/productPage";
import shoppingCArtPage from "../pageObjects/shoppingCArtPage";
import checkoutAsGuestPage from "../pageObjects/checkoutAsGuestPage";


describe('Checkout Process',{ testIsolation: false }, () => {
  let userdata;

  before(() => {
    cy.fixture('data.json')
      .then((jsondata) => {
        userdata = jsondata;
      })
      .then(() => {
        cy.viewport(1280, 720);
        cy.clearCookies(); // Clear cookies to reset the session
        cy.clearLocalStorage(); // Clear local storage to reset the session
        cy.visit(userdata.URL);
        cy.url().should('eq', userdata.URL);
      })
      
  });

    it('Checkout flow - without accepting terms and condition', () => {
        //Add product and go to cart
        productPage.addProductToCart(userdata.shoes)
        shoppingCArtPage.shoppingCart()
        //Initiate checkout flow
        checkoutAsGuestPage.checkoutButtonCartpage()
        //Assert error 
        checkoutAsGuestPage.termofServiceerror.should('contain.text', 'Terms of service');

    })
  
    it('Checkout flow - after accepting terms and condition', () => {
      //Close the alert and accept the terms
      checkoutAsGuestPage.closeTermsError()
      checkoutAsGuestPage.termofServiceCheckBox()
      //Initiate the checkout
      checkoutAsGuestPage.checkoutButtonCartpage()
      cy.url().should('eq', userdata.URL+'login/checkoutasguest?returnUrl=%2Fcart');
    })

    it('Checkout as guest', () => {
      checkoutAsGuestPage.checkoutAsGuestButton()
      cy.url().should('eq', userdata.URL+'onepagecheckout');


  
    })
    it('Add new Address', () => {
      checkoutAsGuestPage.addBillingAddress('John', 'Doe', 'john.doe@example.com', 'Example Company', 'New York', '123 Main St', 'Apt 2B', '10001', '1234567890', '123456789');
      checkoutAsGuestPage.billingAddressContinueButton()

      checkoutAsGuestPage.pickupInStore.should('be.visible');



  
    })
  
  
  })
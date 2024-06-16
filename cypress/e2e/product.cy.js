/// <refrence types ="Cypress"/>
import productPage from "../pageObjects/productPage";

describe('Product Browsing and Searching', () => {
  let userdata;
  before(() => {
    cy.fixture('data.json').then((jsondata) => {
      userdata = jsondata;
    });
  });

  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit(userdata.URL);
    cy.url().should('eq', userdata.URL);
  });

  it('Search Product', () => {
    //Search a product and assert the product item name
    productPage.searchProduct(userdata.shoes)
    productPage.productTitle.should('contain.text', userdata.shoes)

  })

  it('View and select product according to catagory', () => {
    //Navitage to different catagory
    productPage.computersCategory('Computers')
    productPage.electronicsCategory('Electronics')
    productPage.apparelCategory('Apparel & Shoes')
    productPage.digitalCategory('Digital downloads')
    productPage.jewelryCategory('Jewelry')
    productPage.giftCardsCategory('Gift Cards')
    productPage.booksCategory('Books')
  })
})
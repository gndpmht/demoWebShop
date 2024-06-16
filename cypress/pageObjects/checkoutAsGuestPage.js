class checkOutAsGuestPage {
    checkoutButtonCartpage(){
        cy.get('#checkout').click()
    }
    get termofServiceerror(){
        return cy.get('#ui-id-2')

    }
    closeTermsError(){
        cy.get('.ui-button-icon-primary').click()
    }
    termofServiceCheckBox(){
        cy.get('#termsofservice').click()
    }
    checkoutAsGuestButton(){
        cy.get('.checkout-as-guest-button').click()
    }

    addBillingAddress(firstname, lastname, email, company, city, address1, address2, postalCode, phoneNumber, faxNumber) {
        cy.get('#BillingNewAddress_FirstName').type(firstname);
        cy.get('#BillingNewAddress_LastName').type(lastname);
        cy.get('#BillingNewAddress_Email').type(email);
        cy.get('#BillingNewAddress_Company').type(company);
        cy.get('#BillingNewAddress_CountryId').select('United States');
        cy.get('#BillingNewAddress_City').type(city);
        cy.get('#BillingNewAddress_Address1').type(address1);
        cy.get('#BillingNewAddress_Address2').type(address2);
        cy.get('#BillingNewAddress_ZipPostalCode').type(postalCode);
        cy.get('#BillingNewAddress_PhoneNumber').type(phoneNumber);
        cy.get('#BillingNewAddress_FaxNumber').type(faxNumber);
      }
    billingAddressContinueButton(){
        cy.get('#billing-buttons-container > .button-1').click()
    }
    get pickupInStore(){
        return cy.get('.pickup-in-store')
    }

      



}

export default new checkOutAsGuestPage()

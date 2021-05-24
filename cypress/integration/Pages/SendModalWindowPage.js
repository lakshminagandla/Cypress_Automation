/// <reference types="Cypress" />


class SendModalWindowPage {


    /**
     * Click Select Button for OnDemand Campaign
     * @returns 
     */
    clickSelectForOnDemandCampaign() {
        cy.fixture('Locators/SendModalPage_Locators.json').then(selectors => {
            cy.get(selectors.selectBtn).not('[disabled]').click();
            console.log("Clicked Select Button");
        })
        return this;
    }//clickSelectForOnDemandCampaign

    /**
     * Click Send Message Button
     * @returns 
     */
    clickSendMessageButton() {
        cy.fixture('Locators/SendModalPage_Locators.json').then(selectors => {
            cy.get(selectors.sendMsgBtn).not('[disabled]').click();
            console.log("Clicked Send Message Button");
        })
        return this;
    }//clickSendMessageButton

    /**
     * Validate Success Message on sending OnDemand Notification to Patient
     * @returns 
     */
    validateSuccessMessage() {
        cy.fixture('Locators/SendModalPage_Locators.json').then(selectors => {     
            cy.get(selectors.toastMsg).invoke('text').then((text) => {
                expect(text.trim()).contain("Campaign has been started successfull!")
            });       
          })
        return this;
    }//validateSuccessMessage

}

export default SendModalWindowPage;
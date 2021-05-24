/// <reference types="Cypress" />

class ConnectionsLinkPage {

    // Click Connections Link
    clickConnectionsLink() {
        cy.fixture('Locators/ConnectionsLinkPage_Locators.json').then(selectors => {
            cy.get(selectors.connectionsLink).not('disabled').click()
            console.log('Clicked Connections Link')
        })
        return this;
    }//clickConnectionsLink

    //After clicking Connection Links >> inside the Connections Link
    clickCompletedLink() {
        cy.fixture('Locators/ConnectionsLinkPage_Locators.json').then(selectors => {
            cy.get(selectors.completedLink).click()
            console.log('Clicked Completed Link')
        })
        return this;
    }

    validateThePatient() {
        cy.fixture('Locators/ConnectionsLinkPage_Locators.json').then(selectors => {
            cy.get(selectors.text).each(($ele, index, $list) => {
                let text = $ele.text();
                let countOfSearchList = $list.length;
                console.log("Column: " + index + " Value is" + text);
            })
        })
        return this;
    }

}
export default ConnectionsLinkPage;
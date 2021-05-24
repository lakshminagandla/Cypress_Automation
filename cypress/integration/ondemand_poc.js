/// <reference types="Cypress" />


import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import SendModalWindowPage from "./Pages/SendModalWindowPage"
import ConnectionsLinkPage from "./Pages/ConnectionsLinkPage"

const loginPage = new LoginPage();
const homePage = new HomePage();
const sendModalPage = new SendModalWindowPage();
const connectionsPage = new ConnectionsLinkPage();

context('Actions', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://beta-web.prescribewellness.com/');
    })

    it('Sending an OnDemand via the ‘Active Patients’ patient list', () => {
        cy.fixture('TestData/TestData.json').then(testData => {
            loginPage.enterEmailAddress(testData.LoginUserName);
            
            loginPage.enterPassword(testData.Password);

            loginPage.clickSignInBtn();

            homePage.clickActivePatients();

            homePage.selectFirstPatient();

            homePage.clickOnDemandUnderActionsMenu();

            sendModalPage.clickSelectForOnDemandCampaign();

            sendModalPage.clickSendMessageButton();

            sendModalPage.validateSuccessMessage();

            connectionsPage.clickConnectionsLink();

            connectionsPage.clickCompletedLink();
        })
    })

})
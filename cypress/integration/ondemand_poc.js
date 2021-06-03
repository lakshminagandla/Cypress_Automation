/// <reference types="Cypress" />

import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import SendModalWindowPage from "./Pages/SendModalWindowPage"
import ConnectionsLinkPage from "./Pages/ConnectionsLinkPage"

const loginPage = new LoginPage();
const homePage = new HomePage();
const sendModalPage = new SendModalWindowPage();
const connectionsPage = new ConnectionsLinkPage();

context('(onDemand)', () => { //Smoke or Regression
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://beta-web.prescribewellness.com/');
    })

    it('C2 Sending an OnDemand via the ‘Active Patients’ patient list', () => {
        cy.fixture('TestData/TestData.json').then(testData => {
            let timeStart;
            let timeEnd;

            let txtFileName = testData.txtFileLocation + 'OnDemand.txt';

            cy.writeFile(txtFileName, 'OnDemand_POC\n');
            cy.writeFile(txtFileName, 'Sending an OnDemand via the ‘Active Patients’ patient list :: 11\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            var diff = loginPage.enterEmailAddress(testData.LoginUserName);
            timeEnd = new Date();

            let timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 1. Entered User Name . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            let timeStart1 = new Date();
            loginPage.enterPassword(testData.Password);
            let timeEnd1 = new Date();
            let timeData1 = timeStart1 + '.' + timeEnd1 + '.' + (timeEnd1.getMilliseconds() - timeStart1.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 2. Entered Password . Passed. ' + timeData1 + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            loginPage.clickSignInBtn();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 3. Clicked SignIn Btn . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            homePage.clickActivePatients();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 4. Clicked Active Patient . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            homePage.selectFirstPatient();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 5. Selected First Patient . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            homePage.clickOnDemandUnderActionsMenu();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 6. Clicked On Demand under Action Menu . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            sendModalPage.clickSelectForOnDemandCampaign();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 7. Clicked On Demand Campaign . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            sendModalPage.clickSendMessageButton();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 8. Clicked Send Message Button . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            sendModalPage.validateSuccessMessage();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 9. Validated Success Message . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            connectionsPage.clickConnectionsLink();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 10. Clicked Connection Link . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

            timeStart = new Date();
            connectionsPage.clickCompletedLink();
            timeEnd = new Date();
            timeData = timeStart + '.' + timeEnd + '.' + (timeEnd.getMilliseconds() - timeStart.getMilliseconds());
            cy.writeFile(txtFileName, 'Step 11. Clicked Completed Link . Passed. ' + timeData + '\n', {
                flag: 'a+'
            });

        })

    })

})
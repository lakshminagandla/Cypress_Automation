/// <reference types="Cypress" />

import LoginPage from "./Pages/LoginPage"
import HomePage from "./Pages/HomePage"
import SendModalWindowPage from "./Pages/SendModalWindowPage"
import ConnectionsLinkPage from "./Pages/ConnectionsLinkPage"
import AddPatient from "./Pages/AddPatient";
import PatientDetailsPage from "./Pages/PatientDetailsPage";

const loginPage = new LoginPage();
const homePage = new HomePage();
const sendModalPage = new SendModalWindowPage();
const connectionsPage = new ConnectionsLinkPage();
const addPatient = new AddPatient();
const patientDetailsPage = new PatientDetailsPage();

context('(Negative)', () => { //Smoke or Regression
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://beta-web.prescribewellness.com/');
    })


    it('Negative Scenario - To showcase RETRY in Cypress', () => {
        cy.fixture('TestData/TestData.json').then(testData => {
            let txtFileName = testData.txtFileLocation + 'NegativeScenario.txt';

            cy.writeFile(txtFileName, 'Negative_Scenario\n');
            cy.writeFile(txtFileName, 'Negative Scenario - To showcase RETRY in Cypress :: 3\n', {
                flag: 'a+'
            });

            cy.task('readXlsx', {
                file: testData.excelLocation,
                sheet: "Negative"
            }).then((testcase_Specific_TestData) => {
                loginPage.enterEmailAddress(testcase_Specific_TestData[0].Email);
                cy.writeFile(txtFileName, 'Step 1. Entered User Name . Passed\n', {
                    flag: 'a+'
                });
            });

            loginPage.enterPassword(testData.Password);
            cy.writeFile(txtFileName, 'Step 2. Entered Password . Passed\n', {
                flag: 'a+'
            });

            loginPage.clickSignInBtn();
            cy.writeFile(txtFileName, 'Step 3. Clicked SignIn Btn . Passed\n', {
                flag: 'a+'
            });
        })

    })

})
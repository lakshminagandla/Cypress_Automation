/// <reference types="Cypress" />

/**
  * Created on 05/19 - Harish 
  *
  */

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

context('Actions', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://beta-web.prescribewellness.com/');
    })


    it('Negative Scenario - To showcase RETRY in Cypress', () => {
        cy.fixture('TestData/TestData.json').then(testData => {

            //Step-1. Enter User Email ID
            loginPage.enterEmailAddress("ScriptFaile@gmail.com");

            //Step-1. Enter User Password
            loginPage.enterPassword(testData.Password);

            loginPage.clickSignInBtn();
            
        })

    })

})

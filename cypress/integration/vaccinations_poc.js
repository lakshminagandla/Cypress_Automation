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

context('Administering vaccine via adding a new patient profile', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://beta-web.prescribewellness.com/');
    })

    it('Administering vaccine via adding a new patient profile', () => {
        cy.fixture('TestData/TestData.json').then(testData => {
            loginPage.enterEmailAddress(testData.LoginUserName);

            loginPage.enterPassword(testData.Password);

            loginPage.clickSignInBtn();

            homePage.ClickAddPatientUnderGearIcon();

            let firstname = testData.PatientFirstName + Math.floor(Math.random() * 100000);
            let lastname = testData.PatientLastName + Math.floor(Math.random() * 100000);

            addPatient.fillPatientDetails(firstname, lastname, testData.Address, testData.City, testData.State, testData.ZIP);

            addPatient.fillPatientContactAndClickAddButton();

            //Instead of validating Green Toaster. We verified Created Patient Firstname & Lastname on Patient Page
            //Technical Reason: Since the Green Toaster created on old DOM & as soon as we click OK new DOM gets loaded 
            //(i.e) New page navigated. So we took this approach
            addPatient.validateCreatedPatient(firstname, lastname);

            //** Add validate for that  green toaster message stating:
            //** “Success Account creation successful” should display in upper-right hand corner  */

            patientDetailsPage.ClickVaccinationsTab();

            patientDetailsPage.ClickAddNewButton();

            patientDetailsPage.fillVaccineDetails();

            patientDetailsPage.fillPatientDetails();

            patientDetailsPage.fillContactDetails();

            // Validated Green Toaster Success Message
            patientDetailsPage.validateVaccineAdministered();
        })
    })

})

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

context('Administering vaccine via adding a new patient profile', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://beta-web.prescribewellness.com/');
    })


    it('Administering vaccine via adding a new patient profile', () => {
        cy.fixture('TestData/TestData.json').then(testData => {

            //Step-1. Enter User Email ID
            loginPage.enterEmailAddress(testData.LoginUserName);

            //Step-1. Enter User Password
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

            patientDetailsPage.ClickMedicationTab();

            patientDetailsPage.ClickPatientReportedMedicationTab();

            patientDetailsPage.addnewMedicationForPatient();

            //We validated Green Toaster - On this instance entire DOM is not refreshed & navigate to different page
                //So, we validated short burst message
            patientDetailsPage.validateAddedMedicationSuccessMessage();            

            patientDetailsPage.ClickeCarePlansTab();

            patientDetailsPage.ClickeCarePlanUnderAddEncounter();

            patientDetailsPage.filleCarePlan_NewEncounter_OverviewDetails();

            patientDetailsPage.filleCarePlan_NewEncounter_PatientDetails();

            patientDetailsPage.filleCarePlan_NewEncounter_Insurance_AddNewPlan_Details();

            patientDetailsPage.filleCarePlan_NewEncounter_MedicalHistory_AddCondition_Details();

            patientDetailsPage.filleCarePlan_NewEncounter_MedicationDetails();

            patientDetailsPage.filleCarePlan_NewEncounter_GoalsDetails();

            patientDetailsPage.completeEncounter();

            //Added validation for existence of "re-open" button which verifies the successful completion of eCare Goal/Plan
            patientDetailsPage.validateeCareCompleted();
        })

    })

})

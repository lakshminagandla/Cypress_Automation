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


    it('Adding eCare encounter via adding a new patient profile', () => {
        cy.fixture('TestData/TestData.json').then(testData => {
            let txtFileName = testData.txtFileLocation + 'eCare.txt';

            cy.writeFile(txtFileName, 'eCare_POC\n');
            cy.writeFile(txtFileName, 'Adding eCare encounter via adding a new patient profile\n', { flag: 'a+' });

            loginPage.enterEmailAddress(testData.LoginUserName);
            cy.writeFile(txtFileName, 'Step 1. Entered User Name . Passed\n', { flag: 'a+' });

            loginPage.enterPassword(testData.Password);
            cy.writeFile(txtFileName, 'Step 2. Entered Password . Passed\n', { flag: 'a+' });

            loginPage.clickSignInBtn();
            cy.writeFile(txtFileName, 'Step 3. Clicked SignIn Btn . Passed\n', { flag: 'a+' });

            homePage.ClickAddPatientUnderGearIcon();
            cy.writeFile(txtFileName, 'Step 4. Clicked Add New patient under Gear Icon . Passed\n', { flag: 'a+' });

            let firstname = testData.PatientFirstName + Math.floor(Math.random() * 100000);
            let lastname = testData.PatientLastName + Math.floor(Math.random() * 100000);

            addPatient.fillPatientDetails(firstname, lastname, testData.Address, testData.City, testData.State, testData.ZIP);
            cy.writeFile(txtFileName, 'Step 5. Filled Patient Details . Passed\n', { flag: 'a+' });
            cy.writeFile(txtFileName, 'Step 5a. Firstname:' + firstname + '. Passed\n', { flag: 'a+' });
            cy.writeFile(txtFileName, 'Step 5b. Lastname:' + lastname + '. Passed\n', { flag: 'a+' });
            cy.writeFile(txtFileName, 'Step 5c. Address:' + testData.Address + '. Passed\n', { flag: 'a+' });
            cy.writeFile(txtFileName, 'Step 5d. City:' + testData.City + '. Passed\n', { flag: 'a+' });
            cy.writeFile(txtFileName, 'Step 5e. State:' + testData.State + '. Passed\n', { flag: 'a+' });
            cy.writeFile(txtFileName, 'Step 5f. ZIP:' + testData.ZIP + '. Passed\n', { flag: 'a+' });

            addPatient.fillPatientContactAndClickAddButton();
            cy.writeFile(txtFileName, 'Step 6. Created New Patient . Passed\n', { flag: 'a+' });

            //Instead of validating Green Toaster. We verified Created Patient Firstname & Lastname on Patient Page
            //Technical Reason: Since the Green Toaster created on old DOM & as soon as we click OK new DOM gets loaded 
            //(i.e) New page navigated. So we took this approach
            addPatient.validateCreatedPatient(firstname, lastname);
            cy.writeFile(txtFileName, 'Step 7. Created Patient Validated . Passed\n', { flag: 'a+' });

            patientDetailsPage.ClickMedicationTab();
            cy.writeFile(txtFileName, 'Step 8. Clicked Medication Tab . Passed\n', { flag: 'a+' });

            patientDetailsPage.ClickPatientReportedMedicationTab();
            cy.writeFile(txtFileName, 'Step 9. Clicked Patient Reported Medication Tab . Passed\n', { flag: 'a+' });

            patientDetailsPage.addnewMedicationForPatient();
            cy.writeFile(txtFileName, 'Step 10. Added medication details for newly created patient . Passed\n', { flag: 'a+' });

            //We validated Green Toaster - On this instance entire DOM is not refreshed & navigate to different page
            //So, we validated short burst message
            patientDetailsPage.validateAddedMedicationSuccessMessage();
            cy.writeFile(txtFileName, 'Step 11. Validated newly added medication success message . Passed\n', { flag: 'a+' });

            patientDetailsPage.ClickeCarePlansTab();
            cy.writeFile(txtFileName, 'Step 12. Clicked eCare Plans Tab . Passed\n', { flag: 'a+' });

            patientDetailsPage.ClickeCarePlanUnderAddEncounter();
            cy.writeFile(txtFileName, 'Step 13. Clicked eCare Plan under Add Encounter menu . Passed\n', { flag: 'a+' });

            patientDetailsPage.filleCarePlan_NewEncounter_OverviewDetails();
            cy.writeFile(txtFileName, 'Step 14. Filled Overview Details for new encounter under eCare plan . Passed\n', { flag: 'a+' });

            patientDetailsPage.filleCarePlan_NewEncounter_PatientDetails();
            cy.writeFile(txtFileName, 'Step 15. Filled Patient Details for new encounter under eCare plan . Passed\n', { flag: 'a+' });

            patientDetailsPage.filleCarePlan_NewEncounter_Insurance_AddNewPlan_Details();
            cy.writeFile(txtFileName, 'Step 16. Filled Insurance Details (Add New Plan) for new encounter under eCare plan . Passed\n', { flag: 'a+' });

            patientDetailsPage.filleCarePlan_NewEncounter_MedicalHistory_AddCondition_Details();
            cy.writeFile(txtFileName, 'Step 17. Filled Add Conditions Details (Medical History) for new encounter under eCare plan . Passed\n', { flag: 'a+' });

            patientDetailsPage.filleCarePlan_NewEncounter_MedicationDetails();
            cy.writeFile(txtFileName, 'Step 18. Filled Medication Details for new encounter under eCare plan . Passed\n', { flag: 'a+' });

            patientDetailsPage.filleCarePlan_NewEncounter_GoalsDetails();
            cy.writeFile(txtFileName, 'Step 19. Filled Goals Details for new encounter under eCare plan . Passed\n', { flag: 'a+' });

            patientDetailsPage.completeEncounter();
            cy.writeFile(txtFileName, 'Step 20. Clicked Complete Encounter . Passed\n', { flag: 'a+' });

            //Added validation for existence of "re-open" button which verifies the successful completion of eCare Goal/Plan
            patientDetailsPage.validateeCareCompleted();
            cy.writeFile(txtFileName, 'Step 21. Validated eCare Completed . Passed\n', { flag: 'a+' });
        })

    })

})

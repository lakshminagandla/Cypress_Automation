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

context('Actions', () => {
    beforeEach(() => {
        cy.clearCookies();
        cy.visit('https://beta-web.prescribewellness.com/');
    })

    it('Administering vaccine via adding a new patient profile', () => {
        cy.fixture('TestData/TestData.json').then(testData => {
            let txtFileName = testData.txtFileLocation + 'Vaccinations.txt';

            cy.writeFile(txtFileName, 'Vaccinations_POC\n');
            cy.writeFile(txtFileName, 'Administering vaccine via adding a new patient profile\n', { flag: 'a+' });

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

            //** Add validate for that  green toaster message stating:
            //** “Success Account creation successful” should display in upper-right hand corner  */

            patientDetailsPage.ClickVaccinationsTab();
            cy.writeFile(txtFileName, 'Step 8. Clicked Vaccination Tab . Passed\n', { flag: 'a+' });

            patientDetailsPage.ClickAddNewButton();
            cy.writeFile(txtFileName, 'Step 8. Clicked Vaccination Tab . Passed\n', { flag: 'a+' });

            patientDetailsPage.fillVaccineDetails();
            cy.writeFile(txtFileName, 'Step 9. Filled Vaccination Details . Passed\n', { flag: 'a+' });

            patientDetailsPage.fillPatientDetails();
            cy.writeFile(txtFileName, 'Step 10. Filled Patient Details . Passed\n', { flag: 'a+' });

            patientDetailsPage.fillContactDetails();
            cy.writeFile(txtFileName, 'Step 11. Filled Contact Details . Passed\n', { flag: 'a+' });

            // Validated Green Toaster Success Message
            patientDetailsPage.validateVaccineAdministered();
            cy.writeFile(txtFileName, 'Step 12. Validated Vaccine Administered message . Passed\n', { flag: 'a+' });
        })
    })

})

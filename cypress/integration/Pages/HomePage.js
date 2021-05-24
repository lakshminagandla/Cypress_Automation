/// <reference types="Cypress" />

class HomePage {

    /**
     * Click Active Patients Button 
     * @returns 
     */
    clickActivePatients() {
        cy.fixture('Locators/HomePage_Locators.json').then(selectors => {
            cy.get(selectors.activePatient).not('[disabled]').click();
            console.log("Clicked Active Patients Link");

            //Wait for 30Secs for Active Patients page  to load
            cy.get(selectors.activePatientWindow, { timeout: 30000 });
            console.log("Active Patients page loaded");
        })
        return this;
    }//clickActivePatients

    /**
     * Select First Patient
     * @returns 
     */
    selectFirstPatient() {
        cy.fixture('Locators/HomePage_Locators.json').then(selectors => {
            cy.get(selectors.firstPatient).check({ force: true });
            console.log("Selected First Patient");
        })
        return this;
    }//selectFirstPatient

    /**
     * Click OnDemand Option from Actions Menu & wait for Send Modal window to load
     * @returns 
     */
    clickOnDemandUnderActionsMenu() {
        cy.fixture('Locators/HomePage_Locators.json').then(selectors => {
            cy.get(selectors.actionMenu).click();
            console.log("Clicked Actions menu");

            //Wait for 30Secs for OnDemand Option Dropdown to load
            cy.get(selectors.demandOption, { timeout: 30000 });
            cy.get(selectors.demandOption).click();
            console.log("Clicked On Demand Option");

            //Wait for 30Secs for Send Modal modal to display
            cy.get(selectors.sendModalWindow, { timeout: 30000 });
            console.log("Send Modal modal loaded");
        })
        return this;
    }//clickOnDemandUnderActionsMenu

    /**
     * Created on 05/17 - Harish 
     *
     */

    /**
     * Click Add Patient Under GearIcon
     * @returns 
     */
    ClickAddPatientUnderGearIcon() {
        cy.fixture('Locators/HomePage_Locators.json').then(selectors => {
            cy.get(selectors.gearIcon).click();
            console.log("Clicked Gear Icon ");

            //Wait for 30Secs for OnDemand Option Dropdown to load
            cy.get(selectors.addPatientOption, { timeout: 30000 });
            cy.get(selectors.addPatientOption).click({ force: true });
            console.log("Clicked On Add Patient Option");

            //Wait for 30Secs for Send Modal modal to display
            cy.wait(3000);
            cy.get(selectors.patientFirstName, { timeout: 30000 });
            console.log("Add Patient modal loaded");
        })
        return this;
    }//ClickAddPatientUnderGearIcon

}

export default HomePage;
/// <reference types="Cypress" />


class AddPatient {

  /**
   * Fill all mandatory Details to create/add new patient
   * @returns 
   */
  fillPatientDetails(PatientFirstName, PatientLastName, Address, City, State, ZIP) {
    cy.fixture('Locators/AddPatientPage_Locators.json').then(selectors => {
      // let firstname = PatientFirstName + Math.floor(Math.random() * 100000);
      cy.get(selectors.patientFirstNameTxt).type(PatientFirstName);
      console.log("First Name Entered:" + PatientFirstName);

      // let lastname = PatientLastName + Math.floor(Math.random() * 100000);
      cy.get(selectors.patientLastNameTxt).type(PatientLastName);
      console.log("Last Name Entered: " + PatientLastName);

      var date = new Date();
      date.setFullYear(date.getFullYear() - 50);
      let dob = (date.getMonth()) + '/' + (date.getDate()) + '/' + (date.getFullYear());
      cy.get(selectors.dob).type(dob);
      console.log("DOB entered :" + dob);

      cy.get(selectors.address).type(Address);
      console.log("Address Entered: " + Address);

      cy.get(selectors.city).type(City);
      console.log("City Entered: " + City);

      cy.get(selectors.state).type(State);
      console.log("State Entered: " + State);

      cy.get(selectors.zip).type(ZIP);
      console.log("Zip Entered: " + ZIP);
    })
    return this;
  }//fillPatientDetails

  /**
   * Fill all mandatory Details to create/add new patient
   * @returns 
   */
  fillPatientContactAndClickAddButton() {
    cy.fixture('Locators/AddPatientPage_Locators.json').then(selectors => {
      cy.get(selectors.contactTab).click();
      console.log("Clicked Contact Tab");

      // cy.debug();
      // let phoneNumber = "949415" + Math.floor(Math.random() * 9999);
      let phoneNumber = "9494" + Math.random().toString().substring(2, 8)
      cy.get(selectors.phoneNumber).type(phoneNumber);
      console.log("Phone Number Entered: " + phoneNumber);

      cy.get(selectors.addBtn).click();
      console.log("Clicked Add Button");

      cy.wait(10000);

      cy.url().then(url => {
        let urlToLoad = "https://beta-web.prescribewellness.com/Patient/Details?" + url.split('?')[1];
        cy.visit(urlToLoad);
      });
    })
    return this;
  }//fillPatientContactAndClickAddButton

  /**
   * validate Created Patient
   * @returns 
   */
  validateCreatedPatient(patientFirstname, patientLastname) {
    cy.fixture('Locators/AddPatientPage_Locators.json').then(selectors => {
      cy.get(selectors.usernameBanner).invoke('text').then((text) => {
        expect(text.trim()).contain(patientFirstname)
      });

      cy.get(selectors.usernameBanner).invoke('text').then((text) => {
        expect(text.trim()).contain(patientLastname)
      });
    })
    return this;
  }//validateCreatedPatient

}

export default AddPatient;
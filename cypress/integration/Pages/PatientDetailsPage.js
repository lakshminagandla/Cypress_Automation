/// <reference types="Cypress" />


class PatientDetailsPage {

    /**
     * Click Vaccinations Tab
     * @returns 
     */
    ClickVaccinationsTab() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for Vaccination Tab to appear
            cy.get(selectors.vaccinationTab, { timeout: 50000 });

            cy.get(selectors.vaccinationTab).click({ force: true });
            console.log("Clicked Vaccination Tab");
        })
        return this;
    }//ClickVaccinationsTab

    /**
     * Click Medication Tab
     * @returns 
     */
    ClickMedicationTab() {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for Medication Tab to appear
            cy.get(selectors.MedicationTab, { timeout: 50000 });

            cy.get(selectors.MedicationTab).click({ force: true });
            console.log("Clicked Medication Tab");
        })
        return this;
    }//ClickMedicationTab

    /**
     * Click eCare Plans Tab
     * @returns 
     */
    ClickeCarePlansTab() {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for eCare Plans Tab to appear
            cy.get(selectors.eCarePlansTab, { timeout: 50000 });

            cy.get(selectors.eCarePlansTab).click({ force: true });
            console.log("Clicked eCare Plans Tab");
        })
        return this;
    }//ClickeCarePlansTab

    /**
    * Go to Patient-Reported Medication sub-tab
    * @returns 
    */
    ClickPatientReportedMedicationTab() {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for Patient-Reported Medication sub-tab to appear
            cy.get(selectors.PatientReportedMedicationSubTab, { timeout: 50000 });

            cy.get(selectors.PatientReportedMedicationSubTab).click({ force: true });
            console.log("Clicked Patient-Reported Medication sub-tab");
        })
        return this;
    }//ClickPatientReportedMedicationTab

    /**
     * Add new Medication for patient
     */
    addnewMedicationForPatient(Medication) {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for + Add New Button
            cy.get(selectors.addNewBtn, { timeout: 50000 });

            cy.get(selectors.addNewBtn).click();
            console.log("Clicked + Add New Button");

            // cy.get(selectors.addNewBtn).type("atorvastatin");
            cy.get(selectors.addNewBtn).type(Medication);
            console.log("Entered: atorvastatin");

            cy.get(selectors.atorvastatin80MG_PlanOption, { timeout: 50000 });
            cy.get(selectors.atorvastatin80MG_PlanOption).click({ force: true });
            console.log("Selected: atorvastatin 80 MG Oral Tablet [Lipitor]");
        })
        return this;
    }//addnewMedicationForPatient

    /**
   * validate Added Medication Success Message
   * @returns 
   */
    validateAddedMedicationSuccessMessage(MedicationSuccessMessage) {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.greenToaster).invoke('text').then((text) => {
                // expect(text.trim()).contain("Drugs were successfully added to patient profile")
                expect(text.trim()).contain(MedicationSuccessMessage)
            });
        })
        return this;
    }//validateAddedMedicationSuccessMessage

    /**
     * Click Add new Button
     * @returns 
     */
    ClickAddNewButton() {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for Add New Button
            cy.get(selectors.addNewBtn_AfterVaccinationTab, { timeout: 50000 });

            cy.get(selectors.addNewBtn_AfterVaccinationTab).click();
            console.log("Clicked Add New Button");

            //Wait for Add Vaccine Modal
            cy.wait(5000);
            cy.get(selectors.searchPrimaryPhysicianTxt, { timeout: 50000 });
        })
        return this;
    }//ClickAddNewButton


    /**
     * Click eCare Plan Under Add Encounter
     * @returns 
     */
    ClickeCarePlanUnderAddEncounter() {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for Add Encounter Button to appear
            cy.get(selectors.addEncounterBtn, { timeout: 50000 });
            cy.get(selectors.addEncounterBtn).click();
            console.log("Clicked Add Encounter Button");

            //Wait for eCare Plans Option to appear
            cy.get(selectors.eCarePlan_Option_Under_AddEncounterBtn, { timeout: 50000 });
            cy.get(selectors.eCarePlan_Option_Under_AddEncounterBtn).click();
            console.log("Clicked eCare Plans Option");

            cy.get(selectors.eCarePlan_ModalWindow, { timeout: 50000 });

        })
        return this;
    }//ClickeCarePlanUnderAddEncounter

    /**
     * Use this method to fill eCare Plan's new Encounter - Overview Details 
     */
    filleCarePlan_NewEncounter_OverviewDetails() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {

            var date = new Date();
            date.setDate(date.getDate() - 31);
            let dateOfEncounter = ("0" + date.getMonth()) + '/' + (date.getDate()) + '/' + (date.getFullYear());
            let dateForSelect = date.getMonth();

            // cy.get("input[placeholder='MM/DD/YYYY'][class='c-kd__input']", { timeout: 50000 }).click();
            // cy.get("select[class='react-datepicker__month-select']").select(dateForSelect);
            // cy.get("div[class='react-datepicker__month'] div[class='react-datepicker__week']:nth-child(1) div[class*='sat react-datepicker']").type(dateOfEncounter);
            // console.log("Selected Past month date as encounter");

            cy.get(selectors.dateOfEncounterTxt_NewEncounter_OverviewDetails, { timeout: 50000 }).click();
            cy.get(selectors.dateOfEncounterTxt_NewEncounter_OverviewDetails, { timeout: 50000 }).clear();
            cy.get(selectors.dateOfEncounterTxt_NewEncounter_OverviewDetails).type(dateOfEncounter);
            console.log("Date of Encounter" + dateOfEncounter);

            cy.get(selectors.typeDrpDown_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.typeDrpDown_InitalOption_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Initial' as Type");

            cy.get(selectors.classeDrpDown_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.classDrpDown_FaceToFaceOption_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Face to Face' as Class");

            cy.get(selectors.encounterReasonDrpDown_NewEncounter_OverviewDetails, { timeout: 50000 }).click();
            cy.get(selectors.encounterReasonDrpDown_ReferralOption_NewEncounter_OverviewDetails, { timeout: 50000 }).click();
            console.log("Selected Encounter reason as 'Referral to pharmacist (procedure)'");

            cy.get(selectors.timeSpentDrpDown_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.timeSpentDrpDown_30MOption_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected '30Mins' as Time Spent ");

            cy.get(selectors.authorDrpDown_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.authorDrpDown_Option_NewEncounter_OverviewDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Deb' as Author");

            cy.get(selectors.patientAgreesCheckbox_NewEncounter_OverviewDetails, { timeout: 50000 }).check({ force: true });
            console.log("'Checked' The patient agrees to this encounter");
        })
        return this;
    }//filleCarePlan_NewEncounter_OverviewDetails

    /**
     * Use this method to fill eCare Plan's new Encounter - Patient Details 
     */
    filleCarePlan_NewEncounter_PatientDetails(PCP) {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.patientTabeCarePlansNewEncounter, { timeout: 50000 }).click();
            console.log("Navigated to patient Tab for eCare Plan's New Encounter");

            cy.get(selectors.pcpTxt, { timeout: 50000 }).click({ force: true });
            // cy.get(selectors.pcpTxt, { timeout: 50000 }).type("Anderson");
            cy.get(selectors.pcpTxt, { timeout: 50000 }).type(PCP);
            cy.get(selectors.pcpTxt_FirstOption, { timeout: 50000 }).click({ force: true });
            console.log("Selected '" + PCP + "' as PCP");
        })
        return this;
    }//filleCarePlan_NewEncounter_PatientDetails

    /**
     * Use this method to fill eCare Plan's new Encounter - Insurance's Add New Plan Details 
     */
    filleCarePlan_NewEncounter_Insurance_AddNewPlan_Details(PlanName) {

        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.insuranceSubTabUnderPatientTab_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click();
            console.log("Navigated to Insurance Sub-Tab under Patient Tab for eCare Plan's New Encounter");

            cy.get(selectors.addNewPlanBtn_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click({ force: true });
            console.log("Clicked Add new plan button");

            cy.get(selectors.planNameDrpDwn_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.planNameDrpDwn_ManuallyAddOption_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Manually Add' as Plan Name");

            // cy.get(selectors.planNameTxt_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).type("Blue Cross");
            cy.get(selectors.planNameTxt_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).type(PlanName);
            console.log("Plan Name: Blue Cross");

            cy.get(selectors.planTypeDrpDwn_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.planTypeDrpDwn_CommercialOption_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Commerical' as Plan Type ");

            let memberID = "ID" + Math.floor(Math.random() * 10000);
            cy.get(selectors.memberIDTxt_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click();
            cy.get(selectors.memberIDTxt_NewEncounter_Insurance_AddNewPlan_Details).type(memberID);
            console.log("Input to Member ID: " + memberID);

            cy.get(selectors.planOrderDrpDwn_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.planOrderDrpDwn_PrimaryOption_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Primary' as Plan ORder ");

            let binNumber = Math.floor(Math.random() * 999999);
            cy.get(selectors.binTxt_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click();
            cy.get(selectors.binTxt_NewEncounter_Insurance_AddNewPlan_Details).type(binNumber);
            console.log("Input to BIN: " + binNumber);

            let pcnNumber = Math.floor(Math.random() * 999999);
            cy.get(selectors.pcnTxt_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click();
            cy.get(selectors.pcnTxt_NewEncounter_Insurance_AddNewPlan_Details).type(pcnNumber);
            console.log("Input to BIN: " + pcnNumber);

            let groupID = Math.floor(Math.random() * 999999);
            cy.get(selectors.groupID_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click();
            cy.get(selectors.groupID_NewEncounter_Insurance_AddNewPlan_Details).type(groupID);
            console.log("Input to Group ID: " + groupID);

            cy.get(selectors.addBtn_NewEncounter_Insurance_AddNewPlan_Details, { timeout: 50000 }).click();
            console.log("Clicked Add button");
        })
        return this;
    } //filleCarePlan_NewEncounter_Insurance_AddNewPlan_Details

    /**
     * Use this method to fill eCare Plan's new Encounter - Medical History's Add Condition Details 
     */
    filleCarePlan_NewEncounter_MedicalHistory_AddCondition_Details() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.medicalHistorySubTab_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click();
            console.log("Navigated to Medical History Sub-Tab under Patient Tab for eCare Plan's New Encounter");

            cy.get(selectors.addCondition_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            console.log("Clicked Add Condition button");

            cy.get(selectors.firstChapter_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'First Chapter' Option");

            cy.get(selectors.firstSection_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'First Section' Option");

            cy.get(selectors.firstCategory_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'First Category' Option");

            cy.get(selectors.firstSubCategory1_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'First Sub-Category 1' Option");

            cy.get(selectors.firstSubCategor2_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'First Sub-Category 2' Option");

            cy.get(selectors.statusDrpDwn_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.statusDrpDwn_ActiveOption_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Active' as Status");

            let notes = "TestAutomationNotes" + Math.floor(Math.random() * 10000);
            cy.get(selectors.notes_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click();
            cy.get(selectors.notes_NewEncounter_MedicalHistory_AddCondition_Details).type(notes);
            console.log("Input to Notes: " + notes);

            cy.get(selectors.okBtn_NewEncounter_MedicalHistory_AddCondition_Details, { timeout: 50000 }).click();
            console.log("Clicked OK button");
        })
        return this;
    }//filleCarePlan_NewEncounter_MedicalHistory_AddCondition_Details

    /**
     * Use this method to fill eCare Plan's new Encounter - Medication Details 
     */
    filleCarePlan_NewEncounter_MedicationDetails() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.MedicationTab_NewEncounter_MedicationDetails, { timeout: 50000 }).click();
            console.log("Navigated to Medication Tab for eCare Plan's New Encounter");

            cy.get(selectors.importMedicationBtn_NewEncounter_MedicationDetails, { timeout: 50000 }).click({ force: true });
            console.log("Clicked Import Medications Button");

            cy.get(selectors.medicationsBtnMedicationReconciliation_NewEncounter_MedicationDetails, { timeout: 50000 }).click({ force: true });
            console.log("Clicked Import Medications Button on Medication Reconciliation Dialog");
        })
        return this;
    }//filleCarePlan_NewEncounter_MedicationDetails

    /**
    * Use this method to fill eCare Plan's new Encounter - Goals Details 
    */
    filleCarePlan_NewEncounter_GoalsDetails() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.goalsTab_NewEncounter_GoalsDetails, { timeout: 50000 }).click();
            console.log("Navigated to Goals Tab for eCare Plan's New Encounter");

            cy.get(selectors.addnewGoal_NewEncounter_GoalsDetails, { timeout: 50000 }).click({ force: true });
            console.log("Clicked Add Goal Button");

            cy.get(selectors.category_NewEncounter_GoalsDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Clinical' Category");

            cy.get(selectors.description_NewEncounter_GoalsDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'BMI-39156-5' Description");

            var dateForGoal = new Date();
            dateForGoal.setDate(dateForGoal.getDate() + 31);
            let goalTargetDate = ("0" + dateForGoal.getMonth()) + '/' + (dateForGoal.getDate()) + '/' + (dateForGoal.getFullYear());
            cy.get(selectors.goalTarget_NewEncounter_GoalsDetails, { timeout: 50000 }).click();
            cy.get(selectors.goalTarget_NewEncounter_GoalsDetails).type(goalTargetDate);
            cy.get(selectors.selectedDateHighlighted).click();
            
            cy.get(selectors.vaccineType_NewEncounter_GoalsDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.vaccineType_Option_NewEncounter_GoalsDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Influenza, high dose seasonal (Fluzone)’' Vaccine");

            let notes = "TestAutomationNotes" + Math.floor(Math.random() * 10000);
            cy.get(selectors.notes_NewEncounter_GoalsDetails, { timeout: 50000 }).click();
            cy.get(selectors.notes_NewEncounter_GoalsDetails).type(notes);
            console.log("Input to Notes: " + notes);

            cy.get(selectors.addBtn_NewEncounter_GoalsDetails, { timeout: 50000 }).click();
            console.log("Clicked Add button");
        })
        return this;
    }//filleCarePlan_NewEncounter_GoalsDetails

    /**
     * Use this method to Complete Encounter
     */
    completeEncounter() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.completeBtn, { timeout: 50000 }).click();
            console.log("Clicked Complete Button");

            cy.get(selectors.agreeAndCompleteBtn, { timeout: 50000 }).click();
            console.log("Clicked Agree&Complete button");
        })
        return this;
    }//completeEncounter

    /* validate eeCareCompleted
    * @returns 
    */
    validateeCareCompleted() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.reOpenBtn).invoke('text').then((text) => {
                expect(text.trim()).contain("Re-Open")
            });
        })
        return this;
    }//validateAddedMedicationSuccessMessage

    /**
     * Fill Vaccine Details
     * @returns 
     */
    fillVaccineDetails(NPI_First_FourCharacters,Lot_Character_Input) {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            //Wait for Add Vaccine Modal
            cy.get(selectors.searchPrimaryPhysicianTxt, { timeout: 50000 });
            cy.get(selectors.searchPrimaryPhysicianTxt).type("Smith");
            cy.get(selectors.physicianAutoCompleteTxt_VaccineDetails, { timeout: 50000 });
            cy.get(selectors.physicianAutoCompleteTxt_VaccineDetails).click({ force: true });
            console.log("Selected 'Brittany Smith Lawson'");

            // let valueForNPI = Math.floor(Math.random() * 10000000000);
            // let valueForNPI = "8569" + Math.random().toString().substring(2, 8);
            let valueForNPI = NPI_First_FourCharacters + Math.random().toString().substring(2, 8);
            cy.get(selectors.npiTxt_VaccineDetails, { timeout: 50000 }).click();
            cy.get(selectors.npiTxt_VaccineDetails).type(valueForNPI);
            console.log("Input to NPI: " + valueForNPI);

            cy.get(selectors.administeringProviderSuffix_VaccineDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.administeringProviderSuffix_Option_VaccineDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'R.N' for Administering Provider Suffix");

            cy.get(selectors.vaccineDrpDwn_VaccineDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.vaccineDrpDwn_Option_VaccineDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.searchVaccine_VaccineDetails).type("Influenza, high dose seasonal");
            cy.get(selectors.searchVaccine_Option_VaccineDetails, { timeout: 50000 }).click({ force: true });
            console.log("Selected 'Influenza, high dose seasonal (Fluzone)’' Vaccine");

            // let lotNumber = "C" + Math.floor(Math.random() * 10000000000);
            // let lotNumber = "C" + Math.random().toString().substring(2, 8);
            let lotNumber = Lot_Character_Input + Math.random().toString().substring(2, 8);
            cy.get(selectors.lotNumber_VaccineDetails).type(lotNumber);
            console.log("Input to Lot: " + lotNumber);

            cy.wait(1000);
            var dateForExpiry = new Date();
            dateForExpiry.setMonth(dateForExpiry.getMonth() + 3);
            let expDate = ("0" + dateForExpiry.getMonth()) + '/' + (dateForExpiry.getDate()) + '/' + (dateForExpiry.getFullYear());
            cy.get(selectors.expDateTxt_VaccineDetails, { timeout: 50000 }).click();
            cy.get(selectors.selectedDateHighlighted).click();

            cy.wait(1000);

            cy.get(selectors.stateRegistryConsent_VaccineDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.stateRegistryConsent_Option_VaccineDetails).click({ force: true });
            console.log("Selected 'Yes' for Did the patient consent to reporting this vaccine record to the state registry?: ");

            cy.get(selectors.sharedToOtherConsent_VaccineDetails, { timeout: 50000 }).click({ force: true });
            cy.get(selectors.sharedToOtherConsent_Option_VaccineDetails).click({ force: true });
            console.log("Selected 'Yes' for m.	Did the patient consent to the registry sharing this record with other providers?: ");
        })
        return this;
    }//fillVaccineDetails


    /**
     * Fill Patient Details’ 
     * @returns 
     */
    fillPatientDetails() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.patientTab).click();
            console.log("Clicked Patient Tab");

            //Wait for Patient Tab
            cy.get(selectors.firstname_PatientTab, { timeout: 50000 });

            cy.get(selectors.gender_PatientTab, { timeout: 50000 }).click({ force: true });
            cy.wait(500);
            cy.get(selectors.gender_Option_PatientTab).click({ force: true });
            console.log("Selected 'Male’' Gender");
        })
        return this;
    }//fillPatientDetails

    /**
    * Fill Contact Details’ 
    * @returns 
    */
    fillContactDetails() {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.contactTab).click();
            console.log("Clicked Patient Tab");

            //Wait for Contact Tab
            cy.get(selectors.guardianFullName_contactTab, { timeout: 50000 });

            cy.get(selectors.saveBtn_contactTab).click({ force: true });
            console.log("Clicked Save Button");
        })
        return this;
    }//fillContactDetails

    /**
  * validate Vaccine Administered
  * @returns 
  */
    validateVaccineAdministered(ValidationMessage_1,ValidationMessage_2) {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.successGreenToaster, { timeout: 50000 });
            cy.get(selectors.successGreenToaster).invoke('text').then((text) => {
                // expect(text.trim()).contain("Success")
                expect(text.trim()).contain(ValidationMessage_1)
            });

            cy.get(selectors.vaccineAdministeredMessage).invoke('text').then((text) => {
                // expect(text.trim()).contain("Vaccine administration was saved correctly")
                expect(text.trim()).contain(ValidationMessage_2)
            });
        })
        return this;
    }//validateVaccineAdministered

/** validate Vaccine Administered
  * @returns 
  */
    validateVaccineHistorySectionForAddedVaccine(ValidationMessage_3) {
        cy.fixture('Locators/PatientDetailsPage_Locators.json').then(selectors => {
            cy.get(selectors.vaccineHistoryFirstRow, { timeout: 50000 });
            cy.get(selectors.vaccineHistoryFirstRow).invoke('text').then((text) => {
                // expect(text.trim()).contain("Influenza, high dose seasonal (Fluzone)")
                expect(text.trim()).contain(ValidationMessage_3)
            });
        })
        return this;
    }//validateVaccineHistorySectionForAddedVaccine
}

export default PatientDetailsPage;
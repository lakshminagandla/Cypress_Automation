/// <reference types="Cypress" />


class LoginPage {

    /**
     * Enter Email Address to Prescribe Wellness Application
     * @returns this
     */
    enterEmailAddress(userEmailID) {
        var timeStart = new Date();
        cy.fixture('Locators/LoginPage_Locators.json').then(selectors => {
            // cy.typeElementWrapper(selectors.userNameTxt, userEmailID);
            cy.get(selectors.userNameTxt).type(userEmailID);
            console.log("Username entered on Login Page: betatesting633@gmail.com");
        })
        var timeEnd = new Date();
        return timeEnd.getMilliseconds() - timeStart.getMilliseconds();
    }//enterEmailAddress

    /**
     * Enter Password to Prescribe Wellness Application
     * @returns this
     */
    enterPassword(passwordData) {
        cy.fixture('Locators/LoginPage_Locators.json').then((LoginPage_Locators) => {
            cy.get(LoginPage_Locators.passwordTxt).type(passwordData);
            console.log("Password Entered!");
        })
        return this;
    }//enterPassword

    /**
     * Click Sign In Button & Wait for Home Page
     * @returns 
     */
    clickSignInBtn() {

        cy.fixture('Locators/LoginPage_Locators.json').then((LoginPage_Locators) => {
            // cy.clickElementWrapper(LoginPage_Locators.signInBtn);
            cy.get(LoginPage_Locators.signInBtn).not('[disabled]').click();
            console.log("Clicked Sign-In button!");

            //Wait for 30Secs for Home Page to load
            cy.get(LoginPage_Locators.homePageDashboard, { timeout: 30000 });
            console.log("Home Page loaded!");
        })
        return this;
    }//clickSignInBtn

}//LoginPage

export default LoginPage;
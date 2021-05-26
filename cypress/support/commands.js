
Cypress.on('uncaught:exception', (err, runnable) => {
  // if (err.message.includes("of undefined")) {
  //   done();
  // }
  // else
    return false;
});


/**
 * Wrapper created to Perform Click action on web elements
 * This wrapper handles if "Expected to find element" exception get thrown by CY during execution
 * Over the period of execution on finding new exception, will be adding code to handle them as well
 */
Cypress.Commands.add('clickElementWrapper', (locator) => {

  cy.get(locator).click();

  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes("Expected to find element")) {
      cy.fixture('TestData/TestData.json').then(testData => {
        cy.get(locator, { timeout: testData.waitTime }).click();
      })
      return false;
    }
  });
});

/**
 * Wrapper created to Perform Type action on web elements
 * This wrapper handles if "Expected to find element" exception get thrown by CY during execution
 * Over the period of execution on finding new exception, will be adding code to handle them as well
 */
Cypress.Commands.add('typeElementWrapper', (locator, textToType) => {

  cy.get(locator)
  
  try {
    cy.get(locator).type(textToType);
  }
  catch {
    Cypress.fixture('TestData/TestData.json').then(testData => {
      cy.get("input[id='UserName']", { timeout: testData.waitTime }).type(textToType);
      // cy.get(locator, { timeout: testData.waitTime }).type(textToType);
    })
  }



  // Cypress.on('uncaught:exception', (err, runnable) => {
  //   if (err.message.includes("Expected to find element")) {
  //     Cypress.fixture('TestData/TestData.json').then(testData => {
  //       cy.get("input[id='UserNames']", { timeout: testData.waitTime }).type(textToType);
  //       // cy.get(locator, { timeout: testData.waitTime }).type(textToType);
  //     })
  //     return false;
  //   }
  // });
});


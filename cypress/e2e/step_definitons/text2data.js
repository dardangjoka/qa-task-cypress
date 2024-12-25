const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I open the Text2Data demo page', () => {
  cy.visit('https://text2data.com/Demo');
});

When('I input text {string}', (text) => {
  cy.get('#textArea').clear().type(text);
});

When('I submit the text for analysis', () => {
  cy.get('#btnRunAnalysis').click();
});

Then("I should see the analysis results for <document> and <magnitudeMin> and <magnitudeMax> <category> and <categoryScore>", function (dataTable){
  const document = dataTable.hashes()[0].document;
  const magnitudeMin = dataTable.hashes()[0].magnitudeMin;
  const magnitudeMax = dataTable.hashes()[0].magnitudeMax;  
  const category = dataTable.hashes()[0].category;
  const categoryScore = dataTable.hashes()[0].categoryScore; 

  cy.get('#divResults').should('be.visible');

  cy.get('#divResults').within(() => {
    cy.contains('This document is:').should('be.visible');
    cy.contains('This document is:').within(() => {
      cy.get('font').should('contain.text', document);
      cy.get('font').then(($font) => {
        const fontText = $font.text();
        const match = fontText.match("/-?\d+(\.\d+)?/");
        if (match) {
          const fontValue = parseFloat(match[1]);
          expect(fontValue).to.be.within(magnitudeMin, magnitudeMax);
        }
      });
    });
   
  });
});

Then('the prediction should be {string}', (expectedPrediction) => {
  cy.get('#prediction').should('contain.text', expectedPrediction);
});

Then('I should see an error message {string}', (errorMessage) => {
  cy.get('.alert-danger').should('contain.text', errorMessage);
});

Then('the inference quality should be {string}', (quality) => {
  cy.contains('This document is:').should('be.visible');
  cy.contains('This document is:').within(() => {
    cy.get('font').should('contain.text', quality);

  });
});

// When("I input text <input>", function (input) {
//   cy.get('#textArea').clear().type(input);
// });

// Then("I should see an error message <errorMessage>", function (error){
//   cy.get('.alert-danger').should('contain.text', error);
// });
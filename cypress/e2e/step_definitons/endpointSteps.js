const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am at the Text2Data page {string}', (path) => {
    cy.visit(path);
  });
  
  Then('I should receive a 200 OK status code', () => {
    cy.request("/Demo").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
  

Then("and the response header should indicate that the content type is {string}",  (contentType) =>{
    cy.request("/Demo").then((response) => {
       console.log(response.headers['Content-Type'],contentType);
      });
    });

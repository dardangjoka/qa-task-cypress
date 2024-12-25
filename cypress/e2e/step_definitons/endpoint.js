const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');
const endpoints = require('../../support/pageObjectModel/Endpoint');  

Given('I am at the Text2Data page {string}', (path) => {
  endpoints().visit(path);
});
  
Then('I should receive a 200 OK status code', () => {
  endpoints().getRequestAndAssertStatus("/Demo", 200);
});
  
Then("and the response header should indicate that the content type is {string}",  (contentType) =>{
  endpoints().getRequestAndAssertContentType("/Demo", "content-type", contentType);
  
});

const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
const demo = require('../../support/pageObjectModel/Demo');

Given('I open the Text2Data demo page', () => {
  demo().visit('/Demo');
});

When('I input text {string}', (text) => {
  demo().inputText(text);
});

When('I submit the text for analysis', () => {
  demo().submitText();
});

Then("I should see the analysis results for <document> and <magnitudeMin> and <magnitudeMax> <category> and <categoryScore>", function (dataTable){
  const document = dataTable.hashes()[0].document;
  const magnitudeMin = dataTable.hashes()[0].magnitudeMin;
  const magnitudeMax = dataTable.hashes()[0].magnitudeMax;  
  const category = dataTable.hashes()[0].category;
  const categoryScore = dataTable.hashes()[0].categoryScore; 

  demo().verifyAnalysis(document, magnitudeMin, magnitudeMax, category, categoryScore);
});

Then('the prediction should be {string}', (expectedPrediction) => {
  demo().verifyPrediction(expectedPrediction);
});

Then('I should see an error message {string}', (errorMessage) => {
 demo().verifyErrorMessage(errorMessage);
});

Then('the inference quality should be {string}', (quality) => {
demo().verifyInferenceQuality(quality);
});


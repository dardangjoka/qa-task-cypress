# Cypress with Cucumber
Basic example of using Cypress with Cucumber (BDD) and Page Object Model (POM) 

# Table of contents

* [Getting Started](#get-started)
* [Setup Locally](#setup-locally)
* [How to run the tests](#how-to-run-the-tests)
* [Test Strategy](#test-strategy)
* [Test Cases](#test-cases)
* [Assumptions and Decisions](assumptions-and-decisions)

## Getting Started
Make sure you have configured right your git account and you have the following installed:

- [Node.js](https://nodejs.org/)


## Setup Locally:
 ```bash
 git https://github.com/dardangjoka/qa-task-cypress.git
 cd qa-task-cypress
 ```
#### Install project dependencies:
 ```bash
 npm install
 ```
## How to run the tests
 ```bash
 npx cypress open
 ```
#### Running Cypress Test Locally - Headless Mode:
 ```bash
 npx cypress run
 ```

**HTML report**:
HTML Report is generated after you  run `npx cypress run` command, it can be found at root directory with this name: cucumber-report.html

![Output](./report/images/report_html.png "Report")
### Find Problems


#### E2E Test Cases with Cypress and Cucumber
#### CI/CD Integration
 

## Test Cases
Choice of Test Cases:

### Scenario:   Scenario: Submitting a valid text for analysis
### Given I am at the Text2Data page "/Demo"
### Then I should receive a 200 OK status code
### And and the response header should indicate that the content type is "text/html"


### Scenario: Functional testing of the web interface
### When I input text "This is a test text for analysis"
### And I submit the text for analysis
### Then I should see the analysis results for <document> and <magnitudeMin> and <magnitudeMax> <category> and <categoryScore>
### | document | magnitudeMax |magnitudeMin| category           | categoryScore   |
### | neutral  | 0.25         | -0.25      | Books & Literature |  0.111          | 
  

### Scenario: Error handling for invalid inputs
### When I input text "23"
### And I submit the text for analysis
### Then I should see an error message "Text is too short, more than 5 characters is required!"

### Scenario Outline: Edge cases and boundary conditions
### When I input text <input>
### And I submit the text for analysis
### Then I should see an error message <errorMessage>
### Examples:
### | input    | errorMessage                                             |
### | "2"      | "Text is too short, more than 5 characters is required!" |
### | "@#$%^&" | "Validation error."                                      |

### Scenario: Verification of inference quality against expected results
### When I input text "Quality check text"
### And I submit the text for analysis
### Then the inference quality should be "positive"
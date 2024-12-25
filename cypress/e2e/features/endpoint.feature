Feature: Functional Testing of API Endpoints
  As a user of the Text2Data API
  I want to ensure all endpoints work as expected
  So that I can trust the service

  Scenario: Submitting a valid text for analysis
    Given I am at the Text2Data page "/Demo"
    Then I should receive a 200 OK status code
    And and the response header should indicate that the content type is "text/html"
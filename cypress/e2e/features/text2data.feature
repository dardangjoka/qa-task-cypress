Feature: Text2Data Analysis
Background: User goes to the Text2Data demo page
    Given I open the Text2Data demo page

  Scenario: Functional testing of the web interface
    When I input text "This is a test text for analysis"
    And I submit the text for analysis
    Then I should see the analysis results for <document> and <magnitudeMin> and <magnitudeMax> <category> and <categoryScore>
    | document | magnitudeMax |magnitudeMin| category           | categoryScore   |
    | neutral  | 0.25         | -0.25      | Books & Literature |  0.111          | 
  

  Scenario: Error handling for invalid inputs
    When I input text "23"
    And I submit the text for analysis
    Then I should see an error message "Text is too short, more than 5 characters is required!"

  Scenario Outline: Edge cases and boundary conditions
    When I input text <input>
    And I submit the text for analysis
    Then I should see an error message <errorMessage>
    Examples:
      | input    | errorMessage                                             |
      | "2"      | "Text is too short, more than 5 characters is required!" |
      | "@#$%^&" | "Validation error."                                      |

  Scenario: Verification of inference quality against expected results
    When I input text "Quality check text"
    And I submit the text for analysis
    Then the inference quality should be "positive"
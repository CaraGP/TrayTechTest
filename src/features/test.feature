Feature: Initial test to get the page to load
    As a user
    I want to make sure I can navigate to the correct page

Scenario: Successfully navigate to google
Given I navigate to "Google Home Page"
Then I should see the "Google Logo"
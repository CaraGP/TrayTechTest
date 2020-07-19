Feature: Checkout
    As a user
    I want to be able to checkout any items in my basket
    So that I can complete the required purchasing transaction

# 6. Checkout

Scenario: Clicking the Checkout button navigates to the Checkout page
Given I have successfully logged into "saucedemo.com" with my "standard user credentials"
And I have clicked on the "Shopping basket icon"
When I click on the "Checkout button"
Then I should see the "Checkout form"
Feature: E2E UI test
    As a user
    I want to make sure I can complete an end to end user journey to set up the purchasing of items from a list of products

Scenario: Successfully add items to your basket, remove an item and proceed to checkout
Given I have successfully logged into "saucedemo.com" with my "standard user credentials"
And I have selected the "Price (high to low)" option from the "Sort dropdown"
And I have clicked on the last "Add to cart button"
And I have clicked on the 2nd to last "Add to cart button"
And I have clicked on the "Shopping basket icon"
And I have clicked on the "Remove item button" on the cheapest "Basket product"
When I click on the "Checkout button"
Then I should see the "Checkout form"
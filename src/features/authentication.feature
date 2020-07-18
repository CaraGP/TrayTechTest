Feature: Login to https://www.saucedemo.com/ using the "standard_user" account
    As a user
    I want to make sure I can login successfully to saucedemo.com

# 1. Login to https://www.saucedemo.com/ using the "standard_user" account

Scenario: Successfully login to saucedemo.com as a standard user
Given I navigate to "saucedemo.com"
When I login using my valid "standard user credentials"
Then I should see the "Products list"
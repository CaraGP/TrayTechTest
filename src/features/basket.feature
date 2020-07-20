Feature: Shopping basket
    As a user
    I want a place to store my potential purchases
    So that I can shop with confidence knowing I can amend it at any time

# 4. Open the basket
# 5. Remove the cheapest product from your basket

Scenario: Use the shopping basket icon to navigate to the shopping cart page
Given I have successfully logged into "Saucedemo.com" with my "Standard User credentials"
When I click on the "Shopping basket icon"
Then I should see the "Shopping basket list"

Scenario: Remove the cheapest product from the shopping basket
Given I have successfully logged into "Saucedemo.com" with my "Standard User credentials"
And I have clicked on the "Add to cart button" on the 1st "Product"
And I have clicked on the "Add to cart button" on the 2nd "Product"
And I have clicked on the "Shopping basket icon"
When I click on the "Remove item button" on the cheapest "Basket product"
Then I should see 1 "Basket product"
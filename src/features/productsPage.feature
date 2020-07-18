Feature: Products
    As a user
    I want to intuitively use the Product page to do some shopping 
    
# 2. Sort the products by Price (high to low)
# 3. Add the two cheapest products to your basket

Scenario: Sort the products by Price (high to low)
Given I have successfully logged into "saucedemo.com" with my "standard user credentials"
When I select the "Price (high to low)" option from the "Sort dropdown"
Then the "Products inventory" is updated to display products in "descending price order"

Scenario: Add the two cheapest products to your basket
Given I have successfully logged into "saucedemo.com" with my "standard user credentials"
And I have selected the "Price (high to low)" option from the "Sort dropdown"
When I select "add to cart" on the 2 "lowest priced" items
Then the "Shopping basket" displays 2 in the "item counter"
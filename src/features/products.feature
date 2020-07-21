Feature: Products
    As a user
    I want to intuitively use the Product page to do some shopping 
    
# 2. Sort the products by Price (high to low)
# 3. Add the two cheapest products to your basket

Scenario: Sort the products by Price (high to low)
Given I have successfully logged into "Saucedemo.com" with my "Standard User credentials"
When I select the "Price (high to low)" option from the "Sort dropdown"
Then the Products list is sorted by "Price" in descending order

Scenario: Add the two cheapest products to your basket
Given I have successfully logged into "Saucedemo.com" with my "Standard User credentials"
And I have selected the "Price (low to high)" option from the "Sort dropdown"
When I click on the "Add to cart button" on the 1st "Product"
# And I click on the "Add to cart button" on the 2nd "Product"
Then the "Shopping basket item counter" displays "2"
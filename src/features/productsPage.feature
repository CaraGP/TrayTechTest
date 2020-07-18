Feature: Products
    As a user
    I want to intuitively use the Product page to do some shopping 
    
# 2. Sort the products by Price (high to low)
# 3. Add the two cheapest products to your basket

Scenario: Sort the products by Price (high to low)
Given I have successfully logged into "saucedemo.com"
When I sort the "Products list" by "Price (high to low)"
Then the "Products list" is updated to display products in "descending order"
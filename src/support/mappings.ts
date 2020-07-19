const urlMappings = new Map([
  ["Google Home Page", "www.google.com"],
  ["saucedemo.com", "https://www.saucedemo.com/"],
]);

const getUrlMapping = (expectedMapping: string): string => {
  if (urlMappings.has(expectedMapping)) {
    return urlMappings.get(expectedMapping);
  } else {
    throw new Error(
      `Expected URL mapping "${expectedMapping}" has not been found`
    );
  }
};

const elementMappings = new Map([
  ["Google Logo", "#hplogo"],
  ["username", 'input[data-test="username"]'],
  ["password", 'input[data-test="password"]'],
  ["login button", "#login-button"],
  ["Products list", "#inventory_container"],
  ["Sort dropdown", ".product_sort_container"],
  ["Price", ".inventory_item_price"],
  ["Add to cart button", ".btn_inventory"],
  ["Product", ".inventory_item"],
  ["Shopping basket item counter", ".shopping_cart_badge"],
]);

const getElementMapping = (expectedMapping: string): string => {
  if (elementMappings.has(expectedMapping)) {
    return elementMappings.get(expectedMapping);
  } else {
    throw new Error(
      `Expected Element mapping "${expectedMapping}" has not been found`
    );
  }
};

export { getUrlMapping, getElementMapping };

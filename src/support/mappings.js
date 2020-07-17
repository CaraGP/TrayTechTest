const urlMappings = new Map([
  ["Google Home Page", "www.google.com"],
  ["saucedemo.com", "https://www.saucedemo.com/"],
]);

const getUrlMapping = (expectedMapping) => {
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
  ["Shopping list", "#inventory_container"],
]);

const getElementMapping = (expectedMapping) => {
  if (elementMappings.has(expectedMapping)) {
    return elementMappings.get(expectedMapping);
  } else {
    throw new Error(
      `Expected Element mapping "${expectedMapping}" has not been found`
    );
  }
};

export { getUrlMapping, getElementMapping };

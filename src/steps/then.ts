import { Then } from "cucumber";
import findElement from "../support/helpers/findElement";
import findElements from "../support/helpers/findElements";

Then(/^I should see the "([^"]*)?"$/, (mappingName: string) => {
  findElement(mappingName);

  browser.saveScreenshot("./outputs/screenshotElement.png");
});

Then(
  /^the Products list is sorted by "([^"]*)?" in descending order$/,
  (orderMapping: string) => {
    let prices = [];
    const listItems = findElements(orderMapping);

    for (let i = 0; i < listItems.length; i++) {
      prices.push(parseInt(listItems[i].getText().substring(1), 10));
    }

    const sortedPrices = [...prices].sort((a, b) => a + b);

    if (JSON.stringify(prices) != JSON.stringify(sortedPrices)) {
      throw new Error(
        `It doesn't look like the Products list has been sorted to "${orderMapping}"`
      );
    }

    browser.saveScreenshot("./outputs/screenshotUpdateList.png");
  }
);

Then(
  /^the "([^"]*)?" displays "([^"]*)?"$/,
  (elementMapping: string, expectedText: string) => {
    const actualText = findElement(elementMapping).getText();

    if (actualText !== expectedText) {
      throw new Error(
        `Was expecting "${elementMapping}" to display "${expectedText}" but it's displaying "${actualText}"`
      );
    }

    browser.saveScreenshot("./outputs/screenshotUpdateBasket.png");
  }
);

Then(
  /^I should see (\d+) "([^"]*)?"$/,
  (amount: number, expectedElement: string) => {
    const foundProducts = findElements(expectedElement).length;

    if (foundProducts < amount || foundProducts > amount) {
      throw new Error(
        `Was expecting only "${amount}" product, but displaying "${foundProducts}"`
      );
    }

    browser.saveScreenshot("./outputs/screenshotProductsInBasket.png");
  }
);

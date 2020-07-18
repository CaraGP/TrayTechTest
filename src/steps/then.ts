import { Then } from "cucumber";
import findElement from "../support/helpers/findElement";
import { getElementMapping } from "src/support/mappings";

Then(/^I should see the "([^"]*)?"$/, (mappingName: string) => {
  findElement(mappingName);

  browser.saveScreenshot("./outputs/screenshotElement.png");
});

Then(
  /^the "([^"]*)?" is updated to display products in "([^"]*)?"$/,
  (elementMapping: string, orderMapping: string) => {
    findElement(elementMapping);
    let prices = [];
    const listItems = $$(getElementMapping("Price"));

    for (let i = 0; i < listItems.length; i++) {
      prices.push(parseInt(listItems[i].getText().substring(1), 10));
    }

    const sortedPrices = [...prices].sort((a, b) => a + b);

    if (JSON.stringify(prices) != JSON.stringify(sortedPrices)) {
      throw new Error(
        `It doesn't look like "${elementMapping}" has been sorted to "${orderMapping}"`
      );
    }

    browser.saveScreenshot("./outputs/screenshotUpdate.png");
  }
);

import { Then } from "cucumber";
import findElement from "../support/helpers/findElement";
import findElements from "../support/helpers/findElements";
import { expectEqual } from "../support/helpers/assertions";

Then(/^I should see the "([^"]*)?"$/, (mappingName: string) => {
  findElement(mappingName);
});

Then(
  /^the Products list is sorted by "([^"]*)?" in descending order$/,
  (orderMapping: string) => {
    let prices = [];
    const listItems = findElements(orderMapping);

    for (let i = 0; i < listItems.length; i++) {
      prices.push(parseInt(listItems[i].getText().substring(1), 10));
    }

    const sortedPrices = [...prices].sort((a, b) => a - b).reverse();

    expectEqual(
      JSON.stringify(prices),
      JSON.stringify(sortedPrices),
      `It doesn't look like the Products list has been sorted to descending "${orderMapping}" order`
    );
  }
);

Then(
  /^the "([^"]*)?" displays "([^"]*)?"$/,
  (elementMapping: string, expectedText: string) => {
    const actualText = findElement(elementMapping).getText();

    expectEqual(
      actualText,
      expectedText,
      `Was expecting "${elementMapping}" to display "${expectedText}" but it's displaying "${actualText}"`
    );
  }
);

Then(
  /^I should see (\d+) "([^"]*)?"$/,
  (amount: number, expectedElement: string) => {
    const foundProducts = findElements(expectedElement).length;

    expectEqual(
      foundProducts,
      amount,
      `Was expecting only "${amount}" product(s), but displaying "${foundProducts}"`
    );
  }
);

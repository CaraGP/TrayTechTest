import { When } from "cucumber";
import standardLogin from "src/support/helpers/login";
import findElement from "../support/helpers/findElement";
import findElements from "src/support/helpers/findElements";

When(/^I login using my valid "([^"]*)?"$/, standardLogin);

When(
  /^I (?:select|have selected) the "([^"]*)?" option from the "([^"]*)?"$/,
  (optionText: string, elementMapping: string) => {
    findElement(elementMapping).selectByVisibleText(optionText);

    browser.saveScreenshot("./outputs/screenshotSort.png");
  }
);

When(
  /^I (?:click|have clicked) on the "([^"]*)?" on the (\d+)(?:st|nd|rd|th) "([^"]*)?"$/,
  (childMapping: string, position: number, parentMapping: string) => {
    const elements = findElements(parentMapping);
    const childElement = findElement(childMapping, elements[position - 1]);
    childElement.click();

    browser.saveScreenshot("./outputs/screenshotAdd.png");
  }
);

When(
  /^I (?:click|have clicked) on the "([^"]*)?"$/,
  (elementMapping: string) => {
    findElement(elementMapping).click();

    browser.saveScreenshot("./outputs/screenshotBasket.png");
  }
);

When(
  /^I (?:click|have clicked) on the "([^"]*)?" on the cheapest "([^"]*)?"$/,
  (childMapping: string, parentMapping: string) => {
    const listItems = findElements(parentMapping);
    listItems.sort((productA, productB) => {
      const priceA = parseInt(findElement("Price", productA).getText());
      const priceB = parseInt(findElement("Price", productB).getText());
      return priceA - priceB;
    });

    findElement(childMapping, listItems[0]).click();

    browser.saveScreenshot("./outputs/screenshotRemoveProduct.png");
  }
);

When(
  /^I have clicked on the(?: (\d+)(?:nd|rd|th) to)? last "([^"]*)?"$/,
  (reversePosition: number, elementMapping: string) => {
    reversePosition = reversePosition || 1;
    const listItems = findElements(elementMapping);
    listItems[listItems.length - reversePosition].click();

    browser.saveScreenshot("./outputs/screenshotLastItem.png");
  }
);

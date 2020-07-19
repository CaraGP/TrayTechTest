import { When } from "cucumber";
import standardLogin from "src/support/helpers/login";
import findElement from "../support/helpers/findElement";
import { getElementMapping } from "src/support/mappings";
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
  /^I click the "([^"]*)?" on the (\d+)(?:st|nd) "([^"]*)?"$/,
  (childMapping: string, position: number, parentMapping: string) => {
    const elements = findElements(parentMapping);
    const childElement = findElement(childMapping, elements[position - 1]);
    childElement.click();

    browser.saveScreenshot("./outputs/screenshotAdd.png");
  }
);

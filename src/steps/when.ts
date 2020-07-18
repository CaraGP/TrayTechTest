import { When } from "cucumber";
import standardLogin from "src/support/helpers/login";
import findElement from "../support/helpers/findElement";

When(/^I login using my valid "([^"]*)?"$/, standardLogin);

When(
  /^I select the "([^"]*)?" option from the "([^"]*)?"$/,
  (optionText: string, elementMapping: string) => {
    findElement(elementMapping).selectByVisibleText(optionText);

    browser.saveScreenshot("./outputs/screenshotSort.png");
  }
);

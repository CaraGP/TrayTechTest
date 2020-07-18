import { Then } from "cucumber";
import findElement from "../support/helpers/findElement";

Then(/^I should see the "([^"]*)?"$/, (mappingName: string) => {
  findElement(mappingName);

  browser.saveScreenshot("./outputs/screenshotElement.png");
});

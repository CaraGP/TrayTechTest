import { Then } from "cucumber";
import findElement from "../support/helpers/findElement";
import { getElementMapping } from "../support/mappings";

Then(/^I should see the "([^"]*)?"$/, (mappingName) => {
  findElement(getElementMapping(mappingName));
  browser.saveScreenshot("./outputs/screenshotElement.png");
});

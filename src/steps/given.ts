import { Given } from "cucumber";
import { getUrlMapping } from "../support/mappings";

Given(/^I navigate to "([^"]*)?"$/, (mappingName: string) => {
  browser.url(getUrlMapping(mappingName));

  browser.saveScreenshot("./outputs/screenshotBrowser.png");
});

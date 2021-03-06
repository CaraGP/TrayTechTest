import { Given } from "cucumber";
import { getUrlMapping } from "../support/mappings";
import standardLogin from "src/support/helpers/login";

Given(/^I navigate to "([^"]*)?"$/, (mappingName: string) => {
  browser.url(getUrlMapping(mappingName));
});

Given(
  /^I have successfully logged into "([^"]*)?" with my "([^"]*)?"$/,
  (urlMapping: string, userMapping: string) => {
    browser.url(getUrlMapping(urlMapping));
    standardLogin(userMapping);
  }
);

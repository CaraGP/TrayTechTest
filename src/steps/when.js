import { When } from "cucumber";
import { getElementMapping } from "../support/mappings";

When(/^I login using my valid "([^"]*)?"$/, (credentials) => {
  if (credentials === "standard user credentials") {
    $(getElementMapping("username")).addValue("standard_user");
    $(getElementMapping("password")).addValue("secret_sauce");
    $(getElementMapping("login button")).click();
  } else {
    throw new Error(`"${credentials}" are different to what was expected`);
  }

  browser.saveScreenshot("./outputs/screenshotCredentials.png");
});

import { Then } from 'cucumber';

Then(
    /^I should see the "([^"]*)?"$/,
    (cssSelector) => $(cssSelector).isDisplayed(),
    browser.saveScreenshot('./outputs/screenshot.png')
);
import { Then } from 'cucumber';
import findElement from '../support/helpers/findElement';

Then(
    /^I should see the "([^"]*)?"$/,
    (cssSelector) => findElement(cssSelector),
    //(cssSelector) => $(cssSelector).isDisplayed(),
    browser.saveScreenshot('./outputs/screenshot.png')
);
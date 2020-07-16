import { Given } from 'cucumber';

Given(
    /^I navigate to "([^"]*)?"$/,
    (url) => browser.url(url),
);

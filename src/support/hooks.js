'use strict';
import multipleCumberHtmlReporter from 'wdio-multiple-cucumber-html-reporter';
import { After, Status } from 'cucumber';

After(scenario => {
    if (scenario.result.status === Status.FAILED) {
        multipleCumberHtmlReporter.attach(browser.saveScreenshot(), 'image/png', 'after');
    }

    return scenario.status;
})
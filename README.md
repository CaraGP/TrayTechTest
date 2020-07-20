# Tray.io Technical Test

This wdio test suite project should cover the E2E user journey as documented [here.](https://9e90bdc0-5a71-4abd-89c6-f1a458efb4c2.trayapp.io/)

This project was built using [WebdriverIO 6](https://webdriver.io/docs/gettingstarted.html), using Node.js, Cucumber.js and Typescript.

# Getting Started

The project codebase has been hosted on GitHub and been cloned from [here.](https://github.com/CaraGP/TrayTechTest)

# Test Information

All the tests are written in [Gherkin syntax](https://cucumber.io/docs/gherkin/reference/) and all test files can be found and should be added in `./src/features/*` with the file ending `.feature`.

The tests are currently run in Sync mode, set to run 3 chrome instances at the same time.

## How to run the full suite of tests

_Runs all feature files_

```sh
$ npx wdio wdio.conf.js
```

## How to run a single test

```sh
$ npx wdio wdio.conf.js --spec ./src/features/{featureName}.feature
```

## Adding new steps

The test steps have been written in a fashion that allows them to be versatile and hopefully as reusual as needed. To do this, the variables present in any steps are defined using regular expressions.

To update or add any new step definitions, you can find them in `./src/steps`.

They are currently separated by `given`, `when` and `then`.

## Adding screenshots on steps

Currently the suite will generate a screenshot if there are any failed scenarios. However it is possible to simply add screenshots on steps regardless if they fail or pass: [wdio documentation for screenshots.](https://webdriver.io/docs/api/browser/saveScreenshot.html)

You can also take screenshots of particular elements rather than of the browser window: [wdio documentation for element screenshots.](https://webdriver.io/docs/api/element/saveScreenshot.html)

Screenshots taken are stored in `./.screenshots`.

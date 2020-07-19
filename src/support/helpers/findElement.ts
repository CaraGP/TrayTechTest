import { getElementMapping } from "../mappings";
import { BrowserObject } from "@wdio/sync";

const findElement = (
  mappingName: string,
  parentElement: WebdriverIO.Element | BrowserObject = browser
): WebdriverIO.Element => {
  const selector = getElementMapping(mappingName);
  const element = parentElement.$(selector);
  const isExisting = element.isExisting();

  if (!isExisting) {
    throw new Error(`Could not find "${mappingName}" using "${selector}"`);
  }

  return element;
};

export default findElement;

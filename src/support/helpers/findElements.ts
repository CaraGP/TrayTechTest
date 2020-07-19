import { getElementMapping } from "../mappings";

const findElements = (mappingName: string): WebdriverIO.ElementArray => {
  const selector = getElementMapping(mappingName);
  const elements = $$(selector);

  if (elements.length === 0) {
    throw new Error(`Could not find any "${mappingName}" using "${selector}"`);
  }

  return elements;
};

export default findElements;

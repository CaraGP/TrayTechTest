import { getElementMapping } from "../mappings";

const findElement = (mappingName: string): WebdriverIO.Element => {
  const selector = getElementMapping(mappingName);
  const element = $(selector);
  const isExisting = element.isExisting();

  if (!isExisting) {
    throw new Error(`Could not find "${mappingName}" using "${selector}"`);
  }

  return element;
};

export default findElement;

//import findElement from './helpers/findElement';

//import findElement, {findElements} from './helpers/findElement';

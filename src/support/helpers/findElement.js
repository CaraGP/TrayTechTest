'use strict';

const findElement = (selector) => {
    const element = $(selector);
    const isExisting = element.isExisting();

    if (!isExisting) {
        throw new Error(`"${selector}" doesn't exist.`);
    }
    
    return element;
}

export default findElement;

//import findElement from './helpers/findElement';

//import findElement, {findElements} from './helpers/findElement';
import { map } from './map.js';

const items = [1, 2, 3, 4, 5, 5];

function cb(element) {
    return element * element;
}

const resultArray = map(items,cb);
console.log(resultArray)
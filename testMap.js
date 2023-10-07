import { map, cb } from './map.js';

const items = [1, 2, 3, 4, 5, 5];

const resultArray = map(items,cb);
console.log(resultArray)
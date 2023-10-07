import { reduce, cb } from "./reduce.js";
const items = [1, 2, 3, 4, 5, 5];
let stringValue;

const result = reduce(items, cb, stringValue);
console.log(result);
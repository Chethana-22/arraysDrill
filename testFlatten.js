import { flatten } from "./flatten.js";

const nestedArray = [1, [2], [[3]], [[[4]]]];

const resultArray = flatten(nestedArray);
console.log(resultArray);

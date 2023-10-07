import { reduce } from "./reduce.js";
const items = [1, 2, 3, 4, 5, 5];
let stringValue;

function cb(stringValue, element){
    return stringValue + element;
}

const result = reduce(items, cb, stringValue);
console.log(result);
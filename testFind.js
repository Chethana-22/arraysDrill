import { find } from "./find.js";

function cb(element){
    return element % 2 !== 0;    // returns true
    // return element === 0;     // returns undefined
}

const items = [1, 2, 3, 4, 5, 5];

const resultArray = find(items,cb);
console.log(resultArray)
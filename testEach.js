import { each } from "./each.js";

function cb(elements, index){
    console.log(`Element at ${index} is ${elements}`);
}

const items = [1, 2, 3, 4, 5, 5];
each(items,cb);
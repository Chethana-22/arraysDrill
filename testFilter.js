import { filter } from "./filter.js";

function cb(element){
    if(element > 2){
        return true;
    }else{
        return false;
    }
}

const items = [1, 2, 3, 4, 5, 5];

const resultArray = filter(items,cb);
console.log(resultArray)
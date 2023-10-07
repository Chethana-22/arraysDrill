export function reduce(elements, cb, stringValue){
    let startIndex;
    if(stringValue === undefined){
        stringValue = elements[0];
        startIndex = 1;
    }else{
        startIndex = 0;
    }

    for(let index = startIndex; index< elements.length; index++){
        stringValue = cb(stringValue, elements[index]);
    }
    return stringValue;
}





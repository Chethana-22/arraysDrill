export function map(elements, cb){
    const result = [];
    for(let index =0;index<elements.length;index++){
        result.push(cb(elements[index]));
    }
    return result;
}



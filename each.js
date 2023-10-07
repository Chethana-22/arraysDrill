export function each(elements, cb){
    for(let index=0;index<elements.length;index++){
        cb(elements[index], index);
    }
}

export function cb(elements, index){
    console.log(`Element at ${index} is ${elements}`);
}



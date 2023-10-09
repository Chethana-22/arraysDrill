export function find(elements, cb){
    for(let index=0;index<elements.length;index++){
        if(cb(elements[index])){
            return true;
        }
    }
    return undefined;
}
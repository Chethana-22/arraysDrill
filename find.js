export function find(elements, cb){
    const result = []
    for(let index=0;index<elements.length;index++){
        if(cb(elements[index])){
            return true;
        }else{
            return undefined;
        }
    }  
}
export function flatten(elements){
    const flattenedArray = []

    function recursion(arr){
        for(let index=0;index<arr.length;index++){
            if(Array.isArray(arr[index])){
                recursion(arr[index]);
            }else{
                flattenedArray.push(arr[index]);
            }
        }
    } 
    
    recursion(elements);
    return flattenedArray;
}

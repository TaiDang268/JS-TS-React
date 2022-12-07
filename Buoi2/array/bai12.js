const checkArray = (arr) => {
    for(let i=0;i<arr.length;i++){
        if(arr[i+1]<arr[i]){
            return false
            break
        } 
    }
    return true
}
console.log(checkArray([1,2,3,4,5]));
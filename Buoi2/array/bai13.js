const checkNumber = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            return false
            break
        }
    }
    return true
}
const checkReduce = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i + 1] > arr[i]) {
            return false
            break
        }
    }
    return true
}
const checkArr = (arr) => {
    if (checkNumber(arr) == true && checkReduce(arr) == true) {
        return true
    }
    return false
}
console.log(checkArr([5, 3, 1]));